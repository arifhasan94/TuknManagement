
async function login() {
  const id = document.getElementById("loginId").value;
  const pass = document.getElementById("password").value;

  const user = fakeDB.find(u =>
    (u.member_id === id || u.mobile === id) && u.password === pass
  );

  if (!user) {
    document.getElementById("error").innerText = "Invalid login";
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  if (user.role === "admin" || user.role === "super_admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "user.html";
  }
}
