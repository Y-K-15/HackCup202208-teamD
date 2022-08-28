"use script";

// overlay_menu全体をクリックで表示します。
// リストの要素３つは、
// 下から出てくるアニメーションと
// ディレイをかけて表示します。

{
  const open = document.getElementById("buttonToOpen");
  const overlayMenu = document.querySelector(".overlay_menu");
  const close = document.getElementById("buttonToClose");

  open.addEventListener("click", () => {
    overlayMenu.classList.remove("hide");
  });

  close.addEventListener("click", () => {
    overlayMenu.classList.add("hide");
  });
}
