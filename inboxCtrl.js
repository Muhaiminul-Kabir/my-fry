document.getElementById('sent-btn').onclick = function () {
        var chatHistory = document.getElementById("chat-win");
        chatHistory.scrollTop = chatHistory.scrollHeight;
        document.getElementById('chat-win').innerHTML += '<p style="max-width:200px;word-wrap:break-word;">'
                + document.getElementById('msg').value
                + '</p>';

};