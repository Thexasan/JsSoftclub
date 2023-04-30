//task1
// function gasoline(x,y,z){

//     let a = (x-z)/y
//     return Math.floor(a)
// }
// console.log(gasoline(2000,100,10));

//task2
// function fact(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       let factorial = 1;
//       for (let j = 2; j <= i; j++) {
//         factorial *= j;
//       }
//       result *= factorial;
//     }
//     return result;
//   }
//   console.log(fact(5));

//task3
// function addDigits(num) {
//     let sum = 0;
//     while (num > 0 || sum > 9) {
//       if (num === 0) {
//         num = sum;
//         sum = 0;
//       }
//       sum += num % 10;
//       num = Math.floor(num / 10);
//     //   console.log(num);
//     }
//     return sum;
//   }
// console.log(addDigits(308));

//task4
// function sumCubes(n) {
//     let cubeSum = 0;
//     for (let i = 1; i <= n; i++) {
//       cubeSum += Math.pow(i, 3);
//     }
//     return cubeSum;
//   }
// console.log(sumCubes(7));

/// кати рекурсия
// function sumCubes(n){
//     if(n==1){
//         return 1
//     }
//     return Math.pow(n,3)+sumCubes(n-1)
// }
// console.log(sumCubes(7));

//task5
// function sumOfDigits() {
//     let sum = 0
//     return function(n){
//         for(let i = n;i>0;i=Math.floor(i/10)){
//             sum+=i%10
//         }
//         return  sum
//     }
// }
// const getSum=sumOfDigits()
// console.log(getSum(1235));

// function sunOf(n){
//     let sum = 0
//     let sum2 = 0
//     for(let i =n;i>0;i=Math.floor(i/10)){
//         sum+=i%10
        
//     }
//     for(let j = sum;j>0;j=Math.floor(j/10)){
//         sum2 += j%10
//     }
//     return sum2
// }
// console.log(sunOf(136));

function get(...arr){
    return Math.min(...arr)
}
console.log(get(1,2,3,4,5,6));