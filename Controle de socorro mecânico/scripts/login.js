var ver_senha = document.getElementsByClassName("fa-eye")[0];
ver_senha.addEventListener("click", clicar);

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

const usuarioInput = document.getElementById("usuario");
const senhaInput = document.getElementById("password_user");
const entrar = document.getElementById("botao_login");

entrar.addEventListener("click", () => {
  // 1. Busca a lista de funcionários do localStorage
  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  // 2. Percorre o array procurando um funcionário que bata os dois campos se encontrar, retorna o objeto do funcionário encontrado, caso contrário retorna undefined
  const funcionarioEncontrado = funcionarios.find(
    (f) => f.usuario === usuarioInput.value && f.senha === senhaInput.value,
  );

  // 3. Valida
  if (funcionarioEncontrado) {
    sessionStorage.setItem(
      "usuarioLogado",
      JSON.stringify(funcionarioEncontrado),
    );

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Login efetuado com sucesso!",
      text: "Redirecionando...",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      background: "#1e1e1e",
      color: "#ffffff",
      width: "400px",
      didOpen: (toast) => {
        const progressBar = toast.querySelector(".swal2-timer-progress-bar");
        if (progressBar) {
          progressBar.style.backgroundColor = "#28a745";
        }
      },
    }).then(() => {
      window.location.href = "../index.html";
    });
  } else {
    Swal.fire({
      position: "top",
      icon: "error",
      title: "Usuário ou senha incorretos!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      toast: true,
      background: "#1e1e1e",
      color: "#ffffff",
      width: "400px",
    });

    const senhaIncorreta = document.querySelector(".caixa_senha_incorreta");
    if (senhaIncorreta) {
      senhaIncorreta.style.display = "flex";
    }
  }
});
