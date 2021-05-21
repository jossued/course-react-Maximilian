import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) { // es necesario que los componentes empiecen con una Mayus
    const [modalIsOpen, setModalIsOpen] = useState(false); // se declara con un estado inicial

    function deleteHandler() {
        setModalIsOpen(true);
        console.log(props.title);
    }
    // los corchetes {props.title} son para abrir una expresión Js
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal />}
            { modalIsOpen && <Backdrop />}
        </div>
    );
}

export default Todo;
