//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBuIPfWTdzBEoQTmzfRbMXvDPoHzei3o7s",
      authDomain: "kwitter-41061.firebaseapp.com",
      databaseURL: "https://kwitter-41061-default-rtdb.firebaseio.com",
      projectId: "kwitter-41061",
      storageBucket: "kwitter-41061.appspot.com",
      messagingSenderId: "301814387336",
      appId: "1:301814387336:web:f471223ef019d4fbaa053d"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}