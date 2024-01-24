let calculation=localStorage.getItem('.display') || '';

    calculation=localStorage.getItem('calculation');
    const displayelement=document.querySelector('.display'); 
    displayelement.innerHTML=calculation;

function del(){
    calculation=localStorage.getItem('calculation');
    const displayelement=document.querySelector('.display'); 
    calculation=localStorage.getItem('calculation');
    if(calculation != ''){
        calculation=calculation.slice(0,-1);
    }
    
    localStorage.setItem('calculation',calculation);
    displayelement.innerHTML=calculation;
}
function updatecalc(a){
    calculation=localStorage.getItem('calculation');
    const displayelement=document.querySelector('.display'); 
    calculation+=a;
    displayelement.innerHTML=calculation;
    localStorage.setItem('calculation',calculation); 
}
function calculate(){
    calculation=localStorage.getItem('calculation');
    calculation=eval(calculation);
    localStorage.setItem('calculation',calculation);
    const displayelement=document.querySelector('.display'); 
    displayelement.innerHTML=calculation;
}
function update(){
    calculation=localStorage.getItem('calculation');
    const displayelement=document.querySelector('.display'); 
    calculation='';
    localStorage.setItem('calculation',calculation);
    displayelement.innerHTML=calculation;
}