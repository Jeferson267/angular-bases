export class Car{
public readonly brand: string;
public doors: number;
public fuelTank: number;
public isRunning: boolean;
public type: string; 

private readonly createdAt: number;


constructor(brand: string, type:string){
    this.brand =  brand;
    this.doors = 0; 
    this.fuelTank = 0;
    this.isRunning = false; 
    this.type = type;

    this.createdAt = 123456789;
}
turnOn(){
    if(this.isRunning){
        console.log('El carro ya estaba encendido');
        return;
    }
    if(this.fuelTank <= 0){
        console.log('El carro no tiene combustible');
        return;
    }
        this.isRunning = true; 
        console.log('El carro acaba de encender');

    }

    filltank(gas:number){
        if(gas <= 0 ){
            console.log('El gs tiene que ser positivo');
            return;
        }
        let newFuelTank = this.fuelTank + gas;
        if(newFuelTank >= 100){
            this.fuelTank = 100;
        }else{
            this.fuelTank = newFuelTank;
        }
    }
}

let myMazda = new Car('Mazda','Sedan');

console.log(myMazda);
myMazda.filltank(50);
myMazda.filltank(60);
myMazda.turnOn();
console.log( myMazda);