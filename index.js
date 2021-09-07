const express=require('express')
const app=express()
const cors=require('cors')
const port=2000 || process.env.PORT


app.use(express.json())
app.use(cors())
app.use(require('./router/router'))



app.listen(port,()=>{
    console.log("Server is listening on",port)
})