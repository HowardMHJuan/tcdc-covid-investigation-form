import React from 'react';
import { Form, Col } from 'react-bootstrap';

const StringColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control
      type="text"
      name={props.id}
      onChange={props.handleChange}
    />
  </Form.Group>
);

const DateColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control
      type="date"
      name={props.id}
      onChange={props.handleChange}
    />
  </Form.Group>
);

const SelectColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control as="select" name={props.id} onChange={props.handleChange}>
      <option>{null}</option>
      {props.options.map(option => <option>{option}</option>)}
    </Form.Control>
  </Form.Group>
);

const TFcheckbox1 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
  </Form.Group>
);

const TFcheckbox2 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[2]} type={"checkbox"} id={"inline-checkbox-3"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[3]} type={"checkbox"} id={"inline-checkbox-4"} onChange={props.handleChange}/>
      <Form.Control type="text" onChange={props.handleChange}/>
  </Form.Group>
);

const TFcheckbox3 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
      <Form.Control type="text" onChange={props.handleChange}/>
  </Form.Group>
);

export { StringColumn, DateColumn, SelectColumn, TFcheckbox1, TFcheckbox2, TFcheckbox3};
