const fs = require('fs')
// 多个回调函数嵌套实现
// fs.readFile('./resource/poem1.txt',(err,data1)=>{
//     fs.readFile('./resource/poem2.txt',(err,data2)=>{
//         fs.readFile('./resource/poem3.txt',(err,data3)=>{
//             console.log(data1 + '\r\n'+ data2 + '\r\n' + data3);
//         })
//     })
// })

console.log('--------------------');
// promise实现
const p = new Promise((resolve,reject)=>{
    fs.readFile('./resource/poem1.txt',(err,data) => {
        resolve(data)
    })
})
p.then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile('./resource/poem2.txt',(err,data) => {
            resolve([value,data])
        })
    })
},reason => {

}).then(value => {
    return new Promise((resolve,reject) => {
        fs.readFile('./resource/poem3.txt',(err,data) => {
            value.push(data)
            resolve(value)
        })
    })
}, reason => {

}).then(value => {
    console.log(value.join(`\r\n`));
})