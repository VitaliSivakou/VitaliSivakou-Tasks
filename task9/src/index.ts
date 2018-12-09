import {hello as message, Dude} from "./hello.js";
//import Dude from './img.jpg';
import './style.css';
import './sass.scss';

function component(): HTMLElement {
    var element: HTMLElement = document.createElement('div');
    element.innerHTML = `<p>${message}</p>`;
    element.classList.add('hello');
    var someDude: HTMLImageElement = document.createElement('img');
    someDude.src = Dude;
    element.appendChild(someDude);
    return element;
}

document.body.appendChild(component());
