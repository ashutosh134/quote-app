import React from 'react'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../features/todos/todoSlice';

const ListItem = ({todo}) => {

const dispatch = useDispatch()

const handleDelete =(ashu) =>{

  dispatch(remove(ashu))

};

const handleEdit = (todo) => {
dispatch(edit(todo));
}

  return (
    <li className="list-group-item rounded-0 p-5 mx-5">
    <h1 className="display-6 mx-3 rounded-0">{todo.text}</h1>
    <span className='float-end'>
        <button className="btn btn-primary rounded-0 mx-5" onClick={()=>handleEdit(todo)} >edit</button>
        <button className="btn btn-danger rounded-0 " onClick={()=>handleDelete(todo.id)} >delete</button>
    </span>

  </li>
  )
}

export default ListItem
