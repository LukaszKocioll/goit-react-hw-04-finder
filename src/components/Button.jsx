import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="button-load-more">
        Load more
      </button>
    );
  }
}

export default Button;