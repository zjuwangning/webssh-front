import React, { Component } from 'react';
import './App.css';
import NetWorkConfig from "./NetWorkConfig"
import "../node_modules/xterm/dist/xterm.css"
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NetWorkConfig/>
            </div>
        );
    }
}

export default App;
