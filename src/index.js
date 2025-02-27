module.exports = function toReadable (number) {
  const simple = new Map([
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine']
  ])
  const decimals = new Map([
    ['1', 'ten'],
    ['10', 'ten'],
    ['11', 'eleven'],
    ['12', 'twelve'],
    ['13', 'thirteen'],
    ['14', 'fourteen'],
    ['15', 'fifteen'],
    ['16', 'sixteen'],
    ['17', 'seventeen'],
    ['18', 'eighteen'],
    ['19', 'nineteen'],
    ['2', 'twenty'],
    ['3', 'thirty'],
    ['4', 'forty'],
    ['5', 'fifty'],
    ['6', 'sixty'],
    ['7', 'seventy'],
    ['8', 'eighty'],
    ['9', 'ninety']
  ])
  const numString = '' + number;
  let readable;
  if(numString.length === 1) {
    readable = simple.get(numString);
  } else if(numString.length === 2) {
    if(numString[0] === '1') {
        readable = decimals.get(numString);
    } else {
        readable = numString[1] === '0' ? decimals.get(numString[0]) : decimals.get(numString[0]) + ' ' + simple.get(numString[1]); 
    }
  } else {
    readable = simple.get(numString[0]) + ' ' + 'hundred' + (numString[1] === '0' && numString[2] === '0' 
    ? '' 
    : (numString[1] === '0' 
    ? ' ' + simple.get(numString[2])
    : (numString[2] === '0'
    ? ' ' + decimals.get(numString[1])
    : (numString[1] === '1'
    ? ' ' + decimals.get(numString[1] + numString[2])
    : ' ' + decimals.get(numString[1]) + ' ' + simple.get(numString[2])))))
  }
  return readable;
}
