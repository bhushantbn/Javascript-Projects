let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let sidemenu = document.querySelector("#sidemenu");

menu.onclick = toggleSideBar;
close.onclick = toggleSideBar;

function toggleSideBar() {
	sidemenu.classList.toggle("hidden");
}
console.log(menu);