import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { apiConfig } from '../../config-api';
import FormBody from './FormBody';

const getRadioInputValue = (radioName, input) => (
  input === undefined ? radioName : radioName + input
);

const getSymptomsValue = s => (
  s.symptoms__checkbox.map((name) => {
    if (name.slice(0, 2) === '其他') {
      return { name: `其他：${s[`symptoms__input__${name}`]}`, date: s[`symptoms__date__${name}`] };
    } else {
      return { name, date: s[`symptoms__date__${name}`] };
    }
  })
);

const getForm = s => ({
  id: s.id,
  information: {
    report_date: s.report_date,
    name: s.name,
    gender: s.gender,
    birth_date: s.birth_date,
    nationality: getRadioInputValue(s.nationality__radio, s[`nationality__input__${s.nationality__radio}`]),
    address: s.address,
    contact: s.contact,
    occupation: s.occupation,
    med_title: getRadioInputValue(s.med_title__radio, s[`med_title__input__${s.med_title__radio}`]),
    onset: s.onset,
    pregnant_week: getRadioInputValue(s.pregnant_week__radio, s[`pregnant_week__input__${s.pregnant_week__radio}`]),
  },
  health_condition: {
    symptoms: getSymptomsValue(s),
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

  /**
   * Handle the change of a column in the form.
   * @param {object} event - The event of the column. */
  handleChange(event) {
    const { name, type, checked } = event.target;
    let { value } = event.target;
    if (type === 'checkbox') {
      if (checked === true) {
        value = this.state[name] === undefined ? [value] : this.state[name].concat(value);
      } else {
        value = this.state[name].filter(val => val !== value);
      }
    }
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
