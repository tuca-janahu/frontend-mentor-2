
export function correcaoGitHub() {
  const github = document.getElementById("github");
  const form = document.querySelector("form");

  if (!github || !form) return;
  
  form.addEventListener("submit", function (event) {
    const valor = github.value.trim();

    if (!valor.startsWith("@")) {
      event.preventDefault(); // cancela envio
      github.value = "@" + valor;
    } else {
      console.log("GitHub válido!");
    }
  });
}