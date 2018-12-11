import './column.scss';
import React from 'react';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`hello col-${this.props.width}`}>
        <h1>Column</h1>
      </div>
    );
  }
}
