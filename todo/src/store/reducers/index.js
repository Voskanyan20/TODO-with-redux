import {ADD_ITEM, DELETE_ITEM, DONE_ITEM} from "../action";

const initialState = {
    group: [
        {
            id: 1,
            text: "EMPTY",
            itemDone: false
        }
    ]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                group: [
                    ...state.group,
                    action.payload
                ]
            }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                group: state.group.filter(i => i.id !== action.payload.id)
            }
        }
        case DONE_ITEM: {
            return {
                ...state,
                group: state.group.map(i => i.id === action.payload.id ? {...i, itemDone: !action.payload.itemDone} : i)
            }
        }
        default: {
            return state
        }
    }
}