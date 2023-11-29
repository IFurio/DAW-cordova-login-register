// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var users = {
    user1: ["isaac", "123"]
};
document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("login");
    let button2 = document.getElementById("signUp");
    button.addEventListener("click", () => {
        let userName = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let paragraph = document.getElementById("feedBack");
        let isLogged = false;
        for (const key in users) {
            if (Object.hasOwnProperty.call(users, key)) {
                const element = users[key];
                if (users[key][0] == userName && users[key][1] == password) {
                    paragraph.textContent = "Succefully logged!";
                    isLogged = true;
                    break;
                }
            }
        }
        if (!isLogged) {
            paragraph.textContent = "Incorrect credentials!";
        } else {
            isLogged = false;
        }
    });
    button2.addEventListener("click", () => {
        let userName = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let paragraph = document.getElementById("feedBack");
        if (userName != "" && password != "") {
            let userKey = 'user' + Object.keys(users).length + 1;
            users[userKey] = [userName, password];
            paragraph.textContent = "Succefully signed up!";
        } else {
            paragraph.textContent = "Please enter something.";
        }
    });

});

