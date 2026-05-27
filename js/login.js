const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {

        // ✅ IMPORTANT: SAME KEY everywhere
        localStorage.setItem("CarePlus_User", email);

        // ✅ redirect to home
        window.location.href = "index.html";

    } else {
        alert("Please enter email and password");
    }
});