import React from 'react';

export default class Message extends React.Component {
  render() {
    const {
      text,
      received,
    } = this.props;

    return (
        <div style={{
          margin: 5,
          backgroundColor: received ? 'lightgrey' : 'lightblue',
          textAlign: received ? 'left' : 'right'
        }}>
          {text}
        </div>
    );
  }
}
