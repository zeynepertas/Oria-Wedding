let counter = 0;
const back = document.querySelector('#back');
const next = document.querySelector('#next');
const slider = document.querySelector('#slider');
const max = document.querySelectorAll('.slide').length - 1;

next.addEventListener ('click', () => {
    if (counter < max) {
        counter++;
        slider.style.left = '-' + 100 * counter + '%';
    } else {
        counter = 0;
        slider.style.left = '-' + 100 * counter + '%';
    }
});

back.addEventListener('click', () => {

    if (counter >= 0) {
        counter--;
        slider.style.left = '-' + 100 * counter + '%';
    }
});