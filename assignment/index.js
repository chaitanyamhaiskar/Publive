// Redirect to main page after 3 seconds
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    location.href = "main.html";
}, 3000);