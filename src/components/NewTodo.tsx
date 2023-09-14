import React, { useRef } from 'react';
import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}>= (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //generally throw an error
            return;
        }
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <label htmlFor='text'>Enter your Todos</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>

        </form>
    )
}

export default NewTodo
