import classes from "./Card.module.css"

function Card(props) {
    // props.children es una propiedad que tiene el contenido que esta encasillado (wrapped) en el componente
    return <div className={classes.card}>
        {props.children} 
    </div>
}

export default Card;