const router = require("express").Router();
const User = require("../models/usermodel")



//---------------------Register
router.get("/register", async(req, res) => {

    const user = await new User({
        username: "sam",
        email: "sam.mittal44@gmail.com",
        password: "12345567788"
    })
    await user.save();
    res.send("ok")
})

module.exports = router;