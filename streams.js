const fs = require('fs');


const readstream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

const  writestream = fs.createWriteStream('./docs/blog4.txt');

// let cunter = 0;
//  readstream.on('data', (chunk)=>{
//     console.log(`----- New Chunk Number ${cunter} ---------`);
//     console.log(chunk); // chunk.toSring() == {encoding: 'utf8'}
    
//     writestream.write(`\n New Chunk Number ${cunter}`)
//     writestream.write(chunk);
    
//     cunter++;
//     console.log(cunter);
//  })


// piping

readstream.pipe(writestream)

