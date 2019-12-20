  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDwLus_WFjwRiKM7UB7Bh4XLRIDOwxBgwY",
    authDomain: "bloodbank-1231.firebaseapp.com",
    databaseURL: "https://bloodbank-1231.firebaseio.com",
    projectId: "bloodbank-1231",
    storageBucket: "bloodbank-1231.appspot.com",
    messagingSenderId: "245595001316"
  };
  firebase.initializeApp(config);
  //Sign In Setup...
  function SignValue(){
      console.log("SignValue")
    var userEmail=document.getElementById("email").value;
    var userPass=document.getElementById("password").value;
    if(userEmail&&userPass){
      document.getElementById("wait").innerHTML="Wait..."
      signin(userEmail,userPass);}
    else
       document.getElementById("loginError").innerHTML="*<b>Input both fields</b>";
    }
       function signin(email,password){
           firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res)=>{
                
              //Handle Account Status
              firebase.auth().onAuthStateChanged(user => {
                if(user) {
                  window.location = '../Portal/portal.html'; //After successful login, user will be redirected to home.html
                // console.log(user.uid);
                
                }
              });
              } )
           .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      document.getElementById("loginError").innerHTML="*"+errorMessage;
      // ...
    });
        
  }
  