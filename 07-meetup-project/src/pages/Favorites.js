import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    // Como el context se usa en memoria si se refresca la página desaparecerán nuestros favoritos
    if (favoritesCtx.totalFavorites === 0) {
        content = <p> You have no favorites. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    }
    return <section>
        <h1>My favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;