const router = require("express").Router();
const User = require("../models/usermodel")
const bcrypt = require("bcrypt");


//---------------------Register
router.post("/register", async(req, res) => {
    try {
        //Generate New Password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        // Create New User
        const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPass,
            })
            //Saving user
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (e) {
        console.log(e);
    }
})

// ------------------Login

router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User Not Found..!!");
        console.log(user.password)

        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).json("Wrong Password");

        res.status(200).json(user)
    } catch (e) {
        console.log(e);
    }
})




module.exports = router;