
function rawFactory(username, password) {
    return {
        meta: "client",
        prop: {
            name: username,
            password: password
        }
    };
}

// axiosApi('http://localhost:9090/user/auth', 'post', rawFactory("Nirjon", "qwerty"))
//     .then((e) => console.log(e.data));

async function axiosApi(url, act, raw) {
    return axios({
        method: act,
        url: url,
        data: raw
    });
}




register("Parvin", "qwerty");
async function register(username, password) {
    const url = "http://localhost:9090/user/create";
    const act = "post";
    const raw = rawFactory(username, password);
    const response = await axiosApi(url, act, raw);
    const data = response.data;

    console.log(data);

    return data.status;

}



function sendModule(data) {

}



async function auth(username, password) {



    const url = "http://localhost:9090/user/auth";
    const act = "post";
    const raw = rawFactory(username, "");
    const response = await axiosApi(url, act, raw);
    const data = response.data;


    console.log(data);
    if (data.password === password) {
        return "ok";
    } else if (data.password !== undefined && data.password !== password) {
        return "bad";
    } else {
        return "invalid";
    }







}




//web socket implementation

let ws, currentUser;

// On pressing Connect this method will be called
function connect(channel) {

    ws = new WebSocket("ws://localhost:7246/" + channel);
    console.log("connect:166");
    //This function will called everytime new message arrives
    ws.onmessage = function (e) {
        console.log(e);
        getMessage(e.data);
    };

    console.log(localStorage.user);
}


function getMessage(data) {


    let messageData = JSON.parse(data);
    let sender = messageData.name;
    let message = messageData.message;



    const chatBox = document.getElementById('chat-box');


    // Get current date and time
    const now = new Date();
    const timestamp = now.toLocaleString(); // Format: MM/DD/YYYY, HH:MM:SS AM/PM

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const messageBox = document.querySelectorAll(".message");;

    // Replace <br> with actual line breaks for display
    const messageContent = message.replace(/<nextline>/g, '</br>');





    messageElement.innerHTML = `
  <div class="message-header">
      <div class="message-info">
          <span class="username" style="color:red;">${sender}</span>
          <span class="channel-tag">${currentChannel}</span>
          <span class="timestamp">${timestamp}</span>
      </div>
      <div class="vote-section">
          <button class="vote-button upvote"><i class="bi bi-hand-thumbs-up"></i></button>
          <span class="vote-count upvote-count">0</span>
          <button class="vote-button downvote"><i class="bi bi-hand-thumbs-down"></i></button>
          <span class="vote-count downvote-count">0</span>
      </div>
  </div>
  <div class="message-content">${messageContent}</div>
  `;

    if (sender === "superadmin") {


        document.querySelector(".username").style.color = "purple";



    }

    // Add event listeners to vote buttons
    const voteButtons = messageElement.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', function () {
            handleVote(this);
        });
    });

    // Append the new message to the chat box
    chatBox.appendChild(messageElement);


    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}



//This function handles functionality of sending the message to websocket
function sendToGroupChat() {
    if (ws == undefined) return;
    console.log("sendToGroupChat:166");
    let messageInput = document.getElementById("message").value;
    if (messageInput.trim() === '') {
        return; // Ignore empty messages
    }
    document.getElementById("message").value = "";
    let messageObject = {
        name: sessionStorage.user,
        message: messageInput,
    };
    console.log(messageInput);
    sendMessage(messageInput);

    //In-Built functions Send is used with object we created
    ws.send(JSON.stringify(messageObject));
}









