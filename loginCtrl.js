import { isExist } from "./server.js";




let lginbtn = document.getElementById('login');

let name = document.getElementById('uid').value;
let pass2 = document.getElementById('upass').value;

window.onload = (event) => {
    lginbtn = document.getElementById('login');

    name = document.getElementById('uid').value;
    pass2 = document.getElementById('upass').value
};
const user = {
    username: name,
    pass: pass2
};



lginbtn.onclick = function () { isExist(user.username) };





