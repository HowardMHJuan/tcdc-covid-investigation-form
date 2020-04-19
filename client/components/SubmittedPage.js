import React, { Component } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

/**
 * This Component shows SubmittedPage.
 * @extends Component */
class SubmittedPage extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);

    const params = new URLSearchParams(window.location.search);
    if (params.has('error')) {
      this.state = { error: true };
    } else {
      this.state = {};
    }
  }

  /**
   * @return {JSX} - A syntax extension to JavaScript, which will be
   * eventually compiled into html code. */
  render() {
    return (
      <Row className="justify-content-center" style={{ marginTop: '2rem' }}>
        <Col sm="8">
          <Container>
            <Card>
              <Card.Body>
                <Row className="justify-content-center">
                  {this.state.error ?
                    <Col sm="auto" as="h4">無此頁面或查無資料</Col>
                  :
                    <Col sm="auto" as="h4">已送出</Col>}
                </Row>
                <Row className="justify-content-center">
                  <Col sm="auto">
                    <Button onClick={() => this.props.changeMode(0)}>再填一單</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    );
  }
}

export default SubmittedPage;
