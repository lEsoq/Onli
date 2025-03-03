// تخزين الأسماء المستخدمة
let usedNames = new Set();

// تحميل الاسم السابق إذا كان محفوظًا
window.onload = function () {
    let savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("username").value = savedName;
    }
};

// عند الضغط على زر Play
document.getElementById("play-btn").addEventListener("click", function () {
    let username = document.getElementById("username").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (!username) {
        errorMessage.textContent = "Please enter a name!";
        return;
    }

    // التحقق من تكرار الاسم بدون التفريق بين الحروف الكبيرة والصغيرة
    let lowerCaseName = username.toLowerCase();
    if (usedNames.has(lowerCaseName)) {
        errorMessage.textContent = "Name is already taken!";
        return;
    }

    // حفظ الاسم في Local Storage
    localStorage.setItem("username", username);
    usedNames.add(lowerCaseName);

    // الانتقال إلى صفحة اللعبة
    window.location.href = "game.html";
});

// عند الضغط على "فكرة اللعبة" يظهر النص
document.getElementById("game-info").addEventListener("click", function () {
    document.getElementById("game-info-text").classList.toggle("hidden");
});

// زر ☰ لفتح قائمة Wins
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("wins-list").classList.toggle("active");
});