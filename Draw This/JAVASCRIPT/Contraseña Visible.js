document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = (passwordInput, eyeIcon) => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        eyeIcon.classList.toggle("fa-eye-slash", passwordInput.type === "password");
        eyeIcon.classList.toggle("fa-eye", passwordInput.type === "text");
    };

    // Primer formulario
    const passwordInput1 = document.getElementById("passwordInput");
    const eyeIcon1 = document.getElementById("togglePassword1");

    eyeIcon1.addEventListener("click", () => {
        togglePassword(passwordInput1, eyeIcon1);
    });

    // Segundo formulario
    const passwordInput2 = document.getElementById("password");
    const eyeIcon2 = document.getElementById("togglePassword2");

    eyeIcon2.addEventListener("click", () => {
        togglePassword(passwordInput2, eyeIcon2);
    });
    
    togglePassword1(passwordInput1, eyeIcon1);
    togglePassword2(passwordInput2, eyeIcon2);
});
