import { activeRead, pubDicRead,pubDicWrite } from "./server.js";

$(document).ready(function () {
        load();
        activeRead('onlist');
    });





document.getElementById('sent-btn').onclick = function () {
       
        sessionStorage.setItem('targetElementId','chat-win');
        var user = sessionStorage.getItem("currentUser");
        var time = new Date();
        
        /*document.getElementById('chat-win').innerHTML += '<p style="color:#66ff00;font-weight: bold;;font-size:18px">['+user+']</p><p style="max-width:200px;word-wrap:break-word;">'
                + document.getElementById('msg').value+'<br><p style="font-size:12px">'+time+"</p></br>"
                + '</p>';*/
        pubDicWrite(document.getElementById('msg').value,new Date());
         document.getElementById('chat-win').innerHTML = "";
        pubDicRead();
};

function load(){
        document.getElementById('chat-win').innerHTML = "";
        pubDicRead();
}

