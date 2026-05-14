let currentUser = JSON.parse(localStorage.getItem("user"));

// ইউজার ডাটা লোড
function loadUser() {
  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("userName").innerText = currentUser.name;
  document.getElementById("memberId").innerText = currentUser.member_id;

  loadBalance();
  loadHistory();
}
