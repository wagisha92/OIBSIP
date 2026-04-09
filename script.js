// Register
function register() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  let user = {
    username: username,
    password: password
  };

  localStorage.setItem(username, JSON.stringify(user));
  alert("Registered successfully!");
  window.location.href = "index.html";
}

// Login
function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = JSON.parse(localStorage.getItem(username));

  if (storedUser && storedUser.password === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

// Check Auth
function checkAuth() {
  let user = localStorage.getItem("loggedInUser");

  if (!user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("user").innerText = "Hello, " + user;
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}