import React from 'react';
import io from 'socket.io-client';
import Context from '../Context';
class State extends React.Component {
  state = {
    serverState: '',
    socket: null,
    ready: false,
    dialog: null
  };
  componentDidMount() {
    const socket = io(process.env.REACT_APP_API);
    this.setState({ socket });
    socket.on('state', msg => this.setState({ serverState: msg, ready: true }));
  }
  render() {
    return this.state.ready ? (
      <Context.Provider
        value={{
          state: this.state.serverState,
          dispatch: action => this.state.socket.emit('action', action),
          dialog: this.state.dialog,
          setDialog: (dialog, options) => this.setState({ dialog })
        }}
      >
        
        {this.props.children}
      </Context.Provider>
    ) : null;
  }
}

export default State;
