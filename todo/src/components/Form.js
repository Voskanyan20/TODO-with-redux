import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {add_item} from "../store/action";
import {v1 as uuid} from 'uuid'
function Form(props) {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add_item({
            id:uuid(),
            text,
            itemDone: false
        }))
        setText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{margin: "15px 0 5px 0",width: "200px", height: "25px",textAlign: "center",fontFamily: "cursive"}}
                type="text"
                value={text}
                placeholder="Write!"
                onChange={event => setText(event.target.value)}
            />
            <br/>
            <button style={{width: "55px",height: "30px",backgroundColor: "yellow",border: "1px solid silver",cursor: "pointer",borderRadius: "3px"}}>ADD</button>
        </form>
    );
}

export default Form;