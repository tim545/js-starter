
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';

const UserDetails = ({userDetails})=> {
  const fullName = `${userDetails.name.first} ${userDetails.name.last}`;
  return (
    <Row>
      <Col xs={12}>
        <Panel header={fullName}>
          test
          <img src={userDetails.picture.medium} alt={fullName} />
        </Panel>
      </Col>
    </Row>
  );
};

UserDetails.propTypes = {
  userDetails: React.PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: {
      first: '',
      last: ''
    },
    picture: {
      medium: ''
    }
  }
};

export {UserDetails};
