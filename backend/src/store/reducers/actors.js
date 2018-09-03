const actorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ACTOR': {
      return {
        ...state,
        ...{
          [action.id]: {
            id: action.id,
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

module.exports = actorsReducer;
