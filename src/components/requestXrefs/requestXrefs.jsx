
import * as React from 'react';
import {Row, Col, Panel, FormGroup, FormControl} from 'react-bootstrap';

const RequestXrefs = ()=> (
  <Row className="content">
    <Col sm={8} smPush={2}>
      <Panel header="Request Xrefs">
        <form>
          <FormGroup>
            <FormControl type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <FormControl type="phone" placeholder="Mobile" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Role" />
          </FormGroup>
          <input type="submit" value="Send" className="btn btn-primary btn-block" />
        </form>
      </Panel>
    </Col>
  </Row>
);

export {RequestXrefs};
