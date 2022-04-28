import { isExist } from "./server";




const user = {
    username: document.getElementById('uid').value,
    pass: document.getElementById('upass').value
  };

  
let lginbtn = document.getElementById('login');





lginbtn.onclick = function(){isExist(user.username)};




  
