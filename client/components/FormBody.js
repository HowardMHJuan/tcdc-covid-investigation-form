import React, { Component } from 'react';
import { Form, Card, Row, Col, Button, Spinner } from 'react-bootstrap';
import { StringColumn, DateColumn, SelectColumn, RadioAndInputColumn, RadioAndDateColumn, OtherSymptomsColumn, CheckboxInputAndDateColumn, LocationColumn, MedicalTreatmentColumn, TFcheckbox1, NationColumn, PublicColumn, CloseContactorColumn, RadioAndInputColumn2, RadioAndInputColumn3, ActivityColumn} from './FormColumns';
import MultiColumnWrapper from './MultiColumnWrapper';

/**
 * This Component shows FormBody.
 * @extends Component */
class FormBody extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {};
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
        <Form>
          <Card>
            <Card.Body>
              <Card.Title as="h2">嚴重特殊傳染性肺炎疫調單</Card.Title>
              <Form.Row>
                <DateColumn id="inv_date" name="調查日期（西元年）" handleChange={this.props.handleChange} />
                <StringColumn id="inv_person" name="調查人" handleChange={this.props.handleChange} />
                <StringColumn id="inv_institution" name="調查單位" handleChange={this.props.handleChange} />
              </Form.Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>一、基本資料</Card.Title>
              <Information
                handleChange={this.props.handleChange}
                address_city={this.props.address_city}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>二、臨床狀況</Card.Title>
              <Card>
                <Card.Body>
                  <Card.Title as="h6">（一）症狀（初始症狀或疾病過程中曾出現）（請註明開始日期）</Card.Title>
                  <HealthConditionSymptoms
                    handleChange={this.props.handleChange}
                    handleColumnRemove={this.props.handleColumnRemove}
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title as="h6">（二）發病期間就醫歷程</Card.Title>
                  <HealthConditionDoctors
                    handleChange={this.props.handleChange}
                    handleColumnRemove={this.props.handleColumnRemove}
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title as="h6">（三）慢性疾病</Card.Title>
                  <HealthConditionChronicDisease handleChange={this.props.handleChange} />
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>三、暴露來源調查(發病前14天)</Card.Title>
              <Source
                handleChange={this.props.handleChange}
                handleColumnRemove={this.props.handleColumnRemove}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>四、接觸者調查 (自個案發病日前兩天至隔離前)</Card.Title>
              <Contactor
                handleChange={this.props.handleChange}
                handleColumnRemove={this.props.handleColumnRemove}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>五、活動史細節</Card.Title>
              <ActivityDetail
                handleChange={this.props.handleChange}
                handleColumnRemove={this.props.handleColumnRemove}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row className="justify-content-center">
                <Col sm={4} align="center">
                  {(() => {
                    if (this.props.submitting) {
                      return <Spinner animation="border" variant="primary" />;
                    } else if (this.props.editMode) {
                      return (
                        <Button variant="primary" onClick={this.handleSubmit} block>
                          送出修改
                        </Button>
                      );
                    } else {
                      return (
                        <Button variant="primary" onClick={this.handleSubmit} block>
                          填完送出
                        </Button>
                      );
                    }
                  })()}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Form>
      </div>
    );
  }
}

const Information = props => (
  <React.Fragment>
    <Form.Row>
      <StringColumn id="id" name="法傳編號" handleChange={props.handleChange} />
      <DateColumn id="report_date" name="通報日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="name" name="姓名" handleChange={props.handleChange} />
      <SelectColumn id="gender" name="生理性別" options={['男', '女']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <DateColumn id="birth_date" name="出生日期" handleChange={props.handleChange} />
      <RadioAndInputColumn
        id="nationality"
        name="國籍"
        options={[{ name: '本國籍' }, { name: '其他，國籍：', input: true }]}
        handleChange={props.handleChange}
      />
    </Form.Row>
    <Form.Row>
      <LocationColumn
        id="address"
        name="居住地"
        address_city={props.address_city}
        handleChange={props.handleChange}
      />
    </Form.Row>
    <Form.Row>
      <StringColumn id="contact" name="聯絡方式" handleChange={props.handleChange} />
      <StringColumn id="occupation" name="職業" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <RadioAndInputColumn
        id="med_title"
        name="是否為醫療機構人員"
        options={[{ name: '否' }, { name: '是，職稱：', input: true }]}
        handleChange={props.handleChange}
      />
      <DateColumn id="onset" name="發病日期（無症狀者填第一次採檢日期）" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <RadioAndInputColumn
        id="pregnant_week"
        name="是否懷孕（女性）"
        options={[{ name: '否' }, { name: '是，懷孕幾週：', input: true }]}
        handleChange={props.handleChange}
      />
      <RadioAndInputColumn
        id="married"
        name="婚姻狀況"
        options={[{ name: '已婚' }, { name: '未婚' }]}
        handleChange={props.handleChange}
      />
    </Form.Row>
  </React.Fragment>
);

const HealthConditionSymptoms = props => (
  <React.Fragment>
    <CheckboxInputAndDateColumn
      id="no_symptom"
      options={['無症狀（以下免填，跳至（二））'].map(name => ({ name }))}
      handleChange={props.handleChange}
    />
    {[
      '發燒（≥38℃）',
      '全身倦怠',
      '意識混亂躁動',
      '頭痛',
      '結膜充血',

      '喉嚨痛',
      '流鼻水鼻塞',
      '咳嗽',
      '呼吸困難',

      '胸痛',
      '腹痛',
      '肌肉酸痛',
      '關節酸痛',

      '噁心',
      '嘔吐',
      '腹瀉',
      '尿量減少',
      '下肢水腫',
      '血尿',
      '胸部影像學檢查(CXR 或 CT)顯示肺炎',
    ].map(name => (
      <RadioAndDateColumn
        id="symptoms"
        name={name}
        options={[{ name: '否' }, { name: '是', date: true }]}
        handleChange={props.handleChange}
      />
    ))}
    <MultiColumnWrapper
      id="symptoms_other"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <OtherSymptomsColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

const HealthConditionDoctors = props => (
  <React.Fragment>
    <MultiColumnWrapper
      id="seeing_doctor"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <MedicalTreatmentColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

const HealthConditionChronicDisease = props => (
  <React.Fragment>
    <CheckboxInputAndDateColumn
      id="chronic_disease"
      options={[
        '無',
        '精神疾病',
        '神經肌肉疾病',
        '氣喘',
        '慢性肺疾（如支氣管擴張、慢性阻塞性肺疾等，氣喘除外）',

        '糖尿病',
        '代謝性疾病（如高血脂，糖尿病除外）',
        '心血管疾病（高血壓除外）',
        '肝臟疾病（如肝炎、肝硬化等）',

        '腎臟疾病（如慢性腎功能不全、長期接受血液或腹膜透析等）',
        '仍在治療中或未治癒之癌症',
        '肥胖（BMI≥30）',
      ].map(name => ({ name }))
      .concat([
        '免疫低下狀態，說明：',
        '其他，說明：',
      ].map(name => ({ name, input: true })))}
      handleChange={props.handleChange}
    />
  </React.Fragment>
);

const Source = props => (
  <React.Fragment>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（一）發病前14天內是否曾在國外旅遊或居住</Card.Title>
        <Form.Row>
          <TFcheckbox1 id="is_abroad" name="" options={['是（續填以下欄位）', '否']} handleChange={props.handleChange} />
        </Form.Row>
        <Card.Body>
          <Form.Row>
            <Card.Title as="b">曾至之國家和地點（如篇幅不足，請自行增列）：</Card.Title>
          </Form.Row>
          <NationandLocation
            handleChange={props.handleChange}
            handleColumnRemove={props.handleColumnRemove}
          />
        </Card.Body>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（二）發病前14天內接觸史調查</Card.Title>
        <Card>
          <Card.Body>
            <RadioAndInputColumn3 id="contact_fever" name="是否曾接觸有發燒或呼吸道症狀人士：" options={[{ name: '否' }, { name: '是（續填以下欄位，可複選）', date1: true, date2: true }]} options2={['同住', '同處工作', '醫療院所'].map(name => ({ name })).concat(['其他，請註明'].map(name => ({ name, input: true })))} handleChange={props.handleChange} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <RadioAndInputColumn3 id="contact_patient" name="是否曾接觸嚴重特殊傳染性肺炎極可能或確定病例：" options={[{ name: '否' }, { name: '是（續填以下欄位，可複選）', date1: true, date2: true }]} options2={['同住', '同處工作', '醫療院所'].map(name => ({ name })).concat(['其他，請註明'].map(name => ({ name, input: true })))} handleChange={props.handleChange} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <RadioAndInputColumn3 id="contact_secretion" name="是否曾接觸嚴重特殊傳染性肺炎極可能或確定病例之呼吸道分泌物、體液（包含實驗室檢體）：" options={[{ name: '否' }, { name: '是（續填以下欄位，可複選）', date1: true, date2: true }]} options2={['同住', '同處工作', '醫療院所'].map(name => ({ name })).concat(['其他，請註明'].map(name => ({ name, input: true })))} handleChange={props.handleChange} />
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（三）發病前14天內之活動史調查</Card.Title>
        <Card.Body>
          <Form.Row>
            <RadioAndInputColumn2 id="infect" name="是否曾至中國湖北省（含武漢市）（或公告疫區）：" loc="地點" options={[{ name: '否' }, { name: '是：', input: true, start_date: true, end_date: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn2 id="market" name="是否曾至野味市場：" loc="地點" options={[{ name: '否' }, { name: '是：', input: true, start_date: true, end_date: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn2 id="hospital" name="是否曾至醫療院所：" loc="醫療院所名稱" options={[{ name: '否' }, { name: '是：', input: true, start_date: true, end_date: true }]} handleChange={props.handleChange} />
          </Form.Row>
        </Card.Body>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（四）發病前14天內之動物接觸史調查</Card.Title>
        <Card.Body>
          <Form.Row>
            <RadioAndInputColumn id="pet" name="是否飼養任何動物(寵物)：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn id="bird" name="是否曾接觸禽鳥、活禽市場或養禽場(雞鴨等禽類) ：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn id="farm" name="是否曾接觸畜牧場(豬、牛、羊及鹿等畜類) ：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn id="shamble" name="是否曾接觸屠宰場：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn id="wild" name="是否曾接觸或食用野生動物：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
          <Form.Row>
            <RadioAndInputColumn id="other" name="是否有其他動物接觸史：" options={[{ name: '否' }, { name: '是：', input: true }]} handleChange={props.handleChange} />
          </Form.Row>
        </Card.Body>
      </Card.Body>
    </Card>
  </React.Fragment>
);

const Contactor = props => (
  <React.Fragment>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（一）自個案發病日前兩天至隔離前，是否曾至國內公共場所或搭乘大眾交通工具？</Card.Title>
        <Form.Row>
          <TFcheckbox1 id="is_public_area" name="" options={['是', '否']} handleChange={props.handleChange} />
        </Form.Row>
        <Card.Body>
          <PublicArea
            handleChange={props.handleChange}
            handleColumnRemove={props.handleColumnRemove}
          />
        </Card.Body>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>
        <Card.Title as="h6">（二）自個案發病日前兩天至隔離前</Card.Title>
        <div style={{ margin: '0 0 0 1.5rem' }}>
          <Form.Row>    
            <Card.Title as="h6"> 是否有密切接觸者*：</Card.Title>
            <TFcheckbox1 id="is_close_contactor" name="" options={['是', '否']} handleChange={props.handleChange} />
          </Form.Row>
          <Card.Title as="h6"> *密切接觸者：</Card.Title>
          <Card.Title as="h6">（1）在無適當防護下曾有長時間（大於 15 分鐘）面對面之接觸者，或提供照護、相處、接觸病患呼吸道分泌物或體液之同住者</Card.Title>
          <Card.Title as="h6">（2）曾與確認病例在無適當防護下2公尺近距離接觸之醫療機構人員</Card.Title>
        </div>
        <Card.Body>
          <CloseContactor
            handleChange={props.handleChange}
            handleColumnRemove={props.handleColumnRemove}
          />
        </Card.Body>
      </Card.Body>
    </Card>
  </React.Fragment>
);

const NationandLocation = props => (
  <React.Fragment>
    <MultiColumnWrapper
      id="nation_and_location"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <NationColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

const PublicArea = props => (
  <React.Fragment>
    <MultiColumnWrapper
      id="public_area"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <PublicColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

const CloseContactor = props => (
  <React.Fragment>
    <MultiColumnWrapper
      id="close_contactor"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <CloseContactorColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

const ActivityDetail = props => (
  <React.Fragment>
    <MultiColumnWrapper
      id="activity_detail"
      handleChange={props.handleChange}
      handleColumnRemove={props.handleColumnRemove}
    >
      <ActivityColumn {...props} />
    </MultiColumnWrapper>
  </React.Fragment>
);

export default FormBody;
