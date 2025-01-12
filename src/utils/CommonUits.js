export const debounce = (func, delay) => {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
