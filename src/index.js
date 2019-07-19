import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store  from './reducer'
import Top from './pages/Top';

ReactDOM.render(<Provider store={store}><Top /></Provider>, document.getElementById('root'));
