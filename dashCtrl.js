import { ipInUse } from "./server.js"

document.getElementById('h').onload = function(){
    getIp();
    ipInUse(document.getElementById(ip).textContent);
}