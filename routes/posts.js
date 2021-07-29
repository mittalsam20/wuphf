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
    try {
        const post = Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("The post has been updated")
        } else {
            res.status(403).json("You can Update only your post")
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
})

//delete a Post
router.delete("/:id", async(req, res) => {
    try {
        const post = Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne({ $set: req.body });
            res.status(200).json("The post has been deleted")
        } else {
            res.status(403).json("You can Delete only your post")
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
})

//like a Post
router.put("/:id/like", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (e) {
        console.log(e);
        res.status(500).json(err)
    }
})

//get a Post
router.get("/:id", async(req, res) => {
    try {
        const post = Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
})

//get timelines Post



module.exports = router;