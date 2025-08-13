
const Showsidebar = document.querySelector(".Showsidebar");
const Hidesidebar = document.querySelector(".Hidesidebar");

Showsidebar.onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex"
}
Hidesidebar.onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none"
}