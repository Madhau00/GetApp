function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Example: Simple validation
    if (username === "user" && password === "pass") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
  