export function validarAvatar () {
  const avatar = document.getElementById("avatar");
  const form = document.querySelector("form");
  const aviso = document.querySelector("#avisoAvatar");

  if (!avatar || !form) return;
  
  form.addEventListener("submit", function (event) {
    const file = avatar.files[0];

     if (!file) {
      event.preventDefault();
      aviso.textContent = "Selecione um arquivo de avatar.";
      aviso.classList.add("active");
      avatar.focus();

      const MAX_SIZE = 500 * 1024; 
    
     } else if (file.size > MAX_SIZE) { 
      event.preventDefault();
      aviso.textContent = "O arquivo de avatar deve ser menor que 500KB.";
      aviso.classList.add("active");
      avatar.focus(); 
    }  else if (file.type !== "image/png" && file.type !== "image/jpeg") {
      event.preventDefault(); 
      aviso.textContent = "O arquivo de avatar deve ser PNG ou JPG.";
      aviso.classList.add("active");
      avatar.focus(); // coloca o cursor de volta no campo
    } else {
      aviso.textContent = ""; 
      aviso.classList.remove("active");
    }});

  avatar.addEventListener('change', () => {
    const avatar = document.getElementById("avatar");
  });
}

export function validacaoGithub() {
  const form = document.querySelector("form");
  const github = document.getElementById("github");
  const aviso = document.querySelector("#avisoGitHub");

  if (!form || !github) return;
  
  form.addEventListener("submit", function (event) {
    const valor = github.value.trim();

    if (!valor.startsWith("@")) {
      event.preventDefault(); // cancela envio
      aviso.textContent = "O usuário do GitHub deve começar com @";
      aviso.classList.add("active");
      github.focus(); // coloca o cursor de volta no campo
    } else {
      aviso.textContent = ""; // limpa mensagem de erro
      aviso.classList.remove("active");
    }
  });
}

export function validarNome() {
  const nome = document.getElementById("nome");
  const form = document.querySelector("form");  
  const aviso = document.querySelector("#avisoNome");

  if (!nome || !form) return;

  form.addEventListener("submit", function (event) {
    const valor = nome.value.trim();

    if (!valor.includes(" ")) {
      event.preventDefault(); // cancela envio
      aviso.textContent = "Por favor, insira seu nome completo.";
      aviso.classList.add("active");

      // alert("Por favor, insira seu nome completo.");
      nome.focus(); // coloca o cursor de volta no campo
    } else {
      console.log("Nome válido!");
      aviso.textContent = ""; // limpa mensagem de erro
      aviso.classList.remove("active");
    }
  });
}