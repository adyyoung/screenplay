const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR': {
      return {
        ...state,
        actors: [...(state.actors || []), { actorId: action.actorId }]
      };
    }
    default:
      return state;
  }
};
const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR': {
      return {
        ...state,
        [action.id]: testReducer(state[action.id], action)
      };
    }
    case 'ADD_TEST': {
      return {
        ...state,
        ...{
          [action.id]: {
            id: action.id,
            name: action.name,
            description: action.description,
            tags: action.tags,
            actors: []
          }
        }
      };
    }
    case 'DELETE_TEST': {
      delete state[action.id];
      return state;
    }
    default:
      return state;
  }
};

module.exports = testsReducer;
