export interface Todo {
    id: number;
    todo: string;
    done: boolean;
}


// import { useReducer } from "react";
// type Actions =  {type: "add", payload:string} | {type: "remove", payload:number | string} | {type: "done", payload:number | string};


// const TodoReducer = (state:Todo[], action: Actions) => {
//     switch(action.type) {
//         case "add":
//             return [...state, {id: state.length, todo: action.payload, done: false}];
//         case "remove":
//             return state.filter(todo => todo.id !== action.payload);
//         case "done":
//             return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo);
//         default:
//             return state;
    
//     }
// }

// export const ReducerExample: React.FC =  () => {
//     const [state, dispatch] = useReducer(TodoReducer, [])

//     return (
//         <div>
//             <span>{state.length}</span>
//         </div>
//     );
// }