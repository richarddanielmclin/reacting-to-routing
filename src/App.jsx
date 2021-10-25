import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Films from './pages/Films'
import FilmDetail from './pages/FilmDetail'
import People from './pages/People'
import PersonDetail from './pages/PersonDetail'
import Locations from './pages/Locations'
import LocationDetail from './pages/LocationDetail'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                <Route exact path="/films/:filmid">
                    <FilmDetail />
                </Route>
                <Route exact path="/people">
                    <People />
                </Route>
                <Route exact path="/people/:personid">
                    <PersonDetail />
                </Route>
                <Route exact path="/locations">
                    <Locations />
                </Route>
                <Route exact path="/locations/:locationid">
                    <LocationDetail />
                </Route>
                <Route path="*">
                    {() => <h1>404 Not Found</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App