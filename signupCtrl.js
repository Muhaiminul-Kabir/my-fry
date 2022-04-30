/*import { parseIp,isExist, isIn, writeUserData, getIp } from "./server.js";

let supbtn = document.getElementById('signup');





supbtn.onclick = function () {

    let id = document.getElementById('uid').value;
    let pass = document.getElementById('upass').value;

    let confirmPass = document.getElementById('ucpass').value;
    isExist(id, Boolean(0));
    console.log(isIn);
    if (!isIn) {
        if (pass == confirmPass) {
            writeUserData(id, pass,parseIp());
        } else {
            console.log("didn't match");
            alert("Password doesn't match");
        }

    } else {
        console.log("user exists");
        alert("User already exists. Try another username");
    }



};*/



function ip2int(ip) {
    return (
      ip.split(".").reduce(function(ipInt, octet) {
        return (ipInt << 8) + parseInt(octet, 10);
      }, 0) >>> 0
    );
  }
  
  const int2ip = ipInt => {
    return (
      (ipInt >>> 24) +
      "." +
      ((ipInt >> 16) & 255) +
      "." +
      ((ipInt >> 8) & 255) +
      "." +
      (ipInt & 255)
    );
  };
  
  const original_int = -1062731546;
  
  console.log("original_int", original_int);
  
  const ip = int2ip(original_int);
  
  console.log("converted ip", ip);
  
  const num = ip2int(ip);
  
  console.log("converted int", num);
  
  const ip2 = int2ip(num);
  
  console.log("converted ip", ip2);
  