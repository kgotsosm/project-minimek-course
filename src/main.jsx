import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import configureStore from "./store/configureStore.js";
import process from "../.eslintrc.cjs";

const store = configureStore()
const rootEl = document.getElementById('root')

let render = () => {
    const App = require('./App.jsx').default
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        rootEl,
    )
}

if (process.env.NODE_ENV !== 'production') {
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    if(module.hot) {
        module.hot.accept('./App.jsx', () => setTimeout(render))
    }
}

render()
