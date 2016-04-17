import React, {Component} from 'react';

import MessageList from './MessageList.jsx';

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentText: '',
      socket: undefined
    };
  }

  componentWillMount() {
    const socket = new WebSocket('ws://localhost:8392');
    socket.onopen = () => console.log('Opened connection!');
    socket.onerror = err => console.error('caught error', err);

    socket.onmessage = event => {
      const text = event.data;
      console.log('received socket message', text);

      const message = {
        text,
        received: true
      };

      this.setState({
        messages: this.state.messages.concat(message)
      });
    };

    this.setState({socket});
  }

  sendMessage() {
    const text = this.state.currentText;

    const message = {
      text,
      received: false
    };

    this.state.socket.send(text);

    this.setState({
      messages: this.state.messages.concat(message)
    });
  }

  setCurrentMessage(e) {
    this.setState({
      currentText: e.target.value
    });
  }

  render() {
    return (
        <div>
          <MessageList messages={this.state.messages}/>
          <hr/>
          <form action="#" onSubmit={this.sendMessage.bind(this)} className="form-inline">
            <input type="text" onChange={this.setCurrentMessage.bind(this)} placeholder="Type a message…" className="form-control"/>
            <button className="btn btn-primary">Hello</button>
          </form>
        </div>
    )
  }
}
