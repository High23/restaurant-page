export default function addHomeTabContent() {
    const container = document.querySelector('.container');
    const description = document.createElement('div');
    const openHours = document.createElement('div');
    const location = document.createElement('div');
    const span = document.createElement('span');
    const h1 = document.createElement('h1');
    const about = document.createElement('h2');
    const openHoursH2 = document.createElement('h2');
    const locationH2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    
    container.classList.remove('menu-grid');
    container.classList.remove('contact');

    h1.textContent = 'Restaurant 123';
    container.appendChild(h1);

    description.classList.add('description');
    about.textContent = 'About'
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum orci ac semper suscipit. Donec vel elementum sem, nec facilisis risus. Fusce pretium ante non libero eleifend pulvinar. Cras laoreet eu urna laoreet hendrerit. Quisque efficitur dictum orci, sed placerat enim hendrerit sed. Integer vel finibus diam. Nulla fringilla justo quam, vel sollicitudin nulla faucibus vel. Nullam id nunc turpis. Vivamus lobortis velit lacinia magna volutpat pulvinar.';
    description.appendChild(about);
    description.appendChild(p);
    container.appendChild(description);

    openHours.classList.add('open-hours');
    openHoursH2.textContent = 'Open Hours'
    for (let i = 0; i < 7; i++){
        const li = document.createElement('li');
        ul.appendChild(li);
    }
    openHours.appendChild(openHoursH2)
    openHours.appendChild(ul);
    container.appendChild(openHours);
    const hoursList = document.querySelectorAll('.open-hours > ul > li');
    hoursList[0].textContent = 'Sunday: 10am - 9pm'
    hoursList[1].textContent = 'Monday: 11am - 10pm'
    hoursList[2].textContent = 'Tuesday: 11am - 10pm'
    hoursList[3].textContent = 'Wednesday: 11am - 10pm'
    hoursList[4].textContent = 'Thursday: 11am - 9pm'
    hoursList[5].textContent = 'Friday: 11am - 11pm'
    hoursList[6].textContent = 'Saturday: 11am - 11pm'
    

    location.classList.add('location');
    locationH2.textContent = 'Location';
    span.textContent = '123 Plae Grownd Stret';
    location.appendChild(locationH2);
    location.appendChild(span);
    container.appendChild(location);
}