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
      components: [
        {
          type: `TopSites`,
          props: {
            sitesToShow: 6
          }
        }
      ]
    },
    {
      width: 12,
      components: [`Headlines`]
    },
    {
      width: 8,
      components: [`Trending`]
    },
    {
      width: 4,
      components: [`BestThisWeek`]
    }
  ],

  [
    {
      width: 8,
      components: [`TopSites`, `Headlines`]
    },
    {
      width: 4,
      components: [`Trending`, `BestThisWeek`]
    }
  ],

  [
    {
      width: 12,
      components: [`TopSites`]
    },
    {
      width: 4,
      components: [`Trending`]
    },
    {
      width: 4,
      components: [`BestThisWeek`]
    },
    {
      width: 4,
      components: [`Headlines`]
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
      let components = [];

      if (!layout.components.length) {
        // Add single generic component if none are specified
        components[0] = React.createElement(Component, {key:0});
      } else {
        components = layout.components.map((child, index) => {
          if (typeof child === `string`) {
            return React.createElement(componentHash[child], {key: index});
          } else {
            // Compile props for the component
            let props = Object.assign({key:index}, child.props);

            return React.createElement(componentHash[child.type], props);
          }
        })
      }

      guts.push(
        <Column key={index} width={layout.width}>
          { components }
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

        <div className="grid mb-5 ">
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
