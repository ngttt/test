import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import './index.css';
import ListMovie from './ListMovie'
import Filter from './Filter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetail from './MovieDetail';
import Search from './Search';
import FilterList from './FilterList';

const App = () => {
    return (
        <div>
            <Router>
                <Nav/>
                <div className="movies">
                <Filter/>
                    <Switch>
                        <Route path="/" exact component={ListMovie}/>
                        <Route path="/:id" exact component={MovieDetail}/>
                        <Route path="/search/:search" component={Search}/>
                        <Route path="/filter/:filter" component={FilterList}/>
                    </Switch>
            </div>
            </Router>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));