(function () {
    var proj_list = document.getElementById("nav-proj-list");
    proj_list.style.display = "none";
    var proj_nav = document.getElementById("nav-pro");
    proj_nav.addEventListener('mouseenter', function () {
        proj_list.style.display = "flex";
    });
    proj_nav.addEventListener('mouseleave', function () {
        proj_list.style.display = "none";
    });
})();