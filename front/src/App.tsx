import TodoItem from "./components/TodoItem";
import { useAddTodoMutation, useGetTodosQuery } from "./generated/graphql";
import { useState } from "react";

function App() {
    const { loading, error, data } = useGetTodosQuery();
    const [addTodo, { error: addError }] = useAddTodoMutation();
    const [input, setInput] = useState("");

    const counter = (): string => {
        if (data?.allTodos) {
            const completed = data.allTodos.filter((todo) => todo?.checked);
            return `${completed.length}/${data.allTodos.length}`;
        }
        return "0/0";
    };

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === "") return;
        addTodo({
            variables: {
                text: input,
                checked: false,
            },
        });
        setInput("");
    };

    if (error) {
        return <div>Network Error</div>;
    }
    return (
        <div className="flex flex-col items-center">
            <div className="mt-5 text-3xl">
                Todo App<span className="text-sm">({counter()})</span>
            </div>
            <div className="w-5/6 md:w-1/2 lg:-3/5">
                <form onSubmit={handleSumbit} className="flex justify-between p-5 my-5 text-4xl border-2 rounded-md shadow-md">
                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        placeholder="할일을 작성해주세요"
                        type="text"
                        className="outline-none border-b-[1px] text-xl w-10/12 focus:border-b-[3px]"
                    />
                    <div>
                        <button type="submit" className="hover:scale-105">
                            +
                        </button>
                    </div>
                </form>
                {loading ? (
                    <div>loading....</div>
                ) : (
                    <ul>
                        {data?.allTodos &&
                            data.allTodos.map((todo) => {
                                return <TodoItem key={todo?.id} item={todo} />;
                            })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;
