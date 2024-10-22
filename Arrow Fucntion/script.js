//********************************Arrow Function  ()=>{}

//Arrow function is a shorthand for a function expression.

myFunc=(name)=>{
    console.log("Hello "+ name);
}
myFunc("Arrow Function");  //Hello Arrow Function


const func=function(){
    let username='Ayesha';
    console.log(this.username); 
}
func();         //output: undefined


const func1=()=>{
    let username='Ayesha';
    console.log(this.username); 
}
func1();       //output:  undefined


const addTwoNum=function(num1,num2){
    return num1+num2;
} 
console.log(addTwoNum(3,5));   //output : 8


const addT_woNum=(num1,num2)=>{
    return num1+num2;
}
console.log(addT_woNum(3,5));   //output : 8


const addTwo=(num1,num2)=>num1+num2;
console.log(addTwo(3,4));

const add_Two=(num1,num2)=>(num1+num2);
console.log(add_Two(3,4));