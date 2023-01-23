export function rockPaperScissors1(data) {
  let parsedData = data.split('\n');
  let result = 0;
  for (const line of parsedData) {
    const arr = line.split(' ');
    switch (arr[0]) {
      case 'A':
        switch (arr[1]) {
          case 'X':
            result += 4;
            break;
          case 'Y':
            result += 8;
            break;
          case 'Z':
            result += 3;
            break;
          default:
            break;
        }
        break;
      case 'B':
        switch (arr[1]) {
          case 'X':
            result += 1;
            break;
          case 'Y':
            result += 5;
            break;
          case 'Z':
            result += 9;
            break;
          default:
            break;
        }
        break;
      case 'C':
        switch (arr[1]) {
          case 'X':
            result += 7;
            break;
          case 'Y':
            result += 2;
            break;
          case 'Z':
            result += 6;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  return result;
}

// function checkPossibleCases(letterToCheck) {
//   switch (letterToCheck) {
//   }
// }
