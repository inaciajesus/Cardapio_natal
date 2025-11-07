
// Mostrar botão ao rolar
window.onscroll = function () {
  const btn = document.getElementById("btn-top");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Voltar ao topo ao clicar
document.getElementById("btn-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


