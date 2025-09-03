let tamanhoFonte = 1;

document.getElementById("aumenta-fonte").addEventListener("click", function () {
  tamanhoFonte += 0.1;
  document.body.style.fontSize = `${tamanhoFonte}rem`;
});

document.getElementById("alterna-contraste").addEventListener("click", function () {
  document.body.classList.toggle("alto-contraste");
});
