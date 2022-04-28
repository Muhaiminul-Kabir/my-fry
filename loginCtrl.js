import { isExist } from "./server.js";


 let lginbtn = document.getElementById('login');


let name = "";
let pass2 = "";

function ingit() {
    console.log("dhfjhdjfhjdhfjdhfjdhfjhdjhf");
    name = document.getElementById('uid').value;
    pass2 = document.getElementById('upass').value
}

let user = {
    username: name,
    pass: pass2
};



lginbtn.onclick = function () { isExist(user.username) };





