import React from 'react'

export default class Blog extends React.Component {
  render() {
    return (
      <div>This is blog # {this.props.params.id}</div>
    );
  }
}
