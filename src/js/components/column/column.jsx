import './column.scss';
import React from 'react';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={`column col-${this.props.width}`}>
        {this.props.children}
      </div>
    );
  }
}
