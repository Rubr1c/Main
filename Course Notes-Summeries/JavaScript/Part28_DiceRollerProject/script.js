function rollDice() {

    const numOfDice = document.getElementById("diceNumber").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const randomValue = Math.floor(Math.random() * 6) + 1;
        values.push(randomValue);
        images.push(`<img src = "DiceIMG/${randomValue}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}