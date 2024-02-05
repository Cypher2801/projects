function game(){
    const gamingelement=document.querySelector('.gaming');
    const musicelement=document.querySelector('.music');
    const techelement=document.querySelector('.tech');
    if(gamingelement.classList.contains('gamingafter')){
        gamingelement.classList.remove('gamingafter');
    }
    else{
        gamingelement.classList.add('gamingafter');
    }
    if(techelement.classList.contains('techafter')){
        techelement.classList.remove('techafter');
    }
    if(musicelement.classList.contains('musicafter')){
        musicelement.classList.remove('musicafter');
    }
    
}
function music(){
    const gamingelement=document.querySelector('.gaming');
    const musicelement=document.querySelector('.music');
    const techelement=document.querySelector('.tech');

    if(musicelement.classList.contains('musicafter')){
        musicelement.classList.remove('musicafter');
    }
    else{
        musicelement.classList.add('musicafter');
    }
    if(techelement.classList.contains('techafter')){
        techelement.classList.remove('techafter');
    }
    if(gamingelement.classList.contains('gamingafter')){
        gamingelement.classList.remove('gamingafter');
    }
}
function code(){
    const gamingelement=document.querySelector('.gaming');
    const musicelement=document.querySelector('.music');
    const techelement=document.querySelector('.tech');
    if(techelement.classList.contains('techafter')){
        techelement.classList.remove('techafter');
    }
    else{
        techelement.classList.add('techafter');
    }
    if(gamingelement.classList.contains('gamingafter')){
        gamingelement.classList.remove('gamingafter');
    }
    if(musicelement.classList.contains('musicafter')){
        musicelement.classList.remove('musicafter');
    }
}
