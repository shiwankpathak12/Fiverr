import express from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import orderRoute from './routes/order.route.js'
import gigRoute from './routes/gig.route.js'
import reviewRoute from './routes/review.route.js'
import messageRoute from './routes/message.route.js'
import conversationRoute from './routes/conversation.route.js'

const app= express()
dotenv.config()
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/gigs',gigRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/messages',messageRoute)
app.use('/api/converations',conversationRoute)
app.use('/api/orders',orderRoute)


const connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb")
    } catch (error) {
        throw error
    }
}
app.get('/',(req,res)=>{
    res.send("default page")
})
const PORT=dotenv.PORT||8300
app.listen(PORT,()=>{
    connect()
    console.log('server started at ',PORT)
})
