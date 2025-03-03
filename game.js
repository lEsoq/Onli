// تحميل عدد الكلكات من Local Storage
let clicks = localStorage.getItem("clicks") ? parseInt(localStorage.getItem("clicks")) : 0;
document.getElementById("click-count").textContent = `🖱 ${clicks}`;

// عند الضغط على الكرة البيضاء
document.getElementById("click-ball").addEventListener("click", function (event) {
    clicks++;
    document.getElementById("click-count").textContent = `🖱 ${clicks}`;
    localStorage.setItem("clicks", clicks);

    // إنشاء تأثير +1 عند النقر
    let plusOne = document.createElement("div");
    plusOne.textContent = "+1";
    plusOne.classList.add("plus-one");

    // تحديد موقع +1 فوق الزر
    let x = event.clientX;
    let y = event.clientY;
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;

    document.body.appendChild(plusOne);

    // حذف العنصر بعد انتهاء الحركة
    setTimeout(() => {
        plusOne.remove();
    }, 1000);

    updateLeaderboard();
});

// تحديث قائمة الفائزين
function updateLeaderboard() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = ""; // مسح القائمة القديمة

    let username = localStorage.getItem("username") || "Unknown";
    let scores = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // تحديث بيانات اللاعب
    let found = false;
    scores.forEach(player => {
        if (player.name === username) {
            player.score = clicks;
            found = true;
        }
    });

    if (!found) {
        scores.push({ name: username, score: clicks });
    }

    // ترتيب الفائزين من الأعلى إلى الأقل
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 100); // نعرض فقط أعلى 100 لاعب

    // حفظ القائمة الجديدة
    localStorage.setItem("leaderboard", JSON.stringify(scores));

    // عرض القائمة
    scores.forEach((player, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1} - ${player.name}: ${player.score}`;
        leaderboard.appendChild(li);
    });
}

// تحديث القائمة عند تحميل الصفحة
updateLeaderboard();

// زر ☰ لفتح قائمة Wins
document.getElementById("menu-btn").addEventListener("click", function () {
    document.getElementById("wins-list").classList.toggle("active");
});