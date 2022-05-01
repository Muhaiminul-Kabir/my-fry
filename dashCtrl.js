import { IP,ipInUse,getIp } from "./server.js"



document.getElementById('h').onload = function(){
    getIp();
    let ip = document.getElementById('uip').textContent;
    ipInUse(ip);
}
