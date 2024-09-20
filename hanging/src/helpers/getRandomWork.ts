let words: string[] = [
    'COMPUTADORA',
    'INTELIGENCIA',
    'SOFTWARE',
    'HARDWARE',
    'REDES',
    'DATOS',
    'ALGORITMO',
    'CIBERSEGURIDAD',
    'NUBE',
    'ROBÓTICA',
    'PROGRAMACIÓN',
    'DISPOSITIVOS',
    'AUTOMATIZACIÓN',
    'INTERFAZ',
    'MÓVIL',
    'VIRTUALIZACIÓN',
];



export function getRandomWork(){
const randomIntex = Math.floor(Math.random()*words.length);


return words[randomIntex];

}