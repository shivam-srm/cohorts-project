let keys = document.querySelectorAll(".key");

keys.forEach(btn => {
    btn.addEventListener("click", () => {
        new Audio(btn.dataset.sound).play();
    });
});

document.addEventListener("keydown", e => {
     let press = e.key 

    keys.forEach(btn => {
        if (btn.dataset.key === press) {
            new Audio(btn.dataset.sound).play();
        }
    });
});
