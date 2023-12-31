import User from '../models/user.model.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import  createError  from '../utils/error.js';
export const register= async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        res.status(201).json("User has created sucessfully...")
    } catch (err) {
        res.status(500).json(err.message)
    }
}
export const login= async (req,res,next)=>{
    try {
        const user= await User.findOne({username : req.body.username})
        if(!user) return next(createError(404,"User not found"))
        const isPasswordCorrect=await bcrypt.compare(
            req.body.password,
            user.password
        )
        if(!isPasswordCorrect) return next(createError(404,"Wrong password or username"))
        const token=jwt.sign({
            id:user._id,
            isSeller:user.isSeller,
            
        },process.env.JWT)
        const {password,isSeller,...otherDetails}=user._doc
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({...otherDetails})

    } catch (err) {
        
    }

}
export const logout = async (req, res) => {
    res
      .clearCookie("access_token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
  };
