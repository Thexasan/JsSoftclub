//tasks1
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// let sum1 = function(a,b){
//     return a+b;
// }
// console.log(sum1(4,4));

// let sum2 = function(a,b){
//     return a+b;
// }
// console.log(sum2(-2,4));

//task2

// let max = function(a,b,c){
//     return (Math.max(a,b,c))
// }
// console.log(max(20,3,25));

// let max1 = function(a,b,c){
//     return (Math.max(a,b,c))
// }
// console.log(max1(4,7,9));

// let max2 = function(a,b,c){
//     return (Math.max(a,b,c))
// }
// console.log(max2(-20,40,250));

//task3
// let max = function(n){
//     let a= Math.floor(n/100);
//     let b =Math.floor(n/10%10)
//     let c =  n%10;
//     return a+b+c;
// }
// console.log(max(179));

// let max = function(n){
//     let a= Math.floor(n/100);
//     let b =Math.floor(n/10%10)
//     let c =  n%10;
//     return a+b+c;
// }
// console.log(max(256));

// let max = function(n){
//     let a= Math.floor(n/100);
//     let b =Math.floor(n/10%10)
//     let c =  n%10;
//     return a+b+c;
// }
// console.log(max(333));

//Task4

// let nine = function(n){
//     return (n%10==9?'yes':'no')

// }
// console.log(nine(149));

// let nine = function(n){
//     return (n%10==9?'yes':'no')

// }
// console.log(nine(387));

// let nine = function(n){
//     return (n%10==9?'yes':'no')

// }
// console.log(nine(29));

//task5
// let century = function(n){
//     return Math.ceil(n/100)
// }
// console.log(century(1705));

// let century = function(n){
//     return Math.ceil(n/100)
// }
// console.log(century(1900));

// let century = function(n){
//     return Math.ceil(n/100)
// }
// console.log(century(2000));

//task6
// let minute = function(n){
//     return n*60
// }
// console.log(minute(5));

// let minute = function(n){
//     return n*60
// }
// console.log(minute(3));

// let minute = function(n){
//     return n*60
// }
// console.log(minute(2));

//task7
// let age = function(n){
//     return n*365
// }
// console.log(age(65));

// let age = function(n){
//     return n*365
// }
// console.log(age(0));

// let age = function(n){
//     return n*365
// }
// console.log(age(20));

//task8
// let perimeter = function(a,b){
//     let c = 2*(a+b)
//     return c
// }
// console.log(perimeter(6,7));

// let perimeter = function(a,b){
//     let c = 2*(a+b)
//     return c
// }
// console.log(perimeter(20,10));

// let perimeter = function(a,b){
//     let c = 2*(a+b)
//     return c
// }
// console.log(perimeter(2,9));

//task9
// let lessThan100 = function(a,b){
//     return a+b<100?true:false
// }
// console.log(lessThan100(22,15));

// let lessThan100 = function(a,b){
//     return a+b<100?true:false
// }
// console.log(lessThan100(83,35));

// let lessThan100 = function(a,b){
//     return a+b<100?true:false
// }
// console.log(lessThan100(3,77));

//task10
// let addUp = function(n) {
//     let sum = 0
//     for (let i = 1; i <=n ; i++) {
//         sum+=i
//     }
//     return sum
// }
// console.log(addUp(4));

// let addUp = function(n) {
//     let sum = 0
//     for (let i = 1; i <=n ; i++) {
//         sum+=i
//     }
//     return sum
// }
// console.log(addUp(13));

// let addUp = function(n) {
//     let sum = 0
//     for (let i = 1; i <=n ; i++) {
//         sum+=i
//     }
//     return sum
// }
// console.log(addUp(600));

//task11
// let equal = function(a,b,c){
//     if (a !=b && b!=c && a!=c){
//         return(0);
//     }else if(a==b && b==c && a==c){
//         return(3);

//     }
//     else{
//         return(2);
//     }
// }
// console.log(equal(3,4,3));

// let equal = function(a,b,c){
//     if (a !=b && b!=c && a!=c){
//         return(0);
//     }else if(a==b && b==c && a==c){
//         return(3);

//     }
//     else{
//         return(2);
//     }
// }
// console.log(equal(1,1,1));

// let equal = function(a,b,c){
//     if (a !=b && b!=c && a!=c){
//         return(0);
//     }else if(a==b && b==c && a==c){
//         return(3);

//     }
//     else{
//         return(2);
//     }
// }
// console.log(equal(1,4,3));

//*task12
// let answer = 0
// let isSymetr = function (n) {  
//   for(let i =n;i>0;i=Math.floor(i/10)){
//     let repeat = i%10
//     answer = (answer*10)+repeat
//   }
//   if(answer=== n){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log(isSymetr(7226));

//13task
let countPrimes = (num) => {
  let count = 0;
  for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
          if (i % j === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          count++;
      }
  }
  return count;
}
console.log(countPrimes(3));


//14
// let pow = function(a,b){
//   let c = Math.pow(a,b)
//   return c
// }
// console.log(pow(2,10));

// let pow = function(a,b){
//   let c = Math.pow(a,b)
//   return c
// }
// console.log(pow(2.1,3));

// let pow = function(a,b){
//   let c = Math.pow(a,b)
//   return c
// }
// console.log(pow(2,-2));

//--------------------------hw2
//task1
// let crcuitPower = function(a,b){
//   let c = a*b
//   return c
// }
// console.log(crcuitPower(230,10));

// let crcuitPower = function(a,b){
//   let c = a*b
//   return c
// }
// console.log(crcuitPower(110,3));

// let crcuitPower = function(a,b){
//   let c = a*b
//   return c
// }
// console.log(crcuitPower(480,20));

//task2
// let divBy5 = function(n){
//   return n%5==0?true:false
// }
// console.log(divBy5(5));

// let divBy5 = function(n){
//   return n%5==0?true:false
// }
// console.log(divBy5(-55));

// let divBy5 = function(n){
//   return n%5==0?true:false
// }
// console.log(divBy5(37));

//task 3
// let isSameNum=function(a,b){
//   return a==b?true:false
// }
// console.log(isSameNum(4,4));

//task4
// let longTime=function(h,m,s){
//   let a = h*3600
//   let b = m*60
//   let c = s*1
//   return a>b && a>c?console.log(h):b>a&&b>c?console.log(m):console.log(s);
// }
// console.log(longTime(1,59,3598));

//task5
// let oneOddorEven=function(n){
//   let a = Math.floor(n/10)
//   let b = n%10
//   return (a%2==0 && b%2!=0) || (b%2==0 && a%2!=0)?true:false
// }
// console.log(oneOddorEven(25));

//task6
// let negNum = function(n){
//   return n*(-1)
// }
// console.log(negNum(8));