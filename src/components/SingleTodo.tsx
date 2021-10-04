
import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import { Todo } from "./model"
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {MdDone} from "react-icons/md"
type Props = {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}:Props ) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id: number) =>{
setTodos(todos.map((todo)=> todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

const handleDelete = (id:number)=>{
    setTodos(todos.filter(todos=> todos.id !== id))
}

const handleEdit = (e:React.FormEvent, id: number)=>{
    e.preventDefault()
    setTodos(todos.map((todo)=>
        todo.id === id ? {...todo, todo:editTodo} : todo
    ))
    setEdit(false)
}
const inputRef = useRef<HTMLFormElement | null>(null)

useEffect(()=>{
    inputRef.current?.focus()
},[edit])
    return (
        <form ref={inputRef} className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}} className="todos__single--text" />
                ) : (
                      
                todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>

                ) : (

                    <span className="todos__single--text">{todo.todo}</span>
                )
             
                )
            }
            
         
            <div>
                <span className="icon" onClick={
                  ()=> { if (!edit && !todo.isDone){
                        setEdit(!edit)}
                    }
                }><AiFillEdit/></span>
                <span className="icon">
                <AiFillDelete onClick={()=>handleDelete(todo.id)}/>
                </span>
                <span className="icon">
                <MdDone onClick={()=>handleDone(todo.id)}/>
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
