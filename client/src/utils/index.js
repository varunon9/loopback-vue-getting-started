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

export const getAuthHeaderConfig = () => {
  const user = customLocalStorage.getItem('user');
  const config = {
    headers: {
      Authorization: ''
    }
  };
  if (user) {
    config.headers.Authorization = `${user.loginData.id}`
  }
  return config;
};

export const getFormattedDateText = (date) => {
  const dateObject = new Date(date);
  const monthName = dateObject.toLocaleString('default', { month: 'short' });
  return `${dateObject.getDate()} ${monthName} ${dateObject.getFullYear()}`;
};
