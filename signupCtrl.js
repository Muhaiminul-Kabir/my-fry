import { isExist, writeUserData } from "./server.js";

let supbtn = document.getElementById('signup');

supbtn.onclick = function () {
    let id = document.getElementById('uid').value;
    let pass = document.getElementById('upass').value;
    let confirmPass = document.getElementById('ucpass').value;
    if(!isExist(id,false)){
        if(pass == confirmPass){
            writeUserData(id,pass);
        }
    
    }else{
        console.log("User already exists. Try another username");
    }


    
};