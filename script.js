document.querySelector('#list-container').innerHTML=localStorage.getItem("data");
function addTask(){
    const inputBox=document.querySelector('.input').value;
    if (inputBox==='') {
        alert('Write something brooo');
        return;
    }
    
    let li=document.createElement('li');
    li.setAttribute('data-li','true')
    li.innerHTML=inputBox;
    document.querySelector('#list-container').append(li);
    document.querySelector('.input').value='';
    let span=document.createElement('span');
    span.innerHTML="\u00d7"
    li.append(span)
    localStorage.setItem("data",document.querySelector('#list-container').innerHTML);
    
}
const inputBox=document.querySelector('.input').value;
document.querySelector('#list-container').addEventListener('click',(event)=>{
    if(event.target.dataset.li==='true'){
        event.target.classList.toggle('checked')
        localStorage.setItem("data",document.querySelector('#list-container').innerHTML);
    }
    else if (event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        localStorage.setItem("data",document.querySelector('#list-container').innerHTML);
    }
})


