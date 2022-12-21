import ny from './assets/ny_1.jpg'
import pp from './assets/pulled-pork-pizza_1.jpg'
import pepper from './assets/pepperoni-pizza.jpg'

export default function makeMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu')

    let left = true;
    const pizzas = [
        {image:ny, name:"New York Pizza",  desc:"Cheese and tomata!"},
        {image:pp, name:"Pulled Pork",  desc:"Good piggy!"},
        {image:pepper, name:"Pepperoni",  desc:"Spicy piggy!"}]
    console.log(pizzas)
    pizzas.forEach(element => {
        const item = document.createElement('div');
        item.classList.add('menu-item')
        item.classList.add(left?'left':'right')
        left = !left

        const item_column = document.createElement('div')
        const item_title = document.createElement('div')
        item_title.classList.add('menu-item-title')
        item_title.innerText = element.name
        item_column.appendChild(item_title)

        const text = document.createElement('div')
        text.classList.add('menu-item-text')
        text.innerText = element.desc
        item_column.appendChild(text)

        item.appendChild(item_column)
        
        const img = document.createElement('img')
        img.src = element.image
        item.appendChild(img)

        menu.appendChild(item)
    
    });
    console.log(menu)
    return menu;
}