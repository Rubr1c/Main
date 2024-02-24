document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const carousel = document.querySelector('.carousel');
    
    // Function to handle clicking on the right arrow
    rightArrow.addEventListener('click', function () {
        carousel.scrollBy({
            left: 250, // Adjust this value as needed for desired scroll distance
            behavior: 'smooth'
        });
    });

    // Function to handle clicking on the left arrow
    leftArrow.addEventListener('click', function () {
        carousel.scrollBy({
            left: -250, // Adjust this value as needed for desired scroll distance
            behavior: 'smooth'
        });
    });
    
});

