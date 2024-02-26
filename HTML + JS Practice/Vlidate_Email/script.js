function checkInfo() {
    const email = document.getElementById('Email').value;

    const indexOfAt = email.indexOf('@');
    const indexOfdot = email.indexOf('.');
    const firstPart = email.substring(0, indexOfAt);
    const secondPart = email.substring(indexOfAt + 1, indexOfdot);
    const thirdPart = email.substring(indexOfdot + 1);

    if (indexOfAt < indexOfdot && firstPart.length > 4) {
        if (secondPart == "gmail" || secondPart == "hotmail" || secondPart == "outlook") {
            if (thirdPart.length >= 2) {
                alert("correct email")
            } else {
                alert("top level domain is too short")
            }
        } else {
            alert("second level domain is incorrect");
        }
    } else {
        alert("mailbox is too short or incorrect");
    }

}