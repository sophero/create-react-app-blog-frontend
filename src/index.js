import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import Blogs from './components/Blogs';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Blogs />, document.getElementById('root'));
registerServiceWorker();
