module.exports = function check(str, config) {
  const stack = [];
  
  const bracketsPair = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
    ['|']: '|',
    }
  const openBrackets = config.map(pair => pair[0]);
  const closingBrackets = config.map(pair => pair[1]);


  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
   
    if (openBrackets.includes(bracket)) {
      if (bracketsPair[bracket] == bracket && bracket == stack[stack.length-1]) {
        stack.pop()
      } else {
        stack.push(bracket);
      }
      
      
    } else {
      
      if (stack.length === 0) {
        return false
      }
      let topElement = stack[stack.length - 1]
      if (bracketsPair[bracket] === topElement) {
        stack.pop()
      } 
      
       else {
        return false
      }
      
    } 
    
  } 

  return stack.length === 0
  }



  