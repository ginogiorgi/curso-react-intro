import "./TodoSearch.css";

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return (
        <input 
        className="TodoSearch" 
        placeholder="Ir de viaje"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
    )
};

export { TodoSearch }