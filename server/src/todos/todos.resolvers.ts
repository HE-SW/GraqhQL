
const model = require('./todos.model')

module.exports = {
    Query : {
        todos: ()=>{
            return model.getAllTodos()
        },
        todo:(_:any, args:{id:string},) => {
            return model.getTodo(args.id)
        }
    },
    Mutation: {
        createTodo:(_:any, args: {title:string})=> {
            return model.createTodo(args.title)
        },
        updateTodo:(_:any, args: {id:string,title?:string, checked?:boolean})=> {
            return model.updateTodo(args.id, args.title,args.checked)
        },
        deleteTodo:(_:any, args: {id:string})=> {
            return model.createTodo(args.id)
        }
    }
}
