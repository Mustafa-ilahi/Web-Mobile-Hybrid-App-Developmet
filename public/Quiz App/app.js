function question1(){
    var q1_correctAns = document.getElementById("q1-correctAns");
    if(q1_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question1/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question1/Marks').set("0");
    }
}

function question2(){
    var q2_correctAns = document.getElementById("q2-correctAns");
    if(q2_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question2/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question2/Marks').set("0");
    }
}

function question3(){
    var q3_correctAns = document.getElementById("q3-correctAns");
    if(q3_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question3/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question3/Marks').set("0");
    }
}

function question4(){
    var q4_correctAns = document.getElementById("q4-correctAns");
    if(q4_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question4/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question4/Marks').set("0");
    }
}

function question5(){
    var q5_correctAns = document.getElementById("q5-correctAns");
    if(q5_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question5/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question5/Marks').set("0");
    } 
}

function question6(){
    var q6_correctAns = document.getElementById("q6-correctAns");
    if(q6_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question6/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question6/Marks').set("0");
    } 
}

function question7(){
    var q7_correctAns = document.getElementById("q7-correctAns");
    if(q7_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question7/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question7/Marks').set("0");
    }
}

function question8(){
    var q8_correctAns = document.getElementById("q8-correctAns");
    if(q8_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question8/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question8/Marks').set("0");
    }
}

function question9(){
    var q9_correctAns = document.getElementById("q9-correctAns");
    if(q9_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question9/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question9/Marks').set("0");
    }
}

function question10(){
    var q10_correctAns = document.getElementById("q10-correctAns");
    if(q10_correctAns.checked == true){
        // alert("Correct ans!");
        firebase.database().ref('Question10/Marks').set("10");
    }
    else{
        // alert("Wrong ans");
        firebase.database().ref('Question10/Marks').set("0");
    }
}

function showResult(){
    firebase.database().ref('Question1/Marks').once('value',function(data){
        // console.log(data.val());
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");
        document.write("<h1>" + "JavaScript Quiz 1 Result" +  "</h1>")
        if(data.val()>=0 || data.val()<=0){
            document.body.style.backgroundImage = "url('./images/bg-2.svg')";
            document.body.style.color = "white";
            document.body.style.textAlign = "center";
            document.body.style.fontSize = "25px"
            document.write(" Question 1: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write(" Question 1: " + " 0" + "marks");
            document.write("<br>");
        } 
    });
    firebase.database().ref('Question2/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write(" Question 2: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 2: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question3/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 3: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 3: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question4/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 4: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 4: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question5/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 5: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 5: " + " 0" + "marks");
            document.write("<br>");
        }      
    });
    firebase.database().ref('Question6/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 6: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 6: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question7/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 7: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 7: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question8/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 8: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 8: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question9/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 9: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 9: " + " 0" + "marks");
            document.write("<br>");
        }        
    });
    firebase.database().ref('Question10/Marks').once('value',function(data){
        // console.log(data.val());
        if(data.val()>=0 || data.val()<=0){
            document.write("Question 10: " + data.val() + "marks");
            document.write("<br>");       
        }
        else if(data.val == null){
            document.write("Question 10: " + " 0" + "marks");
            document.write("<br>");
        }       
    });
    
}