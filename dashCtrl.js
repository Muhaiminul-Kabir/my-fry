import { IP,ipInUse,getIP } from "./server.js"





document.getElementById('h').onload = function(){
   console.log(typeof getIP());
   ipInUse(getIP);
}
