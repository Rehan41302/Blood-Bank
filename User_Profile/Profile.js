        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log(user.uid);
             
             var uid=user.uid;
          
          //else alert(`User= ${currentId}`)
          
         
          var currentUserRef=firebase.database().ref('users/'+uid);
           currentUserRef.on('value', function(snap) {
       
            var res = snap.val();
         document.getElementById("userData").innerHTML="Please Wait...";

            if(res){
            
            var userObj=res;
            document.getElementById("userData").innerHTML=`
            
            <tr>
            <th>Name: </th><td>       ${userObj.Name}</td>
            </tr>
            <tr>
            <th>Email: </th><td>       ${userObj.Email}</td>
            </tr>
            <tr>
            <th>Gender: </th><td>       ${userObj.Gender}</td>
            </tr>
            <tr>
            <th>Address: </th><td>       ${userObj.Address}</td>
            </tr>
            <tr>
            <th>Phone: </th><td>       ${userObj.Ph_Number}</td>
            </tr>
            <tr>
            <th>Blood Type: </th><td>       ${userObj.BloodType}</td>
            </tr>
            
            `
            }
           });
            }
            else {console.log("No DATA")
            window.location.replace ( '../Login/Login.html'); //After successful login, user will be redirected to home.html
        }
        
          });
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