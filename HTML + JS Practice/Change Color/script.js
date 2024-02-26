function changeColor() {
    const text = document.getElementById('text');

    if (text.style.color == 'red') {
        text.style.color = 'black'
    } else {
        text.style.color = 'red';
    }
}