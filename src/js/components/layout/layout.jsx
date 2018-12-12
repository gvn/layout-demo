import './layout.scss';
import React from 'react';
import Column from '../column/column.jsx';
import Component from '../component/component.jsx';
import TopSites from '../top-sites/top-sites.jsx';
import BestThisWeek from '../best-this-week/best-this-week.jsx';
import Headlines from '../headlines/headlines.jsx';
import Trending from '../trending/trending.jsx';

let componentHash = {
  Component: Component,
  TopSites: TopSites,
  BestThisWeek: BestThisWeek,
  Headlines: Headlines,
  Trending: Trending
};

let layoutConfigs = [
  [
    {
      width: 12,
      children: [`TopSites`]
    },
    {
      width: 12,
      children: [`Headlines`]
    },
    {
      width: 8,
      children: [`Trending`]
    },
    {
      width: 4,
      children: [`BestThisWeek`]
    }
  ],

  [
    {
      width: 8,
      children: [`TopSites`, `Headlines`]
    },
    {
      width: 4,
      children: [`Trending`, `BestThisWeek`]
    }
  ],

  [
    {
      width: 12,
      children: [`TopSites`]
    },
    {
      width: 4,
      children: [`Trending`]
    },
    {
      width: 4,
      children: [`BestThisWeek`]
    },
    {
      width: 4,
      children: [`Headlines`]
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
      <div className="layout container">
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
