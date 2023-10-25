module.exports = function check(str, config) {
  const stack = [];
  const bracketsPair = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|'
    }
  const openBrackets = config.map(pair => pair[0]);
  const closingBrackets = config.map(pair => pair[1]);

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else {
      if (stack.length === 0) {
        return false
      }
      let topElement = stack[stack.length - 1]
      if (bracketsPair[bracket] === topElement) {
        stack.pop()
      } else {
        return false
      }
      
    } 
  } 

  return stack.length === 0
  }



