import { ipInUse } from "./server.js"

document.getElementById('h').onload = function(){
    ipInUse(document.getElementById(ip).textContent);
}