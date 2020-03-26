import React, { Component } from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';
import { StringColumn, DateColumn, SelectColumn, TFcheckbox1, TFcheckbox2, TFcheckbox3} from './FormColumns';

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
              <Card.Title>三、暴露來源調查(發病前14天)</Card.Title>
              <Source handleChange={this.props.handleChange} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>四、接觸者調查 (自個案發病日起至隔離前)：</Card.Title>
              <Contactor handleChange={this.props.handleChange} />
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

const Source = props => (
  <React.Fragment>
    <Form.Row>
      <TFcheckbox1 id="is_abroad" name="(一)發病前14天內是否曾在國外旅遊或居住" options={['是（續填以下欄位）', '否']} handleChange={props.handleChange} />
    </Form.Row> 
      <Form.Label>曾至之國家和地點(如篇幅不足，請自行增列)：</Form.Label>
    <Form.Row>
      <Form.Label>(二) 發病前14天內接觸史調查：</Form.Label>
    </Form.Row> 
    <Form.Row>
      <TFcheckbox1 id="is_fever" name="是否曾接觸有發燒或呼吸道症狀人士：" options={['是（續填以下欄位，可複選）', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox2 id="fever_location" name="接觸場所為：" options={['同住', '同住', '醫療院所', '其他，請註明']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox1 id="is_fever" name="是否曾接觸嚴重特殊傳染性肺炎極可能或確定病例：" options={['是（續填以下欄位，可複選）', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox2 id="fever_location" name="接觸場所為：" options={['同住', '同住', '醫療院所', '其他，請註明']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <DateColumn id="fever_time_start" name="接觸開始日期" handleChange={props.handleChange} />
      <DateColumn id="fever_time_end" name="接觸結束日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox1 id="is_fever" name="是否曾接觸是否曾接觸嚴重特殊傳染性肺炎極可能或確定病例之呼吸道分泌物、體液（包含實驗室檢體）：嚴重特殊傳染性肺炎極可能或確定病例：" options={['是（續填以下欄位，可複選）', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox2 id="fever_location" name="接觸場所為：" options={['同住', '同住', '醫療院所', '其他，請註明']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <DateColumn id="fever_time_start" name="接觸開始日期" handleChange={props.handleChange} />
      <DateColumn id="fever_time_end" name="接觸結束日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <Form.Label>(三) 發病前14天內之活動史調查：</Form.Label>
    </Form.Row>
    <Form.Row>
      <TFcheckbox1 id="infect_area" name="是否曾至中國湖北省（含武漢市）（或公告疫區）：" options={['是', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="infect_location" name="地點" handleChange={props.handleChange} />
      <DateColumn id="infect_time" name="日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox1 id="market" name="是否曾至野味市場：" options={['是', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="market_location" name="地點" handleChange={props.handleChange} />
      <DateColumn id="market_time" name="日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox1 id="infect_area" name="是否曾至醫療院所：" options={['是', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <StringColumn id="infect_location" name="醫療院所名稱" handleChange={props.handleChange} />
      <DateColumn id="infect_time" name="日期" handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <Form.Label>(四) 發病前14天內之動物接觸史調查：</Form.Label>
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="pet" name="是否飼養任何動物(寵物)：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="bird" name="是否曾接觸禽鳥、活禽市場或養禽場(雞鴨等禽類) ：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="farm" name="是否曾接觸畜牧場(豬、牛、羊及鹿等畜類) ：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="shamble" name="是否曾接觸屠宰場：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="wild" name="是否曾接觸或食用野生動物：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <TFcheckbox3 id="other" name="是否有其他動物接觸史：" options={['是，請註明', '否']} handleChange={props.handleChange} />
    </Form.Row>
  </React.Fragment>
);

const Contactor = props => (
  <React.Fragment>
    <Form.Row>
      <TFcheckbox1 id="public_area" name="(一)自個案發病日起至隔離前，是否曾至國內公共場所或搭乘大眾交通工具？" options={['是（續填以下欄位，如篇幅不足，請自行增列)：', '否']} handleChange={props.handleChange} />
    </Form.Row>
    <Form.Row>
      <Form.Label>(二)自個案發病日起至隔離前，（1）在無適當防護下曾有長時間（大於 15 分鐘）面對面之接觸者，或提供照護、相處、接觸病患呼吸道分泌物或體液之同住者；（2）曾與確認病例在無適當防護下2公尺近距離接觸之醫療機構人員：</Form.Label>
    </Form.Row> 
  </React.Fragment>
);

export default FormBody;
