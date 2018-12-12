import './best-this-week.scss';
import React from 'react';

export default class BestThisWeek extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="component best-this-week p-3 m-3">
        <h4>Best this Week</h4>
      </div>
    );
  }
}
