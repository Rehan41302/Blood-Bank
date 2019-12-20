function signUp(name,gender,address,number,email,password,userBlood){
    console.log("signUp");
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res)=>{
        console.log(res.user.uid);
    
        //Database Filling
        var firebaseRef= firebase.database();
        firebaseRef.ref('users/'+res.user.uid).set(
            {
                Name:name,
                Email:email,
                Gender:gender,
                Address:address,
                Ph_Number:number,
                BloodType:userBlood
                
            }
        );
        console.log("New user= "+email);

       
       alert(name+" Signed Up Successfully");
       alert("Login To Access Your Account");
       document.getElementById("wait").innerHTML="";
  
     })
    .catch(function(error) {
// Handle Errors here.
console.log(error);

alert(error.message);
});
}

 function fieldsChecker(){
   var name=document.getElementById("name").value;
   var address=document.getElementById("address").value;
   var number=document.getElementById("number").value;
   var getEmail=document.getElementById("email").value;
   var getPass=document.getElementById("password").value;
   var confirmPass=document.getElementById("confirmPass").value;
   var e=document.getElementById("ddl-blood");
   var userBlood = e.options[e.selectedIndex].value;
   var gender;
   if(document.getElementById("genderMale").checked){
       gender="Male";
   }
   else gender="Female";
  

   
  
   if((!name)||(!address)||(!number)||(!getEmail)||(!getPass)){
       document.getElementById("required").innerHTML="All fields are required";
   
    }
   else if(getPass!=confirmPass){
     
      document.getElementById("confirmError").innerHTML="Passwords does not matches";
   }
   
   else{
   document.getElementById("wait").innerHTML=("Wait...");
   signUp(name,gender,address,number,getEmail,getPass,userBlood);
    }
}