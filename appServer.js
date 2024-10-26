
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
 



register("Parvin","qwerty");
async function register(username, password) {
    const url = "http://localhost:9090/user/create";
    const act = "post";
    const raw = rawFactory(username, password);
    const response = await axiosApi(url,act,raw);
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
    const response = await axiosApi(url,act,raw);
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





let ws, currentUser;

// On pressing Connect this method will be called
function connect() {

    ws = new WebSocket("ws://localhost:9090/hello");

    //This function will called everytime new message arrives
    ws.onmessage = function (e) {
        console.log(e);
        printMessage(e.data);
    };
    document.getElementById("connectButton").disabled = true;
    document.getElementById("connectButton").value = "Connected";
    document.getElementById("name").disabled = true;
    currentUser = document.getElementById("name").value;
    console.log(currentUser);
}

//This function takes care of printing the message on browser
function printMessage(data) {
    let messages = document.getElementById("messages");
    let messageData = JSON.parse(data);
    let newMessage = document.createElement("div");
    newMessage.className = "incoming-message";
    newMessage.innerHTML = messageData.name + " : " + messageData.message;
    messages.appendChild(newMessage);
}

//This function handles functionality of sending the message to websocket
function sendToGroupChat() {
    if (ws == undefined) return;
    let messageText = document.getElementById("message").value;
    document.getElementById("message").value = "";
    let name = document.getElementById("name").value;
    let messageObject = {
        name: name,
        message: messageText,
    };

    let newMessage = document.createElement("div");
    newMessage.innerHTML = messageText + " : " + currentUser;
    newMessage.className = "outgoing-message";
    messages.appendChild(newMessage);

    //In-Built functions Send is used with object we created
    ws.send(JSON.stringify(messageObject));
}
