// //destructuting 
// let arr = [1,2,3,4,5]
// let [num,num2] = arr
// console.log(num,num2); //1,2

// //spread
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1] // =>arr1 = 1,2,3,4,5
// console.log(arr2); // [1,2,3,4,5]

// //rest
// function getSum(...arr){ //rest
//     //spread
//     return Math.max(...arr)
// }
// console.log(getSum(1,2,3,4,5));

            //task
// function getFirst(arr){
//     return arr.shift()
// }
// console.log(getFirst([80,2,3]));

//task2
// function make(a,b){
//     return [a,b]
// }
// console.log(make(1,2));

//task3
// function rev(arr){
//     return arr.reverse()
// }
// console.log(rev([1,2,3,4,5]));

//task4
// function icrement(arr){
//     return arr.map(num => num+1)
// }
// console.log(icrement([1,2,3,4,5]));

//task5
// function getLast(arr){
//     return arr.pop()
// }
// console.log(getLast([1,2,3]));

//task6
// function tostr(arr){
//     return arr.join('')
// }
// console.log(tostr([1,2,3,4,5,6]));

//tas7
// function ceck(arr,num){
//     return arr.find(e=>e==num)?true:false
// }
// console.log(ceck([1,2,3,4,5],3));

//task8
// function index(arr,str){
//     let res = arr.indexOf(str)
//     return res
// }
// console.log(index(['hi','edab','fgh'],'fgh'));

//task9
// function concat(arr,arr2){
//     let a = arr.concat(arr2)
//     return a

// }
// console.log(concat([1,2,3],[4,5,6]));

//task 10
// function toNumb(arr){
//     return arr.map((e)=>{
//     return +e
// })
// }
// console.log(toNumb(['12.3','34']));

//task12
// function parse(arr){
//     return arr.map((e)=>{
//         return e.toString()
//     })
// }
// console.log(parse([1,2,'a','b']));

//task11
// function sum(arr){
//     let sum = arr.reduce((acc,cur)=>{
//         return acc + cur
//     })
//     return sum
//     }
// console.log(sum([1,2,4]));

//task12
// function arrBetween(num1,num2,arr){

//     let a = arr.filter(num =>num>num1 && num<num2)
//     return a
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) );

//task13
// function typ(arr){
//     return arr.map(e=>{
//         return typeof(e)
//     })
// }
// console.log(typ([1,2,'null']));

//task15
// function check(arr){
//     return Math.sqrt(arr[0])**3==arr[1]
// }
// console.log(check([4,8]));

//task 16
// function invert(arr){
//     return arr.map(e=>{
//         return e*-1
//     })
// }
// console.log(invert([1,2,3,4,5]));

//17
// function getMultipl(arr){
//     return arr.map(e=>{
//         return e*2
//     })
// }
// console.log(getMultipl([2,3,4,5]));

//18
// function sum(arr){
//     return arr.reduce((a,b)=>{
//         return a+b
//     })
// }
// console.log(sum([2,7,4]));

//19
// function forbid(str,arr){
//    return !arr.some(word =>word.includes(str))
// }
// console.log(forbid('r',['rock','paper']));

//20
// function sunFive(arr){
//     return arr.reduce((a,b)=>{
        
//         if(b>5){
//             return a+b 
//         }else{
//             return a
//         }

//     },0)
// }
// console.log(sunFive([1,5,20,30,4,9,18]));

            //hw
//task1
function conc(...arr){
    return [].concat(...arr)
}
console.log(conc([1,2,3],[4,5,6],[7,8,9]));

//task2 
// function num(arr){
//     return arr[1]
// }
// console.log(num([1,43,3,4]));

//task3
// function compact(arr){
//    return arr.filter(Boolean)
// }
// console.log(compact([0,1,false,2,'',3]));

//task4
// function mut(a,b){
//     let res = []
//     for(let i = 1;i<=b;i++){
//         res.push(a*i)
//     }
//     return res
// }
// console.log(mut(7,5));

//task5
// function marafon(arr){
//     let distance = 0
//    for(let i = 0;i<arr.length;i++){
//     distance+=Math.abs(arr[i])
//    }
//    return distance===25
// }
// console.log(marafon([1,9,5,8,2]));

//task6
// function mirror(arr){
//     return arr.concat(arr.slice().reverse())
// }
// console.log(mirror([0,2,4,6]));

//task7 
// function indexMultiplier(arr){
//     let cnt = 0
//     for(let i = 0;i<arr.length;i++){
//         cnt+=arr[i]*i
//     }
//     return cnt
// }
// console.log(indexMultiplier([1,2,3,4,5]));

//task8
// function ascDesNone(arr,str){
//     if(str==='Asc'){
//         return arr.sort()
//     }else if(str==='Des'){
//         return arr.sort().reverse()
//     }else if(str==='None'){
//         return arr
//     }

// }
// console.log(ascDesNone([4,3,2,7,1],'None'));

//task9
// function findNan(arr){
//     for(let i =0;i<arr.length;i++){
//         if(isNaN(arr[i])){
//             return i
//         }
//     }
//     return-1
// }
// console.log(findNan([1,2,NaN]));

//task10
// function reverseArr(num) {
//     if (num < 10) {
//       return [num];
//     }
//     var lastDigit = num % 10;
//     var remainingDigits = Math.floor(num / 10);
//     return [lastDigit].concat(reverseArr(remainingDigits));
//   }
// console.log(reverseArr(123456789));