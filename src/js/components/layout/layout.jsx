import './layout.scss';
import React from 'react';
import Column from '../column/column.jsx';
import Component from '../component/component.jsx';
import TopSites from '../top-sites/top-sites.jsx';

let componentHash = {
  Component: Component,
  TopSites: TopSites
};

let layoutConfigs = [
  [
    {
      width: 12,
      children: [`TopSites`]
    },
    {
      width: 8,
      children: []
    },
    {
      width: 4,
      children: [`Component`, `Component`]
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
    this.setState({
      layoutChoice: event.target.value
    });
  }

  render() {
    let guts = [];

    layoutConfigs[this.state.layoutChoice].forEach((layout, index) => {
      let children = [];

      if (!layout.children.length) {
        // Add generic component if none are specified
        children[0] = React.createElement(Component, {key:0});
      } else {
        children = layout.children.map((child, index) => {
          return React.createElement(componentHash[child], {key: index});
        })
      }

      guts.push(
        <Column key={index} width={layout.width}>
          { children }
        </Column>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <h5 className="mr-2">Layout:</h5>

          <select className="mb-5" onChange={(event) => this.onLayoutSelect(event)}>
            <option value="0">Version 0</option>
            <option value="1">Version 1</option>
            <option value="2">Version 2</option>
          </select>
        </div>

        <div className="row mb-5">
          {guts}
        </div>

        <div className="row">
          <div className="col-12">
            <h5>Remote Configuration JSON:</h5>
          </div>
          <div className="col-12">
            <pre>{JSON.stringify(layoutConfigs[this.state.layoutChoice], null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}
