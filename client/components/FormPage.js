import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import { apiConfig } from '../../config-api';
import FormBody from './FormBody';

const getRadioInputValue = (radioName, input) => (
  input === undefined ? radioName : radioName + input
);

const getSymptomsValue = s => (
  s.symptoms__checkbox === undefined ? [] : s.symptoms__checkbox.map((name) => {
    if (name.slice(0, 2) === '其他') {
      return { name: `其他：${s[`symptoms__input__${name}`]}`, date: s[`symptoms__date__${name}`] };
    } else {
      return { name, date: s[`symptoms__date__${name}`] };
    }
  })
);

const getDoctorsValue = (s) => {
  const rowIds = [...new Set(Object.keys(s).filter(key => /\bseeing_doctor/.test(key) && s[key] !== undefined).map(key => key.split('__')[1]))];
  return rowIds.map(id => ({ type: s[`seeing_doctor__${id}__radio`], name: s[`seeing_doctor__${id}__input`], date: s[`seeing_doctor__${id}__date`] }));
};

const getChronicDiseaseValue = s => (
  s.chronic_disease__checkbox === undefined ? [] : s.chronic_disease__checkbox.map(name => (
    getRadioInputValue(name, s[`chronic_disease__input__${name}`])
  ))
);

const getRadioInputValue2 = (radioName, input, date) => (
  input === undefined ? radioName : `${radioName + input},${date}`
);

const getFeverValue = s => (
  s.contact_fever__type__checkbox === undefined || s.contact_fever__radio === undefined || s.contact_fever__radio === '否' ? [] : s.contact_fever__type__checkbox.map((name) => {
    const tempName = '是（續填以下欄位，可複選）';
    if (name.slice(0, 2) === '其他') {
      return { name: `其他：${s[`contact_fever__type__input__${name}`]}`, start_date: `${s[`contact_fever__date1__${tempName}`]}`, end_date: `${s[`contact_fever__date2__${tempName}`]}` };
    } else {
      return { name, start_date: s[`contact_fever__date1__${tempName}`], end_date: s[`contact_fever__date2__${tempName}`] };
    }
  })
);

const getPatientValue = s => (
  s.contact_patient__type__checkbox === undefined || s.contact_patient__radio === undefined || s.contact_patient__radio === '否' ? [] : s.contact_patient__type__checkbox.map((name) => {
    const tempName = '是（續填以下欄位，可複選）';
    if (name.slice(0, 2) === '其他') {
      return { name: `其他：${s[`contact_patient__type__input__${name}`]}`, start_date: `${s[`contact_patient__date1__${tempName}`]}`, end_date: `${s[`contact_patient__date2__${tempName}`]}` };
    } else {
      return { name, start_date: s[`contact_patient__date1__${tempName}`], end_date: s[`contact_patient__date2__${tempName}`] };
    }
  })
);

const getSecretionValue = s => (
  s.contact_secretion__type__checkbox === undefined || s.contact_secretion__radio === undefined || s.contact_secretion__radio === '否' ? [] : s.contact_secretion__type__checkbox.map((name) => {
    const tempName = '是（續填以下欄位，可複選）';
    if (name.slice(0, 2) === '其他') {
      return { name: `其他：${s[`contact_secretion__type__input__${name}`]}`, start_date: `${s[`contact_secretion__date1__${tempName}`]}`, end_date: `${s[`contact_secretion__date2__${tempName}`]}` };
    } else {
      return { name, start_date: s[`contact_secretion__date1__${tempName}`], end_date: s[`contact_secretion__date2__${tempName}`] };
    }
  })
);

const getNationValue = (s) => {
  const rowIds = [...new Set(Object.keys(s).filter(key => /\bnation_and_location/.test(key) && s[key] !== undefined).map(key => key.split('__')[1]))];
  return rowIds.map(id => ({
    nation: s[`nation_and_location__${id}__nation`],
    type: s[`nation_and_location__${id}__type`],
    start_date: s[`nation_and_location__${id}__start_date`],
    end_date: s[`nation_and_location__${id}__end_date`],
    companion_num: s[`nation_and_location__${id}__companion_num`],
    companion_symptoms: s[`nation_and_location__${id}__companion_symptoms`],
    transport_and_flight_code: s[`nation_and_location__${id}__transport_and_flight_code`],
  }));
};

const getPublicValue = (s) => {
  const rowIds = [...new Set(Object.keys(s).filter(key => /\bpublic_area/.test(key) && s[key] !== undefined).map(key => key.split('__')[1]))];
  return rowIds.map(id => ({
    start_date: s[`public_area__${id}__start_date`],
    end_date: s[`public_area__${id}__end_date`],
    city: s[`public_area__${id}__city`],
    location: s[`public_area__${id}__location`],
    transportation: s[`public_area__${id}__transportation`],
  }));
};

const getCloseContactorValue = (s) => {
  const rowIds = [...new Set(Object.keys(s).filter(key => /\bclose_contactor/.test(key) && s[key] !== undefined).map(key => key.split('__')[1]))];
  return rowIds.map(id => ({
    type: s[`close_contactor__${id}__type`],
    number: s[`close_contactor__${id}__number`],
    symptom_count: s[`close_contactor__${id}__symptom_count`],
    fever_count: s[`close_contactor__${id}__fever_count`],
    note: s[`close_contactor__${id}__note`],
  }));
};

const getForm = s => ({
  id: s.id,
  information: {
    inv_date: s.inv_date,
    inv_person: s.inv_person,
    report_date: s.report_date,
    name: s.name,
    gender: s.gender,
    birth_date: s.birth_date,
    nationality: getRadioInputValue(s.nationality__radio, s[`nationality__input__${s.nationality__radio}`]),
    address: s.address_city + s.address_area + s.address,
    contact: s.contact,
    occupation: s.occupation,
    med_title: getRadioInputValue(s.med_title__radio, s[`med_title__input__${s.med_title__radio}`]),
    onset: s.onset,
    pregnant_week: getRadioInputValue(s.pregnant_week__radio, s[`pregnant_week__input__${s.pregnant_week__radio}`]),
    married: s.married__radio,
  },
  health_condition: {
    symptoms: getSymptomsValue(s),
    seeing_doctor: getDoctorsValue(s),
    chronic_disease: getChronicDiseaseValue(s),
  },
  source: {
    nation_and_location: getNationValue(s),
    contact_fever: getFeverValue(s),
    contact_patient: getPatientValue(s),
    contact_secretion: getSecretionValue(s),
    infect: getRadioInputValue2(s.infect__radio, s[`infect__input__${s.infect__radio}`], s[`infect__date__${s.infect__radio}`]),
    market: getRadioInputValue2(s.market__radio, s[`market__input__${s.market__radio}`], s[`market__date__${s.market__radio}`]),
    hospital: getRadioInputValue2(s.hospital__radio, s[`hospital__input__${s.hospital__radio}`], s[`hospital__date__${s.hospital__radio}`]),
    pet: getRadioInputValue(s.pet__radio, s[`pet__input__${s.pet__radio}`]),
    bird: getRadioInputValue(s.bird__radio, s[`bird__input__${s.bird__radio}`]),
    farm: getRadioInputValue(s.farm__radio, s[`farm__input__${s.farm__radio}`]),
    shamble: getRadioInputValue(s.shamble__radio, s[`shamble__input__${s.shamble__radio}`]),
    wild: getRadioInputValue(s.wild__radio, s[`wild__input__${s.wild__radio}`]),
    other: getRadioInputValue(s.other__radio, s[`other__input__${s.other__radio}`]),
  },
  contactor: {
    public_area: getPublicValue(s),
    close_contactor: getCloseContactorValue(s),
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
      submitting: false,
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleColumnRemove = this.handleColumnRemove.bind(this);
  }

  /**
   * Post the data to backend. */
  submit() {
    // console.log(getForm(this.state));
    this.setState({ submitting: true });
    axios.post(apiConfig.mongoPost, getForm(this.state))
      .then((res) => {
        console.log(res.data);
        this.props.changeMode(1);
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
   * Handle the removal of a column in a multi-column section.
   * @param {object} target - The id of the target column. */
  handleColumnRemove(target) {
    const re = RegExp(`\\b${target}`);
    Object.keys(this.state).forEach((key) => {
      if (re.test(key)) {
        this.setState({ [key]: undefined });
      }
    });
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <div className="form-page">
        <Container>
          <Row className="justify-content-center" style={{ margin: '2rem 0 2rem 0' }}>
            <Col lg="8">
              <FormBody
                handleChange={this.handleChange}
                handleColumnRemove={this.handleColumnRemove}
                submit={this.submit}
                submitting={this.state.submitting}
                address_city={this.state.address_city}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FormPage;
