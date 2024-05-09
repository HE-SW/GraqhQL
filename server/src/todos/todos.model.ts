const todos = [
    {
        id: "1",
        text: "It is a first comment",
        checked: false,
    },
];

function getAllTodos() {
    return todos;
}

function createTodo(text: string, checked: boolean) {
    const newTodo = {
        id: new Date().toDateString(),
        text,
        checked,
    };
    todos.push(newTodo);
    return newTodo;
}

function updateTodo(id: string, text?: string, checked?: boolean) {
    const find = todos.find((todo) => todo.id === id);
    if (find) {
        if (text) find.text = text;
        if (checked) find.checked = checked;
        return find;
    }
}

function removeTodo(id: string) {
    const index = todos.findIndex((todo) => todo.id == id);
    if (index > -1) {
        todos.splice(index, 1);
        return {
            result: true,
        };
    } else {
        return { result: false };
    }
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    removeTodo,
};