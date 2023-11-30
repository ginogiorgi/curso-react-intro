import './TodoCounter.css'

function TodoCounter({completed, total}) {
    return (
        total !== completed ?
        <h1 className='TodoCounter'>
            Has completado <span>{completed}</span> de <span>{total}</span> To Do's
        </h1>
        :
        completed !==0 ?
        <h1 className='TodoCounter'>Felicidades! completaste tus {completed} To Do's</h1>
        :
        <h1 className='TodoCounter'>Seleccciona el icono + para agregar To Do's</h1>
    );
};

export { TodoCounter }