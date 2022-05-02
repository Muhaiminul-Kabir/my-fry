import { IP,ipInUse,getIP, processIP } from "./server.js"

window.onunload = function () {
   alert("FUCK YOU");
}


document.getElementById('h').onload = function(){
  
   processIP(ipInUse);
}
