
import * as React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {MainNavDesktop} from './nav/mainNavDesktop.jsx';
import {Message} from '../containers/message.js';

// app.js
const App = ({children})=> (
  <Grid fluid>
    <Row className="header">
      <Col xs={12}>
        <h1><Message messageId="title" /></h1>
        <MainNavDesktop />
      </Col>
    </Row>
    {children}
  </Grid>
);

App.propTypes = {
  children: React.PropTypes.object
};

export {App};
