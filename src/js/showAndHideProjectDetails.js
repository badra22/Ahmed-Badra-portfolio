document.querySelectorAll('.project-img-container').forEach(function(div) {
    div.addEventListener('click', function() {
        document.querySelector('.project-overlay').classList.toggle('overlay-active');
        document.querySelector('body').classList.toggle('freeze-scroll');
    });
});

document.querySelectorAll('.close-button').forEach(function(div) {
    div.addEventListener('click', function() {
        document.querySelector('.project-overlay').classList.toggle('overlay-active');
        document.querySelector('body').classList.toggle('freeze-scroll');
    });
});

document.querySelectorAll('.project-header').forEach(function(div) {
    div.addEventListener('click', function() {
        document.querySelector('.project-overlay').classList.toggle('overlay-active');
        document.querySelector('body').classList.toggle('freeze-scroll');
    });
});

const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', function() {
    document.querySelector('#page-tabs').classList.toggle('hide-nav-tabs');
})