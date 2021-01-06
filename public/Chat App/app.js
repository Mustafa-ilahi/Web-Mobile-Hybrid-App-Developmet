// console.log(firebase);
let signUp = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email.value,password.value);
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    // console.log(firstName.value, lastName.value);
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      .then((user) => {
            let userName = {
                Name : firstName.value ,
                Last_Name : lastName.value,
                key : user.user.uid
            }
            let key = user.user.uid;
            // Adding Key on Firebase
            firebase.database().ref('users/').child(key).set(userName);
            // firebase.auth().onAuthStateChanged(function(user) {
            //     if (user) {
            //         console.log(userName);
            //         console.log("key==>" + key);
            //         console.log("UID==>" + user.uid)
            //       }
            //       else {
            //         console.log("something wrent wrong")
            //       }
            //     });
                console.log("Successfully Sign Up");
                swal({
                  title: "Successfully Sign Up!",
                  icon: "success",
                }).then(function(){
                  window.location.href = 'chat.html';
              });
            
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    swal({
        title: errorMessage,
        icon: "error",
      });
  });
}

let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        console.log("Successfully Login");
        console.log(user);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("Uid===>" + user.uid);
                firebase.database().ref('users').on("child_added",function(data){
                    // console.log(data.val().key);
                    if(data.val().key == user.uid){
                      // console.log(data.val().Name);
                      // console.log(data.val().Last_Name);
                      window.location = "chat.html";
                    }
                })
            } else {
              console.log("Unable to get")
            }
          });

        swal({
            title: "Successfully Login!",
            icon: "success",
          });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      swal({
        title: errorMessage,
        icon: "error",
      });
    });
}

let chatBox = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // console.log("Uid===>" + user.uid);
        firebase.database().ref('users').on("child_added",function(data){
            // console.log(data.val().key);
            if(data.val().key == user.uid){
              // console.log(data.val().Name);
              // console.log(data.val().Last_Name);
              let main = document.getElementById("heading");
              let h1 = document.createElement("h1");
              let text = document.createTextNode("Welcome " + data.val().Name + " " +  data.val().Last_Name);
              let logOut = document.createElement("button");
              let btnText = document.createTextNode("Logout");
              logOut.setAttribute("onclick","logOut()");
              // logOut.setAttribute("class","logout")
              logOut.appendChild(btnText);
              h1.appendChild(text);
              main.appendChild(h1);
              main.appendChild(logOut).className="logout";
              let allusersHeading = document.createElement("h2");
              let allusersHeadingText = document.createTextNode("All users");
              allusersHeading.appendChild(allusersHeadingText);
              main.appendChild(allusersHeading)
              firebase.database().ref('users').on("child_added",function(data){
                if(data.val().key != user.uid){
                  console.log("Other Users " +  data.val().Name);
                  let allusers = document.getElementById("allusers");
                  let userBtn = document.createElement("button");
                  userBtn.setAttribute("onclick","senderBox(this)");
                  let users_text = document.createTextNode(data.val().Name);
                  userBtn.appendChild(users_text);
                  allusers.appendChild(userBtn).className="all_users";

                }
              });
            }
            
        })
    } else {
      console.log("No user logged in")
    }
  });
  
}

let logOut = () =>{
  firebase.auth().signOut()
  .then(function() {
    console.log("Signout Successfully");
    swal({
      title: "Successfully LogOut!",
      icon: "success",
    }).then(function(){
      window.location.href = 'index.html';
  });

  })
  .catch(function(error) {
    console.log(error);
  });
}
let senderBox = (item) => {
  firebase.database().ref('users').on("child_added",function(data){
    // console.log(data.val().Name);
    if(data.val().Name == item.innerHTML){
      console.log(data.val().Name);
      localStorage.setItem("name",item.innerHTML);
      window.location= "sender.html"
    }
  })
};

let showBox = () => {
  // console.log(localStorage.getItem("name"));
  let name = localStorage.getItem("name");
  let chatDiv = document.getElementById("main");
  let space = document.createElement("br");
  main.appendChild(space);
  let heading = document.createElement("h3");
  let text = document.createTextNode("To: " + name);
  heading.appendChild(text);
  chatDiv.appendChild(heading);
  let input = document.getElementById("input");
  let chatInput = document.createElement("input");
  chatInput.placeholder = "Write your message...";
  chatInput.setAttribute("id","msg_input");
  let sendBtn = document.createElement("button");
  let btnText = document.createTextNode("Send");
  sendBtn.appendChild(btnText);
  sendBtn.setAttribute("class","btn btn-dark");
  sendBtn.setAttribute("id","sendBtn")
  chatInput.appendChild(sendBtn);
  sendBtn.setAttribute("onclick","sendMsg()");
  document.body.appendChild(sendBtn);
  input.appendChild(chatInput);
}

let sendMsg = () => {
  let input = document.getElementById("msg_input");
  console.log(input.value);
  let chatDiv = document.getElementById("main");
  let msg = document.createElement("p");
  msg.setAttribute("id","showMsg")
  let msgText = document.createTextNode(input.value);
  msg.appendChild(msgText);
  chatDiv.appendChild(msg);
  // Check who is sending msg:
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        firebase.database().ref('users').on("child_added",function(data){
            if(data.val().key == user.uid){
              let senderName = document.createElement("li");
              let senderText = document.createTextNode(data.val().Name);
              senderName.appendChild(senderText);
              chatDiv.appendChild(senderName);
              let key = data.val().key;
              
            }
            
          })
      } else {
        console.log("No user logged in")
      }
    });
    firebase.database().ref('users').on("child_added",function(data){
      if(localStorage.getItem("name") == data.val().Name){
        // console.log(data.val());
        let key = data.val().key;
        // console.log(key)
        firebase.database().ref('users').child(key).child('message').push(input.value);
        // console.log(data.val().message);
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log(user.uid);
            console.log(data.val().key)
            firebase.database().ref('users').child(key).child('senderID').set(user.uid);
            // if(user.uid == data.val().key){
              // console.log(user.uid);
              // console.log(data.val().key);
              
            // }
            // firebase.database().ref('users').child(key).child('senderName').set(data.val().Name);
          } 
          else {
              console.log("No user logged in")
            }
          });


      }
    })
}