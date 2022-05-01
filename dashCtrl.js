import { ipInUse,getIp } from "./server.js"

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

document.getElementById('h').onload = function(){
    getIp();
    sleep(2000);
    ipInUse(document.getElementById('uip').textContent);
}
