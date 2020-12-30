// console.log(firebase);
let signUp = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email.value,password.value);
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    // console.log(firstName.value, lastName.value);
    let userName = {
        First_Name : firstName.value,
        Last_Name : lastName.value
    }
    let key = firebase.database().ref('users/key').push().key;
    console.log(key);
    firebase.database().ref('users/').child(key).set(userName);

//     firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
//   .then((user) => {
//       console.log("Successfully Sign Up");
//       console.log(user);
//       swal({
//         title: "Successfully Sign Up!",
//         icon: "success",
//       });

//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage);
//     swal({
//         title: errorMessage,
//         icon: "error",
//       });
//   });

}

let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        console.log("Successfully Login");
        console.log(user);
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

// swal({
//     title: "Successfully Sign Up!",
//     icon: "success",
//   });