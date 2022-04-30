import { isExist, isIn, writeUserData } from "./server.js";

let supbtn = document.getElementById('signup');




document.getElementById('h').onload = function(){
    userIP = document.getElementById('ttl').value ;
    document.getElementById("ttl").innerHTML = "Sign Up";

}


supbtn.onclick = function () {
    
    let id = document.getElementById('uid').value;
    let pass = document.getElementById('upass').value;
    
    let confirmPass = document.getElementById('ucpass').value;
    isExist(id,Boolean(0));
    console.log(isIn);
    if(!isIn){
        if(pass == confirmPass){
            writeUserData(id,pass);
        }else{
            console.log("didn't match");
            alert("Password doesn't match");
        }
    
    }else{
        console.log("user exists");
        alert("User already exists. Try another username");
    }


    
};