// function remove(str) {
//     let vowel = str.toLowerCase().replaceAll('a', '').replaceAll('o', '').replaceAll('u', '').replaceAll('i', '').replaceAll('e', '')
//     return vowel
// }
// console.log(remove("I have never seen"));

//task2
// function find(str){
//     let n = str.split('potato')
//         return n.length -1
// }
// console.log(find('potato potato'));

//task3
// function findNemo(str){
//     let nemo = str.split(' ')
//     for(let i = 1;i<nemo.length;i++){
//         if(nemo[i]==='Nemo'){
//             return `I found Nemo at ${i}`
//         }
//     }
//     return 'Nemo not founded'
// }
// console.log(findNemo('i am dhu  Nemo'));

//task4
// function multiple(a){
//     let answer = a.split(",")
//     let cnt = 1
//     for(let i = 0;i<answer.length;i++){
//        cnt*=answer[i]
//     //    console.log(cnt);
//     }
//     return cnt
// }
// console.log(multiple('2,3,4,5'));

//task5
// function cap(str) {
//     let caps = "";
//     let nonCaps = "";
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i].toUpperCase()) {
//         caps += str[i];
//         // console.log(caps);
//       } else {
//         nonCaps += str[i];
//         // console.log(nonCaps);
//       }
//     }
//     return caps + nonCaps;
//   }
// console.log(cap('hApPy'));

//task4
// function calculator(str){
//     return eval(str) //математически мекна максадш
// }
// console.log(calculator('23+4'));

//task5
// function stringInt(a){
//     return Math.floor(a*1)
// }
// console.log(stringInt('12.3'));

//task7
// function comp(str,str_1){
//     if(str.length==str_1.length){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(comp('AB','CD'));

//task19
// function repeat(str,a){
//     for(let i = 0;i<a;i++){
//         if(typeof(str)==='string'){
//             return str.repeat(a)
//         }
//         else{
//             return 'Not a string!'
//         }
//     }
// }
// console.log(repeat('mat',3));

//task20 
// function capital(str){
//     let cnt = 0
//     for(let  i =0;i<str.length;i++){
//         if(str[i] ==str[i].toUpperCase()){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(capital('btyuhGGGiouhi'));

//task 9
// function exam() {
//     let text = "Hello world, hello javaScript, hello sharifbek!";

//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// console.log(exam());