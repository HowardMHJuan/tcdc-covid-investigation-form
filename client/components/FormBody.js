import React, { Component } from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';
import { StringColumn, DateColumn, SelectColumn } from './FormColumns';

/**
 * This Component shows FormBody.
 * @extends Component */
class FormBody extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * @param {object} event - The event that fired handleSubmit. */
  handleSubmit(event) {
    event.preventDefault();
    this.props.submit();
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <div className="form-body">
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <Card.Body>
              <Card.Title>一、基本資料</Card.Title>
              <Information handleChange={this.props.handleChange} />
            </Card.Body>
          </Card>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const Information = props => (
  <React.Fragment>
    <Form.Row>
      <StringColumn id="id" name="法傳編號" handleChange={props.handleChange} />
      <DateColumn id="report_date" name="通報日期（西元年）" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="name" name="姓名" handleChange={props.handleChange} />
      <SelectColumn id="gender" name="生理性別" options={['男', '女']} handleChange={props.handleChange} />
    </Form.Row>
  </React.Fragment>
);

export default FormBody;
