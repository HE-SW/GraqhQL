const todosModel = require("./todos.model");

module.exports = {
    Query: {
        allTodos: () => {
            return todosModel.getAllTodos();
        },
    },
    Mutation: {
        createTodo: (_: any, args: { text: string; checked: boolean }) => {
            return todosModel.createTodo(args.text, args.checked);
        },
        updateTodo: (_: any, args: { id: string; text: string; checked: boolean }) => {
            return todosModel.updateTodo(args.id, args.text, args.checked);
        },
        removeTodo: (_: any, args: { id: string }) => {
            return todosModel.removeTodo(args.id);
        },
    },
};
