import message from "./ts.ts";
import Dude from 'Assets/6.jpg';
import './style.css';
import './sass.scss';

function component() {
    var element = document.createElement('div');
    element.innerHTML = message;
    element.classList.add('hello');
    var someDude = document.createElement('img');
    someDude.src = Dude;
    element.appendChild(someDude);
    return element;
}

document.body.appendChild(component());
