function Todo() { // es necesario que los componentes empiecen con una Mayus
    return (
        <div className='card'>
            <h2>title</h2>
            <div className='actions '>
                <button className='btn'>Delete</button>
            </div>
        </div>
    );
}

export default Todo;