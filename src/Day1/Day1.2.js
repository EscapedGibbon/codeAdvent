export function findMostCalories2(data) {
  let biggestCals = new Array(3).fill(0);

  const block = data.split('\n\n');
  let sum = 0;
  for (let i = 0; i < block.length; ++i) {
    const line = block[i].split('\n');
    const elfCal = lineSum(line);

    if (biggestCals[0] < elfCal) {
      biggestCals[2] = biggestCals[1];
      biggestCals[1] = biggestCals[0];
      biggestCals[0] = elfCal;
    } else if (biggestCals[1] < elfCal) {
      biggestCals[2] = biggestCals[1];
      biggestCals[1] = elfCal;
    } else if (biggestCals[2] < elfCal) {
      biggestCals[2] = elfCal;
    }
  }
  sum = biggestCals[0] + biggestCals[1] + biggestCals[2];
  return sum;
}

function lineSum(line) {
  let sumOfLine;
  sumOfLine = 0;
  for (let element of line) {
    sumOfLine += parseInt(element, 10);
  }
  return sumOfLine;
}
