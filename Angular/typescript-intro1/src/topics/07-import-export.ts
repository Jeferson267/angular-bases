import{ Product, taxCalculation}from './06-funcion-destructuring'
const shoppingCar: Product[] = [
    {
        description:'Nokia',
        price: 150
    },
    {
        description:'Ipad',
        price:300
    }
];
const [total,tax]= taxCalculation({products:shoppingCar,tax:0.15});

console.log('Total ', total, '\nTax ', tax);