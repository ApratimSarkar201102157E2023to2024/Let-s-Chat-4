
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"   
      });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html"

}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html"   
}