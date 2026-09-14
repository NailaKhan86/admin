

function userregister(){
    // alert('sds')

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email == "" || password == ""){
        alert('input fill') 
    } else{

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert('user sucessfully')
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
    // ..
  });
    }
}


