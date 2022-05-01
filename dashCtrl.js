import { ipInUse,getIp } from "./server.js"

document.getElementById('h').onload = function(){
    getIp();
    ipInUse(document.getElementById(uip).textContent);
}