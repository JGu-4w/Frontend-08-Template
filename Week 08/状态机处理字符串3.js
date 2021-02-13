function matchKMP(pattern) {
  let table = new Array(pattern.length).fill(0);
  let i = 1;
  let j = 0;
  let stateList = [];

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      i++;
      j++;
      table[i] = j;
    } else {
      if (j > 0) {
        j = table[j];
      } else {
        i++;
      }
    }
  }

  for (let i = 0; i < pattern.length; i++) {
    let p = pattern[i];
    stateList[i] = (c) => {
      if (c === p) {
        return i === pattern.length - 1 ? end : stateList[i + 1];
      } else {
        if (i > 0) {
          return stateList[table[i]](c);
        } else {
          return stateList[0];
        }
      }
    }
  }
  console.log(stateList)
  return stateList;
}

function end(c) {
  return end;
}

function match(string, pattern) {
  let stateList = matchKMP(pattern);
  let state = stateList[0];
  for (let c of string) {
    state = state(c);
  }
  return state === end;
}

console.log(match('abababx', 'abababx'))
