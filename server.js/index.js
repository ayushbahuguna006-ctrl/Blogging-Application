const express=require('express')
const cors = require('cors')
const connection=require('./connection/connection')
const router=require('./routes/user')
const app=express()
app.use(cors()) 
app.use(express.json())
app.use('/',router)
const port=8000
async function startServer() {
  await connection() 
  app.listen(port, () => console.log(`Server started on port ${port}`))
}
startServer()
