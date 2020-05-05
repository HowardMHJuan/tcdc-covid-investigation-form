import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

/**
 * This Component is the wrapper of multi-column.
 * @extends Component */
class MultiColumnWrapper extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = { rowIds: [], newIds: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  /**
   * @param {object} props - The props changed.
   * @param {object} state - The state to change.
   * @return {object} - The state changed. */
  static getDerivedStateFromProps(props, state) {
    if (props.values) {
      state.rowIds = Object.keys(props.values);
    } else {
      state.rowIds = [0];
    }
    state.rowIds = state.rowIds.concat(state.newIds);
    state.rowIds = [...new Set(state.rowIds)];
    // console.log(state.rowIds, state.newIds);
    return state;
  }

  /**
   * Handle the click of the add button. */
  handleAdd() {
    const newId = String(Math.max(-1, ...this.state.rowIds) + 1);
    const newIds = [...this.state.newIds, newId];
    this.setState({ newIds });
    // console.log(newIds)
    // console.log(this.newIds);
  }

  /**
   * Handle the click of the remove button.
   * @param {object} event - The triggering event. */
  handleRemove(event) {
    const idToRemove = event.target.id.split('__')[1];
    const rowIds = this.state.rowIds.filter(id => id !== idToRemove);
    const newIds = this.state.newIds.filter(id => id !== idToRemove);
    this.setState({ rowIds, newIds });
    this.props.handleColumnRemove(event.target.id);
  }

  handleCopy(event) {
    const from = event.target.id;
    const to = event.target.id.split('__')[0] + '__' + String(Math.max(-1, ...this.state.rowIds) + 1);
    this.handleAdd();
    this.props.handleColumnCopy(from, to);
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <Form.Group as={Col} controlId={this.props.id}>
        {this.state.rowIds.map(id => (
          React.cloneElement(this.props.children, {
            id: `${this.props.id}__${id}`,
            key: `${this.props.id}__${id}`,
            values: this.props.values && this.props.values[id] ? this.props.values[id] : {},
            handleRemove: this.handleRemove,
            handleCopy: this.handleCopy,
          })
        ))}
        <Button variant="primary" onClick={this.handleAdd}>
          新增
        </Button>
      </Form.Group>
    );
  }
}

export default MultiColumnWrapper;
