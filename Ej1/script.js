// script.js
document.addEventListener('DOMContentLoaded', () => {
    const greenRectangle = document.querySelector('.green');

    greenRectangle.addEventListener('click', () => {
        greenRectangle.style.background = greenRectangle.style.background === 'lime' ? 'orange' : 'lime';
        greenRectangle.classList.toggle('move');
    });
});
