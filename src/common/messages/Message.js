import React from "react";
import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

const MessageBox = ({
  icon,
  header,
  content,
  negative,
  positive,
  warning,
  info
}) => {
  return (
    <Message
      icon={icon}
      negative={negative}
      positive={positive}
      info={info}
      warning={warning}
      header={header}
      content={content}
    />
  );
};
MessageBox.defaultProps = {
  icon: "info circle",
  negative: false,
  positive: false,
  warning: false,
  info: false,
  header: "Message",
  content: ""
};

MessageBox.propTypes = {
  icon: PropTypes.string,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  header: PropTypes.string,
  content: PropTypes.string
};
export default MessageBox;
