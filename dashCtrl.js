import { IP,ipInUse,getIp } from "./server.js"

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

document.getElementById('h').onload = function(){
    
    ipInUse(IP);
}
