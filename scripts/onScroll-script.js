var navbar = null;

var curIndex = -1;
var prevIndex = -1;

document.addEventListener("DOMContentLoaded", function() {
    navbar = document.getElementsByClassName("nav")[0];
});

window.addEventListener('scroll', debounce(function() {
    colorNav();
}));

// Utility function that runs a given function once every 20 ms
function debounce(func, wait = 16, immediate = true) {
    var timeout; 
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callnow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callnow) func.apply(context, args);
    };
}

function colorNav() {
    var color = window.pageYOffset >= 200 ? "#000000" : "#00000075";
    Object.assign(navbar.style, {background: color});
}