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






class txt {
  constructor(msg, user, time) {
    this.msg = msg;
    this.user = user;
    this.time = time;
  }
}

function activeUser(user) {

  const db = getDatabase();

  set(ref(db, 'online/' + user), {
    user: user

  });


}


function addActiveUsers(target, user) {

  document.getElementById(target).innerHTML += "<p>" + user + "</p>";
}

export function activeRead(list) {
  const db = getDatabase();
  const starCountRef = ref(db, 'online');
  onValue(starCountRef, (snapshot) => {
    snapshot.forEach(
      function (ChildSnapShot) {
        addActiveUsers(list, ChildSnapShot.val().user);
      }
    )

  });



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
      activeUser(sessionStorage.getItem("currentUser"));
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
function rewriteDatabase(msgcnt) {
  const db = getDatabase();
  set(ref(db, 'pubdic/0'), {


    totalmsg: msgcnt
  });
}

export function pubDicWrite(umsg, utime) {
  //test

  //document.getElementById('chat-win').innerHTML = "";
  const db = getDatabase();
  var msgcnt = getCnt() + 1;
  set(ref(db, 'pubdic/' + msgcnt.toString()), {

    msg: umsg,
    timw: utime.toString(),
    user: sessionStorage.getItem("currentUser"),
    totalmsg: msgcnt + 1
  });
  rewriteDatabase(msgcnt);
}


function addMessage(htmlId, text) {
  var user = sessionStorage.getItem('currentUser');
  if (text.user == user) {
    document.getElementById(sessionStorage.getItem('targetElementId')).innerHTML += '<p style="color:#66ff00;font-weight: bold;;font-size:18px">[' + text.user + ']</p><p style="max-width:500px;word-wrap:break-word;">'
      + text.msg + '<br><p style="font-size:12px">' + text.time + "</p></br>"
      + '</p>';
  } else {
    document.getElementById(sessionStorage.getItem('targetElementId')).innerHTML += '<p style="color:#FF160C;font-weight: bold;;font-size:18px">[' + text.user + ']</p><p style="max-width:500px;word-wrap:break-word;">'
      + text.msg + '<br><p style="font-size:12px">' + text.time + "</p></br>"
      + '</p>';
  }

}



export function pubDicRead() {
  const db = getDatabase();
  const starCountRef = ref(db, `pubdic`);
  onValue(starCountRef, (snapshot) => {
    snapshot.forEach(
      function (ChildSnapShot) {
        let obj = new txt(ChildSnapShot.val().msg, ChildSnapShot.val().user, ChildSnapShot.val().timew);
        //alert(obj.user);\
        addMessage(sessionStorage.getItem('targetElementId'), obj);
      }
    )

  });





}

function getCnt() {

  const db = getDatabase();
  const starCountRef = ref(db, `pubdic/0/totalmsg`);
  onValue(starCountRef, (snapshot) => {
    sessionStorage.setItem('totalMsg', snapshot.val())

  });
  //alert(sessionStorage.getItem('totalMsg'));
  return parseInt(sessionStorage.getItem('totalMsg'));

}



