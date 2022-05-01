import { ipInUse,getIp } from "./server.js"

document.getElementById('h').onload = function(){
    getIp();
    sleep(2000);
    ipInUse(document.getElementById('uip').textContent);
}