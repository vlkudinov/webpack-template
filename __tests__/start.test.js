#!/usr/bin/env node
import greeter from '../src/js/greeter';

test('greeter', () => {
  expect(greeter()).toBe('Have a great day!');
});
