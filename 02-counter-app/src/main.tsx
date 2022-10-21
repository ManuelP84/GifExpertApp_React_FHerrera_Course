import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app/App';
import { CounterApp } from './components/CounterApp';
import { FirstApp } from './components/FirstApp';
import './style.css'

const rootElement = document.getElementById('root') as HTMLElement
const rootReact = ReactDOM.createRoot(rootElement)
rootReact.render(
    <React.StrictMode>
        {/* <App/>
        <FirstApp name='manuel'/> */}
        <CounterApp value={37}/>
    </React.StrictMode>
);
