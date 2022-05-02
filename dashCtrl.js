import { IP,ipInUse,getIP, processIP, leave } from "./server.js"




document.getElementById('h').onload = function(){
  
   processIP(ipInUse);
}
