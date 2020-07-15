import image from './components/images/d3.jpg';

export default {
    products: [
        {
            _id: '1',
            name: 'Slim Shirt',
            category: 'Shirts',
            image: {image},
            price: 120,
            material: 'cotton',
            size: 'S',
            rating: 3,
            reviews: 1,
        },
        {
            _id: '2',
            name: 'V-Neck',
            category: 'Shirts',
            image: {image},
            price: 120,
            material: 'cotton',
            size: 'XL',
            rating: 4,
            reviews: 7,
        },
        {
            _id: '3',
            name: 'Tapered Pants',
            category: 'Pants',
            image: {image},
            price: 120,
            material: 'cotton',
            size: 'M',
            rating: 2,
            reviews: 10,
        }
    ]
};