import './style.css';
import makeMenu from './menu';
import makeContact from './contact';

function pageSetUp() {
  const title = document.createElement('div');
  title.classList.add('main-title');
  title.innerText = "Pally's Pizzas";
  const line = document.createElement('hr');
  title.appendChild(line);

  return title;
}

function tabsSetUp() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');
  const menu = document.createElement('div');
  menu.classList.add('nav-bar-item');
  menu.innerText = 'Menu';
  menu.addEventListener('click', () => {
    const getContent = document.querySelector('.contact');
    if (getContent) {
      getContent.parentElement.removeChild(getContent);
    }
    const getMenu = document.querySelector('.menu');
    if (!getMenu) {
      document.body.appendChild(makeMenu());
    }
  });
  navBar.appendChild(menu);
  const contact = document.createElement('div');
  contact.classList.add('nav-bar-item');
  contact.innerText = 'Contact';
  contact.addEventListener('click', () => {
    const getMenu = document.querySelector('.menu');
    if (getMenu) {
      getMenu.parentNode.removeChild(getMenu);
    }
    const getContact = document.querySelector('.contact');
    if (!getContact) {
      document.body.appendChild(makeContact());
    }
  });

  navBar.appendChild(contact);

  return navBar;
}

document.body.appendChild(pageSetUp());
document.body.appendChild(tabsSetUp());
const menu = makeMenu();
document.body.appendChild(menu);
