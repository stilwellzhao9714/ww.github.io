document.addEventListener('DOMContentLoaded', () => {
    // 自我介紹的編輯功能
    const editButton = document.getElementById('edit-intro');
    const introText = document.getElementById('self-intro');
    
    editButton.addEventListener('click', () => {
        const newIntro = prompt('請輸入新的自我介紹:', introText.innerText);
        if (newIntro) {
            introText.innerText = newIntro;
            localStorage.setItem('selfIntro', newIntro);
        }
    });

    // 加載存儲在 localStorage 的自我介紹
    const savedIntro = localStorage.getItem('selfIntro');
    if (savedIntro) {
        introText.innerText = savedIntro;
    }

    // 留言板功能
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('guest-message');
    const messageDisplay = document.getElementById('messages');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        if (message) {
            const messageElement = document.createElement('p');
            messageElement.innerText = message;
            messageDisplay.appendChild(messageElement);
            messageInput.value = ''; // 清空輸入框
        }
    });

    // 訪客計數功能（僅模擬）
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor-count').innerText = visitorCount;
});
