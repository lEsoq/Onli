let clicks = 0;

document.getElementById("click-button").addEventListener("click", () => {
    clicks++;
    document.getElementById("click-count").textContent = `🖱 ${clicks}`;
    
    let plusOne = document.createElement("span");
    plusOne.textContent = "+1";
    plusOne.classList.add("plus-one");
    
    document.body.appendChild(plusOne);
    
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;
    
    setTimeout(() => {
        plusOne.remove();
    }, 1000);
});