/*____________________________Array Methods____________________________ */

//_____________forEach method() This method changes the original array
// let numbers=[1,2,3,4,5,6];
// numbers.forEach(double);  
// numbers.forEach(display);
//console.log(numbers);

// function display(element){
//     console.log(element);  
// }


// function double(element,index,array){
//     array[index]=element*2;
// }

// numbers.forEach(function(element,i,array){
//     console.log(element,i,array);
// })

//____________map method() this method make copy of the array
// const num=[1,2,3,4,5,6,7];
// const squares=num.map(square);
// console.log(squares);
// console.log(num);

// function square(element){
//     return Math.pow(element,2);
// };




//__________________filter method() this method make new array by filtering out elements
// const num=[1,2,3,4,5,6,7,8];
// console.log(num.filter(isEven));

// function isEven(element){
//     return element%2===0;
// }


//_________________ reduce method() this method reduce the elements of an array to a single value but it doesnot change the original array
// const prices=[5,30,10,25,15,20];
// const total=prices.reduce(sum);
// console.log(total);
// console.log(prices);


// function sum(accumulator,element){ //accumulator means previous  element and element means next element
//     return accumulator+element
// }

// const grades=[75,50,90,80,65,95]
// const maximum=grades.reduce(getMax);
// console.log(maximum);


// function getMax(accumulator,element){
//     return Math.max(accumulator,element)
// }

//__________________sort method()  //it sort the original array

// let fruits=['apple','orange','coconut','banana'];
// fruits.sort();
// console.log(fruits);


// let numbers=[6,8,1,4,10,83,9,2];
// numbers.sort();
// console.log(numbers);

// const people=[{name:'ayesha',age:21,gpa:3.4},{name:'aqsa',age:18,gpa:2.6},{name:'ahmar',age:20,gpa:3.0}];
// people.sort((a,b)=>a.age-b.age);
// console.log(people);


//__________________find method() 
// const names=['Ayesha','Aqsa','Iqra'];
// const foundName=names.find(isAyesha);
// console.log(foundName);
// console.log(names);



// function  isAyesha(element){
//     return element==='Ayesha';  //It return true or false to the function
// }

// const person=[{name:'Ayesha',age:20},{name:'Aqsa',age:18},{name:'Amna',age:10}]
// const foundPerson=person.find(isAqsa);
// const age=person.find(isAqsa).age;
// const name=person.find(isAqsa).name;
// console.log(foundPerson);
// console.log(name);
// console.log(age);


// function isAqsa(person){
//     return person.name==='Aqsa';
// }



//__________________every method()  this method returns true or false only
// const numbers=[1,2,3,4,5,6,7];
// const numbers=[1,2,3,4,-5,6,7];
// const res=numbers.every(isPositive);
// console.log(res);  //it returns true


// function isPositive(element){
//     return element>0
// }

//__________________some method() 
// const numbers=[1,2,3,4,5,-6,7];
// const res=numbers.some(isPositive);
// console.log(res);  //it returns true


// function isPositive(element){
//     return element>0
// }

//__________________fill method() 

// const numbers=[1,2,3,4,5];
// const num2=numbers.fill(0);
// console.log(numbers);
// console.log(num2);

// const numbers=[1,2,3,4,5];
// numbers.fill(100,1,4); //(fill value,starting index,endindex-1)
// console.log(numbers);

