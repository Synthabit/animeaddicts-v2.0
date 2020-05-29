var hamburger = document.getElementById("nav-hamburger");
var rectangles = hamburger.getElementsByTagName("rect");
var navList = document.getElementsByClassName("nav-list")[0];

var clicked = false;

hamburger.addEventListener("click", hamburgerOnClick);

function hamburgerOnClick() {
    clicked = !clicked;
    if (clicked) {
        Object.assign(hamburger.style, {
            // background: "#cabfe9"
            background: "#99ffff"
        });
        for (var i = 0; i < rectangles.length; ++i) {
            Object.assign(rectangles[i].style, {
                fill: "#003838"
            });
        }
    } else {
        Object.assign(hamburger.style, {
            background: ""
        });
    
        for (var i = 0; i < rectangles.length; ++i) {
            Object.assign(rectangles[i].style, {
                fill: "#99ffff"
            });
        }
    }
    navList.classList.toggle("active");
}