// document.write("<h1> hello world</h1>" + "<br>")
// console.log('Html page')
// alert('Hi Hloo')
// document.write("hello world" + "<br>")
// document.write("hello world" + "<br>")
// document.write("hello world" + "<br>")
// document.write("hello world" + "<br>")

// document.write("<br>")

// document.write("hello world")

// document.write("<h1> hello world</h1>")



// var person;
// document.write( typeof person + "<br>")

// var person = 2
// document.write( person+ "<br>")

// const pi = 3.14
// document.write(pi)



// alert(person)

// let person = "john"
// document.write(person)

// const pi = 3.14; 
// document.write(pi)

// var number = 100
// document.write(typeof number)

// var js = true
// document.write(typeof js)

// var test = null ;
// document.write(typeof test)

// var a =10;
    // b= 20;
//    document.write(a+b)
// document.write(a-b)
// document.write(a/b)
// document.write(a*b)
// document.write(a%b)
// a++;
// document.write(a**3)
// var result = a+= 4 
// document.write(result)
// var result = a-= 4 
// document.write(result)



// var a = 20
// var b = 20
//  document.write(a==b)
// document.write(a===b)
// document.write(a!=b)
// document.write(a>b)
// document.write(a>=b)
// document.write(a<b)
// document.write(a<=b)




// for(var i=0; i<10; i++){
//     if(i===7){
//         break;
//     }
//     document.write("value of is is" + i +'<br>')
// }
// document.write("I am out now")

// var a = 20
// var b = 20
// document.write(a==10 && b==20) 
// document.write(a== 10 || b==20)
// document.write(!(b==20))

// var a=0
// if(a<0){
//     document.write("negitive number")
// }else if(a>0){
//     document.write("positive number")
// }
// else{
//     document.write("Zero")
// }

// var a = "h"

// switch(a){
//     case "A":
//         document.write("Apple")
//         break;
//     case "B"  :
//         document.write("Bat")
//         break;
//     case "c"  :
//             document.write("Cat")
//             break;  
//      default:
//         document.write("Invalid character")         
// }




// for(var i=1; i<= 5 ; i++){
//     document.write("hello"+ "<br>")
// }


// var i = 1;
// while(i<=5){
//     document.write("hello"+"<br>")
//     i++
// }

// var i = 10;
// do{
//     document.write("hello"+"<br>")
//     i++
// }while(i<=5)


// const fun =(a, b)=>{
//     // document.write("helo")
//     return a+b
// }
// const add =fun(2,5)
// document.write(add)


// for(var i=1; i<10; i++){
//     if(i===7){
//         continue;
//     }
//     document.write("the value i is" + i +"<br>")
// }
// document.write("iam out now")


// function greetings(name){
//     document.write("good morning"+ name +"<br>")
// }
// greetings("Abhi")
// greetings("Abhi")

// greetings("achu")



// function sum(a,b,c){
//     document.write(a+b+c)
// }
// sum(10,20,5)


// var person = 'Anu'
// document.write( typeof person + "<br>")

 
// var a= 10 , b=20
// document.write(a+b + "<br>")

// var js = true
// document.write(js+ "<br>" )


// var cs;
// document.write(cs + "<br>")


// var c = null;
// document.write(c + "<br>")


// var a= 10, b=20
// document.write(a + b + "<br>")
// document.write(a - b + "<br>")
// document.write(a * b + "<br>")
// document.write(a / b + "<br>")
// document.write(a % b + "<br>")


// var c = 30
// c++
// document.write(c)


// var d = 2
// document.write( d ** 2)



// var c = 30
// c++
// document.write(c + "<br>")

// var d = 30
// d--
// document.write(d + "<br>")

// var e = 3

// document.write(e ** 2 + "<br>")


// var a = 10 
// var b = 20

// var x = 10 
// var result = x += 4
// document.write(result)


// var a =1000
// var b =200
// document.write(!(b>=2000))


// var age = 2;
// var x = age >= 18 ? "Major" : "Minor";
// document.write(x, age);

// var x = (trainer = true) ? "class is here" : "there is no class";
// document.write(x);


// var x = 1;
// var y = x <= 0 ? "Negative" : "Positive";
// document.write(y);


// var marks = prompt('Enter your marks :');
// var result = (marks >= 40) ? 'pass' : 'fail';

// document.write(`You ${result} the exam.`);



// function testVar() {
//     if (true) {
//         var x = 10; 
//     }
//     console.log(x); 
// }

// testVar();
// console.log(x); // Error: x is not defined (outside function)




// function testLetConst() {
//     if (true) {
//         let y = 20; // block-scoped
//         const z = 30; // block-scoped
//         // console.log(z);
        
//     }
//     // console.log(y); // Error: y is not defined
//     // console.log(z); // Error: z is not defined
// }

// testLetConst();


// var  a = prompt('Enter your number :');
var  a = 3;

var result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
document.write(`The number is ${result}.`);
