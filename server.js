import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU7IyEq6u0Nrx59cmHGX7MMLiVVlKVyv4",
  authDomain: "study-bro-a4c3a.firebaseapp.com",
  databaseURL: "https://study-bro-a4c3a-default-rtdb.firebaseio.com",
  projectId: "study-bro-a4c3a",
  storageBucket: "study-bro-a4c3a.appspot.com",
  messagingSenderId: "602887793011",
  appId: "1:602887793011:web:f79803e8c9bef60ba63d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase,get,child, ref, set } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Get a reference to the database service
const database = getDatabase(app);

document.getElementById("login").onclick = function() {validate()};



function writeUserData() {
  let uid = document.getElementById('uid').value;
  let upass = document.getElementById('upass').value;
  
  
  const db = getDatabase();

  set(ref(db, 'user/' + uid), {
    username: uid,
    pass: upass
  });
  
  console.log("writing succed");
}


function validate() {
  let uid = document.getElementById('uid').value;
  let upass = document.getElementById('upass').value;






  var ref = firebase.database().ref("users/${uid}");
ref.once("value")
  .then(function(snapshot) {
    var name = snapshot.child("username").val(); // {first:"Ada",last:"Lovelace"}
    var age = snapshot.child("pass").val(); // null

    console.log(name);
  });





/*




  const dbRef = ref(getDatabase());
  get(child(dbRef, `user/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      var name = snapshot.child("pass").value; 
      console.log(name);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });*/  
}
