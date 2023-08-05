export default function addContactTabContent() {
    const container = document.querySelector('.container');
    const span = document.createElement('span');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    container.classList.remove('menu-grid');
    container.classList.add('contact');
    span.textContent = 'Contact Us';
    for (let i = 0; i < 2; i++){
        const li = document.createElement('li');
        ul.appendChild(li);
    }
    container.appendChild(span);
    container.appendChild(ul);
    const contactInfo = document.querySelectorAll('.contact > ul > li');
    contactInfo[0].textContent = 'Phone Number: 555-555-5555';
    contactInfo[1].textContent = 'Email: Restaurant123@email.com';
}