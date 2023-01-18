import { Greeter, SpecialGreeter } from '../index';

test('should greet user', () => {
  expect(Greeter('David')).toBe('Hello David');
});

test('should greet user specially', () => {
  expect(SpecialGreeter('Carl', 'Good Afternoon')).toBe('Hello Good Afternoon, Carl');
});
