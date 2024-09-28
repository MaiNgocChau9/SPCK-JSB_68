const users = [
  {
    name: "Admin 1",
    email: "admin1@admin.com",
    password: "123456",
    role: "ADMIN",
  },
  {
    name: "Nguyen Van A",
    email: "vanang@gmail.com",
    password: "123456",
    role: "USER",
  },
];
// kiem tra local storage
if (!localStorage.getItem("users")) {
  // luu vao local storage
  localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // lay du lieu tu local storage
  const usersLocalStorage = JSON.parse(localStorage.getItem("users"));

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const foundUser = usersLocalStorage.filter((user) => user.email === email)[0];
  console.log(foundUser)
  // truong hop tim duoc user trong local storage
  if (foundUser) {
    // kiem tra password
    if (foundUser.password === password) {
      // luu duoi dang local storage (current user)
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      alert("Đăng nhập thành công!");
      window.location.href = "./view.html";
    } else {
      // sai mat khau
      alert("Sai thông tin đăng nhập, vui lòng kiểm tra lại!");
      return;
    }
  } else {
    // khong tim thay user
    alert("Người dùng không tồn tại trên hệ thống, vui lòng đăng ký!");
    return;
  }
});
