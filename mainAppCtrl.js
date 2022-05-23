import { pubDicRead,pubDicWrite } from "./server.js";







document.getElementById('sent-btn').onclick = function () {
        var user = sessionStorage.getItem("currentUser");
        var chatHistory = document.getElementById('chat-win');
        var time = new Date();
        chatHistory.scrollTop = chatHistory.scrollHeight;
        document.getElementById('chat-win').innerHTML += '<p style="color:#66ff00;font-weight: bold;;font-size:18px">['+user+']</p><p style="max-width:200px;word-wrap:break-word;">'
                + document.getElementById('msg').value+'<br><p style="font-size:12px">'+time+"</p></br>"
                + '</p>';
        pubDicWrite(document.getElementById('msg').value,time);
};




