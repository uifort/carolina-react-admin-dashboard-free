import React, { Component } from 'react';

export default class ExampleWrapperSeamless extends Component {
  render() {
    return (
      <div className="example-card-seamless mb-4-spacing">
        <h5 className="display-5 mb-4 font-weight-bold">
          {this.props.sectionHeading}
        </h5>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
