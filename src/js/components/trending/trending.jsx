import './trending.scss';
import React from 'react';

export default class Trending extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="component trending p-3 m-3">
        <h4>Trending</h4>
      </div>
    );
  }
}
