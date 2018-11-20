var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var auth = require('./auth.js')
var User = require('./models/User.js')
var Post = require('./models/Post.js')
var jwt = require('jwt-simple')

var app = express()

//To avoid (node:7676) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
// indicates that the  promise used by mongoose will be the built in by ES6
mongoose.Promise = Promise

app.use(cors())
app.use(bodyParser.json())

app.get('/posts/:id', async (req, res) => {
    let author = req.params.id
    let posts = await Post.find({author})
    res.send(posts)
})

app.post('/post', auth.checkAuthenthicated, (req, res) => {
    let postData = req.body

    postData.author = req.userId
    let post = new Post(postData)

     post.save((err, result) => {
        if(err){
            console.error('saving post error')
            return res.status(500).send({message: 'saving post error'})
        }
        
        // using this sentence (res.sendStatus(200)) mongoose gives an error that indicates: cannot set headers after the key is sent
        // see the following issue https://stackoverflow.com/questions/27512846/routes-error-error-cant-set-headers-after-they-are-sent
        // res.sendStatus(200)
        res.json({ status: 200});
    })
})

app.get('/users', async (req, res) => {
    try {
        // TIP: when you pass an empty object to find, it returns all the users.
        // TIP: if you pass the seccond parameter with the -symbol before a property name, it won't return the property in the result.
        //BEFORE {"_id":"59f89682f94fe929242177ed","email":"a@a.a","pwd":"1","__v":0}
        //AFTER  {"_id":"59f89682f94fe929242177ed","email":"a@a.a"}
        var users = await User.find({}, '-pwd -__v')
        res.send(users).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})


app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-pwd -__v')
        res.send(user).status(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// app.post('/register', auth.register)
// app.post('/login', auth.login)

app.use('/auth', auth.router)

mongoose.connect('mongodb://test:test@ds243345.mlab.com:43345/angular4database', (err)=>{
    if(!err)
        console.log('connected to mongo')
})

app.listen(process.env.PORT || 3000)