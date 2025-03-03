let clicks = 0;

function login() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("gameContainer").style.display = "block";
}

function googleLogin() {
    alert("Google Login Feature Coming Soon!");
}

function startGame() {
    document.querySelector(".play-btn").style.display = "none";
    document.querySelector(".info-btn").style.display = "none";
    document.getElementById("clicker").style.display = "block";
    document.getElementById("clickCount").style.display = "block";
}

function incrementClicks() {
    clicks++;
    document.getElementById("clickCount").innerText = clicks;
}