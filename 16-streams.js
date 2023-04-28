//when reading big file, use streams

const {createReadStream} =require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
//no such file or directory
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

//read in chunks
//data is an event
stream.on('data',(result)=>{
    console.log(`Received ${result.length} bytes of data`);
    console.log(result);
})

stream.on('error',(err)=>console.log(err))