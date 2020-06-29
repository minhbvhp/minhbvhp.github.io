myBackToTop = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myBackToTop.style.display = "block";
    } else {
        myBackToTop.style.display = "none";
    }
}