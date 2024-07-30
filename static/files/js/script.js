document.addEventListener('DOMContentLoaded', function () {
    const chatIcon = document.getElementById('chatIcon');
    const chatBox = document.getElementById('chatBox');
    const closeChat = document.getElementById('closeChat');
    const minimizeChat = document.getElementById('minimizeChat');
    const maximizeChat = document.getElementById('maximizeChat');
    const sendMessage = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const chatContent = document.getElementById('chatContent');

    chatIcon.addEventListener('click', function () {
        chatBox.style.display = 'flex';
    });

    closeChat.addEventListener('click', function () {
        chatBox.style.display = 'none';
    });

    minimizeChat.addEventListener('click', function () {
        chatContent.style.display = 'none';
        chatInput.style.display = 'none';
        maximizeChat.style.display = 'inline-block';
        minimizeChat.style.display = 'none';
    });

    maximizeChat.addEventListener('click', function () {
        if (chatBox.classList.contains('fullscreen')) {
            chatBox.classList.remove('fullscreen');
            chatContent.style.display = 'block';
            chatInput.style.display = 'flex';
            maximizeChat.textContent = '+';
        } else {
            chatBox.classList.add('fullscreen');
            chatContent.style.display = 'block';
            chatInput.style.display = 'flex';
            maximizeChat.textContent = '-';
        }
    });

    sendMessage.addEventListener('click', function () {
        sendMessageHandler();
    });

    chatInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendMessageHandler();
        }
    });

    function sendMessageHandler() {
        const message = chatInput.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.classList.add('user-message');
            userMessage.textContent = message;
            chatContent.appendChild(userMessage);
            chatInput.value = '';
            autoScroll();
            // Add a bot response after a delay (simulating a real response)
            setTimeout(function () {
                const botMessage = document.createElement('div');
                botMessage.classList.add('bot-message');
                botMessage.textContent = 'Thank you for your message!';
                chatContent.appendChild(botMessage);
                autoScroll();
            }, 1000);
        }
    }

    function autoScroll() {
        chatContent.scrollTop = chatContent.scrollHeight;
    }

});
