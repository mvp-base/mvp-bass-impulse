import { expect, test } from 'vitest';
import { getRandomStyle } from '@/helpers/style';

test('getRandomStyle', () => {
  const COLOR = '#ff0000';
  expect(getRandomStyle(COLOR)).toBeDefined();
});
