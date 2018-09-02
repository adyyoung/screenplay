import React from 'react';
import io from 'socket.io-client';
import Context from '../Context';
class Sockets extends React.Component {
  state = {
    serverState: '',
    socket: null
  };
  componentDidMount() {
    const socket = io(process.env.REACT_APP_API);
    this.setState({ socket });
    socket.on('state', msg => this.setState({ serverState: msg }));
  }
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state.serverState,
          dispatch: action => this.state.socket.emit('action', action)
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Sockets;
