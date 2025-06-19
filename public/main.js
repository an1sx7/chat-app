let socket=io()
let inp=document.getElementById("inp")

socket.on("chat message",msg=>{
  document.getElementById("container").innerHTML+=`<div id="messages">${msg}</div>`
})

document.getElementById("btn").addEventListener('click',function(){
  socket.emit("chat message",inp.value)
  inp.value=''
})