
// nested if else
// let age = 141;
// let name = "nitin"
// let sem = 3;

// if (age > 18) {
//     console.log("inside first if")
//     if (name === "dimpy") {
//         console.log("valid")
//         if (sem == 3) {
//             console.log("sem is valid")
//         } else {
//             console.log("not reached")
//         }
//     } else {
//         console.log("nested")
//     }


// } else {
//     console.log("not valid")
// }


// else if ladder
// let age=true;

// if (age>18){
//     console.log("valid")
// }else if (age<18){
// console.log("less than 18")
// }else if (age===18){
//     console.log("Age is 18")
// }else{
//     console.log("nothing happened")
// }





// let age=18;
// switch (false) {

//     case (age<18):
//         console.log(" not 18");
//         break;

//     case (age===18):
//         console.log("not valid ");
//         break;

//     default:
//         console.log("valid")

// }

// we want to check if age is greater than 18 or not using
//  switch case and case should hold the condition not switch 



// for(let i=0;i<10;i++){
// console.log(i);
// }

// let j=0;
// while (j<10){
// console.log(j);
// j++;
// }


// function addition(num1,num2) {


//    return num1+num2
// }


// let sum = addition (2,3);
// console.log(sum)




// const greet =function (){
//    console.log("hi")
// }


// console.log(greet)
// console.log(typeof greet)

// greet();
// console.log(greet())



// const add= function(num1,num2){
//     return num1+num2
// }

// console.log(add(3,4));




 

//  for(let i =0; i<5; i++){
// console.log("outer loop", i);
//  }



// let j=0;

// while(j<5){
// console.log("outer loop", j);
// j++;
// }
// let k=10;
// do{
//     console.log("outer loop", k);
//     k++;

// }while(k<5);









// function random(num,val,ran){
//     console.log("inside function");
//     return num+val+ran;

// }



// console.log(random(0,3,4),random(1,2,3),random(4,5,6));






// const greet = function (num1,num2){
//     return (num1*num2)
// }

// greet(3,4);




// const rano= ()=>{
//  console.log("hi")   
// }

// rano();




// (
//  (num1,num2)=>{
//     console.log("hi im IIFE",num1+num2)
// }

// )(4,5)








// function help(random){
//     random();
// }

// function support(){ 
//     console.log("hi im support function")
// }


// help(support)



// function outer(){

//     return function inner(){
//         console.log("hi im inner function")
//     }
// }

// outer()();

// let arr = [2,7,"sahil",false,()=>{console.log("hi h")}]

// console.log(arr.slice(2,4))


// for (let i=0; i<5;i++){
// console.log(arr[i])
// }


// for(let i=1;i<=20;i=i+2){

//     console.log("5 X",i,"=",5*i)
// }




arr1=[5,9,2,1,0];

// for (let i=0;i<arr1.length;i++){
//     arr1[i]=arr1[i]*2;
// }

// arr1.forEach(function(curr,index){
// return arr1[index]=curr*2;
// })






// let res=arr1.map((curr)=>{
// return curr=curr*4;
// })



// console.log(res)



let result=arr1.filter((curr)=>{
return curr<5
})


result=[];


console.log(result)