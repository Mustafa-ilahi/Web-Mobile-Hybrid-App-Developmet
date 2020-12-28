let signUp = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    // console.log(email.value);
    // console.log(password.value);

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((user) => {
    console.log("successfully SignUp");
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(" " + errorMessage);
  });

}
let logIn = () => {
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");
    // console.log(email.value , password.value);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        console.log("successfully login");
        console.log(user)
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(" " + errorMessage);
    });

}
 
