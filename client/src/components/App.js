import React from 'react';
import { Router, Route, } from 'react-router-dom';

import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';

import Header from './Header';

import history from '../history';

const App = () => {
    return (
            <Router history={history}>
                <div>
                    <Header />
                    <div className="ui container">
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/show" exact component={StreamShow} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    </div>
                    
                </div>
            </Router>
    );
};

export default App