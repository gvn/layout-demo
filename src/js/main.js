import '../sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello/hello.jsx';

ReactDOM.render(
  <div class="row">
    <Hello></Hello>
    <Hello></Hello>
  </div>,
  document.getElementById('root')
);
