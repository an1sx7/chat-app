const express=require("express")
const app=express()
const server=require("http").createServer(app)
require('dotenv').config()
const PORT=process.env.PORT
const io=require("socket.io")(server)

app.use(express.static("public"))

io.on("connection",socket=>{
  socket.on("chat message",msg=>{
    io.sockets.emit("chat message",msg)
  })
})

server.listen(PORT,()=>{
  console.log("running")
})
