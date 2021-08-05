import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Tracker from '../shared/tracker.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
                <Tracker>
                  <App/>
                </Tracker>
                            , document.getElementById('app'));