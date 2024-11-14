function functionScroll(): void {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const scrollButton = document.getElementById('scrollButton');
if (scrollButton) {
    scrollButton.addEventListener('click', functionScroll);
}
