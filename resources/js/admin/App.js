import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './store/reducers/RootReducer';
import Aside from './components/partials/Aside';
import Header from './components/partials/Header';
import Routes from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Aside />

                    <main className="bg-gray-100 h-screen w-full overflow-y-auto">
                        <section v-if="active === 'performance'" id="performance">
                            <Header/>
                            <Routes/>


                        </section>
                    </main>
                </Router>
            </Provider>

        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

