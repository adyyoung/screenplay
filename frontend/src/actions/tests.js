export const addTest = (id, name, description, tags) => ({
  type: 'ADD_TEST',
  id,
  name,
  description,
  tags
});

export const deleteTest = id => ({
  type: 'DELETE_TEST',
  id
});

export const testAddActor = (testId, actorId) => ({
  type: 'TEST_ADD_ACTOR',
  id: testId,
  actorId
});

export const testRenameTrack = (testId, trackIndex, newName) => ({
  type: 'TEST_RENAME_TRACK',
  id: testId,
  trackIndex,
  newName
});

export const testDeleteTrack = (testId, trackIndex) => ({
  type: 'TEST_DELETE_TRACK',
  id: testId,
  trackIndex
});

export const testAddBlock = (testId, trackIndex, tickIndex, blockType) => ({
  type: 'TEST_ADD_BLOCK',
  id: testId,
  trackIndex,
  tickIndex,
  blockType
});
