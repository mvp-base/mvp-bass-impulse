import { expect, test } from 'vitest';
import { countdownCalc } from '@/helpers/countdown';

const DAY = 86400000;
const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

test('countdownCalc', () => {
  const now = new Date().getTime();
  const futureDate = new Date(now + DAY + HOUR + MINUTE + SECOND);
  expect(countdownCalc(futureDate, now)).toStrictEqual({
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
  });
});
