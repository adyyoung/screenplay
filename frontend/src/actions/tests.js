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
