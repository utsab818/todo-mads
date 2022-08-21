//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


//Functions

function addTodo(event){
    //Prevent the default behaviour of form submitting.
    event.preventDefault();

    if(todoInput.value != ''){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        
        //create Li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value;
    
        todoDiv.appendChild(newTodo);
    
    
        //Adding a checked icon
        const checkedBtn = document.createElement('button');
        checkedBtn.innerHTML = '<i class = "fas fa-check"></i>';
        checkedBtn.classList.add('checked-btn');
        todoDiv.appendChild(checkedBtn);
    
        //Adding a removed icon
        const removedBtn = document.createElement('button');
        removedBtn.innerHTML = '<i class = "fas fa-trash"></i>';
        removedBtn.classList.add('removed-btn');
        todoDiv.appendChild(removedBtn);
        todoList.appendChild(todoDiv);
    }

    else{
        alert("No text added.");
    }

    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === "removed-btn"){
        const todo = item.parentElement;
        todo.classList.add('jharyo');
        
        todo.addEventListener("transitionend",()=>{
            todo.remove();
        })
    }

    if(item.classList[0] === "checked-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('lineIt');
    }

}