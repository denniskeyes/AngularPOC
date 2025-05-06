import { TimeOfDayGreetingPipe } from './time-of-day-greeting.pipe';

describe('TimeOfDayGreetingPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeOfDayGreetingPipe();
    expect(pipe).toBeTruthy();
  });
});
