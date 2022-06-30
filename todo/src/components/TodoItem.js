import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItem, doneItem} from "../store/action";

function TodoItem(props) {
    const {todo} = props;
    const dispatch = useDispatch();

    const handleDone = ()=>{
        dispatch(doneItem(
            todo.itemDone,
            todo.id
        ))
    }
    const handleDelete = ()=>{
        dispatch(deleteItem(
            todo.id
        ))
    }
    return (
        <li className="li">
            <span className="span" style={todo.itemDone ? {"textDecoration": "line-through"}:null}>{todo.text}</span>
            <button className="done" onClick={handleDone}>Done</button>
            <button className="del" onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;