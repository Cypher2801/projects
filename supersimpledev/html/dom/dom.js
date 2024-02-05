function netval(){
    const costele=document.querySelector('.cost');
    let cost=Number(costele.value);
    if(cost<40){
        cost=(cost)+10;
    }
    const totalcost=document.querySelector('.net');
    totalcost.innerHTML=`$${cost}`;
}