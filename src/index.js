import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './app/App';

document.addEventListener("DOMContentLoaded", function(event) {
     ReactDOM.render(<Table/>, document.getElementById('root'));
});
