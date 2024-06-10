const fs =  require('fs')
    function poem1(){
        return new Promise((resolve,reject) => {
            fs.readFile('./resource/poem1.txt', (err,data) => {
                if(err) reject('出错了')
                resolve(data)
            })
        })
    }
    function poem2(){
        return new Promise((resolve,reject) => {
            fs.readFile('./resource/poem2.txt', (err,data) => {
                if(err) reject('出错了')
                resolve(data)
            })
        })
    }
    function poem3(){
        return new Promise((resolve,reject) => {
            fs.readFile('./resource/poem3.txt', (err,data) => {
                if(err) reject('出错了')
                resolve(data)
            })
        })
    }
    async function main(){
        let p1 = await poem1()
        let p2 = await poem2()
        let p3 = await poem3()
        console.log(p1.toString());
        console.log(p2.toString());
        console.log(p3.toString());
    }
    main()