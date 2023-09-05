// Check if the user is logged in
function isLoggedIn() {
  const token = localStorage.getItem("token");
  return token !== null; // Return true if token exists in local storage
}

// Show or hide buttons based on login status
function updateButtons() {
  const registerBtn = document.getElementById("registerBtn");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const createBtn = document.getElementById("createBtn");
  const newsBtn = document.getElementById("newsBtn");
  if (isLoggedIn()) {
    newsBtn.style.display = "block"; // Show news button
    createBtn.style.display = "block"; // Show popular button
    logoutBtn.style.display = "block"; // Show logout button
    registerBtn.style.display = "none"; // Hide register button
    loginBtn.style.display = "none"; // Hide login button
  } else {
    newsBtn.style.display = "none"; // Hide news button
    createBtn.style.display = "none"; // Hide popular button
    registerBtn.style.display = "block"; // Show register button
    loginBtn.style.display = "block"; // Show login button
    logoutBtn.style.display = "none"; // Hide logout button
  }

  logoutBtn.addEventListener("click", logout);
  function logout() {
    localStorage.removeItem("token"); // Remove the token from local storage
    // Perform any other necessary logout actions
    // For example, you can redirect the user to the login page
    window.location.href = "index.html";
  }
}

// Call the updateButtons function on page load
window.addEventListener("load", updateButtons);
