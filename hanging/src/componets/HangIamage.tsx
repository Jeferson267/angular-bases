import imagen0 from '../assets/0.png';
import imagen1 from '../assets/1.png';
import imagen2 from '../assets/2.png';
import imagen3 from '../assets/3.png';
import imagen4 from '../assets/4.png';
import imagen5 from '../assets/5.png';
import imagen6 from '../assets/6.png';
import imagen7 from '../assets/7.png';
import imagen8 from '../assets/8.png';
import imagen9 from '../assets/9.png';

const images: string[] = [
    imagen0,
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9
];

interface Props{
    imageNumber : number;
}

export function HangIamage({imageNumber}:Props){
    
    if(imageNumber >= 9){
        imageNumber = 9;
    }

    return(
        <img src={images[imageNumber]}alt="Hang image"
        style={{width:250}}/>
    )
}