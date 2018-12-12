import './headlines.scss';
import React from 'react';

export default class Headlines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="component headlines p-3 m-3">
        <h4>Headlines</h4>
      </div>
    );
  }
}
