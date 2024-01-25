// console.log("Hie");

// let a=5;
// let b=75;
// b=2;
// a**=5;
// let c=a**5;
// console.log(c);

// console.log( "value of a =", a , "value of b =", b);
// console.log(a+b);
// console.log(a-5);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);
// console.log("a**b =", a**b);
// console.log("incremented a is =" , ++b);
// console.log(b++);
// console.log(a++);
// console.log(a);

// let a=9;
// let b=5;

// console.log( a>b ||  a<b) ;

// console.log(a>b || a<b);

// let age = 19;

// let result = age >= 18? "adult" : "minor";

// console.log(result);

// let number=prompt("Enter a number");

// let isMultiple;
// if(number%5==0){
//     isMultiple=true;
// }
// else{
//     isMultiple=false
// }

// console.log(isMultiple);

// let marks = prompt("Enter Your Marks");

// if(marks >=80 && marks<=100){
//     console.log("Grade : A");
// }
// else if(marks<80 && marks>=70){
//     console.log("Grade : B");
// }
// else if(marks<70 && marks>=60){
//     console.log("Grade : C");
// }
// else if(marks<60 && marks>=50){
//     console.log("Grade : D")
// }
// else if(marks<50 && marks>=0){
//     console.log("Grade : F");
// }
// else{
//     console.log("Enter a valid score");
//     marks = prompt("Enter Your Marks");
// }

//LOOPS

// b
// for(let i=0;i<p;i++){
//     console.log("Nilesh Singh");
// }

// do{
//     console.log("Nilesh Singh");
//     p--;
// }while(p>0);

// let student ={
//     name : "Nilesh",
//     age : 19,
// }

// for(let i in student){
//     console.log("i=",i , "value=",student[i]);
// }

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let p=55;
// let i=prompt("Guess the number")
// let stop=true;
// while(stop){
//     if(i==p){
//         stop=false;
//         console.log("You won the game")
//     }
//     else{
//         i=prompt("Try Again!");
//     }
// }

// let str = prompt("Enter a string !!");

// console.log("Length of string id :",str.length);

// console.log("First letter of the string is :",str[0]);
// let p= prompt("Enter a name")
// console.log(`Do you know ? ${p} is chutiya bklii`);

// let n = prompt("Enter the name of product");
// let p = prompt("Enter the price of product");
// let d = prompt("Enter the amount of discount");

// let item = {
//     productName : n,
//     price : p,
//     discount : d,
// }

// console.log(`Product is ${item.productName} ,\nprice of procuct is ${item.price} havine a discount of ${item.discount}% on it`);

// let s="HeLlO";
// let str=s.toUpperCase();
// console.log(s.charAt(3));

// let Name= prompt("Enter your name");
// let len = Name.length;
// let userName= `@${Name}${len}`;
// console.log("Your user name is "+userName);

//ARRAYS

// let array = [1,2,3,4,5];
// console.log(array);
// array[2]=66
// console.log(array[2]);

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// for(let it of array){
//     console.log(it);
// }

// let cities=["delhi" , "bombay" , "guwahati" , "roorkee" , "madras"];

// for(let c of cities){
//     console.log(c.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];
// let n=marks.length;
// let total=0;
// for(let i of marks){
//     total+=i;
// }
// let avg=total/n;
// console.log(`Average marks of class is ${avg}`);

// let prices=[250,645,300,900,50];
// let discount=10;

// for(let fp of prices){
//     fp = fp - (fp/10);
//     console.log(fp);
// }
// console.log(prices);

// for(let i=0;i<prices.length;i++){
//     prices[i]=prices[i] - (prices[i]/100)*discount;
//     console.log(prices[i]);
// }
// console.log(prices);


// let veggies=["burger" , "pizza" , "chilly potato"];
// let junk=["pasta" , "paneer"];
// let food = veggies.concat(junk);
// food.unshift("momos");
// food.shift();
// let half= food.slice(2,5);
// food.splice(2,2,"fries");
// console.log(food);


// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"OLA");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);


// Chapter 5

// function func(){
//     console.log("Heya Whatsapp!!");
//     console.log("I'm the very fine !!");
// }

// func();
// func();

// let Name= prompt("Enter your name");
// function func(msg){
//     console.log(msg);
// }
// let msg=`I love you , ${Name}`;
// func(msg);

// let a=5;
// let b=6;
// function add(x,y){
//     let sum = x+y;
//     console.log(`Your sum is ${sum}`);
// }
// add(a,b);

// sum = (a,b) => {
//     return a+b;
// }
// let x=5;
// let y=6;
// console.log(sum(x,y));

// let string=prompt("Enter the string");
// function vowelCal(input){
//     n=input.length;
//     count=0;
//     for(let i=0;i<n;i++){
//         if(input[i]=='a' || input[i]=='e' || input[i]=='i' ||  input[i]=='o'  ||  input[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// let vowel = vowelCal(string);
// console.log(vowel);

// let Vowel = (input) => {
//     n=input.length;
//     count=0;
//     for(let i=0;i<n;i++){
//         if(input[i]=='a' || input[i]=='e' || input[i]=='i' ||  input[i]=='o'  ||  input[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(Vowel(string));


// let array=[1,2,3,4,5];
// function print(val){
//     console.log(val);
// }
// array.forEach(print);

// let arr=["Delhi" , "Bombay" , "Roorkee" , "Guwahati" , "Madras"];
// arr.forEach((val,idx) => {
//     console.log(val.toUpperCase() , idx);
// })

// let nums=[1,2,3,4,5];
// nums.forEach((num,idx)=>{
//     console.log(`Square of no at index ${idx} is, ${num*num}`);
// })

// let city = ["Delhi" , "Bombay" , "Roorkee" , "Guwahati" , "Madras"];

// let CITY = city.map((val)=>{
//     return val.toUpperCase();
// })

// console.log(CITY);

// let nums=[1,2,3,4,5];
// let evenNum = nums.filter((val)=>{
//     return val%2===0;
// })
// console.log(evenNum);


// let nums=[1,2,3,4,5];
// let output=nums.reduce((res,val)=>{
//     return res*val;
// })
// console.log(output);


// let nums=[5,9,7,6,2,8,1,3];
// let maxi=nums.reduce((res,val)=>{
//     return res > val ? res : val;
// })
// console.log(maxi);

// let marks=[90,95,75,98,100,25,35,85,89];
// let high = marks.filter((res) => {
//     return res>90;
// })
// console.log(high);


let num = prompt("Enter the number");
let array = [];
for(let i=1;i<=num;i++){
    array.push(i);
}
console.log(array);

let sum = array.reduce((res,val)=>{
    return res+val;
})
console.log(sum);

let prod=array.reduce((res,val)=>{
    return res*val;
})
console.log(prod);
