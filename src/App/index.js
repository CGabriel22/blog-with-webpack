import './sass/style.sass';
import img from './img/foto.jpg';

const textComponent = () => {
    let elh1 = document.createElement('h1');
    elh1.innerHTML = 'Hello world in INDEX PAGE';
    elh1.classList.add('title');
    return elh1;
}

const imgComponent = () => {
    let elImg = new Image();
    elImg.src = img;
    return elImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());