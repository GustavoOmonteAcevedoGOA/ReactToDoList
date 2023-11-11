import styles from './Css/Todo.module.css';
import React, { useRef, useState } from 'react';

interface ItodoState {
    no: number;
    text: string;
    display: string;
}

let count = 0;
const Todo: React.FC = () => {
    const [todos, setTodos] = useState<ItodoState[]>([
        { no: 0, text: '', display: '' },
    ]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const add = () => {
        setTodos([
            ...todos,
            { no: count++, text: inputRef.current?.value || '', display: '' },
        ]);
    };

    return (
        <div className={styles.Todo}>
            <div className={styles.TodoHeader}>To-Do List</div>
            <div className={styles.TodoAdd}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add Your Task"
                    className={styles.TodoInput}
                />
                <div
                    onClick={() => {
                        add();
                    }}
                    className={styles.TodoAddBtn}
                >
                    ADD
                </div>
            </div>
            <div className={styles.TodoList}></div>
        </div>
    );
};

export default Todo;
