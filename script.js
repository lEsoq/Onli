document.getElementById("start-btn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    if (!username) {
        username = "user" + Math.floor(Math.random() * 1000000);
    }

    localStorage.setItem("username", username);
    window.location.href = "game.html";
});