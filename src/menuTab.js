import './style.css';

export default function addMenuTabContent() {
    const container = document.querySelector('.container');

    container.classList.remove('contact');
    container.classList.add('menu-grid');
    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.classList.add('food');

        const img = document.createElement('img');
        img.setAttribute('alt', 'Image of food')

        const span = document.createElement('span');
        span.textContent = `Food ${i + 1}`;

        div.appendChild(img);
        div.appendChild(span);
        container.appendChild(div);
    }
}