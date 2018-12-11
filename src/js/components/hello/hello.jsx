import './hello.scss';
import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="hello col-6">
        <h1>Container</h1>
      </div>
    );
  }
}
