const {readFile,writeFile} = require('fs');
//this is a callback hell!!!!
console.log('start');
//this readFile is async
readFile('./content/first.txt','utf8',(err,result)=>{
    //this is the callback function, wait for something finish and then this is called
    if(err){
        console.log(err);
        return;
    }

    const first =result;
    //read two files are messy
    readFile('./content/second.txt','utf8',(err,result)=>{
        //callback second
        if(err){
            console.log(err);
            return;
        }
        const second =result;


        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`,
        //callback third
        (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    })
})
//this will perform first, then all the callback functions, non-blocking
console.log('starting next task');