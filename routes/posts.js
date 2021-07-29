const router = require("express").Router();
const Post = require("../models/postmodel")


//Create a Post
router.post("/", async(req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
})



//Update a Post
router.put("/:id", async(req, res) => {
    const post = Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("The post has been updated")
    } else {
        res.status(403).json("You can Update only your post")
    }
    try {



    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
})



//delete a Post
//like a Post
//get a Post
//get timelines Post



module.exports = router;