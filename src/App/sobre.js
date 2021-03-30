import img from './img/foto.jpg';

const textComponent = () => {
    let elh1 = document.createElement('h1');
    elh1.innerHTML = 'Hello world in ABOUT PAGE';
    elh1.classList.add('title');
    return elh1;
}

document.body.appendChild(textComponent());