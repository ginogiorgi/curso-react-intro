import {TodoIcon} from "./TodoIcon"

function DeleteIcon (props) {
    return (
        // <span 
        // className="Icon Icon-delete"
        // onClick={props.onDelete}>
        //   X
        // </span>
        <TodoIcon 
        type="delete"
        color="red"/>
    );
};

export {DeleteIcon}