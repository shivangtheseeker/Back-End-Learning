import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// there are two (mainly) ways for db connection. 
// the first approach is that i write function of connecting db in index file.
// the second approach is writing the code in another folder and importing it in index file and executing it.

/*import express from "express"
const app = express()
;
(async()=>{
     try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.log("Error: error ");
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })

     } catch(error){
        console.error("Error: ", error)
        throw error
     }

})()*/