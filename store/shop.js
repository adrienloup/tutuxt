export const state = () => ({
  cartTotal: 0,
  cart: {},
  sale: false,
  products: [
    {
      name: 'Braided vest in thick wool and warm',
      price: 42.99,
      category: 'women',
      sale: false,
      article: 'pull',
      img: 'pull-4.jpeg'
    },
    {
      name: 'Fitted stretch wedding shirt with black tie white',
      price: 29.99,
      category: 'men',
      sale: false,
      article: 'shirt',
      img: 'shirt-5.jpeg'
    },
    {
      name: 'Slim-fit, slim-fit jeans with exposed button fastening',
      price: 320.99,
      category: 'women',
      sale: true,
      article: 'pants',
      img: 'pants-1.jpeg'
    },
    {
      name: 'Pointed high-heeled shoes with snake print',
      price: 80.99,
      category: 'women',
      sale: false,
      article: 'shoes',
      img: 'shoes-3.jpeg'
    },
    {
      name: 'Nudie jeans co lean dean skinny jeans in dark wash with pronounced effect',
      price: 99.99,
      category: 'men',
      sale: false,
      article: 'pants',
      img: 'pants-3.jpeg'
    },
    {
      name: 'Shoes in faux leather with contrasting sole tan',
      price: 150.99,
      category: 'men',
      sale: false,
      article: 'shoes',
      img: 'shoes-4.jpeg'
    },
    {
      name: 'Extremely aged jeans with a light wash',
      price: 139.99,
      category: 'women',
      sale: false,
      article: 'pants',
      img: 'pants-2.jpeg'
    },
    {
      name: 'Wedding slim sateen shirt light pink',
      price: 19.99,
      category: 'men',
      sale: true,
      article: 'shirt',
      img: 'shirt-4.jpeg'
    },
    {
      name: 'Pucker up high-heeled shoes with pointed toe and ties',
      price: 170.99,
      category: 'women',
      sale: true,
      article: 'shoes',
      img: 'shoes-1.jpeg'
    },
    {
      name: 'Linen super skinny jeans uthentic middle wash',
      price: 130.99,
      category: 'men',
      sale: true,
      article: 'pants',
      img: 'pants-4.jpeg'
    },
    {
      name: 'Long sleeve satin shirt, relaxed fit',
      price: 12.99,
      category: 'women',
      sale: false,
      article: 'shirt',
      img: 'shirt-3.jpeg'
    },
    {
      name: 'Light sky blue cotton sweater shiny silver',
      price: 75.99,
      category: 'women',
      sale: false,
      article: 'pull',
      img: 'pull-2.jpeg'
    },
    {
      name: 'High waist slim jeans with knee tears and patched effect clear vintage wash',
      price: 49.99,
      category: 'women',
      sale: false,
      article: 'pants',
      img: 'pants-5.jpeg'
    },
    {
      name: 'High-waisted slim jeans with ripped knees vintage clear wash zaliki',
      price: 290.99,
      category: 'women',
      sale: true,
      article: 'pants',
      img: 'pants-6.jpeg'
    },
    {
      name: 'Jogging trousers tightened at the ankles navy blue',
      price: 40.99,
      category: 'men',
      sale: false,
      article: 'pants',
      img: 'pants-7.jpeg'
    },
    {
      name: 'Black pullover falling with red strokes on the sleeves',
      price: 20.99,
      category: 'women',
      sale: false,
      article: 'pull',
      img: 'pull-1.jpeg'
    },
    {
      name: 'Pointed heels with back strap',
      price: 68.99,
      category: 'women',
      sale: true,
      article: 'shoes',
      img: 'shoes-2.jpeg'
    },
    {
      name: 'Basic sports shorts with contrasting edges',
      price: 30.99,
      category: 'women',
      sale: false,
      article: 'short',
      img: 'short-2.jpeg'
    },
    {
      name: 'Brogue leather shoes with natural sole and colorful details brown',
      price: 210.99,
      category: 'men',
      sale: true,
      article: 'shoes',
      img: 'shoes-5.jpeg'
    },
    {
      name: 'Light white linen shirt',
      price: 38.99,
      category: 'women',
      sale: false,
      article: 'shirt',
      img: 'shirt-2.jpeg'
    },
    {
      name: 'Vintage yellow sweater for waist and hips',
      price: 90.99,
      category: 'women',
      sale: true,
      article: 'pull',
      img: 'pull-3.jpeg'
    },
    {
      name: 'Checked shorts black and neon lemon',
      price: 69.99,
      category: 'women',
      sale: false,
      article: 'short',
      img: 'short-1.jpeg'
    },
    {
      name: 'Jean shorts',
      price: 20.99,
      category: 'women',
      sale: true,
      article: 'short',
      img: 'short-3.jpeg'
    },
    {
      name: 'Elegant shirt with collar and bow belt',
      price: 180.99,
      category: 'women',
      sale: true,
      article: 'shirt',
      img: 'shirt-1.jpeg'
    }
  ]
});

const filter = (array, key, value) => array.filter(item => item[key] === value);

export const getters = {
  women: state => filter(state.products, 'category', 'women'),
  men: state => filter(state.products, 'category', 'men'),
  sale: state => filter(state.products, 'sale', true)
};

export const mutations = {

  switchSale: state => {
    state.sale = !state.sale
  },

  clearCartCount: state => {
    state.cartTotal = 0
  },

  clearCartContents: state => {
    state.cart = {}
  },

  addItem: (state, item) => {
    state.cartTotal++;
    if (item.name in state.cart) {
      state.cart[item.name].count++;
    } else {
      let stateItem = Object.assign({}, item);
      stateItem.count = 1;
      state.cart[item.name] = stateItem;
    }
  }

};
