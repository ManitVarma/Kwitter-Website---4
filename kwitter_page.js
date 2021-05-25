//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDYJr4QEes6KCSnFMn7P8HukBA0KTQd0iM",
    authDomain: "social-website-hw-56f44.firebaseapp.com",
    databaseURL: "https://social-website-hw-56f44-default-rtdb.firebaseio.com",
    projectId: "social-website-hw-56f44",
    storageBucket: "social-website-hw-56f44.appspot.com",
    messagingSenderId: "290856511136",
    appId: "1:290856511136:web:e56d206846f9ac651bcbc5",
    measurementId: "G-F5ZZE12QFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
      User_name = localStorage.getItem("user_name")
  
      document.getElementById("user_name").innerHTML = "Welcome " + User_name + "!";
  
      function add_room(){
        roomName = document.getElementById("room_name").value;
        firebase.database().ref("/").child(roomName).update({
          purouse : "adding-room-name"
        })
        localStorage.setItem("room_name", roomName);
        window.location = "kwitter_page.html";
      }
  
      
      function log_out(){
        localStorage.removeItem("room_name")
        localStorage.removeItem("user_name")
        window.location = "index.html";
      }
  
  
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_Names' id="+Room_names+" onclick='redircetRoomName(this.id)'>#"+Room_names + "</div><hr>"
        document.getElementById("output").innerHTML += row;
     });   
   });
  
  }
  
  getData()
  function redircetRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; }



