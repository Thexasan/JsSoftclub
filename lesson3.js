//tak1
// function nmae(n){
//     if(n==1){
//         return 1
//     }
//     return n+nmae(n-1)
// }
// console.log(nmae(12));

//task2
// function factorial(n){
//     if(n==1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5));

//task3
// function doubleF(n){
//     if(n<=1){
//         return 1
//     }
//     return n*doubleF(n-2)
// }
// console.log(doubleF(9));

//task4
// function product(a,b){
//     return function(c,d){
//         return function(e,f){
//             return a*c*e+b*d*f
//         }
//     }
// }
// console.log(product(1,2)(1,1)(2,3));

//task5
// function pow(a,b){
//     if(a==1||b==1){
//         return 1
//     }
//     return a**b
// }
// console.log(pow(2,4));

//task6
// function length(str) {
//     if (str === "") {
//       return 0;
//     } else {
//       return 1 + length(str+1);
//     }
//   }
// console.log(length("apple"));  

//task7
// function is_even_true(n){
//     if(n%2==0){
//         return true
//     }
//     else{

//         return false 
//     }
// }
// console.log(is_even_true(45));

//task8
// function multiSum(num, i = 0) {
//     if (i > 10) {
//       return 0;
//     }
//     return num * i + multiSum(num, i + 1);
//   }
// console.log(multiSum(6));  

//task 1.1
// function add_suf(str_1){
//     return function(str){
//         return str+str_1
//     }
// }
// const add_ly = add_suf("ly")
// console.log(add_ly("hopeless"));

//task1.2
// function add(n){
//     return function(a){
//         return n+a
//     }
// }
// console.log(add(10)(20));

//task1.3
// function addSum(n){
//     return function(a){
//         return a+n
//     }
// }
// addS1=addSum(1)
// console.log(addS1(3));

//task1.4
// function redunant(str){
//     return function(){
//         return str
//     }
// }
// const f1= redunant("apple")
// console.log(f1());

//task last
// function gcd(a, b) {
//     if (b == 0) {
//       return a;
//     } else {
//       return gcd(b, a % b);
//     }
//   }
//   console.log(gcd(8,12));
