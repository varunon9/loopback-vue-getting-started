export const customLocalStorage = {
  getItem: (key) => {
    let value = localStorage.getItem(key);
    try {
      value = JSON.parse(value);
    } catch (error) {
      // do nothing
    }
    return value;
  },

  setItem: (key, value) => {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  }
};
