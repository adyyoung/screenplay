const { combineReducers, createStore } = require('redux');

const actorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ACTOR':
      return { ...state, ...{ [action.name]: {} } };
    default:
      console.log('here');
      return state;
  }
};

const reducers = combineReducers({
  actors: actorsReducer
});

module.exports = createStore(reducers, { actors: {} });
