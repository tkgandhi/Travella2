function logout() {
    localStorage.removeItem("user_name");
    window.location.replace("login.html");
}