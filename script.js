const botonEnter = document.getElementById('boton-enter');
const input = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

botonEnter.addEventListener('click', ()=>{
    data = input.value;
    console.log(data);
    input.value= "";
    tarea();
})

function tarea(){
    const nuevoItem = `<li id="task">
                            <button id="eliminar-tarea">Eliminar</button>
                            ${data}
                            <button id="realizar-tarea">Realizar</button>
                      </li>`

    taskList.insertAdjacentHTML('beforeend', nuevoItem);
    

    const delTaskList = [...document.querySelectorAll('#eliminar-tarea')]
    console.log(delTaskList)
    delTaskList.map((delTask)=>{
        delTask.addEventListener('click', ({target})=>{
            console.log(target.parentNode)
            target.parentNode.remove()
        })   
    })


    const makeTaskList = [...document.querySelectorAll('#realizar-tarea')]
    console.log(makeTaskList)
    makeTaskList.map((makeTask)=>{
        makeTask.addEventListener('click', ({target})=>{
            console.log(target.parentNode)
            target.parentNode.classList.add('hecho')       
        })   
    })
}


