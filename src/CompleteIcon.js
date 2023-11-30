import { TodoIcon } from "./TodoIcon"

function CompleteIcon(props) {
    return (
        // <span 
        // className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        // onClick={props.onComplete}>
        //   V
        //   </span>
        <TodoIcon 
            type="check"
            color="green"/>
    )
};

export {CompleteIcon}