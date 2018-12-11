import '../sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Column from './components/column/column.jsx';

let layoutConfig = [
  {
    width: 12,
    children: []
  },
  {
    width: 6,
    children: []
  },
  {
    width: 6,
    children: []
  }
];

let guts = [];

layoutConfig.forEach((layout) => {
  guts.push(
    <Column width={layout.width}></Column>
  );
})

console.log(guts);

ReactDOM.render(
  <div className="row">
    {guts}
  </div>,
  document.getElementById('root')
);
