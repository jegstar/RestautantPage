import ny from './assets/ny_1.jpg';
import pp from './assets/pulled-pork-pizza_1.jpg';
import pepper from './assets/pepperoni-pizza.jpg';

export default function makeMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  let left = true;
  const pizzas = [
    { image: ny, name: 'New York Pizza', desc: 'Cheese and tomata!' },
    { image: pp, name: 'Pulled Pork', desc: 'Good piggy!' },
    { image: pepper, name: 'Pepperoni', desc: 'Spicy piggy!' },
  ];

  pizzas.forEach((element) => {
    const item = document.createElement('div');
    item.classList.add('menu-item');
    item.classList.add(left ? 'left' : 'right');
    left = !left;

    const itemColumn = document.createElement('div');
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('menu-item-title');
    itemTitle.innerText = element.name;
    itemColumn.appendChild(itemTitle);

    const text = document.createElement('div');
    text.classList.add('menu-item-text');
    text.innerText = element.desc;
    itemColumn.appendChild(text);

    item.appendChild(itemColumn);

    const img = document.createElement('img');
    img.src = element.image;
    item.appendChild(img);

    menu.appendChild(item);
  });
  return menu;
}
