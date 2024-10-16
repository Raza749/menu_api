const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());




// Create Menu Data

const menuItems = [
    {
        category: "Bhook Ka The End!",
        items: [
            {
                id: 1,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1726048358599-Bazooka%20400x400.jpg&w=1920&q=75",
                name: "Bazooka",
                descriptoin: "Tender, spicy chicken strips paired with mayo, pickles, jalapeños, and signature.",
                price: 630,
            }
        ]
    },
    {
        category: "Starters",
        items: [
            {
                id: 2,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269794825-Cheezy%20Sticks.jpg&w=1920&q=75",
                name: "Cheezy Sticks",
                description: "Freshly baked bread filled with the yummiest Cheese blend to satisfy your cravin...",
                price: 630,
            },
            {
                id: 3,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269753904-Oven%20Baked%20Wings.jpg&w=1920&q=75",
                name: "Oven Baked Wings",
                description: "Fresh Oven baked wings served with Dip Sauce.",
                price: 600,
            },
            {
                id: 4,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269662339-Flaming%20Wings.jpg&w=1920&q=75",
                name: "Flaming Wings",
                description: "Fresh oven baked wings tossed in hot Peri Peri Sauce and served with Dip Sauce. ...",
                price: 650,
            },
            {
                id: 5,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269461437-Calzone%20Chunks.jpg&w=1920&q=75",
                name: "Calzone Chunks",
                description: "4 pcs Stuffed Calzone Chunks served with Sauce & Fries.",
                price: 1150,
            },
            {
                id: 6,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269423161-Arabic%20Rolls.jpg&w=1920&q=75",
                name: "Arabic Rolls",
                description: "4 pcs Arabic Rolls stuffed with the yummiest mix served with sauce.",
                price: 690,
            },
            {
                id: 7,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269388240-Behari%20Rolls.jpg&w=1920&q=75",
                name: "Behari Rolls",
                description: "4 pcs Behari Rolls stuffed with the yummiest mix served with sauce.",
                price: 690,
            },
        ]
    },
    {
        category: "Somewhat Local",
        items: [
            {
                id: 8,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725270027718-Chicken%20Tikka.jpg&w=1920&q=75",
                name: "Chicken Tikka",
                description: "Tender chunks of Marinated Grilled Chicken with Savory Onion.",
                price: 690,
            },
            {
                id: 9,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725270011643-Chicken%20Fajita.jpg&w=1920&q=75",
                name: "Chicken Fajita",
                description: "An authentic taste of fajita marinated Chicken, Onion and Bell Peppers.",
                price: 690,
            },
            {
                id: 10,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269994656-Chicken%20Lover.jpg&w=1920&q=75",
                name: "Chicken Lover",
                description: "Extreme quantity of Chicken and Onion with rich Mozzarella Cheese.",
                price: 690,
            },
            {
                id: 11,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269980123-Chicken%20Tandoori.jpg&w=1920&q=75",
                name: "Chicken Tandoori",
                description: "Our traditionally developed Tandoori Chicken with Onion, Olives, Jalapeno and To...",
                price: 690,
            },
            {
                id: 12,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269939300-Hot%20N%20Spicy.jpg&w=1920&q=75",
                name: "Hot n Spicy",
                description: "Hot and Spicy Chicken Onion with Jalapeno.",
                price: 690,
            },
            {
                id: 13,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269865850-Vegetable%20Pizza.jpg&w=1920&q=75",
                name: "Vegetable Pizza",
                description: "Vegetables with Pizza Sauce and Cheese.",
                price: 690,
            },
        ]
    },
    {
        category: "Somewhat Sooper",
        items: [
            {
                id: 14,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269894493-Euro.jpg&w=1920&q=75",
                name: "Euro",
                description: "A delightful combination of specially Marinated Smoked Chicken with Bell Pepper,...",
                price: 690,
            },
            {
                id: 15,
                image: "A delightful combination of specially Marinated Smoked Chicken with Bell Pepper,...",
                name: "Chicken Supreme",
                description: "A combination of 3 Flavors of Chicken, Black Olives, Mushrooms, Bell Pepper and ...",
                price: 690,
            },
            {
                id: 16,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269770447-Black%20Pepper%20Tikka.jpg&w=1920&q=75",
                name: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269770447-Black%20Pepper%20Tikka.jpg&w=1920&q=75",
                description: "A Blend of Marinated Black Pepper Chicken, Onion and Bell Pepper.",
                price: 690,
            },
            {
                id: 17,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269707709-Chicken%20Mushroom.jpg&w=1920&q=75",
                name: "Chicken Mushroom",
                description: "Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and T...",
                price: 690,
            },
            {
                id: 18,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269484029-Sausage%20Pizza.jpg&w=1920&q=75",
                name: "Sausage Pizza",
                description: "Chicken Sausages, Pizza Sauce, and Cheese.",
                price: 690,
            },
            {
                id: 19,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269405669-Cheese%20Lover%20Pizza.jpg&w=1920&q=75",
                name: "Cheese Lover Pizz...",
                description: "Yummiest Blend of Cheese and Pizza Sauce",
                price: 690,
            },
            {
                id: 20,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269284236-Chicken%20pepperoni.jpg&w=1920&q=75",
                name: "Chicken Pepperoni...",
                description: "Chicken Pepperoni, Pizza Sauce and Cheese.",
                price: 690,
            },
        ]
    },
    {
        category: "Cheezy Treats",
        items: [
            {
                id: 21,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269964504-Cheezious%20Special.jpg&w=1920&q=75",
                name: "Cheezious Special...",
                description: "Delicious Special Chicken with Black Olives, Sausages and Bell Pepper.",
                price: 1550,
            },
            {
                id: 22,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269912414-Behari%20Kebab.jpg&w=1920&q=75",
                name: "Behari Kebab",
                description: "Enjoy Special Chicken Behari Kabab, Grilled Chicken with Onion Jalapenos and Gin...",
                price: 1550,
            },
            {
                id: 23,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269848869-Chicken%20Extreme.jpg&w=1920&q=75",
                name: "Chicken Extreme",
                description: "Combination of 3 Flavors of Chicken with Onion Bell Pepper, Green Olives, Mushro...",
                price: 1550,
            },
            {
                id: 24,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242477028-Small%20Pizza%20Deal.jpg&w=1920&q=75",
                name: "Small Pizza Deal",
                description: "Any Flavor from Local Love Or Over the Sea Flavor Category & 1 Soft Drink.",
                price: 750,
            },
            {
                id: 25,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242395788-Regular%20Pizza%20Deal.jpg&w=1920&q=75",
                name: "Regular Pizza Dea...",
                description: "1 Regular Pizza and 2 Regular Drinks.",
                price: 1450,
            },
            {
                id: 26,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242380336-Large%20Pizza%20Deal.jpg&w=1920&q=75",
                name: "Large Pizza Deal",
                description: "Any Flavor from Local Love or Over the Sea Flavor Category & 1 Liter Drink.",
                price: 1990,
            }
        ]
    },
    {
        category: "Sandwiches & Platters",
        items: [
            {
                id: 27,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269682694-Special%20Roasted%20Platter.jpg&w=1920&q=75",
                name: "Special Roasted ...",
                description: "4 pcs Behari Rolls, 6 pcs Wings Served with Fries & Sauce.",
                price: 1200,
            },
            {
                id: 28,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269630450-Mexican%20Sandwich.jpg&w=1920&q=75",
                name: "Mexican Sandwich",
                description: "Mozzarella Dipped Chicken Topped with Garlic Sauce and Tomatoes Served in Baked ...",
                price: 920,
            },
            {
                id: 29,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269598878-Pizza%20Stacker.jpg&w=1920&q=75",
                name: "Pizza Stacker",
                description: "A unique blend of Delicious Sauce, Crispy Chicken and Pizza Crust.",
                price: 920,
            },
            {
                id: 30,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269366179-Euro%20Sandwich.jpg&w=1920&q=75",
                name: "Euro Sandwich",
                description: "Mozzarella Dipped Black Pepper Chicken topped with Garlic Sauce, Pineapples and ...",
                price: 920,
            },
            {
                id: 31,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724240306094-Roll%20Platter.jpg&w=1920&q=75",
                name: "Classic Roll Plat...",
                description: "4 pcs Behari Rolls, 4 pcs Arabic Rolls served with Fries & Sauce.",
                price: 1200,
            },
        ]
    },
    {
        category: "Special Pizza",
        items: [
            {
                id: 32,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269181171-Crown%20Crust.jpg&w=1920&q=75",
                name: "Crown Crust",
                description: "Scrumptious Pizza with a yummy blend of Grilled Chicken, Olives, Onion, Capsicum...",
                price: 1550,
            },
            {
                id: 33,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269164030-Stuff%20Crust%20Pizza.jpg&w=1920&q=75",
                name: "Stuff Crust Pizza...",
                description: "Special Chicken, Green Olives, Mushrooms, with the Crust filled with Cheese Or K...",
                price: 1600,
            }
        ]
    },
    {
        category: "Somewhat Amazing",
        items: [
            {
                id: 34,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242492753-Somewhat%20Amazing%201.jpg&w=1920&q=75",
                name: "Somewhat Amazing ...",
                description: "2 Bazinga, Regular Fries, 2 Regular Drinks",
                price: 1250,
            },
            {
                id: 35,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242460883-Somewhat%20Amazing%202.jpg&w=1920&q=75",
                name: "Somewhat Amazing ...",
                description: "2 Bazinga Burger, 2 pcs Chicken, Large Fries, 2 Regular Drink",
                price: 1750,
            },
            {
                id: 36,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242436169-Somewhat%20Amazing%203.jpg&w=1920&q=75",
                name: "Somewhat Amazing ...",
                description: "3 Bazinga Burger, Large Fries, 1 Liter Drink",
                price: 1890,
            },
            {
                id: 37,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724242411412-Somewhat%20Amazing%204.jpg&w=1920&q=75",
                name: "Somewhat Amazing ...",
                description: "3 Bazinga Burger, 3 pcs Chicken, 1 Liter Drink",
                price: 2150,
            }
        ]
    },
    {
        category: "Pastas",
        items: [
            {
                id: 38,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269809740-Fettuccine%20Alfredo%20Pasta.jpg&w=1920&q=75",
                name: "Fettuccine Alfred...",
                description: "Pasta made in the yummiest White Sauce With Chicken Chunks Topped with Cheese. ...",
                price: 1050,
            },
            {
                id: 39,
                image: "Pasta made in the yummiest White Sauce With Chicken Chunks Topped with Cheese. ...",
                name: "Crunchy Chicken ...",
                description: "Yummiest Macaroni Pasta in White Sauce topped with Crispy Chicken and Cheese.",
                price: 950,
            }
        ]
    },
    {
        category: "Burgerz",
        items: [
            {
                id: 40,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269254290-Reggy%20Burger.jpg&w=1920&q=75",
                name: "Reggy Burger",
                description: "Perfectly Fried Chicken Patty with Fresh Lettuce and Sauce in a Sesame Seed Bun...",
                price: 390,
            },
            {
                id: 41,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269214505-Bazinga%20Burger.jpg&w=1920&q=75",
                name: "Bazinga Burger",
                description: "2 crispy fried to perfection boneless thigh with signature sauce, lettuce, and a...",
                price: 560,
            },
            {
                id: 42,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1726048358599-Bazooka%20400x400.jpg&w=1920&q=75",
                name: "Bazooka",
                description: "Tender, spicy chicken strips paired with mayo, pickles, jalapeños, and signature...",
                price: 630,
            }
        ]
    },
    {
        category: "Side Orders",
        items: [
            {
                id: 43,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725268969732-Fries.jpg&w=1920&q=75",
                name: "Fries",
                description: ".",
                price: 220,
            },
            {
                id: 44,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724238810976-Nuggets.jpg&w=1920&q=75",
                name: "Nuggets",
                description: "5 Pcs",
                price: 450,
            },
            {
                id: 45,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725268920641-Chicken%20Piece.jpg&w=1920&q=75",
                name: "Chicken Piece",
                description: "Crispy Chicken",
                price: 300,
            }
        ]
    },
    {
        category: "Addons",
        items: [
            {
                id: 46,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724239077818-Juice.jpg&w=1920&q=75",
                name: "Juice",
                description: ".",
                price: 60,
            },
            {
                id: 47,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724239020322-Mayo%20Dip.jpg&w=1920&q=75",
                name: "Mayo Dip",
                description: ".",
                price: 80,
            },
            {
                id: 48,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1724238903076-Water%20Small.jpg&w=1920&q=75",
                name: "Water Small",
                description: ".",
                price: 60,
            },
            {
                id: 49,
                image: "https://cheezious.com/_next/image?url=http%3A%2F%2Fs3-me-south-1.amazonaws.com%2Fcz-content-prod%2Fproducts%2F1725269131205-Cold%20Drink.jpg&w=1920&q=75",
                name: "Soft Drink",
                description: ".",
                price: 100,
            },
        ]
    }
]

//console.log(menu)


// {
//     id: 2,
//     image: "",
//     name: "",
//     description: "",
//     price:,
// },



app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
