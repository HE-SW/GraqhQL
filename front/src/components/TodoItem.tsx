import { useState } from 'react';
import { FiEdit, FiMinusCircle } from 'react-icons/fi';

type Props = {
    item: any | null;
};

const TodoItem = ({ item }: Props) => {
    const [edit, setEdit] = useState(false);
    const [task, setTask] = useState(item?.title);

    const handleChange = () => {};

    return (
        <li className="flex items-center justify-between p-5 my-3 text-2xl duration-300 hover:scale-105 border-2 rounded-md shadow-md">
            <div className="flex items-center w-10/12">
                <input
                    checked={item?.checked}
                    onChange={handleChange}
                    type="checkbox"
                    className="hover:scale-105 hover:cursor-pointer"
                />
                <input
                    type="text"
                    disabled={!edit}
                    value={task}
                    onChange={e => {
                        setTask(e.target.value);
                    }}
                    className={`ouline-none h-[25px] text-xl w-full mx-5 px-3 disabled:bg-transparent focus:border-b-[1px] ${
                        item?.checked && 'line-through'
                    } text-stone-500`}
                />
            </div>
            <div className="flex justify-between w-1/6">
                <FiEdit className="hover:scale-105 hover:cursor-pointer" />
                <FiMinusCircle className="hover:scale-105 hover:cursor-pointer" />
            </div>
        </li>
    );
};

export default TodoItem;
