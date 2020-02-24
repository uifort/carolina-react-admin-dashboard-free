import React, { Component } from 'react';

export default class ExampleWrapperContainer extends Component {
  render() {
    return (
      <div className="example-card-container mb-4-spacing">
        <div className="container">
          <h5 className="display-4 mb-4 font-weight-bold">
            {this.props.sectionHeading}
          </h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}
