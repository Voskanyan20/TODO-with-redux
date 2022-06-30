import React from 'react';
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const group = useSelector(state => state.group)
    return (
        <ol>
            {
                group.map(todo=>(
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                    />
                ))
            }
        </ol>
    );
}

export default TodoList;