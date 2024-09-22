// Chuyển đổi dữ liệu sang base64
function encodeBase64(data) {
    return btoa(JSON.stringify(data));
}

// Lưu thông tin người dùng vào localStorage dưới dạng base64
function saveUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
        username: username,
        password: password
    };
    users.push(encodeBase64(newUser));
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    saveUser(username, password);

    document.getElementById('message').innerText = "Registration successful!";
});
