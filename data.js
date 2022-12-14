import bcrypt from "bcryptjs";
const data = {
  users:[
    {
      name:'paige',
      email:'irapaige@hotmail.com',
      password:bcrypt.hashSync('123456'),
      isAdmin:true
    },
{name:'jackie',
email:'mynannice@hotmail.com',
  password:bcrypt.hashSync('123456'),
isAdmin:false,
},

  ],
    products: [
      {
        // _id: '1',
        name: 'Nike Slim Shirt',
        slug:'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/01.jpg',
        price: 120,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        countInStock:10,
        description: 'high quality product',
      },
      {
        // _id: '2',
        name: 'Adidas Fit Shirt',
          slug:'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/02.jpg',
        price: 100,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        countInStock:3,
        description: 'high quality product',
      },
      {
        // _id: '3',
        name: 'Lacoste Free Shirt',
          slug:'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/03.jpg',
        price: 220,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        countInStock:40,
        description: 'high quality product',
      },
      {
        // _id: '4',
        name: 'Nike Slim Pant',
          slug:'Nike Slim Pant',
        category: 'Pants',
        image: '/images/04.jpg',
        price: 78,
        brand: 'Nike',
        rating: 1.5,
        numReviews: 14,
        countInStock:5,
        description: 'high quality product',
      },
      {
        // _id: '5',
        name: 'Puma Slim Pant',
          slug:'Puma Slim Pant',
        category: 'Pants',
        image: '/images/05.jpg',
        price: 65,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        countInStock:15,
        description: 'high quality product',
      },
      {
        // _id: '6',
        name: 'Adidas Fit Pant',
          slug:'Adidas Fit Pant',
        category: 'Pants',
        image: '/images/06.jpg',
        price: 139,
        brand: 'Adidas',
        rating: 4.5,
        numReviews: 15,
        countInStock:0,
        description: 'high quality product',
      },
    ],
  };
  export default data
