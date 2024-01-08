document.getElementById("navsection").addEventListener("click", navfunc);

function navfunc() {
  document.getElementById("line1").classList.toggle("cross");
  document.getElementById("line2").classList.toggle("cross");
  document.getElementById("line3").classList.toggle("cross");
  document.getElementById("navsection").classList.toggle("cross");
  document.getElementById("nav-link").classList.toggle("cross");
}
