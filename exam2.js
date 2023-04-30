// function total(a,b,c,d){
//     let cnt = 0
//     let cnt_1=0
//     let cnt_2=0
//     let cnt_3 =0 

//     let res = 0
//     cnt=a.reduce((a,b)=>{
//         return a*b
//     })
//     cnt_1 =b.reduce((a,b)=>{
//         return a*b
//     })
//    cnt_2= c.reduce((a,b)=>{
//         return a*b
//     })
//     cnt_3= d.reduce((a,b)=>{
//         return a*b
//     })
//     res = cnt+cnt_1+cnt_2+cnt_3
    
//     return res
// }
// console.log(total([4,2,4],[3,3,3],[1,1,2],[2,1,1]));

function exam(...arr){
    return arr.map((e)=>{
        return e.reduce((a,b)=>{
            return a*b
        })
    }).reduce((a,b)=>{
        return a+b
    })

}
console.log(exam([1,2,3],[4,5,6],[7,8,9]));

//task2
// function numb(arr){
//     return arr.reduce((a,b)=>{
//         return a+b
//     })
// }
// console.log(numb([1,2,3,5]));

//task 3
// function seven(arr){
//     if(arr.includes(7)){
//         return 'boom'
//     }else{
//         return 'there is no 7 in the array'
//     }
// }
// console.log(seven([1,2,3,4,5,7]));

// //task4
// let vow = ''
// function dashed(str){
//      for(let i = 0;i<str.length;i++){
//         if(str[i]==str[i].includes('a','u','i','e')){
//             vow+=`-`+str[i]
//         }
//      }
//      return vow+=`-`+str.atAll('a','u','i','e')+'-'
// }
   
// console.log(dashed('Edabit'));

//task5
// function double(str){
//     for(let i =0;i<str.length;i++){
//        if(str[i]==str[i+1]){
//         return true
//        }
//     }
//     return false
// }
// console.log(double('lope'));