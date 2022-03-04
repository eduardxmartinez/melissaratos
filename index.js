const button = document.querySelector(".top-button");

button.addEventListener("click", top);

function top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}