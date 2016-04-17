import React, {Component} from 'react';

import MessageList from './MessageList.jsx';

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentText: ''
    };
  }

  sendMessage() {
    const message = {
      text: this.state.currentText,
      received: false
    };

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
