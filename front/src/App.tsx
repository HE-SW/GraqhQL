import { useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';
import { GET_TODOS } from './apollo/todos';

function App() {
    const { data } = useQuery(GET_TODOS);
    const [input, setInput] = useState('');

    const counter = () => {
        // if(data?.todos as ) {
        // const completed =
        return `${0}/${0}`;
        // }
    };

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === '') return;
        setInput('');
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mt-5 text-3xl">
                Todo App<span className="text-sm">{counter()}</span>
            </div>
            <div className="w-5/6 md:w-1/2 lg:-3/5">
                <form
                    onSubmit={handleSumbit}
                    className="flex justify-between p-5 my-5 text-4xl border-2 rounded-md shadow-md"
                >
                    <input
                        value={input}
                        onChange={e => {
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
                <ul>
                    {/* {data && data.todos?.map((todo) => {
                                return <TodoItem key={todo?.id} item={todo} />;
                            })} */}
                </ul>
            </div>
        </div>
    );
}

export default App;
