let username = 'Guest'; // Default username
let currentChannel = 'General'; // Default channel
let users = {}; // Object to store user credentials



function handleVote(button) {
    const voteSection = button.closest('.vote-section');
    const upvoteCount = voteSection.querySelector('.upvote-count');
    const downvoteCount = voteSection.querySelector('.downvote-count');

    if (button.classList.contains('upvote')) {
        let count = parseInt(upvoteCount.textContent);
        if (button.classList.contains('voted')) {
            upvoteCount.textContent = count - 1;
            button.classList.remove('voted');
        } else {
            upvoteCount.textContent = count + 1;
            button.classList.add('voted');
            // Remove vote from downvote if it exists
            const downvoteButton = voteSection.querySelector('.downvote');
            if (downvoteButton.classList.contains('voted')) {
                downvoteButton.classList.remove('voted');
                downvoteCount.textContent = parseInt(downvoteCount.textContent) - 1;
            }
        }
    } else if (button.classList.contains('downvote')) {
        let count = parseInt(downvoteCount.textContent);
        if (button.classList.contains('voted')) {
            downvoteCount.textContent = count - 1;
            button.classList.remove('voted');
        } else {
            downvoteCount.textContent = count + 1;
            button.classList.add('voted');
            // Remove vote from upvote if it exists
            const upvoteButton = voteSection.querySelector('.upvote');
            if (upvoteButton.classList.contains('voted')) {
                upvoteButton.classList.remove('voted');
                upvoteCount.textContent = parseInt(upvoteCount.textContent) - 1;
            }
        }
    }
}


// Function to show create account form
function showCreateAccount() {
    document.getElementById('modalTitle').innerText = 'Create Account';
    document.getElementById('loginButton').innerText = 'Create Account';
    document.getElementById('loginButton').onclick = createAccount;
}

// Function to show login form
function showLogin() {
    document.getElementById('modalTitle').innerText = 'Login';
    document.getElementById('loginButton').innerText = 'Login';
    document.getElementById('loginButton').onclick = login;
}

// Create account function
function createAccount() {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
        if (users[usernameInput.value]) {
            alert('Username already exists. Please choose another.');
        } else {
            users[usernameInput.value] = passwordInput.value;
            alert('Account created successfully. You can now log in.');
            showLogin();
        }
    } else {
        alert('Please enter both username and password');
    }
}

// Login function
function login() {
    const usernameInput = document.getElementById('usernameInput');
    if (usernameInput.value.trim() !== '') {
        username = usernameInput.value.trim();
        document.getElementById('loginModal').style.display = 'none';
        // You can add a welcome message or any other initialization here
        const chatBox = document.getElementById('chat-box');
        const welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = `<span class="username">Welcome, ${username}!</span><br><br>`;
        chatBox.appendChild(welcomeMessage);
    } else {
        alert('Please enter a username');
    }
}
// Function to handle textarea input
function handleInput(event) {
    const textarea = event.target;

    // Auto-resize
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';

    // Handle Enter key
    if (event.key === 'Enter') {
        if (!event.shiftKey) {
            event.preventDefault(); // Prevent default Enter behavior
            insertBrTag(textarea);
        }
    }
}

// Function to insert <br> text at cursor position
function insertBrTag(textarea) {
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const textAfterCursor = textarea.value.substring(cursorPosition);

    textarea.value = textBeforeCursor + '</br>' + textAfterCursor;

    // Move cursor after the inserted <br>
    textarea.selectionStart = textarea.selectionEnd = cursorPosition + 6;

    // Trigger input event to resize textarea
    textarea.dispatchEvent(new Event('input'));
}

// Function to send message
function sendMessage() {
    const messageInput = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');

    if (messageInput.value.trim() === '') {
        return; // Ignore empty messages
    }

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    // Replace <br> with actual line breaks for display
    const messageContent = messageInput.value.replace(/<br>/g, '\n');

    messageElement.innerHTML = `
    <div class="message-header">
        <div class="message-info">
            <span class="username" style="color:red;">${username}</span>
            <span class="channel-tag">${currentChannel}</span>
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

    // Add event listeners to vote buttons
    const voteButtons = messageElement.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', function () {
            handleVote(this);
        });
    });

    // Append the new message to the chat box
    chatBox.appendChild(messageElement);

    // Clear the input field
    messageInput.value = '';

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('message');
    textarea.addEventListener('input', handleInput);
    textarea.addEventListener('keydown', handleInput);
});
// Function to change username
function changeUsername() {
    const newUsername = prompt('Enter your username:');
    if (newUsername && newUsername.trim() !== '') {
        username = newUsername.trim();
        document.getElementById('username').innerText = username;
    }
}

// Function to change channel
function changeChannel(channel) {
    currentChannel = channel;
    document.getElementById('chat-box').innerHTML = ''; // Clear messages on channel change
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<span class="username">Welcome to ${channel} channel!</span></br></br></br>`;
    document.getElementById('chat-box').appendChild(messageElement);
}