function checkInfo() {
    const name = document.getElementById('Name');
    const mobile = document.getElementById('Mobile');


    for (let i = 0; i < 10; i++) {
        if ((name.value).includes(i)) {
            alert("Invalid Name")
            return;
        }
    }
    for (let i = 0; i < (mobile.value).length; i++) {
        if (isNaN(mobile.value[i])) {
            alert("Invalid Mobile")
            return;
        }   
    }
}