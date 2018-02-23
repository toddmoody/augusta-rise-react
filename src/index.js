import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// to enable bootstrap across the entire app
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
