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

export const testAddBlock = (
  testId,
  trackIndex,
  tickIndex,
  blockType,
  properties
) => ({
  type: 'TEST_ADD_BLOCK',
  id: testId,
  trackIndex,
  tickIndex,
  blockType,
  properties
});

export const deleteBlock = (testId, trackIndex, tickIndex) => ({
  type: 'TEST_DELETE_BLOCK',
  id: testId,
  trackIndex,
  tickIndex
});

export const moveBlock = (
  testId,
  trackIndex,
  tickIndex,
  targetTrackIndex,
  targetTickIndex
) => ({
  type: 'TEST_MOVE_BLOCK',
  id: testId,
  trackIndex,
  tickIndex,
  targetTrackIndex,
  targetTickIndex
});

export const updateBlockProperty = (
  testId,
  trackIndex,
  tickIndex,
  key,
  value
) => ({
  type: 'TEST_UPDATE_BLOCK_PROPERTY',
  id: testId,
  trackIndex,
  tickIndex,
  key,
  value
});
