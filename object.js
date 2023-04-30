// let obj = {
//     a:2,
//     b:3
// }
// let obj2=obj

// obj2 = {
//     a:4,
//     b:3
// }
// console.log(obj==obj2);

//Object.entries()// объекта массив мекна
// let obj = {name:'Hasan', age:18}
// console.log(Object.entries(obj));

// //object.keys()- nomowa niwon meta
// function key(a,b,s){
//     let res = Object.keys(b)
//     return res
// }
// console.log(key({name:'hasan'},{age:20},{isValue:true}));

//object.values()-  valuewa meta
// function value(a,b,s){
//     let res = Object.values(b)
//     return res
// }
// console.log(value({name:'hasan'},{age:20},{isValue:true}));
//---------------------
//destrucuturing
// const person = {
//     name:'Hasan',
//     age:18,
//     gender:'male'
// }

// let hsa = person.name;
// // console.log(hsa);


// //spread ...
// let {age,gender} = person
// // console.log((age));
// let cloneObj = {...person} // '- kopirovka'
// console.log(cloneObj);
//---------------------

//this 
// let hasan = {
//     name:'Hasan',
//     year: 2005,
//     calcAge: function(){ // новый функция внутри объекта
//         return 2023-this.year // показывает имю объекта
//     }
// }
// console.log(hasan.calcAge());

//new Date()
// const time = new Date()
// console.log(time);

//new date(milisek)
// const mlSek = new Date(1681999000000)
// console.log(mlSek);

//new date(string)
// const date = new Date('2023-04-16')
// console.log(date);

//new date(year,month,day,hours,minutes,seconds,milis)
// const time = new Date(2023,3,27)
// console.log(time);

//date.getFullYear()
// const currentDate =new Date()
// console.log(currentDate.getFullYear());

