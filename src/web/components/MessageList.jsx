import React from 'react';

import Message from './Message.jsx';

export default class MessageList extends React.Component {
  render() {
    const {
      messages,
    } = this.props;

    if (messages.length === 0) {
      return (
          <div>No messages!</div>
      );
    }

    return (
        <div>
          {messages.map(
            (message, index) => <Message key={index} {...message}/>
          )}
        </div>
    );
  }
}
