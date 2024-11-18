const { createReadStream } = require('fs');


const stream = createReadStream('../content/big.txt', { highWaterMark: 100 , encoding: 'utf8' })


stream.on('data', (result) => {
    console.log(result)
  })
  stream.on('error', (err) => console.log(err))
  