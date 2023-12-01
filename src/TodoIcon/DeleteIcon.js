import {TodoIcon} from "./"

function DeleteIcon ({onDelete}) {
    return (
        <TodoIcon 
        type="delete"
        color="grey"
        onClick={onDelete}/>
    );
};

export {DeleteIcon}