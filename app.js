const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// MongoDB connection String
const dbURI = "mongodb+srv://netninja:test1234@nodetuts.4htdrgx.mongodb.net/node-tuts?retryWrites=true&w=majority";
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

// not required in this case because it is the same name but if you 
// want to change it to other folder .. for example myViews
// app.set('views', 'myViews'); 
app.set('views', 'views'); 

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'))

// // mongoose and mongo sandbox routes   => For testing
// app.get('/add-blog', (req, res)=>{
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result)=>{
//             console.log('blog saved');
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// })

// app.get('/all-blogs', (req, res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res)=>{
//     Blog.findById('642ba2ddf3334d366aa18117')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// })




app.get('/', (req, res)=>{
    res.redirect('/blogs')
})


app.get('/about', (req, res)=>{
    res.render('about' , {title : 'About'});
})

// blog routes
app.use(blogRoutes);

// redirects
app.get('/about-us', (req, res)=>{
    res.redirect('/about');
})

// 404 page
 app.use((req, res)=>{
    res.status(400).render('404' , {title : '404'});
 })