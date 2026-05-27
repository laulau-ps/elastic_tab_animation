const items = document.querySelectorAll('.nav-item');
const slider = document.getElementById('nav-slider');

items.forEach((item) => {
    item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        
        item.classList.add('active');

        const index = item.getAttribute('data-index');
        slider.style.left = (index * 20) + '%';
    });
});