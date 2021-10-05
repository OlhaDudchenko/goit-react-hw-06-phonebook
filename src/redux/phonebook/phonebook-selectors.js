export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = (state) => {
  const allItems = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allItems.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
