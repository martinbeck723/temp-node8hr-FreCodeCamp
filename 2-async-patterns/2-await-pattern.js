const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
console.log('start task');
//no nesting anymore for multiple actions
const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8')
    const second = await readFile('../content/second.txt', 'utf8')

    await writeFile(
      '../content/result-mind-grenade-await.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start();
console.log('next task') //this should come up after start task, then go to the awaits async function

//a promise example
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('../content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))