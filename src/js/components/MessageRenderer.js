// jshint esnext:true
import React from 'react'; //var React = require('react');

export default React.createClass({
  render () {
    return <div>{this.props.message}</div>;
  }
});
