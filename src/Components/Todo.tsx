import styles from './Css/Todo.module.css';
import React from 'react';

const Todo: React.FC = () => {
    return (
        <div className={styles.Todo}>
            <div className={styles.TodoHeader}>To-Do List</div>
            <div className={styles.TodoAdd}>
                <input
                    type="text"
                    placeholder="Add Your Task"
                    className={styles.TodoInput}
                />
                <div className={styles.TodoAddBtn}>ADD</div>
            </div>
            <div className={styles.TodoList}></div>
        </div>
    );
};

export default Todo;
