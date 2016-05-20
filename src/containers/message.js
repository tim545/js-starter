
import {connect} from 'react-redux';
import {LocaleText} from '../components/locale/localeText.jsx';

const mapStateToProps = (state)=> {
  return {
    messages: state.localeMessages.data
  };
};

const Message = connect(
  mapStateToProps
)(LocaleText);

export {Message};
