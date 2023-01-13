module.exports = function toReadable (number) {
  let num = String(number);
  let result = '';
  simpleNums = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
  }
  midNums = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  difNums = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }
  if (number == 0) {
    return 'zero';
  }
  if (num.length > 2 && num[2] == '0' && num[1] == '0') {
    result = simpleNums[num[0]] + " " + "hundred" ;
  }
  if(number <= 10) {
    result = simpleNums[num];
  }
  if(number > 10 && number < 20) {
    return midNums[num];
  }
  if(number >= 20 && number < 100 && num[1] == '0') {
    result = difNums[num[0]];
  }
  if(number >= 20 && number < 100 && num[1] != '0') {
    result = difNums[num[0]] + " " + simpleNums[num[1]];
  }
  if(num.length == 3 && num[1] < '2' && num[1] != '0') {
    result = result = simpleNums[num[0]] + " " + "hundred" + " " + midNums[num[1] + num[2]];
  }
  if(num.length > 2 && num[1] == '0' && num[2] != '0' && num[1] != '1') {
    result = simpleNums[num[0]] + " " + "hundred" + " " + simpleNums[num[2]];
  }
  if(num.length > 2 && num[2] == '0' && num[1] != '0') {
    result = simpleNums[num[0]] + " " + "hundred" + " " + difNums[num[1]];
  }
  if(num.length > 2 && num[2] != '0' && num[1] != '0' && num[1] >= '2') {
    result = simpleNums[num[0]] + " " + "hundred" + " " + difNums[num[1]] + " " + simpleNums[num[2]];
  }
  return result;
}
