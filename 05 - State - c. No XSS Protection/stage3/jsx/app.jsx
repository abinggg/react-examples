/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class Greeting extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('app')
);
