const router = require("express").Router();
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");


//Update User
router.put("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (e) {
                console.log(e);
                return res.status(500).json(e);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body, });
            res.status(200).json("Account has been updated")
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    } else {
        return res.status(403).json("You can update only your account..!!");
    }
})


//Delete User
router.delete("/:id", async(req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been Deleted")
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    } else {
        return res.status(403).json("You can Delete only your account..!!");
    }

})

//Get User
//Follow User
//Unfollow User


module.exports = router;