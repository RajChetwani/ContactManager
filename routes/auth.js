const express = require('express');
const { check , validationResult } = require('express-validator');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')
const router = express.Router();

//@route  GET api/auth
//@desc   get logged in User
//@access Private

router.get('/',auth,async(req,res) => {
    try {
     const user = await User.findById(req.user.id).select('-password');
     res.send(user);
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
})

//@route  POST api/auth
//@desc   Auth user and token
//@access Public

router.post('/',[ check('email','Please enter valid email').isEmail(),
    check('password','Password is required').exists()],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()})
        }
    
        const { name,email,password } = req.body
    
        try {
    
            let user = await User.findOne({ email });
            if(!user){
                return res.status(400).json({ msg : "Invalid Credentials"});
            }

            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch){
                return res.status(400).json({ msg : 'Invalid Credentials'});
            }

            const payload = {
                user:{
                    id: user.id
                }
            }
    
            jwt.sign(payload,config.get('jwtSecret'),{
                expiresIn : 360000
            },(err,token) =>{
                if(err) throw err;
                res.json({ token })
            })

        }catch(error){
            console.error(error.message);
            return res.status(500).send('server error');
        }
    
})

module.exports = router;