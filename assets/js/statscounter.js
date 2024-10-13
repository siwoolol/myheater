const dialog = document.querySelectorAll("dialog");
const showButton1 = document.getElementsByClassName("show-dialog1");
const showButton2 = document.getElementsByClassName("show-dialog2");
const closeButton1 = document.getElementsByClassName("close-dialog1");
const closeButton2 = document.getElementsByClassName("close-dialog2");

// Stats
showButton1.addEventListener("click", () => {
    var plus = localStorage.getItem('+')
    var minus = localStorage.getItem('-')
    document.querySelector('.plusCount').innerHTML = plus || '0'
    document.querySelector('.minusCount').innerHTML = minus || '0'
    dialog[0].showModal();
});

closeButton1.addEventListener("click", () => {
    dialog[0].close();
});

// About
showButton2.addEventListener("click", () => {
    dialog[1].showModal();
});

closeButton2.addEventListener("click", () => {
    dialog[1].close();
});