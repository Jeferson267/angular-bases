interface AudioPlayer {
    audioVolume: number;
    songDuratation: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year:number; 
}
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuratation: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year: 2015
    }

}
const song = 'New Song';
const {song:anotherSong, 
       songDuratation:Duration,
        details:{author}
} = audioPlayer;

//console.log('Song: ', anotherSong, '\nDuration: ',Duration,'\nAutor: ', author);

const [, , Trunks = 'Not Found']: string[] = ['Goku','Vegeta','Trunks']

console.error('Personaje 3:', Trunks);




export{};