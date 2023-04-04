const express = require('express');
const blogController = require('../controllers/blogController');

const route = express.Router();


// blog routs
route.get('/', blogController.blog_index)

route.post('/', blogController.blog_create_bost);

route.get('/create', blogController.blog_create_get)

route.get('/:id', blogController.blog_details);

route.delete('/:id', blogController.blog_delete);


module.exports = route;