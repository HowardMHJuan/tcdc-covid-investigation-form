import React, { Component } from 'react';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';

import { apiConfig } from '../../config-api';

/**
 * This Component shows SearchPage.
 * @extends Component */
class SearchPage extends Component {
  /**
   * @param {object} props - The props used to construct. */
  constructor(props) {
    super(props);
    this.state = {};
    this.handleIDChange = this.handleIDChange.bind(this);
    this.search = this.search.bind(this);
  }

  /**
   * Search form by id. */
  search() {
    axios.get(apiConfig.mongoGet.replace(':id', this.state.id))
      .then((res) => {
        console.log(res.data);
        if (res.data === '') {
          this.setState({ notFound: true });
        } else {
          this.props.changeMode(0, this.state);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Handle the change of id.
   * @param {object} event - The event of the column. */
  handleIDChange(event) {
    this.setState({ id: event.target.value });
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
                  <Col sm="auto" as="h4">編輯資料</Col>
                </Row>
                <Row className="justify-content-center" style={{ marginTop: '2rem' }}>
                  <Col sm="3" className="text-center">
                    法傳編號
                  </Col>
                  <Col sm="5">
                    <Form.Control
                      type="text"
                      name="id"
                      onChange={this.handleIDChange}
                      isInvalid={this.state.notFound}
                    />
                    <Form.Control.Feedback type="invalid">
                      查無資料
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <Row className="justify-content-center" style={{ marginTop: '2rem' }}>
                  <Col sm="auto">
                    <Button onClick={this.search}>搜尋</Button>
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

export default SearchPage;
