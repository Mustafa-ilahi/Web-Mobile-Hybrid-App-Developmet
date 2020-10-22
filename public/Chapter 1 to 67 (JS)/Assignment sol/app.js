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
// var userInput = prompt("Enter a character").toLowerCase();
// if(userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u"){
//     alert(userInput + " True it's vowel");
// }
// else{
//     alert(userInput + " False it's not vowel");
// }


// Q5
// var correctPass = prompt(" Please enter your password");
// var confirmPass = prompt("Enter again password to verify");

// if(correctPass == confirmPass){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password")
// }


// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// }
// else{
//     alert("Good evening");
// }


// Q7
// var userInput = +prompt("Enter time in 24 hours Clock format");
// if(userInput >= 0000 && userInput < 1200){
//     alert("Good Morning");
// }
// else if(userInput >=1200 && userInput < 1700){
//     alert("Good afternoon");
// }
// else if(userInput >= 1700 && userInput < 2100){
//     alert("Good evening");
// }
// else if(userInput >= 2100 && userInput <= 2359){
//     alert("Good night");
// }


// Chapter 14-16
// Q1
// var array = [];

// Q2
// var myArray = new Array();
// myArray[0] = "Mustafa";
// console.log(myArray);


// Q3
// var stringArray = ["Mustafa", "Jazzy", "Venom"];


// Q4
// var numArray = [1,2,3,4,5];


// Q5
// var booleanArray = [true, false];


// Q6
// var mixArray = ["Mustafa", "Jazzy",1,2,3, true, false];
// console.log(mixArray);


// Q7
// var qualifications = [ "SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>" + "Qualifications: " + "</h1>")
// for(var i=0; i<qualifications.length; i++){
//     document.write(i+1 + " )" + qualifications[i] + "<br />");
// }


// Q8
// var studentNames = ["Mustafa" , "Rafay" , "Hammad"];
// var obtainMarks = [320, 230,480];
// var totalMarks = 500;
// for(var i=0; i<studentNames.length; i++){
//     console.log(studentNames[i]);
//     for(var j=0; j<obtainMarks.length; j++){
//         var percentage = (obtainMarks[i]/500)*100;
//         document.write("Score of " + studentNames[i] + " is " + obtainMarks[i] + ". Percentage: " + percentage + "%" + "</br>");
//         break;
//     }
// }


// Q9
// var myArray = ["red","green","blue"];
// document.write("Orignal Array: " + myArray + "<br/>");
// var userBegColor = prompt("Enter color to add in the beginning of the array");
// document.write(myArray.unshift(userBegColor)," Add Beginning of an Array: " + myArray + "<br/>");
// var userEndColor = prompt("Enter color to add in the end of the array");
// document.write(myArray.push(userEndColor)," Add Ending of an Array: " + myArray + "<br/>");
// var oneColor = prompt("Add one color in the begining of an Array");
// document.write(myArray.unshift(oneColor)," Add Beginning of an Array: " + myArray + "<br/>");
// var twoColor = prompt("Add one more color in the begining of an Array");
// document.write(myArray.unshift(twoColor)," Add Beginning of an Array: " + myArray + "<br/>");
// document.write(myArray.shift() + " Delete first element of an Array: " + myArray + "<br/>");
// var indexNumInsert = +prompt("Enter index num for inserting");
// var colorName = prompt("Enter color name");
// document.write(myArray.splice(indexNumInsert,0,colorName) + " Updated: " + myArray + "<br/>");
// var indexNumDelete = +prompt("Enter index num for delete");
// var elements = +prompt("Enter elements how many you want to remove");
// document.write(myArray.splice(indexNumDelete,elements) + " Deleted: " + myArray + "<br/>")


// Q10
// var array = [320,230,480,120];
// document.write("Scores of Students: " + array + "<br/>");
// document.write("Order Scores of Students: " + array.sort());


// Q11
// var city = ["Karachi","Lahore","Islamabad", "Quetta","Peshawar"];
// document.write("Cities List:" + "<br/>" + city + "<br/>")
// var selectedCities = city.slice(2,4);
// document.write("Selected cities list: " + "<br/>" + selectedCities);


// Q12
// var array =  ["This" , " is ", " my ", " cat"];
// document.write("Array: " + array + "<br/>");
// var string = array.join(" ");
// document.write("String: " + string);



//Q13
// var devices = ["keyboard","mouse","printer","monitor"];
// document.write("Devices: " + "<br/>" + devices + "<br/>")
// for(var i=0; i<devices.length; i++){
//     document.write("Out: "  + "<br/>" + devices[i] + "<br/>");
// } 


// Q14
// var devices = ["keyboard","mouse","printer","monitor"];
// document.write("Devices: " + "<br/>" + devices + "<br/>")
// for(var i=devices.length-1; i>=0; i--){
//     document.write("Out: "  + "<br/>" + devices[i] + "<br/>");
// } 


// Q15
// var array = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");
// for(var i=0; i<array.length; i++){
//     document.write("<option>" + array[i] + "</br>" + "</option>");
// }
// document.write("</select>");



// Chapter 17-20

// Q1
// var array = [[1,2],[2,3],[3,4]];


//Q2
// var array = [[0,1,2,3], [1,0,1,2],[2,1,0,1]];
// for(var i=0; i<array.length; i++){
//     document.write(array[i].join(" ") + "<br/>");
// } 


// Q3
// for(var i=1; i<=10; i++){
//     document.write(i + "<br/>");
// }


// Q4
// var tableNum = +prompt("Enter number to print table");
// var length = +prompt("Enter length of table");
// for(var i=1; i<=length; i++){
//     document.write(tableNum + " * " +  i + " = " + tableNum * i  + "<br/>");
// }


// Q5
// var fruit = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0; i<fruit.length; i++){
//     document.write(fruit[i] + "<br/>");
// }
// for(var j=0; j<fruit.length; j++){
//     document.write("Element at index " + fruit.indexOf(fruit[j]) +  " " + fruit[j] + "<br/>");
// }


// Q6
// a COUNTING
// document.write("<h3>" + "Counting:" + "</h3>");
// for(var i=1; i<16; i++){
//     document.write(i + ",");
// }

// b REVERSE COUNTING
// document.write("<h3>" + "Reverse Counting:" + "</h3>");
// for(var i=10; i>0; i--){
//     document.write(i + ",");
// }

// c EVEN
// document.write("<h3>" + "Even:" + "</h3>");
// for(var i=0; i<21; i++){
//     if(i%2 == 0){
//         document.write(i + ",");
//     }
// }


// d ODD
// document.write("<h3>" + "Odd:" + "</h3>");
// for(var i=0; i<21; i++){
//     if(i%2 != 0){
//         document.write(i + ",");
//     }
// }


// e SERIES
// document.write("<h3>" + "Series:" + "</h3>");
// for(var i=2; i<21; i++){
//     if(i%2 == 0){
//         document.write(i + "k ,")
//     }
// }


// Q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Jazzy Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var match = "no";
// for(var i=0; i<A.length; i++){
//     if(userInput === A[i]){
//         match = "yes" 
//         document.write(userInput + " is <b> available </b> at index " + A.indexOf(A[i]) + " in our bakery");
//             break;
//     }
// }
// if(match === "no"){
//     document.write("We are sorry. " + userInput + "<b> is not available </b> in our bakery");   
// }


// Q8
// var A =  [24, 53, 78, 91, 12];
// document.write("Array items: " + A + "<br/>");
// document.write("The largest number is " + Math.max(...A));  


// Q9
// var A =  [24, 53, 78, 91, 12];
// document.write("Array items: " + A + "<br/>");
// document.write("The smallest number is " + Math.min(...A));  


// Q10
// for(var i=5; i<=100; i++){
//     if(i%5 == 0){
//         document.write(i + ",");
//     }
// }


// Chapter 21-25

// Q1   
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// alert("Welcome...! " + firstName + " " + lastName);


// Q2
// var mobModel = prompt("Enter your favourite mobile phone model");
// document.write("My favourite phone is: " + mobModel + "<br/>");
// document.write("Length of string: " +mobModel.length)



// Q3
// var string = prompt("Enter String");
// document.write("String: " + string + "<br/>");
// document.write("Index of 'n': " + string.indexOf('n'));


// Q4
// var string = "Hello World"
// document.write("String: " + string + "<br/>");
// document.write("Index of 'l': " + string.lastIndexOf("l"));



// Q5
// var string = "Pakistani";
// document.write(string + "<br/>");
// document.write("Character at index 3: " + string.charAt(3));


// Q6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// alert("Welcome...! " + fullName);


// Q7
// var word = "Hyderabad";
// var newWord = word.replace("Hyder","Islam");
// document.write("City: " + word + "<br/>");
// document.write("After Replacement: " + newWord);



// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace("and","&");
// var updatedMessage = newMessage.replace("and","&")
// document.write("Orignal Message: " + message + "<br/>");
// document.write("After Replacement: " + updatedMessage);


// Q9
// var string = "472";
// document.write("Value: " + string + "<br/>");
// document.write("Type: " + typeof(string) + "<br/>");
// var num = parseInt(string);
// document.write("Value: " + num + "<br/>");
// document.write("Type: " + typeof(num));


// Q10
// var userInput = prompt("Enter string to convert into capital letter");
// document.write("Userinput: " + userInput + "<br/>");
// document.write("Upper case: " + userInput.toUpperCase());



// Q11
// var userInput = prompt("Enter string to convert into Title Case");
// document.write("Userinput: " + userInput + "<br/>");
// var titleCase = userInput.charAt(0).toUpperCase();
// var remainingStr = userInput.slice(1);
// document.write("Title case: " + titleCase + remainingStr);



// Q12
// var num = 35.36;
// document.write("Number: " + num + "<br/>");
// str = num.toString();
// var result = str.replace(".","");
// document.write("Result: " + result)


// Q13
// var userName = prompt("Enter username");
// if(userName.includes("!") || userName.includes(",") || userName.includes(".") || userName.includes("@")){
//     alert("Please Enter a valid username");
// }
// else{
//     alert("it's valid name");
// }



// Q14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Jazzy Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var match = "no";
// for(var i=0; i<A.length; i++){
//     if(userInput === A[i]){
//         match = "yes" 
//         document.write(userInput + " is <b> available </b> at index " + A.indexOf(A[i]) + " in our bakery");
//             break;
//     }
// }
// if(match === "no"){
//     document.write("We are sorry. " + userInput + "<b> is not available </b> in our bakery");   
// }



// Q15
// var userInput = prompt("Enter Password");
// document.write("Entered Password: " + userInput + "<br/>");
// if(userInput.charCodeAt(0)>=48 && userInput.charCodeAt(0)<=57){
//     document.write("Password can't be starts with number" + "<br/>");
//     document.write("Please enter a valid password")
// }
// else if(userInput.length<=6){
//       alert("Invalid length");
//     }
// else if(userInput.includes("a") || userInput.includes("b") || userInput.includes("c")  || userInput.includes("d") || userInput.includes("e") || userInput.includes("f") || userInput.includes("g") || userInput.includes("h") || userInput.includes("i") || userInput.includes("j") || userInput.includes("k") || userInput.includes("b")|| userInput.includes("l") || userInput.includes("m") || userInput.includes("n") || userInput.includes("o") || userInput.includes("p") || userInput.includes("q") || userInput.includes("r") || userInput.includes("s") || userInput.includes("t") || userInput.includes("u") || userInput.includes("v") || userInput.includes("w") || userInput.includes("x") || userInput.includes("y") || userInput.includes("z") || userInput.includes("A")){
//     if(userInput.includes(1) || userInput.includes(2) || userInput.includes(3) || userInput.includes(4) || userInput.includes(5)|| userInput.includes(6) || userInput.includes(7) || userInput.includes(8) || userInput.includes(9) || userInput.includes(0)){
//         alert("Valid Password");
//     }
//     else{
//         alert("Password must contain alphabets and numbers");
//     }
// }





// Q16
// var university = "University of Karachi";
// for(var i=0; i<university.length; i++){
//     document.write(university[i] + "<br/>")
// }



// Q17
// var userInput = prompt("Enter string");
// document.write("User input: " + userInput + "<br/>");
// document.write("Last character of input: " + userInput.charAt(userInput.length-1));



// 