export const addActor = (name, description, avatarId, customAttributes) => ({
  type: 'ADD_ACTOR',
  name,
  description,
  avatarId,
  customAttributes
});

export const updateActor = (
  id,
  name,
  description,
  avatarId,
  customAttributes
) => ({
  type: 'UPDATE_ACTOR',
  id,
  name,
  description,
  avatarId,
  customAttributes
});

export const deleteActor = id => ({
  type: 'DELETE_ACTOR',
  id
});
