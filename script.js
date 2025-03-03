function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("player", email);
        window.location.href = "game.html";
    } else {
        alert("Please enter a valid email and password.");
    }
}

function googleLogin() {
    let googleUser = "GoogleUser" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("player", googleUser);
    window.location.href = "game.html";
}

function guestLogin() {
    let guestUser = "user" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("player", guestUser);
    window.location.href = "game.html";
}