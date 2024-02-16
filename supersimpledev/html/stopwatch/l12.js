let time={
    minute:'00',
    second:'00'
};
display();
function display(){
    let dispele=document.querySelector('.watch p');
    let {minute,second}=time;
    dispele.innerHTML=`${minute} : ${second}`;
}
let intervalID;
function startTimer(){
    let {minute,second}=time;
    intervalID=setInterval(() => {
        
        if(second>58){
            minute=Number(minute)+1;
            if(Number(minute)<10){
                minute='0'+minute;
            }
            second='00';
        }
        else {
            second=Number(second)+1;
            if(Number(second)<10){
                second='0'+second;
            }
        }
        let dispele=document.querySelector('.watch p');
    dispele.innerHTML=`${minute} : ${second}`;
    time.minute=minute;
    time.second=second;
    },1000);
}
function stopTimer(){
    clearInterval(intervalID);
}
function resetTimer(){
    let{minute,second}=time;
    minute='00';
    second='00';
    let dispele=document.querySelector('.watch p');
    dispele.innerHTML=`${minute} : ${second}`;
    time.minute=minute;
    time.second=second;
    clearInterval(intervalID);
}
document.querySelector('.start').addEventListener("click",startTimer);
document.querySelector('.stop').addEventListener("click",stopTimer);
document.querySelector('.reset').addEventListener('click',resetTimer);