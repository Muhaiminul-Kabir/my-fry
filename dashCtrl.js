import { IP,ipInUse,getIp } from "./server.js"



document.getElementById('uip').onload = function(){
    
    let ip = document.getElementById('uip').textContent;
    ipInUse(ip);
}


document.getElementById('h').onload = function(){
    
    let ip = document.getElementById('uip').textContent;
    ipInUse(ip);
}
