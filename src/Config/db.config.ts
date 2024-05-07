
import mongoose from 'mongoose'
const dbName = 'Post'
const dbUrl = "mongodb://localhost:27017/mydb";

export const db =mongoose.connect(dbUrl)
    .then(()=> console.log(`Connected to MongoDB: ${dbName}`))
    .catch((err)=>{
        console.error(`Error connecting to MongoDB: ${err}`);
        process.exit(1);
    })
