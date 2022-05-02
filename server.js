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
export var IP = "nop";
export var validated = false;



export function setIP(ip) {
  console.log(ip);
  IP = ip;
}



export function setValidation(state) {
  
  validated = state;
  console.log(validated);
}



export function writeIP(db, userIP, state) {

  set(ref(db, 'ip/' + userIP.replaceAll(".", "-")), {
    logged: state
  });

}



export function writeUserData(user, passW, userIP) {


  const db = getDatabase();

  set(ref(db, 'user/' + user), {

    pass: passW,

  });

  writeIP(db, userIP, "in");
  console.log("writing succed");
}



export function isExist(uid, isLogin) {


  const dbRef = ref(getDatabase());
  get(child(dbRef, `user/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      isIn = true;
      if (isLogin) { validate(uid); }


    } else {
      isIn = false;
      if (isLogin) {
        alert("Account doesn't exist on thoughts")
        console.log("No data available");

      }

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
      writeIP(db, IP, "in");
      validated = true;
      window.location.href = "dash.html";

    } else {
      console.log(0);
      alert("Sorry.. you've entered incorrect password");
    }
  });
}

export function extractIP() {

  $.getJSON("https://api.ipify.org?format=json", function (data) {

    // Setting text of element P with id gfg
    $("#uip").html(data.ip);


  })
}

export function getIP() {
  fetch('https://api.ipify.org?format=json')
    .then(results => results.json())
    .then(data => { IP = data.ip; })

}








export function parseIp() {

}


export function ipInUse() {
  console.log(validated);
  if (!validated) {
    getIP();
    setTimeout(function () {
      console.log("i is " + IP);
      console.log("Fetchimng................");




      const db = getDatabase();

      console.group('ip/' + IP.replaceAll(".", "-") + '/logged');

      let userIP = IP.replaceAll(".", "-");
      const starCountRef = ref(db, 'ip/' + userIP + '/logged');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data == "in") {
          writeIP(db, userIP, "out");
          location.replace("https://my-fry.vercel.app/index.html");

        }
      });
    }, 10000)
  }
}