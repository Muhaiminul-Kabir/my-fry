import { IP,ipInUse,getIP, processIP } from "./server.js"




document.getElementById('h').onload = function(){
  
   processIP(ipInUse);
}
window.onbeforeunload = function() {
   return "Your text here";
 };