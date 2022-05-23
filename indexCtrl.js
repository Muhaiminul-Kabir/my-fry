import { setIP, extractIP, IP, isExist, validated, getIP, processIP } from "./server.js";


let lginbtn = document.getElementById('login');

let supbtn = document.getElementById('sup');


let name = document.getElementById('uid');
let pass2 = "ihggugugju";



document.getElementById('h').onload = function () { ingit() };
lginbtn.onclick = function () {
   
    var id = document.getElementById('uid').value;
   
    isExist(id, Boolean(1));
};

supbtn.onclick = function () {

    window.location.href = "signup.html";
};

function ingit() {

    console.log("dhfjhdjfhjdhfjdhfjdhfjhdjhf");




}




