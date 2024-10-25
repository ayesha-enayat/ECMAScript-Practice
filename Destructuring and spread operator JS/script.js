/****************************Array Destructuring********************/
//let num=[9,8];
//let num1=num[0];
//let num2=num[1];
// console.log(num1);
// console.log(num2);

// let arr=[3,5];
// let [a,b]=arr;
// console.log(a);
// console.log(b);


// let arr1=[3,5,7,8,9,33,68];
// let [c,d,...rest]=arr1;
// console.log(c);
// console.log(d);
// console.log(rest);
// let [c, , ,...rest]=arr1;
// console.log(c,rest);


// let fruits=['Apple','Mango','Banana','Grapes','Orange'];
// let  [fruit1,fruit2,fruit3,...restFruits]=fruits;
// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);
// console.log(restFruits);

/****************************Object Destructuring********************/
// let obj={
//     name:'Rahul',
//     age:25,
// }
// console.log(obj.name,obj.age);

// let obj={a:1,b:5}
// let {a,b}=obj; //undefined
// console.log(a);
// console.log(b);
// console.log(obj.name,obj.age

// let {a,b}={a:'ayesha',b:15};
// console.log(a);
// console.log(b);


// *************************Spread Operator*******************************

// let array=[2,8,9,4];
// let obj={...array};
// console.log(obj);

// function sum(v1,v2,v3,v4) {
//     return v1+v2+v3+v4;
// }
// console.log(sum(...array));

// function myFunc(...rest){
//     console.log(rest);
// }
// myFunc(3,5,7,8,53,2);

// let obj2={
//     myname:'Ayesha',
//     companyName:'SkillsGala',
//     age:20
// }
// console.log({...obj2});
// console.log({...obj2,myname:"Aqsa"});
// console.log({myname:'John',companyName:'xyz',...obj2}); //This will print the obj2 without changing any value





