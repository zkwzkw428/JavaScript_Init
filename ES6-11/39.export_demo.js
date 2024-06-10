// 分别暴露
// export let school = '尚硅谷'
// export function teach(){
//     console.log('我可以教授技能');
// }
// 统一暴露
// let school = "尚硅谷"
// function find(){
//     console.log('我可以帮助你找工作');
// }
// export {school,find}
// 默认暴露
export default {
    school:'尚硅谷',
    address:"北京",
    teach(){
        console.log('我可以教你知识');
    }
}
