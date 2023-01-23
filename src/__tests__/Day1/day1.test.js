import { readFileSync } from 'fs';

import { findMostCalories1 } from '../../Day1/Day1.1';
import { findMostCalories2 } from '../../Day1/Day1.2';

describe('finds three most calory filled', () => {
  it('find most calories', () => {
    const data = readFileSync('src/__tests__/Day1/data/Calories.txt', 'utf-8');
    const result = findMostCalories2(data);
    expect(result).toBe(210406);
  });
  it('find most calories', () => {
    const data = readFileSync('src/__tests__/Day1/data/testData.txt', 'utf-8');
    const result = findMostCalories2(data);
    expect(result).toBe(45000);
  });
});

describe('find the one with most calories', () => {
  it('find most calories', () => {
    const data = readFileSync('src/__tests__/Day1/data/Calories.txt', 'utf-8');
    const result = findMostCalories1(data);
    expect(result).toBe(71924);
  });
  it('find most calories', () => {
    const data = readFileSync('src/__tests__/Day1/data/testData.txt', 'utf-8');
    const result = findMostCalories1(data);
    expect(result).toBe(24000);
  });
});
