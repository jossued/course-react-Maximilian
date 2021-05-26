import { useContext } from "react";

import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        itemIsFavorite ? 
        favoritesCtx.removeFavorite(props.id) : 
        favoritesCtx.addFavorite({
            id: props.id,
            title: props.title,
            descripcion: props.descripcion,
            image: props.image,
            address: props.address
        })
    }
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.descripcion}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
            </div>
        </Card>
    </li>
}


export default MeetupItem;