
import {XrefListItem} from './xrefListItem.jsx';
import React from 'react';
import {Row, Col, Panel, Table} from 'react-bootstrap';

const XrefList = ({xrefList})=> (
  <Row className="content">
    <Col sm={8} smPush={2}>
      <Panel header="XREFS">
        <Table striped>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Requested</th>
            </tr>
          </thead>
          <tbody>
            {xrefList.map((xrefItem)=> {
              const key = xrefItem.key;
              return <XrefListItem item={xrefItem} key={key} />;
            })}
          </tbody>
        </Table>
      </Panel>
    </Col>
  </Row>
);

XrefList.propTypes = {
  xrefList: React.PropTypes.array.isRequired
};

XrefList.defaultProps = {
  xrefList: []
};

export {XrefList};
