const EventEmitter = require('events')


class Emitter extends EventEmitter{}


const myE = new Emitter();

myE.on("Hello", ()=> {
    console.log("Hello From the other side!");
})

myE.on("Child", ()=> {
    console.log("We are the world, we are the children!");
})


myE.emit("Hello");

myE.emit("Child");
//  It won't work when you try to run it
myE.emit("Jo");