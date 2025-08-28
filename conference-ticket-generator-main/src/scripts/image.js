export function imageInput() {
  const avatarImage = document.getElementById("avatar");
  const avatarSpot = document.querySelector(".avatar-spot");

  if (!avatarImage || !avatarSpot) return;

	avatarSpot.replaceChildren();
	sessionStorage.removeItem("avatarDataURL");

  avatarImage.addEventListener("change", (event) => {
    const file = avatarImage.files && avatarImage.files[0];

    if (!file) {
        console.log("Nenhum arquivo selecionado");
      avatarSpot.classList.add("inactive");
      sessionStorage.removeItem("avatarDataURL");
      return;
    }

    const preview = avatarSpot.querySelector("#avatar-preview");
    if (preview) preview.remove();

    const reader = new FileReader();
    reader.onload = function (e) {
      console.log("Arquivo carregado");

      const previewImage = document.createElement("img");

      previewImage.width = 100;
      previewImage.height = 100;
      previewImage.id = "avatar-preview";
      previewImage.src = e.target.result;


			
			const dataURL = e.target.result; 
      sessionStorage.setItem("avatarDataURL", dataURL); 
      previewImage.src = dataURL;

      avatarSpot.replaceChildren(previewImage);


    };

    reader.readAsDataURL(file);
  });
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
