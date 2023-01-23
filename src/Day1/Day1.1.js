export function findMostCalories1(data) {
  const block = data.split('\n\n');
  let sum = 0;
  for (let i = 0; i < block.length; ++i) {
    const line = block[i].split('\n');
    const elfCal = lineSum(line);

    if (sum < elfCal) sum = elfCal;
  }
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
