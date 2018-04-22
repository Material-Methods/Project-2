(function () {

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