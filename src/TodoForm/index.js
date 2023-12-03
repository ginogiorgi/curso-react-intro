import './TodoForm.css'

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo To Do</label>
            <textarea placeholder="Ir de viaje" />
            <div className="TodoForm-buttonContainer">
            <button type="" className="TodoForm-button TodoForm-button--cancel">
                Cancelar
            </button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">
                Agregar
            </button>
            </div>
        </form>
    );
};

export { TodoForm }