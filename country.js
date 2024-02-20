// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYMlvgECeBjGsi-6eBlIS9EVrE5i91b_I",
    authDomain: "kwitter-ba86a.firebaseapp.com",
    databaseURL: "https://kwitter-ba86a-default-rtdb.firebaseio.com",
    projectId: "kwitter-ba86a",
    storageBucket: "kwitter-ba86a.appspot.com",
    messagingSenderId: "154487512514",
    appId: "1:154487512514:web:ad095e348757dee732ca5b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  
function logout() {
    localStorage.removeItem("user_name");
    window.location.replace("login.html");
}


function usa() {
    window.location = "usa.html";
  }

  
function india() {
    window.location = "india.html";
  }
  
function canada() {
  window.location = "canada.html";
}