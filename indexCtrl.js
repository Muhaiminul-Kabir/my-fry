import { isExist } from "./server.js";


let lginbtn = document.getElementById('login');

let supbtn = document.getElementById('sup');


let name = document.getElementById('uid');
let pass2 = "ihggugugju";


let user = {
    username: name,
    pass: pass2
};


document.getElementById('h').onload = function () { ingit() };
lginbtn.onclick = function () {
    let id = document.getElementById('uid').value;
    isExist(id);
};

supbtn.onclick = function () {
    window.location.href = "signup.html";
};

function ingit() {
    console.log("dhfjhdjfhjdhfjdhfjdhfjhdjhf");



}




