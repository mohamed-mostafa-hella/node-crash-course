const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine (configer some application setting)

app.set('view engine', 'ejs');

// not required in this case because it is the same name but if you 
// want to change it to other folder .. for example myViews
// app.set('views', 'myViews'); 
app.set('views', 'views'); 

// listen for request
app.listen(3000);

// custome middleware 
// app.use((req, res, next)=>{
//     console.log('New requst made.');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('path: ', req.method);
//     next();
// });
// app.use((req, res, next)=>{
//     console.log('in the next middleware...');
//     next();
// });

// middleware & static files
app.use(express.static('public'));


// morgan middleware
app.use(morgan('dev'));
app.use(morgan('tiny'));

app.get('/', (req, res)=>{

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defest bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'make me flay to the moon', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];

    res.render('index' , {title : 'Home', blogs}); 
})

// custome middleware
// this medilewae will not run if the request path was ('/') because
// the request will end in the get function above it and will not reatch her
// app.use((req, res, next)=>{
//     console.log('in the next middleware...');
//     next();
// });

app.get('/about', (req, res)=>{
    res.render('about' , {title : 'About'});
})

app.get('/blogs/create', (req, res)=>{
    res.render('create' , {title : 'Create a new Blog'});
})

// redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
})

// 404 page
 app.use((req, res)=>{
    res.status(400).render('404' , {title : '404'});
 })