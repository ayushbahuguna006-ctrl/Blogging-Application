const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const username=process.env.db_username
const password=process.env.db_passsword
const connection=async()=>{
    const url='mongodb+srv://ayushbahuguna:60029010@cluster0.1emtqoc.mongodb.net/?appName=Cluster0'
    console.log('database connected succesfully')
    try{
        await mongoose.connect(url)
    }catch{
        console.log('error while connecting to database')
    }
}
module.exports=connection
