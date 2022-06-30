import React from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Count from "./components/Count";
import "./assetc/style.css"

function App(props) {
    return (
        <div>
            <h1 style={{fontFamily: "cursive",textAlign: "center"}}>TODO LIST</h1>
            <div style={{backgroundColor: "greenyellow",width: "320px",margin: "0 auto",textAlign: "center"}}>
                <Form/>
                <TodoList/>
                <Count/>
            </div>
        </div>
    );
}

export default App;