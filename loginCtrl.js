import { isExist } from "./server.js";


 let lginbtn = document.getElementById('login');


let name = document.getElementById('uid');
let pass2 = "ihggugugju";


let user = {
    username: name,
    pass: pass2
};


document.getElementById('h').onload = function(){ingit()};
lginbtn.onclick = function () { isExist(user.username) };

function ingit() {
    console.log("dhfjhdjfhjdhfjdhfjdhfjhdjhf");

    console.log("djhd"+document.getElementById('uid').value) ;
    
}




