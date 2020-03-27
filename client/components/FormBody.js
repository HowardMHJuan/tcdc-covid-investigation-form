import React, { Component } from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';
import { StringColumn, DateColumn, SelectColumn, RadioAndInputColumn } from './FormColumns';

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
          <Card>
            <Card.Body>
              <Card.Title>二、臨床狀況</Card.Title>
              <Card>
                <Card.Body>
                  <Card.Title as="h6">（一）症狀（初始症狀或疾病過程中曾出現）</Card.Title>
                  <HealthConditionSymptoms handleChange={this.props.handleChange} />
                </Card.Body>
              </Card>
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
    <Form.Row>
      <DateColumn id="birth_date" name="出生日期（西元年）" handleChange={props.handleChange} />
      <RadioAndInputColumn
        id="nationality"
        name="國籍"
        options={[{ name: '本國籍' }, { name: '其他，國籍：', input: true }]}
        handleChange={props.handleChange}
      />
    </Form.Row>
    <Form.Row>
      <StringColumn id="address" name="居住地" handleChange={props.handleChange} />
      <StringColumn id="contact" name="聯絡方式" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="occupation" name="職業" handleChange={props.handleChange} />
      <RadioAndInputColumn
        id="med_title"
        name="是否為醫療機構人員*"
        options={[{ name: '否' }, { name: '是，職稱：', input: true }]}
        handleChange={props.handleChange}
      />
    </Form.Row>
    <Form.Row>
      <DateColumn id="onset" name="發病日期（西元年）" handleChange={props.handleChange} />
      <RadioAndInputColumn
        id="pregnant_week"
        name=" 是否懷孕（女性）"
        options={[{ name: '否' }, { name: '是，懷孕幾週：', input: true }]}
        handleChange={props.handleChange}
      />
    </Form.Row>
  </React.Fragment>
);

const HealthConditionSymptoms = props => (
  <div></div>
);

export default FormBody;
