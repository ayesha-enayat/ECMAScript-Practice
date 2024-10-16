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
//Callback=a function that is passed as a argument to another function
//used to handle asynchronous operations
//1.Reading a file
//2.Network Request
//3.Interacting with databases
//hey when you are done,call this next

// hello(goodBye);
// hello(leave);
// // goodBye();

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
// sum(displayPage,1,2)
// function displayPage(result){
//     document.getElementById('myh1').textContent=result;
// }