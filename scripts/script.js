const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const form = document.querySelector("form");

function checkPasswords() {
    if (password.value !== "" && password.value === confirmPassword.value) {
        form.classList.add("no-message");
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    } else {
        form.classList.remove("no-message");
        password.classList.add("error");
        confirmPassword.classList.add("error");
    }
}

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

