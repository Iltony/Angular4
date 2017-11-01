var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')

var app = express()
var User = require('./models/User.js')

var posts = [
    {message: 'hello'}, 
    {message: 'hi'}
];

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.post('/register', (req, res) => {
    var userData =  req.body;
    var user = new User(userData)
    user.save((err, result)=>{
        if(err)
            console.log('saving user error')

        res.sendStatus(200)
    })
})

app.post('/login', async (req, res) => {
    var userData =  req.body;

    var user = await User.findOne({email: userData.email})

    if (!user)
        return res.sendStatus(401).send({message: 'Email or password invalid'})
        
    if (userData.pwd != user.pwd)
        return res.sendStatus(401).send({message: 'Email or password invalid'})
    var payload = {}
    var token = jwt.encode(payload, '123')


    // console.log(token)
    
    res.status(200).send({token})
})

mongoose.connect('mongodb://test:test@ds243345.mlab.com:43345/angular4database', { useMongoClient:true }, (err)=>{
    if(!err)
        console.log('connected to mongo')
})

app.listen(3000)