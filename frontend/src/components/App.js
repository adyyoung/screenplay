import React from 'react';
import Chrome from './chrome/Chrome';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Actors from './actors/Actors';
import Tasks from './tasks/Tasks';
import Actions from './actions/Actions';
import Elements from './elements/Elements';
import Sockets from './sockets/Sockets';
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Sockets>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Chrome render={() => <Actors />} />}
              />
              <Route
                path="/actors"
                render={() => <Chrome render={() => <Actors />} />}
              />
              <Route
                path="/tasks"
                render={() => <Chrome render={() => <Tasks />} />}
              />
              <Route
                path="/actions"
                render={() => <Chrome render={() => <Actions />} />}
              />
              <Route
                path="/elements"
                render={() => <Chrome render={() => <Elements />} />}
              />
              <Route
                path="/tests"
                render={() => (
                  <Chrome
                    render={() => (
                      <pre>{JSON.stringify(process.env, 2, 2)}</pre>
                    )}
                  />
                )}
              />
            </Switch>
          </Router>
        </Sockets>
      </React.Fragment>
    );
  }
}

export default App;
