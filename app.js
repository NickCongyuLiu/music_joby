const express = require('express')

const opn = require('opn');

// web app object to deal with request
const app =express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// make client to be root folder
app.use(express.static('./client'))
// app.use(express.static('./server/'))
app.use('/node_modules',express.static('./node_modules'))

//read a https request function for getting music list
const fs = require('fs')
const path = require('path')

var database = [{
    id:001,
    title:"Neuroch",
    artist:"Ace Ventura",
    year: 2017,
    // link: "https://s3.amazonaws.com/Syntaxxx/bigger-picture.mp3"
},{
    id:002,
    title:"Interlude",
    artist:"Aura Vortex",
    year: 2016

},{
    id:003,
    title:"Sirens",
    artist:"Berg",
    year: 2018
},{
    id:004,
    title:"Bruxaria",
    artist:"Chapeleiro",
    year:2017
},{
    id:005,
    title:"In A Dream",
    artist:"Koi Boi",
    year:2017
},{
    id:006,
    title:"Brother",
    artist:"LIL EM",
    year:2017
},{
    id:007,
    title:"Jawabim",
    artist:"Muqeddime",
    year:2018
}]

app.get('/list',(req,res)=>{
        res.jsonp(database)
})

app.get('/post',(req,res)=>{
    
    console.log("new message received");
    let title_data = req.param('title');
    let artist_data = req.param('artist');
    let year_data = req.param('year');
    let new_data = {
        id:database.length+1,
        title:title_data,
        artist:artist_data,
        year:parseInt(year_data)
    }
    database.push(new_data);
    res.redirect('/#/list');
});


//binding port as default port 8080
app.listen(8080,(error)=>{
    if(error) throw error
    console.log('server is ready');
    console.log('client website is : localhost:8080');
    opn("http://localhost:8080");
})