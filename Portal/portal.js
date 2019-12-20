  // Retrieving Data from Database
  var usersRef = firebase.database().ref('users');

  usersRef.on('value', function(snapshot) {
     
        var res = snapshot.val();
        if(res){
        var users=Object.values(res);
        document.getElementById("loader").style.display="none";
        var tableRef=document.getElementById("table");
        tableRef.innerHTML=`
        <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Blood Type</th>
        <th>Email</th>
        </tr>
        </br>
        `
        users.forEach(key => {
          
          
       tableRef.innerHTML+=`


          <tr>
          <td>${key.Name}</td>
           <td>${key.Gender}</td>
           <td>${key.Address}</td>
           <td>${key.Ph_Number}</td>
           <td style="color:red">${key.BloodType}</td>
           <td>${key.Email}</td>
          </tr>
         </br>
           `
           });
         }
        });
        // console.log(firebase.auth().currentUser);
        
       
        function SignOut(){
          firebase.auth().signOut().then(function() {
            // Sign-out successful.
            firebase.auth().onAuthStateChanged(user => {
              if(!user) {
                window.location.replace ( '../Login/Login.html'); //After successful login, user will be redirected to home.html
              }
            });
          }).catch(function(error) {
            console.log(error.message);
            alert(error);
          });
        }