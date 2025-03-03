document.addEventListener("DOMContentLoaded", function() {
    let username = localStorage.getItem("username");
    if (!username) {
        window.location.href = "index.html";
    }

    let clickCount = 0;

    document.getElementById("click-circle").addEventListener("click", function() {
        clickCount++;
        document.getElementById("click-count").textContent = "🖱 " + clickCount;
    });

    document.getElementById("discord-btn").addEventListener("click", function() {
        window.location.href = "https://discord.gg/drMEZng8";
    });
});