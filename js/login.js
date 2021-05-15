var username;
var res;
var username2;
var userpic;


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyApCei3TXqFTNtJhf84PM3h9XL58zZ_hx0",
    authDomain: "nalanda-clone-de330.firebaseapp.com",
    projectId: "nalanda-clone-de330",
    storageBucket: "nalanda-clone-de330.appspot.com",
    messagingSenderId: "146487373780",
    appId: "1:146487373780:web:c6f91135330b443720f041",
    measurementId: "G-Q7LQ8K0C2F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var flag=0; var mail;var res;
   var error=document.getElementById('error-div');
  document.getElementById('login-btn').addEventListener('click',GoogleLogin);
  let provider=new firebase.auth.GoogleAuthProvider();
  function GoogleLogin(){
      //console.log('login-btn-clicked');
      
      firebase.auth().signInWithPopup(provider).then(res=>{
          console.log(res);
          //console.log(res.additionalUserInfo.profile.hd);
          username= res.additionalUserInfo.profile.name;
          userpic= res.additionalUserInfo.profile.picture;
          //console.log(username);
          console.log(userpic);
          sessionStorage.setItem("username",username);
          sessionStorage.setItem("userpic",userpic);
         
         
         if(res.additionalUserInfo.profile.hd=="pilani.bits-pilani.ac.in")
          {
            window.location.href = "cards.html";
            error.style.display="none";
          }
          else{
             error.style.display="block";
          }
      }).catch(e=>{
          console.log(e);
          flag=1;
      })
  }
 



