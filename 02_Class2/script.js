// _____________________Primitive Data Types___________________________________________
// let num1 =5;
// let num2 = num1
// console.log(num1);
// console.log(num2);
// num1++
// console.log(num1); //6
// console.log(num2); //5

// _______________________Non Primitive Data Types___________________________________________
// let arr1 = [1,2,3]
// let arr2 = arr1
// console.log(arr1);
// console.log(arr2);
// arr1.push(4)
// console.log(arr1); //[1,2,3,4]
// console.log(arr2); //[1,2,3,4]


// _____________________CallBack function___________________________________________
//Callback=a function that is passed as an argument to another function
//used to handle asynchronous operations
//1.Reading a file
//2.Network Request
//3.Interacting with databases
//hey when you are done,call this next

// hello(goodBye);
// // hello(leave);
// // // goodBye();

// function hello(callback){
//     console.log('hello!');
//     callback();
// }
// function goodBye(){
//     console.log('goodbye!');
// }
// function leave(){
//     console.log('leave!');
// }


// sum(displayConsole,1,2)  //within the sum function calclute the result first then after that process is finished thendisplay the result to the console

// function sum(callback,x,y){
//     let result= x+y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
    
// }
// sum(displayConsole,1,2)
// function displayPage(result){
//     document.getElementById('myh1').textContent=result;
// }

// _____________________Shallow Copy___________________________________________
// let obj={
//     name:'Ghous',
//     fname:'Ahmad'
// }
// let obj1=obj;
// let obj2=obj1;
// obj2.name='Israar';
// console.log(obj,obj1,obj2);

// let obj1=obj;
// let obj2={...obj1};  //Shallow copy of object
// obj2.name='Israar';
// console.log(obj,obj1,obj2);


// _____________________Deep Copy________________________________________________

// let obj={
//     name:'Ghous',
//     school:{
//         ShoolName:'SMIT'
//     }
// }
// let obj1=obj;
// let obj2={...obj1};
// obj2.school.ShoolName='Saylani';  //shallow copy not work on nested objects
// console.log(obj,obj1,obj2);

// let obj2=JSON.parse(JSON.stringify(obj));
// obj2.school.ShoolName='Saylani'; 
// console.log(obj,obj1,obj2);


// _______________________Enhanced Object Literals______________________________________________
//Note:Variable name and property of object name must be same
// let student="Ayesha";
// let school="SMIT";

// let obj={
//     student,
//     school
// }
// console.log(obj.student,obj.school);

// _______________________Optional Chaining_____________________________________________
// let obj={
//     student:'Ayesha',
//     school:'SMIT',
//     class:{
//         section:'V-A'
//     }
// }
// // console.log(obj.class.section);
// // console.log(obj.class.section.grade); //undefined
// // console.log(obj.class.section.grade.position); //error


// console.log(obj?.class?.section?.grade?.position); //Undefined
// console.log(obj.student);
