const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
        {
            id: 1,
            name: 'Quantum Quinoa Mushroom Burger',
            price: 13.00,
            rating: 4,
            category: 'mains',
            details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
        },
        {
            id: 2,
            name: 'Binary Berry Cheesecake',
            price: 10.11,
            rating: 3,
            category: 'desserts',
            details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
        },
        {
            id: 3,
            name: 'Recursive Rigatoni',
            price: 17.00,
            rating: 5,
            category: 'mains',
            details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
        },
        {
            id: 4,
            name: 'Pumpkin Pi Squared',
            price: 3.14,
            rating: 5,
            category: 'desserts',
            details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
        },
        {
            id: 5,
            name: 'Fibonacci String Bean Fries',
            price: 11.23,
            rating: 5,
            category: 'sides',
            details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
        }
    ]
}


const express = require('express');
const app = express();

/* Exercise 1: Create a homepage
 */
app.get('/', (req, res) => {
    res.render('home.ejs');
});


/* Exercise 2: Create a nav bar
 */

app.get('/menu', (req, res) => {
    const dessertsArray = RESTAURANT.menu.filter((item) => item.category == "desserts");
    const sidesArray = RESTAURANT.menu.filter((item) => item.category == "sides");
    const mainsArray = RESTAURANT.menu.filter((item) => item.category == "mains");

    res.render('menu.ejs', {
        menus: {
            "desserts": dessertsArray,
            "sides": sidesArray,
            "mains": mainsArray
        }
    });
});

/* Exercise 3: Create a separate page for menu categories
alternative reusing the menu.ejs 
app.get('/menu/:category', (req, res) => {
    const category= req.params.category;
    const array = RESTAURANT.menu.filter((item) => item.category ==  category );
    res.render('menu.ejs', {
        menus: {
            [category]: array,
        }
    });
});
 */


app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    const array = RESTAURANT.menu.filter((item) => item.category == category);
    res.render('category.ejs', {
        name: category,
        menu: array,
    });
});
app.listen(3000);
