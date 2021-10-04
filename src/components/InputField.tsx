
import { useRef } from "react"
import "./styles.css"
import {Todo} from "./model"
type Props = {
    todo: Todo
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent)=> void
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
const ref = useRef<HTMLInputElement>(null )



    return (
        <form className="input" onSubmit={(e)=>{
            handleAdd(e)
            ref.current?.blur()
        }}>
            <input ref={ref} placeholder="Enter a task..." type="input" className="input__box" value={todo.todo}  onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit" className="input__submit">Go</button>
        </form>
    )
}

export default InputField
