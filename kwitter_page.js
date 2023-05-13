
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

  User_name=localStorage.getItem("UN") 
  room_name=localStorage.getItem("RoomKey")
  function Send(){
   User_message=document.getElementById("msg").value
   firebase.database().ref(room_name).push({
      name:User_name,
      message:User_message,
      like:0
   })
   document.getElementById("msg").value=""
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name']
mesg=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>"
message_with_tag="<h4>"+mesg+"</h4>"
button1="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+">"
button2="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
row=name_with_tag+message_with_tag+button1+button2
document.getElementById("output").innerHTML+=row

//End code
      } });  }); }
getData();
