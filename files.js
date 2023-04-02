const fs = require('fs');
// reding files


// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.error(err);
//     }
//     console.log(data.toString());
// })
// console.log('last line')


// writing files

// fs.writeFile('./docs/blog2.txt','Hello, world',()=>{
//     console.log('file was written');
// })
 

// directories (mkdir)

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.error(err);
//         }
//         console.log('Folder created');
//     })
// } else {
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.error(err);
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files
// NOte: create the file before run to delete

// if( fs.existsSync('./docs/deleteme.txt') ){
//     fs.unlink('./docs/deleteme.txt',(err)=>{
//         if(err){
//             console.error(err)
//         }
//         console.error('file deleted')
//     })
// }
