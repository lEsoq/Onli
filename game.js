// تحميل عدد الكلكات من Local Storage
let clicks = localStorage.getItem("clicks") ? parseInt(localStorage.getItem("clicks")) : 0;
document.getElementById("click-count").textContent = `🖱 ${clicks}`;

// عند الضغط على الكرة البيضاء
document.getElementById("click-ball").addEventListener("click", function () {
    clicks++;
    document.getElementById("click-count").textContent = `🖱 ${clicks}`;
    localStorage.setItem("clicks", clicks);
});