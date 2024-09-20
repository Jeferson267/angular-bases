export
function max(a:number,b:number,c:number){
if(a>b && a>c){
   console.log('El dato mayor es a');
    return;
}else if(b>a && b>c){
    console.log('El dato mayor es b');
    return;
}else if(c>a && c>b){
    console.log('El dato mayor es c');
    return;
}
}
let maxValue = max(15,9,6);