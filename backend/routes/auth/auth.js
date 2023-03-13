const router = require('express').Router();
const User = require('../../model/user/userModel');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const anyUser = await User.findOne({ email: req.body.email });
    if (!anyUser) {
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
        })

        try {
            const user = await newUser.save();
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json('Email already user')

    }
})


router.post('/login', async (req, res) => {
    try {
        const anyUser = await User.findOne({ email: req.body.email });
        if (anyUser) {
            if (bcrypt.compareSync(req.body.password, anyUser.password)) {
                const accessToken = JWT.sign({
                    id: anyUser._id,
                }, process.env.SECRET_KEY)
                res.status(200).json({ accessToken, anyUser })
            } else {
                res.status(401).json('Password not match')
            }
        } else {
            res.status(401).json('Email not match')

        }
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router ;