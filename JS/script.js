// Sticky Navbar
window.addEventListener("scroll", function () {
  var haeder = this.document.querySelector("header");
  haeder.classList.toggle("sticky", window.scrollY > 0);
});
