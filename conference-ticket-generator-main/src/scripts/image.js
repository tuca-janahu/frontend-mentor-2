export function imageInput() {
  const avatarImage = document.getElementById("avatar");
  const avatarSpot  = document.querySelector(".file-field .avatar-spot");
  const actions     = document.querySelector(".file-field .avatar-actions");
  const btnChange   = actions?.querySelector(".btn-change");
  const btnRemove   = actions?.querySelector(".btn-remove");

  if (!avatarImage || !avatarSpot) return;

  avatarSpot.replaceChildren();
  actions && (actions.hidden = true);
  sessionStorage.removeItem("avatarDataURL");

  avatarImage.addEventListener("change", () => {
    const file = avatarImage.files && avatarImage.files[0];
    if (!file) { clearPreview(); return; }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      const img = document.createElement("img");
      img.id = "avatar-preview";
      img.src = dataURL;           // tamanho controlado no CSS (100x100)
      avatarSpot.replaceChildren(img);
      actions && (actions.hidden = false);       // mostra botões
      sessionStorage.setItem("avatarDataURL", dataURL);
    };
    reader.readAsDataURL(file);
  });

  // ações
  btnChange && btnChange.addEventListener("click", (ev) => {
    ev.stopPropagation();
    avatarImage.click();
  });
  btnRemove && btnRemove.addEventListener("click", (ev) => {
    ev.stopPropagation();
    clearPreview();
  });

  function clearPreview(){
    avatarImage.value = "";
    avatarSpot.replaceChildren();          // volta ao :empty (mostra ícone + texto)
    actions && (actions.hidden = true);
    sessionStorage.removeItem("avatarDataURL");
  }
}


export function loadAvatarFromSession() {
	console.log("Tentando carregar avatar da sessão");
	if (document.getElementById("avatar")) return; // ✅ só carrega na segunda página

  const spot = document.querySelector('.avatar-spot');
  if (!spot) return;
	console.log("Carregando avatar da sessão");
  const dataURL = sessionStorage.getItem('avatarDataURL');
  if (!dataURL) { spot.innerHTML = ''; return; }

  const img = document.createElement('img');
  img.id = 'avatar-preview';
  img.width = 100;
  img.height = 100;
  img.src = dataURL;
  spot.replaceChildren(img);
}
