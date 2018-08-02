import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "registerServiceWorker";
import Main from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'mobx-react';

// stores
import {birthdayStore} from './stores/'

const stores = {
    birthdayStore,
  };

class App extends React.Component {
    render() {
        return <Main />
    }
}// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
        <Provider {...stores}>
        <App />
        </Provider>
    , document.getElementById("root"));
registerServiceWorker();


