import React from 'react';
import { Form, Col, Row, Card, Button } from 'react-bootstrap';

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

const MedicalTreatmentColumn = props => (
  <Card>
    <Card.Body>
      <fieldset name={props.id} onChange={props.handleChange}>
        <Row>
          <Button size="sm" variant="danger" id={props.id} onClick={props.handleRemove} style={{ padding: '0 0.3rem 0 0.3rem', margin: '1.5rem 0 1.5rem 0' }}>
            移除
          </Button>
          <Col sm={5}>
            <Form.Label>就醫日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__date`}
              value={props.dateValue}
            />
          </Col>
          <Col>
            <Form.Label>醫療院所名稱</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__input`}
              value={props.inputValue}
            />
          </Col>
          <Col sm="auto">
            {['門診', '急診', '住院'].map(value => (
              <Form.Check
                type="radio"
                label={value}
                name={`${props.id}__radio`}
                value={value}
              />
            ))}
          </Col>
        </Row>
      </fieldset>
    </Card.Body>
  </Card>
);

export {
  StringColumn,
  DateColumn,
  SelectColumn,
  RadioAndInputColumn,
  CheckboxInputAndDateColumn,
  MedicalTreatmentColumn,
};
