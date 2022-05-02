import { IP,ipInUse,getIP, processIP } from "./server.js"




document.getElementById('h').onload = function(){
  
   processIP(ipInUse);
}
window.onbeforeunload = function() {
   alert(1000000000);
 };