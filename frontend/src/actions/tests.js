export const addTest = (name, description, tags) => ({
  type: 'ADD_TEST',
  name,
  description,
  tags
});

export const deleteTest = id => ({
  type: 'DELETE_TEST',
  id
});
