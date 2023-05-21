const express = require('express')
const router = express.Router();
const Blog = require('../models/Blog')

// Post a blog
router.post('/',(req,res)=>{
    console.log(req.body);
    const blog = Blog(req.body)
    blog.save();
})

router.get('/',async(req,res)=>{
    const results = await Blog.find({},{__v:0})
    res.send(results);
})


router.get('/:id',async(req,res) =>{
    const id = req.params.id
    const results = await Blog.find({_id:id},{__v:0})
    res.send(results);
})

router.put('/',async(req,res)=>{
     await Blog.updateOne({_id:req.body.id},{title:req.body.title,category:req.body.category,content:req.body.content});
     res.send(req.body);
})

router.delete('/',async(req,res)=>{
    await Blog.deleteOne({_id:req.body.id});
    res.send(req.body.id+" Deleted");
})



module.exports = router