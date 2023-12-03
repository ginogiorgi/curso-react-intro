import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {setOpenModal} = React.useContext(TodoContext);
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
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