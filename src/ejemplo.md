const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Ir a Mar del Plata', completed: false},
  {text: 'Comer panchitos', completed: false},
  {text: 'Ver anime', completed: true},
  {text: 'Ordenar pieza', completed: false},
];

localStorage.setItem('EJEMPLOS_TODOS', JSON.stringify(defaultTodos));

localStorage.removeItem('EJEMPLOS_TODOS');