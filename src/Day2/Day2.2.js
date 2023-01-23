export function rockPaperScissors2(data) {
  let parsedData = data.split('\n');
  let result = 0;
  for (const line of parsedData) {
    const arr = line.split(' ');
    switch (arr[0]) {
      case 'A':
        switch (arr[1]) {
          case 'X':
            result += 3;
            break;
          case 'Y':
            result += 4;
            break;
          case 'Z':
            result += 8;
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
            result += 2;
            break;
          case 'Y':
            result += 6;
            break;
          case 'Z':
            result += 7;
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
