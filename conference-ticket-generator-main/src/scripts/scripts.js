import { correcaoGitHub } from './corrections.js';
import { validarAvatar } from './validations.js';
import { validarNome } from './validations.js';
import { validarNomeToasty } from './validations.js';
import { validacaoGithub } from './validations.js';
import { imageInput } from './image.js';
import { loadAvatarFromSession } from './image.js';


document.addEventListener("DOMContentLoaded", function () {
  correcaoGitHub();     // função que corrige automaticamente o campo do GitHub
  // validacaoGithub(); // descomentar para ver a função de validação do github
  validarAvatar();      // função de validação de avatar
  // validarNome();     // descomentar para ver a função de validação simples (alert e aviso em página)
  validarNomeToasty();  // função de validação com Toastify
  imageInput();         // função para manipulação do input de imagem
  loadAvatarFromSession(); // função para carregar o avatar da sessão

});
