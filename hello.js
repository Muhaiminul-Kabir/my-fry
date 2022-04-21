alert("jk");
let x = -1;
let y = 0;
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  
 
function myFunction() {
    x++;
    document.getElementById("demo").innerHTML = y + " : " + x;
    if (x>58) {
        x= -1; 
        y++;
        ;
    } 
}

function myFunction2() {
    x = 0;
}
function print(){
    window.print();
}
