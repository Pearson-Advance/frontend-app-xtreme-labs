/**
 * Manages any type of event passed as function and applies a callback and tiemo-uts during its executing time.
 * @param {func} callback
 * @returns async promise
 */
const eventManager = (callback) => {
  let isExecuting = false;
  return async (event) => {
    if (event) {
      event.preventDefault(); // Prevent the default behavior
    }
    if (!isExecuting) {
      isExecuting = true;
      await callback(event);
      setTimeout(() => {
        isExecuting = false;
      }, 2000); // 2 second delay
    }
  };
};

export { eventManager };
