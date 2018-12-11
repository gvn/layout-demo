import './component.scss';
import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="component p-3 m-3">
      </div>
    );
  }
}
