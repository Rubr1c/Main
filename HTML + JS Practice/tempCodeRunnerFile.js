function caesarCipher(s, k) {
	const alpha = "abcdefghijklmnopqrstuvwxyz";
    let ciphered = '';
    for (let char of s) {
        const lowerChar = char.toLowerCase();
        let indexOfChar = alpha.indexOf(lowerChar);
        if (alpha.includes(lowerChar)) {
            if (indexOfChar + k <= alpha.length) {
                if (char.toUpperCase() === char) {
                    ciphered += alpha[indexOfChar + k].toUpperCase();
                } else {
                    ciphered += alpha[indexOfChar + k];
                }
            } else {
                let index = indexOfChar - 1;
                while (index <= alpha.length) {
                    index--;
                }
                if (char.toUpperCase() === char) {
                    ciphered += alpha[index].toUpperCase();
                } else {
                    ciphered += alpha[index];
                }
            }
        } else {
            ciphered += char;
        }
    }
}   