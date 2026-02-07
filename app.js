// Google OAuth Configuration
const GOOGLE_CLIENT_ID =
  "391909521452-g2u4vnfi5qaosmo4g7dbgk00g35oonet.apps.googleusercontent.com";

// Handle Google Authentication
function handleGoogleAuth(response) {
  console.log("Google auth response:", response);

  // Decode JWT token to get user info
  const credential = response.credential;
  const payload = JSON.parse(atob(credential.split(".")[1]));

  console.log("User info:", payload);

  // Show success screen with user data
  showSuccessScreen(payload);

  // Save to localStorage
  localStorage.setItem("google_user", JSON.stringify(payload));
}

// Show success screen
function showSuccessScreen(userData) {
  document.getElementById("auth-buttons").classList.add("hidden");
  document.getElementById("success-screen").classList.remove("hidden");

  document.getElementById("user-name").textContent = userData.name;
  document.getElementById("user-email").textContent = userData.email;
  document.getElementById("user-photo").src = userData.picture;
}

// Logout
function logout() {
  // Clear localStorage
  localStorage.removeItem("google_user");

  // Show auth buttons again
  document.getElementById("success-screen").classList.add("hidden");
  document.getElementById("auth-buttons").classList.remove("hidden");

  // Reload page to reset Google button
  location.reload();
}

// Check if user is already logged in on page load
document.addEventListener("DOMContentLoaded", function () {
  const savedUser = localStorage.getItem("google_user");
  if (savedUser) {
    const userData = JSON.parse(savedUser);
    showSuccessScreen(userData);
  }
});

// Update Google Client ID from input (for demo purposes)
function updateClientId() {
  const clientId = prompt("Введите ваш Google Client ID:");
  if (clientId) {
    // Update in the HTML
    const onloadDiv = document.getElementById("g_id_onload");
    onloadDiv.setAttribute("data-client_id", clientId);

    // Reload Google script
    location.reload();
  }
}
