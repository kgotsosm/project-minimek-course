import { Component } from 'react'
import logo from "../public/vite.svg"
import './App.css'
import Sample from "./components/Sample.jsx";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Project Mini-Mek</h2>
                </div>
                <Sample />
            </div>
        );
    }
}

export default App;