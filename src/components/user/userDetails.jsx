
import React from 'react';
import {Row, Col, Panel} from 'react-bootstrap';
import moment from 'moment';

const UserDetails = ({userDetails})=> {
  const fullName = `${userDetails.name.first} ${userDetails.name.last}`;
  return (
    <Row>
      <Col xs={12}>
        <Panel header={fullName}>
          <p><img src={userDetails.picture.medium} alt={fullName} /></p>
          <p>{userDetails.email}</p>
          <p>{userDetails.phone}</p>
          <p>{userDetails.location.city}, {userDetails.location.state}</p>
          <p><strong>member since:</strong> {moment.unix(userDetails.registered).format('dddd, MMMM Do YYYY, h:mm:ssa')}</p>
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
