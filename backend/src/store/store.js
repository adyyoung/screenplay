const { combineReducers, createStore } = require('redux');
const cuid = require('cuid');
const actorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ACTOR': {
      const id = cuid();
      return {
        ...state,
        ...{
          [id]: {
            id,
            name: action.name,
            description: action.description,
            avatarId: action.avatarId,
            customAttributes: action.customAttributes
          }
        }
      };
    }
    case 'UPDATE_ACTOR': {
      state[action.id] = {
        id: action.id,
        name: action.name,
        description: action.description,
        avatarId: action.avatarId,
        customAttributes: action.customAttributes
      };
      return state;
    }
    case 'DELETE_ACTOR': {
      delete state[action.id];
      return state;
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  actors: actorsReducer
});

module.exports = initialState =>
  createStore(reducers, initialState || { actors: {} });
