function Todo(props) { // es necesario que los componentes empiecen con una Mayus
    return (
        <div className='card'>
            <h2>{props.title}</h2>  {/* los corchetes son para abrir una expresión Js*/}
            <div className='actions '>
                <button className='btn'>Delete</button>
            </div>
        </div>
    );
}

export default Todo;
