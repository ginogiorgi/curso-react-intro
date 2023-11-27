import "./TodoSearch.css"

function TodoSearch() {
    return (
        <input 
        className="TodoSearch" 
        placeholder="Ir de viaje"
        onChange={(event) => {
            console.log(event.target.value);
        }}/>
    )
};

export { TodoSearch }