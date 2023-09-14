import React, { useRef } from 'react'

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //generally throw an error
            return;
        }
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>

        </form>
    )
}

export default NewTodo
