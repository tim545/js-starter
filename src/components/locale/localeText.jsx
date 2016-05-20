
import React from 'react';

const LocaleText = ({messages, messageId})=> {
  return (
    <span>{messages[messageId]}</span>
  );
};

LocaleText.propTypes = {
  messages: React.PropTypes.object,
  messageId: React.PropTypes.string
};

export {LocaleText};
