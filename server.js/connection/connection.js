const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const connection=async()=>{
    const url=`mongodb+srv://${username}:${password}@cluster0.1emtqoc.mongodb.net/?appName=Blogging-app`
    try{
        await mongoose.connect(url)
         console.log('database connected succesfully')
    }catch{
        console.log('error while connecting to database')
    }
}
module.exports=connection

