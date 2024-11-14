const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menubar");

const hideMenubar = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
};

// const showMenu = () => {
//   if (window.innerWidth >= 650) {
//     menu.classList.remove("hidden");
//   }
// };
// if (window.innerWidth < 650) {
//   hideMenubar();
// }
let triggred = false;
// window.onresize = () => {
//   showMenu();
//   if (window.innerWidth < 650 && !triggred) {
//     hideMenubar();
//     triggred = true;
//   }
// };

btn.addEventListener("click", hideMenubar);