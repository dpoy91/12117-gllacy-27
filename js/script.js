var link = document.querySelector("#feedback-form");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback__close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("opened");
    
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("opened");
    popup.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("opened")) {
        popup.classList.remove("opened");
        popup.classList.remove("feedback-error");
    }
    }
});