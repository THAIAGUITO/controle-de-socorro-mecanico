var ver_senha = document.getElementsByClassName("fa-eye")[0];
ver_senha.addEventListener('click', clicar);

function clicar() {
    var input_senha = document.getElementById("password_user");
    if (input_senha.type === "password") {
        input_senha.type = "text";
        ver_senha.classList.remove("fa-eye");
        ver_senha.classList.add("fa-eye-slash");
    } else {
        input_senha.type = "password";
        ver_senha.classList.remove("fa-eye-slash");
        ver_senha.classList.add("fa-eye");
    }
}