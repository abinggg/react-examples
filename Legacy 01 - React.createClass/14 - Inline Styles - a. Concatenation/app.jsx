/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global createReactClass, React, ReactDOM */
/* eslint react/prop-types:"off" */

var Greeting = createReactClass({
  render: function () {
    return (
      <h1 style={Object.assign({}, styles.header, this.props.style)}>Hello World!</h1>
      /* React Native: <h1 style={[styles.header, this.props.style]}>Hello World!</h1> */
    );
  }
});

var styles = {
  header: {
    background: '#444',
    color: 'orchid',
    fontStyle: 'italic',  // font-style in CSS
    marginTop: '75px',  //margin-top in CSS
  }
};

ReactDOM.render(
  <Greeting style={{ background: 'orange', color: 'blue' }} />,
  document.getElementById('app')
);
