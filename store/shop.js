const filter = (array, key, value) => array.filter(item => item[key] === value);

export const state = () => ({
  cartTotal: 0,
  cart: {},
  sale: false,
  products: createProducts
});

export const getters = {
  women: state => filter(state.products, 'gender', 'women'),
  men: state => filter(state.products, 'gender', 'men'),
  sale: state => filter(state.products, 'sale', true)
};

export const mutations = {

  // switchSale: state => {
  //   state.sale = !state.sale
  // },
  //
  // clearCartCount: state => {
  //   state.cartTotal = 0
  // },
  //
  // clearCartContents: state => {
  //   state.cart = {}
  // },
  //
  // addItem: (state, item) => {
  //   state.cartTotal++;
  //   if (item.name in state.cart) {
  //     state.cart[item.name].count++;
  //   } else {
  //     let stateItem = Object.assign({}, item);
  //     stateItem.count = 1;
  //     state.cart[item.name] = stateItem;
  //   }
  // }

};

const createProducts = [
  {
    id: '8b65-' + Date.now(),
    name: 'Bodycon poplin shirt',
    price: 25.50,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Armani Exchange',
    clothes: [
      'Jeans',
      'Polo shirts',
      'Shirts'
    ],
    color: [
      'Blue',
      'Dark Blue',
      'Faded Blue',
      'Faded Blue Destroy',
      'Faded Pink',
      'Faded Pink Destroy'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ]
  },
  {
    id: '7r86-' + Date.now(),
    name: 'Mid-length check mullet dress',
    price: 20.00,
    discount: 20,
    quantity: 1,
    stock: 10,
    sale: true,
    gender: 'women',
    brand: 'Barneys Originals',
    clothes: [
      'Dresses'
    ],
    color: [
      'Aqua',
      'Beige',
      'Blue',
      'Black',
      'Brown',
      'Copper',
      'Cream',
      'Gray',
      'Green',
      'Pink',
      'Purple',
      'Red',
      'White',
      'Yellow'
    ],
    size: [
      'UK 1',
      'UK 2',
      'UK 3'
    ]
  },
  {
    id: '4c43-'+ Date.now(),
    name: 'High waisted skinny jeans with fading',
    price: 50.50,
    discount: 10,
    quantity: 1,
    stock: 10,
    sale: true,
    gender: 'women',
    brand: 'Abercrombie and Fitch',
    clothes: [
      'Jeans',
      'Pants'
    ],
    color: [
      'Black',
      'Grey'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ]
  },
  {
    id: '2d89-'+ Date.now(),
    name: 'High-waisted slim jeans with rips',
    price: 15.50,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'Bolongaro Trevor',
    clothes: [
      'Jeans',
      'Pants'
    ],
    color: [
      'Black',
      'Blue',
      'Dark Dark Dark',
      'Dark Blue',
      'Dark Extreme',
      'Faded Black',
      'Stone',
      'Stone Destroy',
      'Teal',
      'Tan'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ]
  },
  {
    id: '2y89-'+ Date.now(),
    name: 'Crepe coat with pockets',
    price: 30.00,
    discount: 40,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'Caterpillar',
    clothes: [
      'Jeans',
      'Pants'
    ],
    color: [
      'Faded Black',
      'Wildcat',
      'White'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ]
  },
  {
    id: '4r89-'+ Date.now(),
    name: 'Short shirt dress in cotton',
    price: 16.90,
    discount: 10,
    quantity: 1,
    stock: 10,
    sale: true,
    gender: 'women',
    brand: 'Menswear London',
    clothes: [
      'Dresses',
      'Shirts'
    ],
    color: [
      'Black',
      'Black Extreme',
      'Blue Sky',
      'Dark',
      'Dark Grey',
      'Green',
      'Grey',
      'Kaki',
      'Navy',
      'Orange',
      'White',
      'Wildcat'
    ],
    size: [
      'UK 1',
      'UK 2',
      'UK 3'
    ]
  },
  {
    id: '8u10-'+ Date.now(),
    name: 'Selected slim jeans',
    price: 9.99,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Jack & Jones',
    clothes: [
      'Pants'
    ],
    color: [
      'Black',
      'Grey',
      'Maroon',
      'Lime',
      'White'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ],
  },
  {
    id: '777-'+ Date.now(),
    name: 'Military style coat',
    price: 190.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Levi’s',
    clothes: [
      'Jackets & Coats'
    ],
    color: [
      'Black',
      'Grey',
      'Maroon',
      'Olive',
      'White'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7',
      'UK 8',
      'UK 9',
      'UK 10'
    ]
  },
  {
    id: '9i19-'+ Date.now(),
    name: 'Selected straight jeans',
    price: 120.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Jeepers Peepers',
    clothes: [
      'Chinos',
      'Jeans',
      'Pants'
    ],
    color: [
      'Blue',
      'Blue Faded',
      'Blue Light',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Light Salmon',
      'Silver'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '1e18-'+ Date.now(),
    name: 'Selected cotton and cashmere blend knit sweater',
    price: 89.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Lacoste',
    clothes: [
      'Pulls'
    ],
    color: [
      'Blue',
      'Dark Blue',
      'Faded Blue',
      'Faded Blue destroy',
      'Navy'
    ],
    size: [
      'UK 3',
      'UK 4',
      'UK 5',
      'UK 6',
      'UK 7'
    ]
  },
  {
    id: '1r45-'+ Date.now(),
    name: 'Military style coat',
    price: 499.00,
    discount: 50,
    quantity: 1,
    stock: 10,
    sale: true,
    gender: 'women',
    brand: 'New Look',
    clothes: [
      'Jackets & Coats'
    ],
    color: [
      'Clear',
      'Gold',
      'Multi',
      'Cream',
      'No Color',
      'Orange',
      'Silver'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2z45-'+ Date.now(),
    name: 'Long sleeve shirt and pattern',
    price: 290.00,
    discount: 30,
    quantity: 1,
    stock: 10,
    gender: 'women',
    brand: 'Quiksilver',
    sale: true,
    clothes: [
      'T-Shirts & Tanks'
    ],
    color: [
      'Clear',
      'Dark Grey',
      'Dark Salmon',
      'Fuchsia',
      'Gold',
      'Multi',
      'Cream',
      'No Color',
      'Orange',
      'Silver'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2r11-'+ Date.now(),
    name: 'Reversible cotton short babydoll dress',
    price: 199.00,
    discount: 30,
    quantity: 1,
    stock: 10,
    sale: true,
    gender: 'men',
    brand: 'Shelby & Sons',
    clothes: [
      'Dresses'
    ],
    color: [
      'Clear',
      'Green',
      'Grey',
      'Kaki',
      'Orange',
      'Pink',
      'Purple',
      'Red'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2b11-'+ Date.now(),
    name: 'Missguided Bodycon Dress with High Neck',
    price: 40.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'The Couture Club',
    clothes: [
      'Dresses',
      'Plus Size'
    ],
    color: [
      'Black',
      'Dark Grey',
      'Grey',
      'Light Grey',
      'White'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2t51-'+ Date.now(),
    name: 'Jean pretty little thing',
    price: 30.90,
    discount: 10,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'Uncommon Souls',
    clothes: [
      'Pants & Split Pants',
      'Plus Size'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Blue',
      'Navy',
      'Black',
      'Dark grey'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2h81-'+ Date.now(),
    name: 'Noisy May Curve knitted midi cardigan',
    price: 42.00,
    discount: 10,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Uncommon Souls',
    clothes: [
      'Jumpers & Cardigans'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Blue',
      'Blue Sky',
      'Navy',
      'Black',
      'Dark grey',
      'Orange'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2c01-'+ Date.now(),
    name: 'Wrap shirt noisy dress at the waist',
    price: 380.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'men',
    brand: 'Wrangler',
    clothes: [
      'T-shirts & Shorts'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Blue',
      'Blue Sky',
      'Navy',
      'Black',
      'Dark grey',
      'Orange'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '9b01-'+ Date.now(),
    name: 'Organic fabric half-zip sweatshirt',
    price: 569.90,
    discount: 30,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'Wrangler',
    clothes: [
      'Sweats',
      'Hoodies & Sweatshirts'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Faded Blue',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Sliver Destroy'
    ],
    size: [
      'UK 0',
      'UK 1',
      'UK 2',
      'UK 3',
      'UK 4',
      'UK 5'
    ]
  },
  {
    id: '2o02-'+ Date.now(),
    name: 'Faux fur coat with leopard pattern',
    price: 450.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'Jeepers Peepers',
    clothes: [
      'Suits & Tailoring',
      'Tracksuits'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Faded Blue',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Sliver Destroy',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Sliver Destroy',
      'No Color'
    ],
    size: [
      'UK 6',
      'UK 8',
      'UK 10'
    ]
  },
  {
    id: '9z01-'+ Date.now(),
    name: 'Slim with exposed button fastening',
    price: 420.00,
    discount: 0,
    quantity: 1,
    stock: 10,
    sale: false,
    gender: 'women',
    brand: 'The Couture Club',
    clothes: [
      'Underwear & Socks'
    ],
    color: [
      'Faded Blue',
      'Faded Blue Destroy',
      'Faded Blue',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Sliver Destroy',
      'Clear',
      'Dark Blue',
      'Faded Gold',
      'Gold',
      'Sliver Destroy',
      'No Color'
    ],
    size: [
      'UK 6',
      'UK 8',
      'UK 10'
    ]
  }
];
