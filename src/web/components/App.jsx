import React from 'react';
import { connect } from 'react-redux'

import Messenger from './Messenger.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div className="container">
          <h1>Messenger demo</h1>
          <Messenger/>
        </div>
    );
  }
}
