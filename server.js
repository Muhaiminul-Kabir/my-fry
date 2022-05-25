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
export var validated = "no";






class txt{
  constructor(msg,user,time){
    this.msg = msg;
    this.user = user;
    this.time = time;
  }
}










export function writeUserData(user, passW) {


  const db = getDatabase();

  set(ref(db, 'user/' + user), {

    pass: passW,

  });

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
      sessionStorage.setItem("currentUser", uid);
      console.log("welcome");
      alert("Congratulations!! You were successfully logged in");
      // writeIP(db, IP, "in", "yes");

      window.location.href = "mainApp.html";

    } else {
      console.log(0);
      alert("Sorry.. you've entered incorrect password");
    }
  });
}




/*

   .then(() => {
        this.test();
    });


*/


export function pubDicWrite(umsg, utime) {
 //test
  
  //document.getElementById('chat-win').innerHTML = "";
  const db = getDatabase();
  var msgcnt = getCnt() + 1;
  set(ref(db, 'pubdic/' + msgcnt.toString()), {

    msg: umsg,
    timw: utime,
    user: sessionStorage.getItem("currentUser")
  },
  ref(db, 'pubcnt'), {


    val: msgcnt

  });

}

export function pubDicRead() {

}

function getCnt() {
  var cnt = 0 ;
  const db = getDatabase();
  const starCountRef = ref(db, 'pubcnt/val');
  onValue(starCountRef, (snapshot) => {
    cnt = snapshot.val();
  
  });
  alert(cnt);
  return cnt;

}
