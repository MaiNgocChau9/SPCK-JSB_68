document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // validate form
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (password.length < 6) {
      alert("Password has least 6 letters");
      return;
    }

    // lay du lieu tu local storage
    const usersLocalStorage = JSON.parse(localStorage.getItem("users"));
    // Check if user already exists
    if (usersLocalStorage.find((u) => u.email === email)) {
      alert("User with this email already exists");
      return;
    }
    // Add new user
    usersLocalStorage.push({
      name: name,
      email: email,
      password: password,
      role: "USER",
    });

    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(usersLocalStorage));

    alert("Registration successful! Please login.");
    window.location.href = "./login.html";
  });
