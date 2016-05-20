
import * as React from 'react';
import {Link} from 'react-router';
import {FormattedDate, FormattedTime} from 'react-intl';
import {Nav, NavItem} from 'react-bootstrap';

const MainNavDesktop = ()=> (
  <Nav className="nav nav-tabs">
    <NavItem><Link to="/dashboard">Dashboard</Link></NavItem>
    <NavItem><Link to="/request">Request Xrefs</Link></NavItem>
    <NavItem><Link to="/nothing">Search</Link></NavItem>
    <NavItem><a href="">Questionnaires</a></NavItem>
    <NavItem><a href="">Reports</a></NavItem>
    <NavItem>
      <a href="">
        <FormattedDate value={new Date()} /> <FormattedTime value={new Date()} />
      </a>
    </NavItem>
  </Nav>
);

export {MainNavDesktop};
