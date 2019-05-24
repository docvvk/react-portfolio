import React, { Component } from "react";

class Textarea extends Component {
  render() {
    return (
      <div className="form-group">
        <label style={{ font:'1.2rem monospace', textTransform: 'uppercase'}} htmlFor={this.props.name}>{this.props.name}</label>
        <textarea
          id={this.props.id}
          name={this.props.name}
          className={this.props.className}
          required={this.props.required}
          onChange={this.props.onChange}
          value={this.props.value}
          rows={this.props.rows}
        />
        <span className="error">{this.props.error}</span>
      </div>
    );
  }
}

export default Textarea;
