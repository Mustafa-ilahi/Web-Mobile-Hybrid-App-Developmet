// Chapter 1
// Q1
// alert("Hello World");

// Q2
// alert("Error! Please enter a valid password");

// Q3
// alert("Welcome to JS Land  \n  Happy Coding!");

// Q4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// Q5
// console.log("Hello... I can run JS through my web browser's console");

// Chapter 2
// Q1
// var userName;

// Q2
// var myName = "Mustafa Ilahi";

// Q3
// var message;
// message = "Hello World";
// alert(message);

// Q4
// var studentName = "Mustafa Ilahi";
// var age = 20;
// var courseName = "Certified Mob App Development";
// alert(studentName);
// alert(age + " years old");
// alert(courseName);

// Q5
// var dish = "PIZZA";
// alert(dish + "\n" +dish.slice(0,4) + "\n" + dish.slice(0,3) + "\n" + dish.slice(0,2) + "\n" + dish.slice(0,1));


// Q6
// var email = "mustafailahi586@gmail.com";
// alert("My email is " + email);


// Q7
// var bookName = "A Smarter Way To Learn Javascript";
// alert("I am trying to learn from the Book " + bookName);

// Q8
// document.write("Yah! I can write HTML content through JavaScript");


// Q9
// var string = "


// Chapter 3

// Q1
// var age;
// age = 20;
// alert("I am " + age + " years old");

// Q2
// var times = prompt("How many times you visit webpage?");
// alert("You have visited this site " + times + " times");

// Q3
// var birthYear = 2000;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");


// Q4
// var visitorName = prompt("Enter Your Name");
// var productTitle = prompt("Enter Product Title");
// var quantity = prompt("How many products you wants to order");
// document.write("<b>" + visitorName  + "</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing Store");

// Chapter 4
//Skip

// Chapter 5

// Q1
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum)


// Q2
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var sub = num1 - num2;
// var multiply = num1 * num2;
// var divide  = num1 / num2;
// var modulo = num1 % num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br />");
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br />");
// document.write("Division of " + num1 + " and " + num2 + " is " + divide + "<br />");
// document.write("Modulus of " + num1 + " and " + num2 + " is " + modulo + "<br />");

// Q3
// var value = "";
// document.write("Value after variable declaration is:" + value + "<br />");
// value = 5;
// document.write("Initial value is:" + value + "<br />");
// value = 6;
// document.write("Value after increment is:" + value + "<br />");
// value = value + 7;
// document.write("Value after addition is:" + value + "<br />");
// value = value - 1;
// document.write("Value after decrement is:" + value + "<br />");
// value = value % 3;
// document.write("The remainder is:" + value + "<br />");

// Q4
// var ticket = 600;
// var quantity = prompt("How many tickets you wanna buy");
// var cost = ticket * quantity;
// document.write("Total cost to buy " + quantity + " tickets to a movie is " + cost + "PKR");

// Q5
// var value = prompt("Enter value to print table");
// for(var i=1; i<=10; i++){
//     document.write(value + " * " + i + " = " + value*i +"<br />");
// }

// Q6
// var celsius = +prompt("Enter Celsius");
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "<br />");
// var fahrenheitValue = +prompt("Enter Fahrenheit");
// var fahrenheitInCelsius = (fahrenheitValue - 32) * 5/9;
// document.write(fahrenheitValue + "°F is " + fahrenheitInCelsius);

// Q7
// var item1 = 650;
// var item2 = 100;
// var shipmentCharges = 100;
// var quantityItem1  = +prompt("Enter quantity of item 1");
// var quantityItem2  = +prompt("Enter quantity of item 2");
// var resultItem1 = item1 * quantityItem1;
// var resultItem2 = item2 * quantityItem2;
// var result = resultItem1 + resultItem2 + shipmentCharges;
// document.write("<h1>" + "Shopping Cart" + "</h1>");
// document.write("Price of Item 1 is " + item1 + "<br />");
// document.write("Quantity of Item 1 is " + quantityItem1 + "<br />");
// document.write("Price of Item 2 is " + item2 + "<br />");
// document.write("Quantity of Item 2 is " + quantityItem2 + "<br />");
// document.write("Shipment Charges " + shipmentCharges + "<br />" + "<br />" );
// document.write("Total cost of your order is " + result);


// Q8
// var obtainMarks = prompt("Enter Obtain Marks");
// var totalMarks =  prompt("Enter Total Marks");
// var percentage = Math.round(obtainMarks / totalMarks * 100);
// document.write("<h1>" + "Mark Sheet" + "</h1>");
// document.write("Total Marks: " + totalMarks + "<br />");
// document.write("Obtain Marks: " + obtainMarks + "<br />");
// document.write("Percentage: " + percentage + "%");

// Q9
// var dollarsQuantity = 10;
// var riyalsQuantity = 25;
// var dollarCost = 104.80;
// var riyalCost = 28;
// var exchangeRates = dollarsQuantity * dollarCost + riyalsQuantity * riyalCost;
// document.write("<h1>" + "Currency in PKR" + "</h1>");
// document.write("Total Currency in PKR: " + exchangeRates);

// Q10
// var num = 10;
// var result = ((num + 5)* 10) / 2;
// alert(result);


//Q11
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = prompt("Enter Birth Year");
// var age = currentYear - birthYear;
// document.write("<h1>" + "Age Calculator" + "</h1>");
// document.write("Current Year: " + currentYear + "<br />");
// document.write("Birth Year: " + birthYear + "<br />");
// document.write("Your Age is: " + age + "<br />");


//Q12
// var radius = prompt("Enter radius of a circle");
// var circleCircumference = 2 * 3.142 * radius;
// var circleArea = 3.142 * radius**2;
// document.write("<h1>" + "The Geometrizer" + "</h1>");
// document.write("Radius of a circle: " + radius + "<br />");
// document.write("The circumference is: " + circleCircumference + "<br />");
// document.write("The area is: " + circleArea);


// Q13
// var favouriteSnacks = prompt("Enter your favourite snacks");
// var currentAge = prompt("Enter your age");
// var estimatedAge = prompt("Enter estimated age");
// var amount = prompt("Amount of snack per day");
// var totalEat = (estimatedAge - currentAge) * amount;
// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
// document.write("Favourite Snack: " + favouriteSnacks + "<br />");
// document.write("Current Age: " + currentAge + "<br />");
// document.write("Estimated Age: " + estimatedAge + "<br />");
// document.write("Amount of snacks per day: " + amount + "<br />");
// document.write("You will need " + totalEat + favouriteSnacks + " to last you until the ripe old age of " + estimatedAge);


// Chapter 6-9

// Q1
// var a = 10;
// document.write("<h3>" + "Result" + "</h3>");
// document.write("The value of a is:" + a + "<br />");
// document.write("..................................." + "<br />" + "<br />");
// document.write("The value of ++a is:" + ++a + "<br />");
// document.write("Now the value of a is:" + a + "<br />" + "<br />");
// document.write("The value of a++ is:" + a++ + "<br />");
// document.write("Now the value of a is:" + a + "<br />" + "<br />");
// document.write("The value of --a is:" + --a + "<br />");
// document.write("Now the value of a is:" + a + "<br />" + "<br />");
// document.write("The value of a-- is:" + a-- + "<br />");
// document.write("Now the value of a is:" + a);


// Q2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--; //3
// --a; //1
// --a - --b; // 1 - 0
// --a - --b + ++b; // 1 - 0 + 1
// --a - --b + ++b + b--; // 1 - 0 + 1 + 1


// Q3
// var userName = prompt("Enter your name");
// alert("Welcome " + userName);


// Q5
// var num = +prompt("Enter number to print table",5);
// for(var i = 1; i<=10; i++){
//     document.write(num + " * " + i + " = " + num*i + "<br/>");
// }

// OR

// var num = +prompt("Enter number to print table");
// if(num != ""){
//     for(var i = 1; i<=10; i++){
//         document.write(num + " * " + i + " = " + num*i + "<br/>");
//     }
// }
// else{
//     num=5;
//     for(var i = 1; i<=10; i++){
//         document.write(num + " * " + i + " = " + num*i + "<br/>");
//     }
// }


// // Q6
// var totalMarks = 100;
// var subj1 = prompt("Enter subject 1");
// var subj2 = prompt("Enter subject 2");
// var subj3 = prompt("Enter subject 3");
// var obtainMarksSubj1 = +prompt("Enter obtained marks of subject 1");
// var obtainMarksSubj2 = +prompt("Enter obtained marks of subject 2");
// var obtainMarksSubj3 = +prompt("Enter obtained marks of subject 3");
// var percentageSubj1 = Math.round(obtainMarksSubj1/totalMarks*100);
// var percentageSubj2 = Math.round(obtainMarksSubj2/totalMarks*100);
// var percentageSubj3 = Math.round(obtainMarksSubj3/totalMarks*100);
// var totalPercentage = Math.round((percentageSubj1 + percentageSubj2 + percentageSubj3) /3);
// var totalObtainMarks = obtainMarksSubj1+ obtainMarksSubj2+ obtainMarksSubj3;
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>" + " Subject" + "</th>");
// document.write("<th>" + " Total Marks" + "</th>");
// document.write("<th>" + " Obtained Marks" + "</th>");
// document.write("<th>" + "Percentage" + "</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subj1 + "</td>");
// document.write("<td>" + totalMarks  + "</td>");
// document.write("<td>" + obtainMarksSubj1  + "</td>");
// document.write("<td>" + percentageSubj1 + "%" + "</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subj2 + "</td>")
// document.write("<td>" + totalMarks  + "</td>");
// document.write("<td>" + obtainMarksSubj2  + "</td>");
// document.write("<td>" + percentageSubj2 + "%"  + "</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subj3 + "</td>")
// document.write("<td>" + totalMarks  + "</td>");
// document.write("<td>" + obtainMarksSubj3  + "</td>");
// document.write("<td>" + percentageSubj3 + "%" + "</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + "       " + "</td>");
// document.write("<td>" + "<b>" + totalMarks*3 + "</b>" + "</td>");
// document.write("<td>" + "<b>" + totalObtainMarks + "</b>" + "</td>");
// document.write("<td>" + "<b>" + totalPercentage + "</b>" + "</td>");
// document.write("</tr>");
// document.write("</table>");


// Chapter 9-11
// Q1
// var cityName = prompt("Enter City").toLowerCase();
// if(cityName=='karachi'){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome " + cityName);
// }


// Q2
// var gender = prompt("Enter gender").toLowerCase();
// if(gender == 'male'){
//     alert("Good Morning Sir")
// }
// else if(gender == 'female'){
//     alert("Good Morning Ma'am");
// }
// else{
//     alert("Enter valid gender");
// }


// Q3
// var userInput = prompt("Enter color of road traffic signal").toLowerCase();
// if(userInput == 'red'){
//     alert("Must stop");
// }
// else if(userInput == 'yellow'){
//     alert("Ready to move");
// }
// else if(userInput == 'green'){
//     alert("Move now");
// }
// else{
//     alert("Enter valid color");
// }


// Q4
// var fuel = prompt("Enter Fuel");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill the fuel");
// }


//Q6
// var totalMarks = +prompt("Enter Total Marks");
// var obtainMarks = +prompt("Enter Obtain Marks");
// var percentage = Math.round((obtainMarks/totalMarks) * 100);
// document.write("<h1>" + "Marksheet" + "</h1>")
// if(percentage>=80){
//     document.write("Total Marks: " + totalMarks + "<br />");
//     document.write("Obtain Marks: " + obtainMarks + "<br />");
//     document.write("Percentage:" + percentage + "%" + "<br />");
//     document.write("Grade: A-One" + "<br />");
//     document.write("Remarks: Excellent");
// }
// else if(percentage>=70){
//     document.write("Total Marks: " + totalMarks + "<br />");
//     document.write("Obtain Marks: " + obtainMarks + "<br />");
//     document.write("Percentage:" + percentage + "%" + "<br />");
//     document.write("Grade: A" + "<br />");
//     document.write("Remarks: Good");
// }
// else if(percentage>=60){
//     document.write("Total Marks: " + totalMarks + "<br />");
//     document.write("Obtain Marks: " + obtainMarks + "<br />");
//     document.write("Percentage:" + percentage + "%" + "<br />");
//     document.write("Grade: B" + "<br />");
//     document.write("Remarks: You need to improve");
// }
// else if(percentage<60){
//     document.write("Total Marks: " + totalMarks + "<br />");
//     document.write("Obtain Marks: " + obtainMarks + "<br />");
//     document.write("Percentage:" + percentage + "%" + "<br />");
//     document.write("Grade: Fail" + "<br />");
//     document.write("Remarks: Sorry");
// }
// else{
//     alert("Enter valid numbers");
// }


// Q7
// var secretNum = 7;
// var userInput = +prompt("Guess the Secret Number from(1-10)");
// if(userInput == secretNum){
//     alert("Bingo! Correct answer");
// }
// else if(userInput+1 == secretNum){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Oops Try Again!");
// }


// Q8
// var num = +prompt("Enter number to check it is divisible by 3 or not");
// if(num%3==0){
//     alert(num + " is completely divisible by 3");
// }
// else{
//     alert(num + " isn't completely divisible by 3");
// }


// Q9
// var num = +prompt("Enter number to check it is even or odd");
// if(num%2==0){
//     alert(num + " is even number");
// }
// else{
//     alert(num + " is odd number");
// }


// Q10
// var temperature = prompt("Enter Temperature");
// if(temperature>40){
//     alert("It is too hot outside");
// }
// else if(temperature>30){
//     alert("The Weather today is Normal");
// }
// else if(temperature>20){
//     alert("Today’s Weather is cool");
// }
// else if(temperature>10){
//     alert("OMG! Today’s weather is so Cool");
// }


// Q11
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter Operator (+,-,*,/,%)");
// if(operator == "+"){
//     alert(num1 + num2);
// }
// else if(operator == "-"){
//     alert(num1 - num2);
// }
// else if(operator == "*"){
//     alert(num1 * num2);
// }
// else if(operator == "/"){
//     alert(num1 / num2);
// }
// else if(operator == "%"){
//     alert(num1 % num2);
// }
// else{
//     alert("Enter valid operator");
// }


// Chapter 12-13

// Q1
// var userInput = prompt("Enter a character number or string");
// console.log(userInput.charCodeAt(0));

// if(userInput.charCodeAt(0)>=48 && userInput.charCodeAt(0)<=57){
//     alert(userInput + " is an integer");
// }
// else if(userInput.charCodeAt(0)>=65 && userInput.charCodeAt(0)<=90){
//     alert(userInput + " is string in uppercase");
// }
// else if(userInput.charCodeAt(0)>=97 && userInput.charCodeAt(0)<=122){
//     alert(userInput + " is string in lowercase");
// }
// else{
//     alert("Enter valid character or number");
// }


// Q2
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// if(num1>num2){
//     alert(num1 + " is greater than " + num2);
// }
// else if(num1 == num2){
//     alert(num1 + " is equal to " + num2);
// }
// else{
//     alert(num2 + " is greater than " + num1);
// }


// Q3
// var num = prompt("Enter number");
// if(num>0){
//     alert(num + " is positive number");
// }
// else if(num<0){
//     alert(num + " is negative number");
// }
// else if(num == 0){
//     alert(num + " num is zero");
// }


// Q4
var userInput = prompt("Enter a character").toLowerCase();
if(userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u"){
    alert(userInput + " True it's vowel");
}
else{
    alert(userInput + " False it's not vowel");
}