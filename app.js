const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// MongoDB connection String
const dbURI = process.env.CONNECTION_STRING;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        // listen for request
        app.listen(3000); // we move the listen function her becouse it is loggical no response with out connection to the databse.
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });

// register view engine (configer some application setting)
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'))


app.get('/', (req, res)=>{
    res.redirect('/blogs')
})


app.get('/about', (req, res)=>{
    res.render('about' , {title : 'About'});
})

// blog routes
app.use('/blogs',blogRoutes);

// redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
})

// 404 page
 app.use((req, res)=>{
    res.status(400).render('404' , {title : '404'});
 })