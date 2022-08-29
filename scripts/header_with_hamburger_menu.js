"use script";

// START HEADER 
{
  const openButton = document.getElementById("buttonToOpen");
  const overlayMenu = document.querySelector(".overlay_menu");
  const closeButton = document.getElementById("buttonToClose");

  openButton.addEventListener("click", () => {
    overlayMenu.classList.add("show");
    openButton.classList.add("hide");
  });

  closeButton.addEventListener("click", () => {
    overlayMenu.classList.remove("show");
    openButton.classList.remove("hide");
  });
}
// END HEADER 