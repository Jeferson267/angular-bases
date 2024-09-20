export interface Person{
    name:string;
    age:number;
    isActive:boolean;
}



let jeferson: Person= {
    name: 'Jeferson',
    age: 17,
    isActive: true
};
let melissa: Person = {
    name: 'Melissa',
    age: 30,
    isActive: false
};
let juan: Person = {
    name: 'Juan',
    age: 48,
    isActive: false
}
let people: Person[]=[jeferson,melissa,juan];
for(let i = 0; i<= people.length -1; i++){
    let person = people[i];
    console.log(person.name +" "+person.age);
}