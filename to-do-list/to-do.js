const arr=JSON.parse(localStorage.getItem('arr')) || [{
    name:"WASH DISHES",
    duedate:"2024-10-12" 
}];

display();

function display(){
    let html='';

    
    for(let i=0;i<arr.length;i++){
        let { name,duedate}=arr[i];
        html +=`
        <p class="task">${name} <span class="duedate">${duedate}</span>
        <button onclick="
        arr.splice(${i},1);
        display();
        localStorage.setItem('arr',JSON.stringify(arr));

        ">Delete task</button>
        </p>
        `
    }
    let dispele=document.querySelector('.tasks');
    dispele.innerHTML=html;
}
function deletetask(i){
}
function update (){
    let inputele=document.querySelector('.js-task');
    let dateele=document.querySelector('.js-due-date');
    const task=inputele.value;

    const date=dateele.value;
    let ob={
        name:task.toUpperCase(),
        duedate:date
    };
    
    arr.push(ob);
    localStorage.setItem('arr',JSON.stringify(arr));
    display();
    inputele.value='';
    dateele.value='';
    
}