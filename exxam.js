// function largestSwap(n){
//     let a = Math.floor(n/10)
//     let b = n%10
//     if(a>=b){
//         return true
//     }else{
//         return false
//     }   
// }
// console.log(largestSwap(43));

//task2
// function sevenB(n){
//     let repeat = 0
//     for(let i = n;i>0;i=Math.floor(i/10)){
//         repeat = i%10
//         if(i==7){
//             return "boom"
//         }
//         else{
//             return 0
//         }
//     }
// }
// console.log(sevenB(56));

//task3
// function oddOrEven(num) {
//     let sumOfDigits = 0;  
//     for (let i = 0; i < num; i++) {
//       sumOfDigits += parseInt(i);
//     }
  
//     if (sumOfDigits % 2 === 0) {
//       return "Evenish";
//     } else {
//       return "odd";
//     }
//   }
//   console.log(oddOrEven(44));

//task4
// function sumNumbers(a=0){
//     return function(b=0){
//         return function(c=0){
//             return function(d=0){
//                 return function(e=0){
//                     return function (f=0){
//                         return a+b+c+d+e+f
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(sumNumbers(2)(3)(4)()()(6));
// console.log(sumNumbers(2)()()(2)(2)(1));

//task5
// function gcd(a,b){
//     if(b==0){
//         return a
//     }
//     return gcd(a,a%b)
// }
// console.log(gcd(10,20));