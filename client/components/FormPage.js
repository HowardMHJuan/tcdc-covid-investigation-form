import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { apiConfig } from '../../config-api';
import FormBody from './FormBody';

const getForm = s => ({
  id: s.id,
  information: {
    report_date: s.report_date,
    name: s.name,
    gender: s.gender,
  },
  source: {
    is_abroad: s.is_abroad,
  },
  contactor: {

  },
});

/**
 * This Component shows FormPage.
 * @extends Component */
class FormPage extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Post the data to backend. */
  submit() {
    console.log(getForm(this.state));
    axios.post(apiConfig.mongoPost, getForm(this.state))
      .then((res) => {
        console.log(res.data);
        this.setState({ submitted: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    setTimeout(() => console.log(this.state), 1000); 
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <div className="form-page">
        <Container>
          <Row className="justify-content-md-center">
            <Col lg="8">
              <FormBody handleChange={this.handleChange} submit={this.submit} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormPage;
