import { Greeter } from '../index';

test('should greet user', () => { 
    expect(Greeter('David')).toBe('Hello David')
 })