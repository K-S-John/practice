// ランダムなメッセージを返す関数
function getRandomResponse() {
    const responses = [
        "こんにちは！どうしたの？",
        "今日はいい天気ですね！",
        "それは面白いですね！",
        "お疲れ様です！",
        "何か質問があれば聞いてくださいね。",
        "うーん、それは分からないなぁ。",
        "もっと詳しく教えてください！"
    ];

    let randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// メッセージを表示する関数
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");

    // ユーザーのメッセージ
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message");
    if(sender == "user") {
        userMessageDiv.classList.add("user-message");
    }
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);

    // チャットボックスをスクロールして最新メッセージを表示
    chatBox.scrollTop = chatBox.scrollHeight;
}

// メッセージ送信ボタンが押されたときの動作
function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();

    if (message) {
        // ユーザーのメッセージを表示
        displayMessage(message, "user");

        // 入力フィールドをリセット
        messageInput.value = "";

        // ランダムな応答を生成して表示
        setTimeout(() => {
            const response = getRandomResponse();
            displayMessage(response, "bot");
        }, 200); // 1秒後に返信を表示
    }
}

// Enterキーでメッセージ送信
document.getElementById("message-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
