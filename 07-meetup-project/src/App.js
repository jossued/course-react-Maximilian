import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetup";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  // React usa el path y carga los componentes que coincidan con el path por ello cargaria siempre /
  // para no cargar / se usa el switch y e
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          < AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          < NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          < FavoritesPage />
        </Route>
      </Switch>
    </div>);
}

export default App;
