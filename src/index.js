import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import BlogList from './components/BlogList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<BlogList />, document.getElementById('root'));
registerServiceWorker();
