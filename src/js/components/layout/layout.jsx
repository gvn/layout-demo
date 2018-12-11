import './layout.scss';
import React from 'react';
import Column from '../column/column.jsx';
import Component from '../component/component.jsx';

let layoutConfigs = [
  [
    {
      width: 12,
      children: []
    },
    {
      width: 8,
      children: []
    },
    {
      width: 4,
      children: []
    }
  ],

  [
    {
      width: 12,
      children: []
    },
    {
      width: 4,
      children: []
    },
    {
      width: 8,
      children: []
    }
  ],

  [
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
    },
    {
      width: 12,
      children: []
    }
  ]
];


export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutSelect = this.onLayoutSelect.bind(this);

    this.state = {
      layoutChoice: 0
    };
  }

  onLayoutSelect(event) {
    console.log(event.target.value);

    this.setState({
      layoutChoice: event.target.value
    });
  }

  render() {
    let guts = [];

    layoutConfigs[this.state.layoutChoice].forEach((layout, index) => {
      guts.push(
        <Column key={index} width={layout.width}>
          <Component></Component>
        </Column>
      );
    });

    return (
      <div class="container">
        <div className="row">

          <h5>Choose a layout:&nbsp; </h5>

          <select className="mb-5" onChange={(event) => this.onLayoutSelect(event)}>
            <option value="0">Version 0</option>
            <option value="1">Version 1</option>
            <option value="2">Version 2</option>
          </select>
        </div>

        <div className="row">
          {guts}
        </div>
      </div>
    );
  }
}
