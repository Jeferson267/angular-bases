import { addTwoNumbers, addTwoNumbers2, addTwoNumbers3, addTwoNumbers4 } from "../helpers/math-helpers";

export function greet(name: string = 'Mundo'){
console.log('Hola '+ name);

}

//let firstName = "Federico";
//greet(firstName);

let totaladd = addTwoNumbers(10, 20);
let totalsubs = addTwoNumbers2(10, 20);
let totaltimes = addTwoNumbers3(10, 20);
let totaldivide = addTwoNumbers4(10, 20);
console.log('add: ',totaladd);
console.log('substract: ',totalsubs);
console.log('Times: ',totaltimes);
console.log('Divide: ',totaldivide);