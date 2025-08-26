// function validacaoGithub() {
//   const form = document.querySelector("form");
//   const github = document.getElementById("github");
//   const aviso = document.querySelector(".avisoGitHub");

//   form.addEventListener("submit", function (event) {
//     const valor = github.value.trim();

//     if (!valor.startsWith("@")) {
//       event.preventDefault(); // cancela envio
//       aviso.textContent = "O usuário do GitHub deve começar com @";
//       aviso.classList.add("active");
//       github.focus(); // coloca o cursor de volta no campo
//     } else {
//       aviso.textContent = ""; // limpa mensagem de erro
//       aviso.classList.remove("active");
//     }
//   });
// }

function correcaoGitHub() {
  const github = document.getElementById("github");
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const valor = github.value.trim();

    if (!valor.startsWith("@")) {
      event.preventDefault(); // cancela envio
      github.value = "@" + valor; // adiciona @ no início
    }
  });
}

function validarAvatar () {
  const avatar = document.getElementById("avatar");
  const form = document.querySelector("form");
  const aviso = document.querySelector(".avisoAvatar");

  form.addEventListener("submit", function (event) {
    const file = avatar.files[0];

     if (!file) {
      event.preventDefault();
      aviso.textContent = "Selecione um arquivo de avatar.";
      aviso.classList.add("active");
      avatar.focus();
    
     } else if (file.size > 100000) { // 500KB
      event.preventDefault(); // cancela envio
      aviso.textContent = "O arquivo de avatar deve ser menor que 500KB.";
      aviso.classList.add("active");
      avatar.focus(); // coloca o cursor de volta no campo
    }  else if (file.type !== "image/png" && file.type !== "image/jpeg") {
      event.preventDefault(); // cancela envio
      aviso.textContent = "O arquivo de avatar deve ser PNG ou JPG.";
      aviso.classList.add("active");
      avatar.focus(); // coloca o cursor de volta no campo
    } else {
      aviso.textContent = ""; 
      aviso.classList.remove("active");
    }});
}


// garante que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function () {
  correcaoGitHub();
  //validacaoGithub();
  validarAvatar();
});
