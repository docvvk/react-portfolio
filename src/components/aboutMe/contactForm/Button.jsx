import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="form-group">
        <button
         style={{ font:'1.4rem monospace'}} 
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          onClick={this.props.onClick}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

export default Button;
