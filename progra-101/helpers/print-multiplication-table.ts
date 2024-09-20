export function printMultiplicationTable(base:number, limiite:number=10){
for(let i = 1; i <= limiite; i ++){
    console.log(base, 'x',i,'=',base * i)
}
}