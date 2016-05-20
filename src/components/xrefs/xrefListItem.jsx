
import React from 'react';
import * as moment from 'moment';

const XrefListItem = ({item})=> (
  <tr>
    <td>{item.candidate.name}</td>
    <td>{moment.unix(item.date.local).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
  </tr>
);

XrefListItem.propTypes = {
  item: React.PropTypes.object.isRequired
};

XrefListItem.defaultProps = {
  item: {}
};

export {XrefListItem};
