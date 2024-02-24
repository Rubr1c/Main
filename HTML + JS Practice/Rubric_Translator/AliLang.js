function translateToRubric() {
    var text = document.getElementById('EnglishInput').value;
    encode(text);
}

function translateToEnglish() {
    var text = document.getElementById('RubricInput').value;
    decode(text);
}

function encode(message) {
    const keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let encodedMessage = ''; 

    encodedMessage = message.split('').map(char => {
        let found = false;
        for (const row of keyboardRows) {
            const index = row.indexOf(char.toLowerCase());
            if (index !== -1) {
                found = true;
                return row[(index + 1) % row.length];
            }
        }
        if (!found) return char;
    }).join('');

    var outputLabel = document.getElementById('RubricOutputText');
    outputLabel.textContent = encodedMessage;
}

function decode(message) {
    const keyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let decodedMessage = ''; 

    decodedMessage = message.split('').map(char => {
        let found = false;
        for (const row of keyboardRows) {
            const index = row.indexOf(char.toLowerCase());
            if (index !== -1) {
                found = true;
                return row[(index - 1 + row.length) % row.length];
            }
        }
        if (!found) return char;
    }).join('');

    var outputLabel = document.getElementById('EnglishOutputText');
    outputLabel.textContent = decodedMessage;
}

