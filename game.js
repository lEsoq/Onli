let clicks = localStorage.getItem("clicks") || 0;
document.getElementById("click-count").innerText = clicks;

document.getElementById("click-btn").addEventListener("click", () => {
    clicks++;
    localStorage.setItem("clicks", clicks);
    document.getElementById("click-count").innerText = clicks;
});