//****************** Lexicalscoping **************************

// function outer(){
//     let var1='This is outer function var';
// }
// console.log(var1);     

/*function outer() {
    let var1 = 'This is outer function var';
    //console.log(var2);  

    function inner() {
        console.log(var1);
        let var2 = 'This is inner function var';
    };
    function innerTwo() {
        console.log(var1);
        //console.log(var2);  
    }
    inner();
    innerTwo()
};
outer();            

function init(){
    let name = 'Ayesha';
    function displayName(){
        console.log(name); 
    }
    displayName();
}
init(); */


// ****************************Function Declaration
// function myFunc(name){
//     console.log("Hello "+ name);
// }
// myFunc("Function Declaration")

//********************************Arrow Function
// myFunc=(name)=>{
//     console.log("Hello "+ name);
// }
// myFunc("Arrow Function")

// ******************************Function Expression
// var myFunc1 =function(name){
//     console.log("Hello "+ name);
//}

// myFunc1("Function Expression")
// const funcOutput = myFunc1
// funcOutput("Function Expression")
// console.log(funcOutput);

// ********************Higher Order Function (Function returning function)*********************************
/* 
function outerFunction(){
    let outerVariable='This is outer function variable';
    function innerFunction(){
        console.log(outerVariable);
    }
    return  innerFunction;
}
//outerFunction() it will not show anything

const myFunction=outerFunction();
myFunction(); // it will show the value of outerVariable  
*/



// **************************Closure ***********************************
// function hello(x){
//     const a='VAR1';
//     const b='VAR2';
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const  ans = hello("arg");
// ans();


// function calculatePower(exp){
//     return function(base){
//         return base ** exp;
//     }
// }
// const cube=calculatePower(3);
// console.log(cube(2))//8



// function firstFunc(){
//     const firstVar = 10
//     function secondFunc(){
//         const secondVar =20
//         function thirdFunc(){
//             const thirdVar = 30
//             console.log(firstVar,secondVar,thirdVar);    
//         }
//         return thirdFunc
//     }
//     return secondFunc
// }
// const ans = firstFunc()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()

// function firstFunction(){
//     const firstVar='This is variable 1';
//     function secondFunction(){
//         const secondVar='This is variable 2';
//         function thirdFunction(){
//             const thirdVar='This is variable 3';
//             console.log(firstVar,secondVar,thirdVar); 
//         }
//         return thirdFunction;
//     }
//     return secondFunction;
// }
// const  Firstans = firstFunction(); //it return secondFunction
// // console.log(Firstans);
// const secondans=Firstans();
// // console.log(secondans); it  return second Function
// secondans();

// const ans = firstFunction()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()



