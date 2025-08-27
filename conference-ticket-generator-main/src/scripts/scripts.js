import { correcaoGitHub } from './corrections.js';
import { validarAvatar } from './validations.js';
import { validacaoGithub } from './validations.js';



// garante que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function () {
  correcaoGitHub();
  //validacaoGithub();
  validarAvatar();
  registrarSubmit();


});
