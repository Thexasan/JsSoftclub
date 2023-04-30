//taskk1
// function give(str){
//     return function(str_1){
//         return str_1.concat(" ",str)
//     }
// }
// const giveMeSomething=give("is better than nothing")
// console.log(giveMeSomething("something"));

//task2
// function name(str){
//     let str_2 = "Edabit"
//     return str+str_2
// }
// console.log(name("Mubashir"));

//task3
// function count(str){
//     let vowel = ['a', 'o','u','i','e']
//     let cnt = 0
//     for(let i = 0;i< str.length;i++){
//         if(vowel.includes(str[i].toLowerCase()) || vowel.includes(str[i].toUpperCase())){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(count('Celebration'));

//task4
// function firstVowel(str) {
//     let vowels = ['a', 'o','u','i','e'];
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[i].toLowerCase()) || vowels.includes(str[i].toUpperCase())) {
//         return i;
//       }
//     }
//     return 0;
//   }
//   console.log(firstVowel('pple'));

//task5
// function bomb(str){
//     let boom = 'bomb'
//     if (str.includes(boom)){
//         return 'Duck'
//     }else{
//         return 'No'
//     }
// }
// console.log(bomb('There is a bombastic'));

//task6
// function charCount(a,b){
//     let cnt = 0
//     for(let i = 0;i<b.length;i++){

//         if(b[i]===a){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(charCount('b','big fat bubble'));

//task7
// function dubChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       result += str[i] + str[i];
//     }
//     return result;
//   }
// console.log(dubChar("String"));

//task 8
// function say(str,a){
//     let push1='Hello '
//     let push2='bye '
//     if(a==0){
//         return  push2.concat(" ",str)
//     }else{
//         return push1.concat(" ",str)
//     }
// }
// console.log(say('alon',1));