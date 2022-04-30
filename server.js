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

import { getDatabase, get, child, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

// Get a reference to the database service
const database = getDatabase(app);




export let isIn = false;

export function writeUserData(user, passW, userIP) {


  const db = getDatabase();

  set(ref(db, 'user/' + user), {
    username: user,
    pass: passW,
    ip: userIP
  });

  console.log("writing succed");
}



export function isExist(uid, isLogin) {


  const dbRef = ref(getDatabase());
  get(child(dbRef, `user/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {

      if (isLogin) { validate(uid); }
      isIn = true;

    } else {
      if (isLogin) {
        alert("Account doesn't exist on thoughts")
        console.log("No data available");

      }
      isIn = false;
    }
  }).catch((error) => {
    console.error(error);
  });
}



export function validate(uid) {

  let upass = document.getElementById('upass').value;

  const db = getDatabase();
  const starCountRef = ref(db, 'user/' + uid + '/pass');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data == upass) {
      console.log("welcome");
      alert("Congratulations!! You were successfully logged in");
      //window.location.href = "dash.html";

    } else {
      console.log(0);
      alert("Sorry.. you've entered incorrect password");
    }
  });
}

export function getIp() {

  $.getJSON("https://api.ipify.org?format=json", function (data) {

    // Setting text of element P with id gfg
    $("#ip").html(data.ip);
  })
}




export function parseIp() {
  getIp();

  var v4 = '[\\d]{1-3}';
  var v4d = '\\.';
  var v4complete = v4 + v4d + v4 + v4d + v4 + v4d + v4
  var v6 = '[\\da-fA-F]{0-4}';
  var v6d = ':';
  var v6complete = v6 + v6d + v6 + v6d + v6 + v6d + v6 + v6d + v6 + v6d + v6 + v6d + v6 + v6d + v6;
  var regex = new RegExp('(' + v4complete + '(\\:\d+){0,1}|'
    + '::|::1|'
    + '\\[::\\]:\\d+|\\[::1\\]:\\d+|'
    + v6complete + '|'
    + '\\[' + v6complete + '\\]:\\d+' + ')', 'g');
  var mystring = document.getElementById('ip').value;
  return mystring.match(regex);
}