import { ReactComponent as CheckSVG } from "./check.svg"
import { ReactComponent as DeleteSVG } from "./delete.svg"

const iconType = {
    "check": <CheckSVG/>,
    "delete": <DeleteSVG/>,
}

function TodoIcon ({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            {iconType[type]}
        </span>
    );
};

export {TodoIcon}