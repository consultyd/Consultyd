const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

/*Para configurar o botão menu de redimencionamento*/
let menu = document.querySelector("#menu-icon");
let navilist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navilist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navilist.classList.remove("open");
};
