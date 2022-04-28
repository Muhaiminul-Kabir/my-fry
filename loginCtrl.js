import { isExist } from "./server.js";


 let lginbtn = document.getElementById('login');


let name = "96768o7ti8";
let pass2 = "ihggugugju";

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





