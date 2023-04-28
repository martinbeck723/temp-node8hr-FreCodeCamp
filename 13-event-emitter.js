//get events module
const EventEmitter =require('events');
//create an instance of the events module
const customEmitter= new EventEmitter();

//on the response event, like onResponse, onClick
//first listen to the event
customEmitter.on('response',(name, id)=>{
    console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response',()=>{
    console.log(`some other logic `);
});




//then emit it
//trigger the response?
customEmitter.emit('response','john',34)
