const http = require('http')
const fs = require('fs')
const express =require('express')
const app = express()
const path = require('path')

const port = 3000

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`Serve working in port ${port}`)
})