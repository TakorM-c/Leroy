const firebaseConfig = {
      apiKey: "AIzaSyDTZNUdcPlE65b9cVnlSQg_awXkSg9rgw8",
      authDomain: "kwitter-1ffb2.firebaseapp.com",
      databaseURL: "https://kwitter-1ffb2-default-rtdb.firebaseio.com",
      projectId: "kwitter-1ffb2",
      storageBucket: "kwitter-1ffb2.appspot.com",
      messagingSenderId: "1080320426381",
      appId: "1:1080320426381:web:a21d71ab6c515618eefdc4"
    };
    
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
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";
}