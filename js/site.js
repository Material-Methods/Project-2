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

    var expandables = document.getElementsByClassName("accordion");
    for (var i = 0; i < expandables.length; i++) {
        expandables[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

})();