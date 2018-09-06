const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR': {
      return {
        ...state,
        actors: [
          ...(state.actors || []),
          {
            actorId: action.actorId,
            trackName: `Track ${state.actors.length + 1}`,
            ticks: []
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
    case 'TEST_ADD_BLOCK': {
      const ticks = state.actors[action.trackIndex].ticks || [];
      ticks[action.tickIndex] = {
        type: action.blockType,
        properties: action.properties
      };
      return {
        ...state,
        actors: [...state.actors]
      };
    }
    case 'TEST_DELETE_BLOCK': {
      const ticks = state.actors[action.trackIndex].ticks || [];
      ticks[action.tickIndex] = null;
      while (ticks.length > 0 && !ticks[ticks.length - 1]) {
        ticks.pop();
      }
      return {
        ...state,
        actors: [...state.actors]
      };
    }
    case 'TEST_UPDATE_BLOCK_PROPERTY': {
      const ticks = state.actors[action.trackIndex].ticks || [];
      const block = ticks[action.tickIndex];
      propery = block.properties.find(p => p.key === action.key) || {};
      propery.value = action.value;
      return {
        ...state
      };
    }
    case 'TEST_MOVE_BLOCK': {
      const copy = state.actors[action.trackIndex].ticks[action.tickIndex];
      state.actors[action.trackIndex].ticks[action.tickIndex] = null;
      state.actors[action.targetTrackIndex].ticks[
        action.targetTickIndex
      ] = copy;
      return state;
    }
    default:
      return state;
  }
};
const testsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ADD_ACTOR':
    case 'TEST_RENAME_TRACK':
    case 'TEST_DELETE_TRACK':
    case 'TEST_ADD_BLOCK':
    case 'TEST_DELETE_BLOCK':
    case 'TEST_UPDATE_BLOCK_PROPERTY':
    case 'TEST_MOVE_BLOCK': {
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
