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
            for (var j = 0; j < expandables.length; j++) {
                var item = expandables[j];
                if(!this.isEqualNode(item) && item.classList.contains("active")) {
                    item.classList.toggle("active");
                    var itemPanel = item.nextElementSibling;
                    itemPanel.style.display = "none";
                }
            }
        });
    }

})();