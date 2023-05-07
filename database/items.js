export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#B3B4B6',
  accent: '#FFC231',
  accentRed: '#FB5D2E',
  accentPink: '#F96165',
};

export const Categories = [
  {
    name: 'Burger',
    image: require('../assets/foods/Barger.png'),
    items: [
      {
        name: 'Classic Burger',
        weight: '4.2K',
        rating: '5.0',
        price: '80 L.E',
        isTopOfTheWeek: true,
        image: require('../database/images/burger/burger1.jpg'),
        size: 'Large 8"',
        crust: 'Single',
        delivery: 25,
        ingredients: [
          require('../database/images/flour.png'),

          require('../database/images/Sliced-Onion.png'),
          require('../database/images/Tomato.png'),
        ],
      },
      {
        name: 'Chicken Burger',
        weight: '3.0K',
        rating: '4.5',
        price: '100 L.E',
        isTopOfTheWeek: false,
        image: require('../database/images/burger/burger2.jpg'),
        size: 'Large 12"',
        crust: 'Single',
        delivery: 30,
        ingredients: [
          require('../database/images/Sliced-Onion.png'),
          require('../database/images/Tomato.png'),
          require('../database/images/cheese.png'),
          require('../database/images/flour.png'),
        ],
      },
      {
        name: 'Cheese Burger',
        rating: '4.2',
        weight: '2.8K',
        price: '120 L.E',
        isTopOfTheWeek: false,
        image: require('../database/images/burger/burger3.png'),
        size: 'Large 15"',
        crust: 'Double',
        delivery: 35,
        ingredients: [
          require('../database/images/Tomato.png'),
          require('../database/images/cheese.png'),
          require('../database/images/Sliced-Onion.png'),
          require('../database/images/flour.png'),
        ],
      },
    ],
  },
  {
    name: 'Pizza',
    image: require('../assets/foods/Pizza.png'),
    items: [
      {
        name: 'Pepperoni Pizza',
        weight: 250,
        rating: '5.0',
        price: 199,
        isTopOfTheWeek: true,
        image: require('../database/images/pizza/pepperonipizza.png'),
        size: 'Large 14"',
        crust: 'Thin Crust',
        delivery: 30,
        ingredients: [
          require('../database/images/Tomato.png'),
          require('../database/images/cheese.png'),
          require('../database/images/Sliced-Onion.png'),
          require('../database/images/flour.png'),
        ],
      },
      {
        name: 'Cheese Pizza',
        weight: 300,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../database/images/pizza/plaincheesepizza.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [
          require('../database/images/Sliced-Onion.png'),
          require('../database/images/flour.png'),
          require('../database/images/cheese.png'),
          require('../database/images/Tomato.png'),
        ],
      },
      {
        name: 'Mexican Green Wave',
        weight: 350,
        rating: '4.2',
        price: 499,
        isTopOfTheWeek: false,
        image: require('../database/images/pizza/mexicangreenwave.png'),
        size: 'Large 15"',
        crust: 'Thin Crust',
        delivery: 45,
        ingredients: [
          require('../database/images/flour.png'),
          require('../database/images/cheese.png'),
          require('../database/images/Tomato.png'),
          require('../database/images/Sliced-Onion.png'),
        ],
      },
    ],
  },
  {
    name: 'Fried Chicken',
    image: require('../assets/foods/Fride.png'),
    items: [
      {
        name: 'Crispy Fried',
        weight: 200,
        rating: '5.0',
        price: 299,
        isTopOfTheWeek: true,
        image: require('../database/images/fride/fride1.jpg'),
        size: 'Medium Glass',
        crust: 'Small Ice',
        delivery: 10,
        ingredients: [require('../database/images/softdrinks/cocacola.png')],
      },
      {
        name: 'Buffalo Wings',
        weight: 500,
        rating: '4.5',
        price: 199,
        isTopOfTheWeek: false,
        image: require('../database/images/fride/fride2.jpg'),
        size: 'LArge Glass',
        crust: 'Large Ice',
        delivery: 8,
        ingredients: [require('../database/images/softdrinks/orange.png')],
      },
      {
        name: 'Smoked Fride',
        weight: 150,
        rating: '4.2',
        price: 99,
        isTopOfTheWeek: false,
        image: require('../database/images/fride/fride3.jpg'),
        size: 'Large Glass',
        crust: 'Small Ice',
        delivery: 5,
        ingredients: [require('../database/images/softdrinks/mango.png')],
      },
    ],
  },
  {
    name: 'Hotdog',
    image: require('../assets/foods/Hotdog.png'),
    items: [
      {
        name: 'Coco Cola',
        weight: 200,
        rating: '5.0',
        price: 299,
        isTopOfTheWeek: true,
        image: require('../database/images/softdrinks/cocacola.png'),
        size: 'Medium Glass',
        crust: 'Small Ice',
        delivery: 10,
        ingredients: [require('../database/images/softdrinks/cocacola.png')],
      },
      {
        name: 'Orange Juice',
        weight: 500,
        rating: '4.5',
        price: 199,
        isTopOfTheWeek: false,
        image: require('../database/images/softdrinks/orange.png'),
        size: 'LArge Glass',
        crust: 'Large Ice',
        delivery: 8,
        ingredients: [require('../database/images/softdrinks/orange.png')],
      },
      {
        name: 'Mango Juice',
        weight: 150,
        rating: '4.2',
        price: 99,
        isTopOfTheWeek: false,
        image: require('../database/images/softdrinks/mango.png'),
        size: 'Large Glass',
        crust: 'Small Ice',
        delivery: 5,
        ingredients: [require('../database/images/softdrinks/mango.png')],
      },
    ],
  },
  {
    name: 'Soft Drinks',
    image: require('../database/images/softdrinks.png'),
    items: [
      {
        name: 'Coco Cola',
        weight: 200,
        rating: '5.0',
        price: 299,
        isTopOfTheWeek: true,
        image: require('../database/images/softdrinks/cocacola.png'),
        size: 'Medium Glass',
        crust: 'Small Ice',
        delivery: 10,
        ingredients: [require('../database/images/softdrinks/cocacola.png')],
      },
      {
        name: 'Orange Juice',
        weight: 500,
        rating: '4.5',
        price: 199,
        isTopOfTheWeek: false,
        image: require('../database/images/softdrinks/orange.png'),
        size: 'LArge Glass',
        crust: 'Large Ice',
        delivery: 8,
        ingredients: [require('../database/images/softdrinks/orange.png')],
      },
      {
        name: 'Mango Juice',
        weight: 150,
        rating: '4.2',
        price: 99,
        isTopOfTheWeek: false,
        image: require('../database/images/softdrinks/mango.png'),
        size: 'Large Glass',
        crust: 'Small Ice',
        delivery: 5,
        ingredients: [require('../database/images/softdrinks/mango.png')],
      },
    ],
  },
];