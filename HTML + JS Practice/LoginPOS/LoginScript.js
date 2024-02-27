class POSAccount {
    static admins = {};

    userData(username, key) {
        let accountInfo = [username, key];
    }

    addUserToDB(username, password, key, email) {
        POSAccount.admins[email] = [username, password, key];
    }

    constructor(email, username, password) {
        let valid = false;
        if (POSAccount.admins.hasOwnProperty(email)) {
            alert("this account already exists");
            return valid;
        }
        let includesNumber = false;
        const specialChar = "!@#$%^&*()-_=+"
        let includesSpecial = false;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validEmail = emailRegex.test(email);

        if (!validEmail) {
            alert("invalid email");
            return valid;
        }

        for (const char of password) {
            if (!isNaN(char)) {
                includesNumber = true;
            }
            if (specialChar.includes(char)) {
                includesSpecial = true;
            }
        }
        if (!includesSpecial) {
            alert("add special char to password");
            return valid;
        } 
        if (!includesNumber) {
            alert("add number to password");
            return valid;
        }


        if (username.length >= 4 && password.length >= 8) {
            this.username = username;
            this.password = password;
            this.email = email;
            const key = crypto.randomUUID();
            this.userData(username, key);
            this.addUserToDB(username, password, key, email);
            console.log("Account Created!");
            console.log("Username: ", this.username);
            console.log(key);
            valid = true;
            return valid;
            
        } else {
            alert("username or password is too short ");
            return valid;
        }
    }
}


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



document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    const signUpButton = document.getElementById("SignUpButton");
    if (signUpButton) {
        signUpButton.addEventListener('click', function(event) {
    
            event.preventDefault();

            const email = document.getElementById("SignUpEmailIn").value;
            const username = document.getElementById("SignUpUsernameIn").value;
            const password = document.getElementById("SignUpPasswordIn").value;
            const passwordRep = document.getElementById("SignUpPasswordInRep").value;
    
            if (password != passwordRep) {
                alert("passwords do not match");
                return;
            }
            const newUser = new POSAccount(email, username, password);
            
            if (newUser == true) {
                window.location.href = "Homepage.html";
            }
    
    
            console.log("Email:", email);
            console.log("Password:", password);
        });
    } else {
        console.error("Login button not found in the document.");
    }
});
