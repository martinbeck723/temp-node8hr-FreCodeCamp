// started operating system process
console.log('first')
//off-loaded setTimeout, will come back to it when we are done
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process