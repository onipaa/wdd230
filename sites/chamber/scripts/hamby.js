function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamby = document.getElementsByClassName("hamby")[0];

  if (dropdownMenu.style.display === "none") {
      dropdownMenu.style.display = "grid";
      hamby.classList.add("active");
  } else {
      dropdownMenu.style.display = "none";
      hamby.classList.remove("active");
  }
}