import React from 'react';
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: () => void,
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <form className="input" onSubmit={handleAdd}>
        <input 
            type="text" 
            placeholder='Enter a text' 
            className='input__box' 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit' className='input_submit'>Go</button>
    </form>
  )
}

export default InputField
