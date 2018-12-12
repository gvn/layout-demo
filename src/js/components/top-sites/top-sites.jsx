import './top-sites.scss';
import React from 'react';

export default class TopSites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="component top-sites p-3 m-3">
        <h4>Top Sites</h4>
      </div>
    );
  }
}
