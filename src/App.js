import React from 'react'
import CountriesList from './components/CountriesList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CountryDetail from './components/CountryDetail'
import About from './components/About'

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/countries" exact component={CountriesList} />
                        <Route path="/country/:id" component={CountryDetail} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const Home = () => (
    <div>
        <h1>Welcome</h1>
    </div>
)

export default App