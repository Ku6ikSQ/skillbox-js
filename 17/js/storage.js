export const getEntries = () => {
  return JSON.parse(localStorage.getItem("warehouseItems")) || [];
};

export const saveEntries = (entries) => {
  localStorage.setItem("warehouseItems", JSON.stringify(entries));
};

export const deleteEntry = (index) => {
  const entries = getEntries();
  entries.splice(index, 1);
  saveEntries(entries);
};
