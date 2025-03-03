function createUsername() {
    let username = document.getElementById("username").value.trim();
    
    if (username === "") {
        username = "user" + Math.floor(100000 + Math.random() * 900000);
    }
    
    localStorage.setItem("playerName", username);
    window.location.href = "game.html";
}

function loginWithGoogle() {
    alert("تسجيل الدخول عبر Google غير مفعّل حاليًا.");
}