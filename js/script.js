function btnMenu() {
  var hlop = document.getElementById("navbar");
  if (hlop.classList.contains('invisible')) {
      hlop.classList.add("visible");
      hlop.classList.remove("invisible");
  } else if (navbar.classList.contains('visible')) {
    hlop.classList.remove("visible");
      hlop.classList.add("invisible");
  }
}