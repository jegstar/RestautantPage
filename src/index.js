import './style.css';
import makeMenu from './menu';

function page_set_up() {
    const title = document.createElement('div');
    title.classList.add('main-title');
    title.innerText = "Pally's Pizzas"
    const line = document.createElement('hr');
    title.appendChild(line)

    return title    
}


document.body.appendChild(page_set_up());
document.body.appendChild(makeMenu());