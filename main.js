function functionScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
var scrollButton = document.getElementById('scrollButton');
if (scrollButton) {
    scrollButton.addEventListener('click', functionScroll);
}
