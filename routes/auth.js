const express = require('express');

const router = express.Router();

//@route  GET api/auth
//@desc   get logged in User
//@access Private

router.get('/',(req,res) => {
    res.send(' Get Loggedin user');
})

//@route  POST api/auth
//@desc   Auth user and token
//@access Public

router.post('/',(req,res) => {
    res.send('Login user');
})

module.exports = router;