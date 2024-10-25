// var userName;
// userName= "Umra";
// let myName = "Ayesha";
// const firtsName = "Amna";
// // let myName; Can't redeclare
// myName = "AYESHA" // Updated
// // const firtsName ; Can't redeclare
// firtsName = "laraib";// Can't Updated
// console.log(firtsName);

// var userName='khanzadi'
// console.log(userName);

// console.log(a);   //Undefined
// var a='ayesha';


// console.log(b);  //Cannot access 'b' before initialization
// let b='aqsa'

// console.log(c);
// let c='sumaiya' //Cannot access 'b' before initialization

// _____________________________ Variable Scoping____________________
//var keyword has functional scope , let and const have block scope
// let c =300
// let b = 200;
// if(true){
//     var a = 10 // Global Scope
//     let b = 20 // Block Scope
//     const c = 30
//     // let c =300
//     console.log(a,b,c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// function myFunction(){
//     var a = 1000;
//     let b = 2000;
//     const c = 3000;
//     console.log(a,b,c);
// }
// myFunction()
// console.log(a);
// console.log(b);
// console.log(c);
// {
//     var a = 1000;
//     let b = 2000;
//     const c = 3000;
//     console.log(a,b,c);  
// }
// console.log(a);
// console.log(b);
// console.log(c);
//__________________________Destructuring_____________________
// _____________________Array Destructuring
// let arr = [1,2,3]
// // let a = arr[0] // Old Method
// // console.log(a)
// let [a,b,c] =arr
// console.log(a,b,c)
//___________________Object Destructuring______________________
// let {a,b} = { 
// a:1, 
// b:2

// }
// console.log(a,b);
// let obj = {
//     name : "Umra",
//     class : 9
// }
// console.log({...obj,name : "Kainat"});
// console.log({name : "Kainat", ...obj}); //Do not update the values
// console.log(obj); //original obj not changed because spread operator make copy of obj and array

// let student={
//     name : "Umra",
//     myclass : 9
// };
// let {name,myclass} = student;
// console.log(name,myclass);

// let student={
//     name : "Umra",
//     myclass : {
//         time:"9-11"
//     }
// };
// let {name,email,myclass}=student;
// let {time}=myclass;
// console.log(name,myclass,time);
// let {name,myclass:{time}}=student;
// console.log(name,time);





//______________________Spread Operator___________
//Spread operator make copy of any array and object

// var arr = [1,2,3,4,5,6,7,8,9]
// var [a,b, ...rest] = arr
// console.log(a,b,rest);
// let arr = [1,2,3]
// function sum(a,b,c){
//     console.log(a+b+c);  
// }

// let arr=['ayesha','enayat'];
// let arr1=['umra','badar'];
// console.log(...arr,...arr1);

//______________________Rest Parameter_____________
// sum(...arr)//Rest Parameter
// let arr= [1,2,3,4,5,6,7]

// function unKnownNumberOfParameters(...rest) {
//     console.log(rest);
// }
// // unKnownNumberOfParameters(...arr)
// unKnownNumberOfParameters(1,2,3,4,5,6,7,8,11,2,33)

