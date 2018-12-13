import './top-sites.scss';
import React from 'react';

export default class TopSites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let sites = [];

    for (let i = 0; i < this.props.sitesToShow; i++) {
      sites.push(
        <div className="top-site" key={i}></div>
      )
    }

    return (
      <div className="component top-sites p-3 m-3">
        <h4>Top Sites</h4>
        <div className="sites">{ sites }</div>
      </div>
    );
  }
}

TopSites.defaultProps = {
  sitesToShow: 4
};
