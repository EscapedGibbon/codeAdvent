import { readFileSync } from 'fs';

import { rockPaperScissors1 } from '../../Day2/Day2.1';
import { rockPaperScissors2 } from '../../Day2/Day2.2';

describe('rock-paper-scissors outcome-1stPart', () => {
  it('checks the score', () => {
    const data = readFileSync(
      'src/__tests__/Day2/data/RockPaperScissors.txt',
      'utf-8',
    );
    let result = rockPaperScissors1(data);
    expect(result).toBe(10994);
  });
  it('checks the score', () => {
    const data = readFileSync('src/__tests__/Day2/data/testData.txt', 'utf-8');
    let result = rockPaperScissors1(data);
    expect(result).toBe(15);
  });
});

describe('rock-paper-scissors outcome-2ndPart', () => {
  it('checks the score', () => {
    const data = readFileSync(
      'src/__tests__/Day2/data/RockPaperScissors.txt',
      'utf-8',
    );
    let result = rockPaperScissors2(data);
    expect(result).toBe(12526);
  });
  it('checks the score', () => {
    const data = readFileSync('src/__tests__/Day2/data/testData.txt', 'utf-8');
    let result = rockPaperScissors2(data);
    expect(result).toBe(12);
  });
});
