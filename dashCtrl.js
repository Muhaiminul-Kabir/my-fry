import { IP,ipInUse,getIP, processIP } from "./server.js"



document.getElementById('h').onunload = function(){
  
   alert("fuck you");
}


document.getElementById('h').onload = function(){
  
   processIP(ipInUse);
}
