export let numbers = [1,6,8,4,2,7,10,3,5];
let maxnum = -99999;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i]>=maxnum){
        maxnum = numbers[i];
    }
}



console.log('El numero mayor es:'+maxnum);