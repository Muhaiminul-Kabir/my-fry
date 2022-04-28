import { isExist } from "./server.js";




let lginbtn = "";

let name = "";
let pass2 = "";

function init() {
    lginbtn = document.getElementById('login');

    name = document.getElementById('uid').value;
    pass2 = document.getElementById('upass').value
}

let user = {
    username: name,
    pass: pass2
};



lginbtn.onclick = function () { isExist(user.username) };





