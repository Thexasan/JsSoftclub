// function anme(n){
//     if(n==1){
//         return 1
//     }
//     return n+anme(n-1)
// }
// console.log(anme(5));



                    //hw
                //task1
// console.log(feboacci(5));
// function feboacci(n){
//     if(n<=1){
//         return n
//     }
//     else{
        
//         return  feboacci(n-1)+  feboacci(n-2)
//     }
// }


//task2
// function sumDigit(n){
//     if(n<=1){
//         return n
//     }
//     return sumDigit(Math.floor(n/10))+ n%10
// }
// console.log(sumDigit(444444));

//task3
// function multiply(a){
//     return function(b){
//         return a*b
//     }
// }
// console.log(multiply(10)(2));

//task4
// function makkePlusFunc(n){
//     return function(b){
//         console.log(n+b);
//     }
// }
// const plusFive = makkePlusFunc(5)
// plusFive(2)

// function makePlus(n){
//     return function(b){
//         console.log(n+b);
//     }
// }
// const plusTen = makePlus(10)
// plusTen(188)