import React from 'react';
import Chrome from './chrome/Chrome';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Actors from './actors/Actors';
import ActorsToolbar from './actors/Toolbar';
import Tasks from './tasks/Tasks';
import Actions from './actions/Actions';
import Elements from './elements/Elements';
import State from './state/State';
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <State>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Chrome
                    toolbar={() => <ActorsToolbar />}
                    render={() => <Actors />}
                  />
                )}
              />
              <Route
                path="/actors"
                render={() => (
                  <Chrome
                    toolbar={() => <ActorsToolbar />}
                    render={() => <Actors />}
                  />
                )}
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
        </State>
      </React.Fragment>
    );
  }
}

export default App;
