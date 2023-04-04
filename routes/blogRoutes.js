const express = require('express');
const Blog = require('../models/blog');


const route = express.Router();


// blog routs
route.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index' , {title : 'All Blogs', blogs:result})
        })
        .catch((err)=>{
            console.log(err); 
        });
})

route.post('/blogs', (req, res)=>{
    // console.log(req.body);  // => to be req.body we need to use this middleware (route.use(express.urlencoded({ extended: true}));) 
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((err)=>{
            console.log(err);
        });
});


route.get('/blogs/create', (req, res)=>{
    res.render('create' , {title : 'Create a new Blog'});
})


route.get('/blogs/:id',(req, res)=>{
    const id =  req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{title : 'Blog Details', blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        });
});

route.delete('/blogs/:id',(req, res)=>{
    const id =  req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            // res.redirect('/blogs');
            console.log('deleted => ' , result)
            res.json({ redirect: '/blogs'});
        })
        .catch((err)=>{
            console.log(err);
        });
});



module.exports = route;