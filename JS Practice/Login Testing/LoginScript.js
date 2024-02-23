document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById("Menu");
    const menu = document.getElementById("MoreMenu");

    menuButton.addEventListener('click', function() {
        if (menu.style.right === "0%") {
            menu.style.right = "-100%";
        } else {
            menu.style.right = "0%";
        }
    });
});