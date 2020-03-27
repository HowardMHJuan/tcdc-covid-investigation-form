import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';

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

const RadioAndInputColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <fieldset name={props.id} onChange={props.handleChange}>
      <Form.Label>{props.name}</Form.Label>
      {props.options.map(option => (
        <Row>
          <Col sm="auto">
            <Form.Check
              type="radio"
              label={option.name}
              name={`${props.id}__radio`}
              value={option.name}
            />
          </Col>
          {option.input === true ?
            <Col>
              <Form.Control
                type="text"
                name={`${props.id}__input__${option.name}`}
              />
            </Col>
          :
            null
          }
        </Row>
      ))}
    </fieldset>
  </Form.Group>
);

const CheckboxInputAndDateColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <fieldset name={props.id} onChange={props.handleChange}>
      <Form.Label>{props.name}</Form.Label>
      {props.options.map(option => (
        <Row>
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label={option.name}
              name={`${props.id}__checkbox`}
              value={option.name}
            />
          </Col>
          {option.input === true ?
            <Col>
              <Form.Control
                type="text"
                name={`${props.id}__input__${option.name}`}
              />
            </Col>
          :
            null
          }
          {option.date === true ?
            <Col sm={4}>
              <Form.Control
                type="date"
                name={`${props.id}__date__${option.name}`}
              />
            </Col>
          :
            null
          }
        </Row>
      ))}
    </fieldset>
  </Form.Group>
);

export { StringColumn, DateColumn, SelectColumn, RadioAndInputColumn, CheckboxInputAndDateColumn };
