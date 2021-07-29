const router = require("express").Router();
const User = require("../models/usermodel")



//---------------------Register
router.post("/register", async(req, res) => {

    const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;