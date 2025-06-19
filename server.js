const express=require("express")
const app=express()
const server=require("http").createServer(app)
const io=require("socket.io")(server)

app.use(express.static("public"))

io.on("connection",socket=>{
  socket.on("chat message",msg=>{
    io.sockets.emit("chat message",msg)
  })
})

server.listen(3000,()=>{
  console.log("running")
})