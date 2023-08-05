import './style.css';

export default function createPageLayout() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const ul = document.createElement('ul');
    const body = document.createElement('div');
    const container = document.createElement('div'); 
    const footer = document.createElement('footer');
    const span = document.createElement('span');
    const a = document.createElement('a');


    header.classList.add('header');
    body.classList.add('body');
    container.classList.add('container');

    content.appendChild(header);
    for (let i = 0; i < 3; i++){
        const li = document.createElement('li');
        ul.appendChild(li);
    }
    header.appendChild(ul);
    const listItems = document.getElementsByTagName('li');
    listItems[0].textContent = 'Home'
    listItems[1].textContent = 'Menu'
    listItems[2].textContent = 'Contact'

    content.appendChild(body);
    body.appendChild(container);


    content.appendChild(footer);
    a.setAttribute('href', 'https://www.freepik.com/free-vector/blackboard-food-background_3773051.htm#query=food&position=47&from_view=keyword&track=sph')
    a.textContent = 'Freepik'
    span.textContent = 'Background image by ' 
    span.appendChild(a);
    footer.appendChild(span);

}