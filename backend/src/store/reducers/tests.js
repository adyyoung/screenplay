const cuid = require('cuid');

const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TEST': {
      const id = cuid();
      return {
        ...state,
        ...{
          [id]: {
            id,
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
