document.getElementById('sent-btn').onclick = function () {
        var chatHistory = document.getElementById('chat-win');
        chatHistory.scrollTop = chatHistory.scrollHeight;
        document.getElementById('chat-win').innerHTML += '<p style="color:white;font-weight: bold;;font-size:18px">[user]</p><p style="max-width:200px;word-wrap:break-word;">'
                + document.getElementById('msg').value+'<br><p style="font-size:12px">'+new Date()+"</p></br>"
                + '</p>';

};