import { correcaoGitHub } from './corrections.js';
import { validarAvatar } from './validations.js';
import { validarNome } from './validations.js';
import { validacaoGithub } from './validations.js';
import { imageInput } from './image.js';
import { loadAvatarFromSession } from './image.js';


document.addEventListener("DOMContentLoaded", function () {
  correcaoGitHub();
  //validacaoGithub();
  validarAvatar();
  validarNome();
  imageInput();
  loadAvatarFromSession();

});
