export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description:'Nokia A1',
    price: 150.0
}
const tablet: Product ={
    description:'Ipad Air',
    price: 250.0
}

export interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[]{
    let total = 0; 
    options.products.forEach(({price})=> {
        total += price;
    });

    return [ total, total*options.tax];
}

const shoppingCart = [phone,tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({products:shoppingCart,  tax});

console.log('Total ', total, '\nTax ', totalTax);






