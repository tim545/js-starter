
import {connect} from 'react-redux';
import {UserDetails} from '../components/user/userDetails.jsx';

const mapStateToProps = (state)=> {
  return {
    userDetails: state.userDetails.data
  };
};

const UserDetailsContainer = connect(
  mapStateToProps
)(UserDetails);

export {UserDetailsContainer};
