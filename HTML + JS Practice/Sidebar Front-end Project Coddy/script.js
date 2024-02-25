const closeButton = document.getElementById("closeSidebarBtn");
const openButton = document.getElementById("openSidebarBtn");

closeButton.addEventListener('click', function() {
    document.getElementById("sidebar").style.right = '-250px';
});

openButton.addEventListener('click', function() {
    document.getElementById("sidebar").style.right = '0';
});