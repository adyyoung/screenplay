const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR': {
      return {
        ...state,
        actors: [
          ...(state.actors || []),
          {
            actorId: action.actorId,
            trackName: `Track ${state.actors.length + 1}`
          }
        ]
      };
    }
    case 'TEST_RENAME_TRACK': {
      state.actors[action.trackIndex].trackName = action.newName;
      return {
        ...state,
        actors: [...state.actors]
      };
    }
    case 'TEST_DELETE_TRACK': {
      state.actors.splice(action.trackIndex, 1);
      return {
        ...state,
        actors: state.actors
      };
    }
    default:
      return state;
  }
};
const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR':
    case 'TEST_RENAME_TRACK':
    case 'TEST_DELETE_TRACK': {
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
