import {letters } from './helpers/letters';
import './App.css';
import { HangIamage } from './componets/HangIamage';
import { useEffect, useState } from 'react';
import { getRandomWork } from './helpers/getRandomWork';


function App() {
  const [word, setWord] = useState(getRandomWork());
  const [hiddenword, setHiddenWord]= useState('_ '.repeat(word.length));
  const [ attempts, setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  useEffect(()=> {
    if(attempts >= 9){
      setLose(true);
    }
  }, [attempts]);
  useEffect(()=>{

    const currentHiddenWork = hiddenword.split(' ').join('');
    if(currentHiddenWork === word){
      setWon(true);
    }
  }, [hiddenword])


  const checkLetter = (letter:string)=>{
    if(lose) return;
    if(won) return;
    if( !word.includes(letter)){
      setAttempts(Math.min(attempts+1,9));
      return;
  }

  const hiddenWorkArray = hiddenword.split(' ');
  

  for(let i = 0; i < word.length; i++){
    if(word[i] === letter){
      hiddenWorkArray[i] = letter;

    }
  }
  setHiddenWord(hiddenWorkArray.join(' '));
}
  const newGame = () =>{
    const newWord = getRandomWork();
   setWord(newWord);
   setHiddenWord('_ '.repeat(newWord.length));
   setAttempts(0);
   setLose(false);
   setWon(false);
  }
  return (
   <div className="App">

    {/* Imagenes */}
    <HangIamage imageNumber={attempts}/>

    {/* palabra oculta */}
    <h3>{hiddenword}</h3>

    {/* Puntos */}
    <h3>Intentos: {attempts}</h3>

     {/* Mensaje si perdio */}
     {
      (lose)?
      <h2>Perdio, la palabra era {word}</h2>:''
     }
          {/* Mensaje si gano */}
          {
      (won)?
      <h2>Felicidades adivinaste</h2>:''
     }


    {/* Botones */}
    {
      letters.map( (letter) => (
        <button 
          onClick={()=>checkLetter(letter)}
          key={letter}>
          {letter}</button>
      ))
    }
   <br/><br/>
   <button onClick={newGame}>¿Nuevo juego?</button>
   




    </div>
  )
}

export default App;
