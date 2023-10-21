import mongoose, { Schema } from "mongoose";

const gigSchema=new Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    totalStars:{
        type: Number,
        default:0,
    },
    starNumber:{
        type:Number,
        default:0,
    },
    cover:{
        type:String,
        required:false,
    },
    images:{
        type:[String],
        required:false,
    },
    cat:{
        type: String,
        default: false
    },
    price:{
        type: Number,
        required : true
    },
    shortTitle:{
        type: String,
        required : true
    },
    shortdesc:{
        type: String,
        required : true
    },
    deliveryTime:{
        type: Number,
        required : true
    },
    revision:{
        type: Number,
        required: true
    },
    features:{
        type: [String],
        required: false
    },
    sales:{
        type:Number,
        default: 0
    }



},{timestamps: true})

export default mongoose.model('Gig',gigSchema)