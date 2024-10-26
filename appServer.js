function registerModoule(username, password) {
    const data = {

        "meta": "client",
        "prop": {
            "name": username,
            "password": password
        }
    };

    const response = fetchData("http:localhost:8000/user/create", "POST", data)

    return response;




}


function authModoule(username, password) {

    const data = '{"meta":"client","prop":{"name":"dsfsdf","password":"fdsfdsf"}}';

    const response = fetchData("http:localhost:8000/user/auth", "POST", data)

    return response;


}


function sendModule(data) {

}




async function create(blogPost) {
    try {
        // Create the URL
        const url = 'http://localhost:8000/user/auth';

        // Create the headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        // Create the POST body
        const body = JSON.stringify(blogPost);
        console.log(body);

        // Send the POST request
        const response = await fetch(url, { method: 'POST', headers, body });

        // Check the response status
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
    }
}


test();

function test() {
    const myHeaders = {
        "Content-Type": "application/json"
    };

    const raw = JSON.stringify({
        "meta": "client",
        "prop": {
            "name": "Nirjon",
            "password": "qwerty"
        }
    });

    const requestOptions = {
        mode:"no-cors",
        method: "POST", 
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };
    console.log(requestOptions);
    fetch("https://bay-imports.gl.at.ply.gg:33702/user/auth", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

}





function fetchData(url, met, data) {

    // data = JSON.parse(data);
    // console.log(data)
    const options = {
        mode: "cors",
        method: met, // Or 'POST', 'PUT', etc. depending on the API
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    };


    let fetchRes = fetch(url, options);

    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d);
        });



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
