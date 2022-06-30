import React from 'react';
import {useSelector} from "react-redux";

function Count(props) {
    const group = useSelector(state => state.group)
    const doneCount = group.filter(i=> i.itemDone)
    return (
        <div>
            <h3 style={{fontFamily: "cursive",paddingBottom: "12px"}}>{doneCount.length}/{group.length}</h3>
        </div>
    );
}

export default Count;