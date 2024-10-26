document.querySelector('.svg-container').addEventListener('click', function() {
    this.classList.toggle('opened');
    document.querySelector('.aContainer').classList.toggle('active');
});