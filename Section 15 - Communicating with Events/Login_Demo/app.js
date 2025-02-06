const loginBtn = document.querySelector("#loginButton");
const passwordInput = document.querySelector("#passwordInput");

let failedAttempts = 0;
const maxAttempts = 5;

// Function to move a button randomly
function moveButton(button) {
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    button.style.left = `${width}px`;
    button.style.top = `${height}px`;
}

// Login button logic
loginBtn.addEventListener("click", function () {
    if (failedAttempts >= maxAttempts) {
        loginBtn.style.display = 'none'; // Hide button after click when attempts are too high
        return;
        // loginBtn.innerText = "LOCKED OUT";
        // loginBtn.disabled = true;
        // return;
        // moveButton(loginBtn);
        // return;
    }

    const password = passwordInput.value;
    if (password === "correctpassword") {
        alert("Login successful!");
        document.body.style.backgroundColor = "green";
    } else {
        failedAttempts++;
        alert(
            `Incorrect password! Attempts left: ${maxAttempts - failedAttempts}`
        );
    }
});

// Make the login button move after 5 failed attempts
loginBtn.addEventListener("mouseover", function () {
    if (failedAttempts >= maxAttempts) {
        moveButton(loginBtn);
    }
});