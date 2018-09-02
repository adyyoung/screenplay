const { combineReducers, createStore } = require('redux');
const actorsReducer = require('./reducers/actors');
const testsReducer = require('./reducers/tests');
const reducers = combineReducers({
  actors: actorsReducer,
  tests: testsReducer
});

module.exports = initialState =>
  createStore(reducers, initialState || { actors: {}, tests: {} });
