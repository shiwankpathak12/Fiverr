import User from '../models/user.model.js'
import createError from '../utils/error.js'

export const updateUser=async (req,res,next)=>{
    try {
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{$set : req.body})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getUsers= async (req,res,next)=>{
    try {
        const users= await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getUser=async (req,res,next)=>{
    try {
        const user=await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteUser=async (req,res,next)=>{
    try {
        const user=await User.findById(req.params.id)
        if(req.userId!==user._id.toString()){
            return next(createError(403,"You can delete only your account!"))
        }
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted")
    } catch (err) {
        res.status(500).json(err)
    }
}