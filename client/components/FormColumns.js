import React from 'react';
import { Form, Col, Row, Card, Button } from 'react-bootstrap';
import AreaNames from '../utils/AreaNames';

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

const LocationColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Row style={{ marginBottom: '0.3rem' }}>
      <Col sm="4">
        <div>縣市：</div>
        <Form.Control as="select" name={`${props.id}_city`} onChange={props.handleChange}>
          <option key="null" />
          {Object.keys(AreaNames).map(option => <option key={option}>{option}</option>)}
        </Form.Control>
      </Col>
      <Col sm="5">
        <div>鄉鎮市區：</div>
        <Form.Control as="select" name={`${props.id}_area`} onChange={props.handleChange}>
          <option key="null" />
          {AreaNames[props[`${props.id}_city`]] === undefined ?
            null
          :
            AreaNames[props[`${props.id}_city`]].map(option => <option key={option}>{option}</option>)}
        </Form.Control>
      </Col>
    </Row>
    <div>地址：</div>
    <Form.Control
      type="text"
      name={props.id}
      onChange={props.handleChange}
    />
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

const TFcheckbox1 = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    &nbsp; &nbsp; &nbsp;
    <Form.Check inline label={props.options[0]} type="checkbox" id="inline-checkbox-1" onChange={props.handleChange} />
    <Form.Check inline label={props.options[1]} type="checkbox" id="inline-checkbox-2" onChange={props.handleChange} />
  </Form.Group>
);

const TFcheckbox2 = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    &nbsp; &nbsp; &nbsp;
    <Form.Check inline label={props.options[0]} type="checkbox" id="inline-checkbox-1" onChange={props.handleChange} />
    <Form.Check inline label={props.options[1]} type="checkbox" id="inline-checkbox-2" onChange={props.handleChange} />
    <Form.Check inline label={props.options[2]} type="checkbox" id="inline-checkbox-3" onChange={props.handleChange} />
    <Form.Check inline label={props.options[3]} type="checkbox" id="inline-checkbox-4" onChange={props.handleChange} />
    <Form.Control type="text" onChange={props.handleChange} />
  </Form.Group>
);

const RadioAndInputColumn2 = props => (
  <Form.Group as={Col} controlId={props.id}>
    <fieldset name={props.id} onChange={props.handleChange}>
      <Form.Label>{props.name}</Form.Label>
      {props.options.map(option => (
        <React.Fragment>
          <Row>
            <Col sm="auto">
              <Form.Check
                type="radio"
                label={option.name}
                name={`${props.id}__radio`}
                value={option.name}
              />
            </Col>
          </Row>
          <Row>
            {option.input === true ?
              <Col sm={4} style={{ margin: '1rem 0 1rem 0' }}>
                <Form.Label>{props.loc}</Form.Label>
                <Form.Control
                  type="text"
                  name={`${props.id}__input__${option.name}`}
                />
              </Col>
            :
              null
            }
            {option.start_date === true ?
              <Col sm={4} style={{ margin: '1rem 0 1rem 0' }}>
                <Form.Label>開始日期</Form.Label>
                <Form.Control
                  type="date"
                  name={`${props.id}__start_date__${option.name}`}
                />
              </Col>
            :
              null
            }
            {option.end_date === true ?
              <Col sm={4} style={{ margin: '1rem 0 1rem 0' }}>
                <Form.Label>結束日期</Form.Label>
                <Form.Control
                  type="date"
                  name={`${props.id}__end_date__${option.name}`}
                />
              </Col>
            :
              null
            }
          </Row>
        </React.Fragment>
      ))}
    </fieldset>
  </Form.Group>
);

const RadioAndInputColumn3 = props => (
  <Form.Group as={Col} controlId={props.id}>
    <fieldset name={props.id} onChange={props.handleChange}>
      <Form.Label as="b">{props.name}</Form.Label>
      {props.options.map(option => (
        <React.Fragment>
          <Row>
            <Col sm="auto">
              <Form.Check
                type="radio"
                label={option.name}
                name={`${props.id}__radio`}
                value={option.name}
              />
            </Col>
          </Row>
          <Row>
            {option.date1 === true ?
              <Col style={{ margin: '1rem 0 1.5rem 0' }}>
                <Form.Label>接觸開始日期</Form.Label>
                <Form.Control
                  type="date"
                  name={`${props.id}__date1__${option.name}`}
                />
              </Col>
            :
              null
            }
            {option.date2 === true ?
              <Col style={{ margin: '1rem 0 1rem 0' }}>
                <Form.Label>接觸結束日期</Form.Label>
                <Form.Control
                  type="date"
                  name={`${props.id}__date2__${option.name}`}
                />
              </Col>
            :
              null
            }
          </Row>
        </React.Fragment>
      ))}
      <Form.Label>接觸場所為：</Form.Label>
      {props.options2.map(option => (
        <Row>
          <Col sm="auto">
            <Form.Check
              type="checkbox"
              label={option.name}
              name={`${props.id}__type__checkbox`}
              value={option.name}
            />
          </Col>
          {option.input === true ?
            <Col>
              <Form.Control
                type="text"
                name={`${props.id}__type__input__${option.name}`}
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

const NationColumn = props => (
  <Card>
    <Card.Body>
      <fieldset name={props.id} onChange={props.handleChange}>
        <Button size="sm" variant="danger" id={props.id} onClick={props.handleRemove}>
          移除
        </Button>
        <Row>
          <Col>
            <Form.Label>國家/城市</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__nation`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>旅遊型態或目的</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__type`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>開始日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__start_date`}
              value={props.dateValue}
            />
          </Col>
          <Col>
            <Form.Label>結束日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__end_date`}
              value={props.dateValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>同行旅客 (人)</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__companion_num`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>同行者健康狀況</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__companion_symptoms`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>交通工具或航班編號</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__transport_and_flight_code`}
              value={props.inputValue}
            />
          </Col>
        </Row>
      </fieldset>
    </Card.Body>
  </Card>
);

const PublicColumn = props => (
  <Card>
    <Card.Body>
      <fieldset name={props.id} onChange={props.handleChange}>
        <Button size="sm" variant="danger" id={props.id} onClick={props.handleRemove}>
          移除
        </Button>
        <Row>
          <Col>
            <Form.Label>開始日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__start_date`}
              value={props.dateValue}
            />
          </Col>
          <Col>
            <Form.Label>結束日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__end_date`}
              value={props.dateValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>縣市</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__city`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>地點/場所</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__location`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>交通工具</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__transportation`}
              value={props.inputValue}
            />
          </Col>
        </Row>
      </fieldset>
    </Card.Body>
  </Card>
);

const CloseContactorColumn = props => (
  <Card>
    <Card.Body>
      <fieldset name={props.id} onChange={props.handleChange}>
        <Button size="sm" variant="danger" id={props.id} onClick={props.handleRemove}>
          移除
        </Button>
        <Row>
          <Col>
            <Form.Label>接觸者類別</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__type`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>總數</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__number`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>有症狀人數</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__symptom_count`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>發燒人數</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__fever_count`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>最後接觸日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__last_date`}
              value={props.dateValue}
            />
          </Col>
          <Col>
            <Form.Label>備註</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__note`}
              value={props.inputValue}
            />
          </Col>
        </Row>
      </fieldset>
    </Card.Body>
  </Card>
);

const ActivityColumn = props => (
  <Card>
    <Card.Body>
      <fieldset name={props.id} onChange={props.handleChange}>
        <Button size="sm" variant="danger" id={props.id} onClick={props.handleRemove}>
          移除
        </Button>
        <Row>
          <Col>
            <Form.Label>日期</Form.Label>
            <Form.Control
              type="date"
              name={`${props.id}__date`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>開始時間</Form.Label>
            <Form.Control
              type="time"
              name={`${props.id}__start_time`}
              value={props.inputValue}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>結束時間</Form.Label>
            <Form.Control
              type="time"
              name={`${props.id}__end_time`}
              value={props.inputValue}
            />
          </Col>
          <Col>
            <Form.Label>活動描述</Form.Label>
            <Form.Control
              type="text"
              name={`${props.id}__description`}
              value={props.inputValue}
            />
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
  LocationColumn,
  MedicalTreatmentColumn,
  TFcheckbox1,
  TFcheckbox2,
  NationColumn,
  PublicColumn,
  CloseContactorColumn,
  RadioAndInputColumn2,
  RadioAndInputColumn3,
  ActivityColumn,
};
