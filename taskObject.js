//task1
// function getVote(obj){
//     let v = Object.values(obj)
//     return v.reduce((a,b)=>{
//         return a-b
//     })
// }
// console.log(getVote({up:13,down:15}));

//task2
// function vol(obj){
//     let res = Object.values(obj)
//     return res.reduce((a,b)=>{
//         return a*b
//     })
// }
// console.log(vol({w:2,l:5,h:3}));

//task3
// function fif(a){
//     return {
//         needs:a*50/100,
//         want:a*30/100,
//         saving:a*20/100
//     }
// }
// console.log(fif(10000));

//task4
// function relation(str){
//     let x = {
//         'darth': 'father',
//         'leia':'sister',
//         'han':'brother'
//     }
//    return x[str]
// }
// console.log(relation('darth'));

//task5
// function is (a,obj){
//     let x = obj.min
//     let y =obj.max
//     if(a>=x && a<=y){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(is(4,{min:6,max:10}));

// //task6
// function total(obj){
//     let x = Object.keys(obj).length
//     return x
// }
// console.log(total({a:'moron'}));

//task7
// function has(obj,str){
//     if(Object.keys(obj).includes(str)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(has({a:44,b:45,c:46},'b'))

//8
// function isEmpty(obj){
//     let x = Object.keys(obj)
//     if(x.length==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEmpty({}));

//9
// function max(arr) {
//   return arr.reduce((a, b) =>
//     a + b.score, 0
//   );
// }
// console.log(
//   max([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 },
//   ])
// );

//10
// function calc(obj,n){
//     let x = Object.values(obj)
//     return x.reduce((a,b)=>a+b,-n)
// }
// console.log(calc({'bat':20,'tr':10},5));

//11
// function addName(obj,name,value){
//      obj[name]=value
//      return obj
// }
// console.log(addName({ piano: 500 }, "Brutus", 400));

//12
// function toArr(obj){
//     let x = Object.keys(obj).map(function(key){
//         return [key,obj[key]]
//     })
//     return x
// }
// console.log(toArr({a:1,b:2}));

//13
// function key(obj){
//     let x = Object.keys(obj).sort()
//     let y = x.map(key => obj[key])
//     return [x,y]
// }
// console.log(key({a:1,b:2,c:3}));

//14
// function getBudjet(arr) {
//     let x = arr.reduce((sum,person)=>
//     sum+person.budget,0)
//     return x
// }
// console.log(
//   getBudjet([
//     { name: "John", age: 21, budget: 29000 },
//     { name: "Steve", age: 32, budget: 32000 },
//     { name: "Martin", age: 16, budget: 1600 },
//   ])
// );

//15
// function frree(obj){
//     let x = Object.values(obj).reduce((a,b)=>a+b)
//     return x >=50
// }
// console.log(frree({ "Shampoo": 45.99, "Rubber Ducks": 15.99 }));

//new date()
// function halloween(date) {
//     let month = date.getMonth() ; 
//     let day = date.getDate();
    
//     if (month === 9 && day === 31) {
//       return "Bonfire toffee";
//     } else {
//       return "toffee";
//     }
//   }
//   console.log(halloween(new Date('2013-10-31')));


//2
// function santa(date){
//     let month = date.getMonth()
//     let day = date.getDate()
//     if(month===11 && day===24){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(santa(new Date(2013,11,24)));


//3
// function getDAy(str){
//     let weeks = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
//     let date = new Date(str)
//     return weeks[date.getDay()]
// }
// console.log(getDAy('12/07/2016'));

//4

// function days(month,year){
//     return new Date(year,month,0).getDate()
// }
// console.log(days(2,2018));

//5
// function isValid(day,month,year){
//     let x = new Date(year,month,day)
//     return x.getFullYear()===year && x.getMonth()===month &&x.getDate()===day

// }
// console.log(isValid(35,2,2020));
// console.log(isValid(21,2,2020));

        //hw
//5 function after(obj,n){
//     for(let person in obj){
//         obj[person]+=n
//     }
//     return obj
// }
 
// console.log(after({ "Joel" : 32, "Fred" : 44, "Reginald" : 65, "Susan" : 33, "Julian" : 13},1));

//1
// function city(obj){
//     let {name,population,continent}=obj
//     return `${name} has a population of ${population} and is situated in ${continent}`
// }
// console.log(city({ name: "Paris", population: "2,140,526", continent: "Europe"} ));

//2
// function nSidedShape(n) {
//     const shapes = {
//         1: "circle",
//         2: "line",
//         3: "triangle",
//         4: "square",
//         5: "pentagon",
//         6: "hexagon",
//         7: "heptagon",
//         8: "octagon",
//         9: "nonagon",
//         10: "decagon"
//     }
//     return shapes[n];
// }

// console.log(nSidedShape(3))

//3
// function mom(obj){
//     let x = {
//         1:'Mommy',
//         2:'please',
//         3:'help'
//     }
//     return x[1].concat(" ",x[2]," ",x[3]," ",x[2])
//     // return {...x}
// }
// console.log(mom());

//4
// function map(arr){
//     let obj ={}
//     for(let i = 0;i<arr.length;i++){
//         obj[arr[i]] = arr[i].toUpperCase()
//     }
//     return obj
// }
// console.log(map(["p", "s"]));

//6
// function remove(obj,str){
//     delete obj[str]
//     return obj
// }
// console.log(remove({ piano: 300, tv: 100, skate: 50 }, "skate") );

//7
// function names(obj){
//   let price = 0
//   let expen=''
//   for(let key  in obj){
//     if(obj[key]>price){
//         price=obj[key]
//         expen = key
//     }
//   }
//   return expen
// }
// console.log(names({piano:200,skate:20, stereo: 500}));

//1
// function getDay(date1,date2){
//     let a = date2.getDate() - date1.getDate()
//     return a
// }
// console.log(getDay(new Date('June 14,2019'),new Date('June 20,2019')));
// console.log(getDay( new Date("July 20, 2019"), new Date("July 30, 2019") ));

//8
