
var firebaseConfig = {
      apiKey: "AIzaSyBU109NWNX-LIcIyDWDYfLVMB0-yOOUEwY",
      authDomain: "kwitter-hxls-group.firebaseapp.com",
      databaseURL: "https://kwitter-hxls-group-default-rtdb.firebaseio.com",
      projectId: "kwitter-hxls-group",
      storageBucket: "kwitter-hxls-group.appspot.com",
      messagingSenderId: "877076864809",
      appId: "1:877076864809:web:6b333da3e1c6437888a138",
      measurementId: "G-XCERH2N4YH"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
Username=localStorage.getItem("UN")
document.getElementById("WelcomeMessage").innerHTML="Welcome "+Username +"!"

function AddRoom(){
 room_name=document.getElementById("RoomName").value
 firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name"
 })
 localStorage.setItem("RoomKey",room_name)
 window.location="kwiiter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //start Code
      console.log(Room_names)
      displayRoom_name="<div class='room_name' id="+Room_names+" onclick='RedirectToRoom(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=displayRoom_name
       //end code
      });});}
getData();
function RedirectToRoom(){
      localStorage.setItem("RoomKey",name)
      window.location="kwitter_page.html"
}