import { eventManager } from '../index';

describe('Helper Functions', () => {
  describe('eventManager', () => {
    it('executes the callback function correctly', async () => {
      const mockCallback = jest.fn();
      const managedEvent = eventManager(mockCallback);

      await managedEvent();
      expect(mockCallback).toHaveBeenCalled();
    });

    it('prevents multiple executions within a short time frame', async () => {
      jest.useFakeTimers();
      const mockCallback = jest.fn();
      const managedEvent = eventManager(mockCallback);

      await managedEvent();
      await managedEvent();

      expect(mockCallback).toHaveBeenCalledTimes(1);

      jest.runAllTimers();
      await managedEvent();

      expect(mockCallback).toHaveBeenCalledTimes(2);
    });

    it('executes the callback function correctly', async () => {
      const mockCallback = jest.fn();
      const managedEvent = eventManager(mockCallback);

      const mockEvent = { preventDefault: jest.fn() };

      await managedEvent(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
      expect(mockCallback).toHaveBeenCalled();
    });
  });
});
