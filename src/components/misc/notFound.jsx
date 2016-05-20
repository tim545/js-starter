
import * as React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

const NotFound = ()=> (
  <Row className="content">
    <Col sm={8} smPush={2}>
      <Panel header="Page not found">
        <p>Page not found</p>
      </Panel>
    </Col>
  </Row>
);

export {NotFound};
