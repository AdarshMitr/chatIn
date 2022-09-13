//Node Server for handling socket io connections

const io=require('socket.io')(9000)

const users={};

io.on('connection',socket=>{
    socket.on('user-joined',name=>{
        users[socket.id]=name;
    })
})