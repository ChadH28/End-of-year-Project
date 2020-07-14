import image from './components/images/d3.jpg';

export default {
    products: [
        {
            _id: '1',
            name: 'Slim Shirt',
            category: 'Shirts',
            image: {image},
            price: 120,
            brand: 'Nike',
            rating: 3,
            reviews: 1,
            size: 'S',
            material: 'cotton'
        },
        {
            _id: '2',
            name: 'V-Neck',
            category: 'Shirts',
            image: {image},
            price: 120,
            brand: 'Lacoste',
            rating: 4.5,
            reviews: 6,
            size: 'S',
            material: 'cotton'
        },
        {
            _id: '3',
            name: 'Tapered Pants',
            category: 'Pants',
            image: {image},
            price: 120,
            brand: 'Gucci',
            rating: 2.5,
            reviews: 5,
            size: 'S',
            material: 'cotton'
        }
    ]
};