import React from 'react';
import {TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        totalTodos !== completedTodos ?
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
        </h1>
        :
        completedTodos !==0 ?
        <h1 className='TodoCounter'>Felicidades! completaste tus {completedTodos} To Do's</h1>
        :
        <h1 className='TodoCounter'>Seleccciona el icono + para agregar To Do's</h1>
    );
};

export { TodoCounter }