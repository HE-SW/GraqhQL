const todos = [
    {
        id: 'todo1',
        title: 'It is a first title',
        checked: false
    }
]



function getAllTodos () {
    return todos
}

function getTodo(id: string) {
    return todos.find(todo=>todo.id ===id)
}

function createTodo(title:string) {
    const id = new Date().toString()
    const newTodo = {
        id,
        title,
        checked:false
    }

    todos.push(newTodo)
    return newTodo
}

function updateTodo(id:string, title?:string, checked?:boolean) {
    const find = todos.find(todo=>todo.id ===id)
    if(find) {
        if(title) find.title = title
        if(checked) find.checked = checked
        return find
    }
}


function deleteTodo(id:string) {
    const index = todos.findIndex(todo=>todo.id ===id)
    return todos.splice(index , 1)[0]
}


module.exports ={
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}