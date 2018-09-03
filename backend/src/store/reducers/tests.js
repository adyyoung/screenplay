const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TEST': {
      return {
        ...state,
        ...{
          [action.id]: {
            id: action.id,
            name: action.name,
            description: action.description,
            tags: action.tags
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
