const hidesidebar = document.getElementById("hidesidebar");
const showsidebar = document.getElementById("showsidebar");

hidesidebar.onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}
showsidebar.onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}