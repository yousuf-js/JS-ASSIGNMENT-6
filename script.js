// CHAPTER 31-34

// Q1

// var datetime = new Date()

// document.write(datetime);

// Q2

// var now  = new Date().toString().slice(4,7);

// alert( "currentMonth: " + now);

// Q3

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var today = days[now.getDay()];

// alert("Today is: " + today);

// Q4


// var now = new Date();
// var today = now.getDay();

// if (today === 0 || today === 6) {
//   alert("It's Fun day");
// } else {
//   alert("Chalo bhai kaam ka din hai");
// }

// Q5

// var current = new Date().getDate();

// if(current <=15)
// {
//     alert("First Fifteen Days of the Month")
// }
// else
// {
//     alert("Last Fifteen Days of the Month")
// }

// Q6

// var now  = new Date()
// var millis = now.getTime()
// var min = now / (1000 * 60*60);

// document.write("currentDate: " + now + " <br>" +"Milliseconds: "+ millis + "<br>" +"Minutes: "+ min);

// Q7

// var AMorPM = new Date().getHours()

// if(AMorPM < 12 ){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

// Q8

// var laterDate = new Date("December , 31 2020");
// document.write("Later Date: " + laterDate);

// Q9

// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();
// var diffTime = today.getTime() - ramadanStart.getTime();
// var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// alert(diffDays + " days have passed since 1st Ramadan, 2015");

// Q10

// var referenceDate = new Date();
// var beginning2015 = new Date("Jan 1, 2015");
// var diffTime = referenceDate.getTime() - beginning2015.getTime();
// var diffSeconds = Math.floor(diffTime / 1000);

// document.write("On reference date: " + referenceDate + "<br>");
// document.write(diffSeconds + " seconds had passed since beginning of 2015");

// Q11

// var currentDate = new Date();

// document.write("Current date: " + currentDate + "<br>");

// var currentHours = currentDate.getHours();

// document.write("Current hours: " + currentHours + "<br>");

// currentDate.setHours(currentHours - 1);

// document.write("1 hour Ago: " + currentDate);   

// Q12

// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("100 years back it was: " + currentDate);

// Q13

// var age = +prompt("Your age ?");
// var now = new Date().getFullYear()
// var ageCalc = now - age

// document.write("Your Age is: "+age +"<br>","Your Birth Year is: "+ageCalc);

// Q14


// var dated = new Date();
// var month = dated.getMonth();
// var ConsumerName = "ABC Customer"
// var unitNum = 410;
// var chargesPerUnit = 16;
// var netAmount = unitNum * chargesPerUnit;
// var lateCharges = 350;
// var grossAmount = netAmount + lateCharges;
// document.write("<b>K - ELECTRIC BILL </b> <br />   Customer Name : "+ConsumerName ,"<br> Month : "+month ,"<br>   Numbers of units : "+unitNum ,"<br>"
//                 ,"Chages per unit: "+chargesPerUnit ,"<br> <br>"
//                 ,"Net Amount : "+("With in due Date: ") ,netAmount ,"<br>"
//                 ,"Late Charges : "+lateCharges ,"<br>"
//                 ,"Groos Amount : " +grossAmount)



// CHAPTER 35-38

// Q1

// function Current()
// {
//     var date = new Date();
//     document.write(date);
// }

// Current();

// Q2

// function greetings(name1,name2)
// {
//     alert(name1 + " "  + name2);

// }

// var Firstinput = prompt("Enter your first Name");
// var Secondinput = prompt("Enter your Last Name");
// var Fullinput=Firstinput+" "+Secondinput;

// greetings("greetings and welcome to",Fullinput);


// Q3


// function Sum(num1,num2)
// {
//     var res = num1 + num2;

//     return res;

// }

// var Firstinput = +prompt("Enter first Number");
// var Secondinput = +prompt("Enter Second Number");
// var add = Sum(Firstinput,Secondinput);

// alert(add);

// Q4


// function calc(num1 , opt , num2 )
// {
//         if(opt === "+")
//         {
//             return num1 + num2 
//         }
//         else if(opt === "-")
//         {
//             return num1  - num2 
//         }
//         else if(opt === "*")
//         {
//             return num1  * num2 
//         }
//         else if(opt === "/")
//         {
//             return num1  / num2 
//         }
//         else
//         {
//             return "Enter Correct operator"
//         }
// }    
// var num1 = +(prompt("enter number 1"));
// var opt = prompt("enter opt");
// var num2 = +(prompt("enter number 2"));

// var add = calc(num1 , opt , num2);
// document.write("Number 1: "+num1 ,"<br>", "Operator "+opt ,"<br>" ,"Numeber 2: "+num2, "<br> Calculation : "+add );

// Q5

// function Square(num1)
// {
//     var square = num1 * num1;

//     return square;
// }

// var num1 = +prompt("Enter Square value");
// var res = Square(num1);

// alert(res);

// Q6


// function factorial(num)
//  {
//      var sum = 1;
//     for(var i = num ; i>= 1 ; i-- )
//     {
//             sum = sum * i
//     } 
//         return sum
// }

// var funValue = factorial(5);

// document.write("Factorial Value: " + " " + funValue);


// Q7


// function Counting(numOne,numTwo)
// {
//     for(var i = numOne;i<=numTwo;i++)
//     {
//         document.write(`<br> ${i} <br>`)
//     }

// }

// var startPoint = +prompt("Enter Starting Point");

// var EndPoint = +prompt("Enter Ending Point");

// Counting(startPoint,EndPoint)


// Q8


// function Hypotenuse(val1,val2)
// {   
//     return Math.sqrt(Math.pow(val1,2) + Math.pow(val2,2));

// }


// var base = +prompt("Enter base value");

// var perpendicular = +prompt("Enter perpendicular value");

// var result = Hypotenuse(base,perpendicular);

// document.write(`BASE: ${base} <br> PERPENDICULAR: ${perpendicular} <br> HYPOTENUSE: ${result}`);


// Q9


// function Rectangle(val1,val2)
// {   
//     var Area = val1 * val2;

//     return Area;

// }

// var width = +prompt("Enter Width Value");

// var height = +prompt("Enter height Value");

// var AreaOfRectangle = Rectangle(width,height);

// document.write(`Area of Rectangle: ${AreaOfRectangle}`);


// Q10


// function pali(str){
//     var re = /[\W]/g;
//     var lowerstr = str.toLowerCase().replace(re,"");
//     var reversestr = lowerstr.split("").reverse().join("");
//     return reversestr === lowerstr

// }   
// var word=prompt("enter word");
// document.write(pali(word));


// Q11


// function Correct(para)
// {
//     var word = para.split(" ");

//     var arr1 = [];

//     for(var i = 0; i < word.length;i++)
//     {
//         arr1.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
//     }
//     return arr1.join(" ")

// }

// var line = prompt("Enter any line");

// document.write(Correct(line));


// Q12


// function length(letter)
// {

//     var word = letter.split(" ");

//     var arr = word[0];

//     for(var  i = 0 ; i<word.length ; i++)
//     {
//         if(arr.length < word[i].length)
//         {
//                 arr = word[i]
//         }
//     }

//     return arr
// }
// var words=prompt("enter few words/sentence");

// document.write(length(words))


// Q13

// function letterCount(str , letter){
//     var count = 0;
//     for(var i = 0 ; i < str.length ; i++){
//         if(str.charAt(i) == letter){
//             count++
//         }
//     }


//     return count
// }
// var Userstring = prompt("Enter any String Word")
// var userChar = prompt("Enter any Word Character")
// var result = letterCount(Userstring ,userChar)
// document.write(`User Argument : ${Userstring}
//                 <br> User Letter : ${userChar} <br>
//                 word count: ${result}`);

// Q14

// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;

//   document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//   var area = Math.PI * radius * radius;

//   document.write("The area is " + area.toFixed(2));
// }
// calcCircumference(5);
// calcArea(5);

// events ki class li nhi thi isliye ate nhi itne propelry