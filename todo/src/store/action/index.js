export const ADD_ITEM = "ADD_ITEM"
export function add_item(todo){
    return{
        type:ADD_ITEM,
        payload:todo
    }
};

export const DELETE_ITEM = "DELETE_ITEM"
export function deleteItem(id){
    return{
        type:DELETE_ITEM,
        payload:{id}
    }
};

export const DONE_ITEM = "DONE_ITEM"
export function doneItem(itemDone,id){
    return{
        type:DONE_ITEM,
        payload:{itemDone,id}
    }
}