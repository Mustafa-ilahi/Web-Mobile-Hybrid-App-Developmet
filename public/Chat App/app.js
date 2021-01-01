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
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log(userName);
                    console.log("key==>" + key);
                    console.log("UID==>" + user.uid)
                    
                } else {
                  console.log("nhh")
                }
              });
            console.log("Successfully Sign Up");
            swal({
                title: "Successfully Sign Up!",
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
                    console.log(data.val());
                })
            } else {
              console.log("nhh")
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

// let namePrint = () => {
//     firebase.database().ref('users').on("child_added",function(data){
//         console.log(data.val());
//         let main = document.getElementById("username");
//         let li = document.createElement("list");
//         let text = document.createTextNode("Mera naam");
//         li.appendChild(text);
//         main.appendChild(li);
//     })
// }
