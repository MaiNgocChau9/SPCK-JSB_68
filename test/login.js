// Giải mã base64 về dạng JSON
function decodeBase64(encodedData) {
    return JSON.parse(atob(encodedData));
}

// Kiểm tra thông tin người dùng trong localStorage
function validateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    for (const encodedUser of users) {
        const user = decodeBase64(encodedUser);
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateUser(username, password)) {
        document.getElementById('message').innerText = "Login successful!";
    } else {
        document.getElementById('message').innerText = "Invalid username or password!";
    }
});
