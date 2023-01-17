function solution([...s]) {
    for(let i = 0; i < s.length; i++) {
      if(s[i] === 'z') {
        s.splice(i, 4, '0');
      } else if(s[i] === 'o'){
        s.splice(i, 3, '1');
      } else if (s[i] === 't') {
        if (s[i+1] === 'w') s.splice(i, 3, '2');
        else s.splice(i, 5, '3');
      } else if (s[i] === 'f') {
        if (s[i+1] === 'o') s.splice(i, 4, '4');
        else s.splice(i, 4, '5');
      } else if (s[i] === 's') {
        if (s[i+1] === 'i') s.splice(i, 3, '6');
        else s.splice(i, 5, '7');
      } else if (s[i] === 'e') {
        s.splice(i, 5, '8');
      } else if (s[i] === 'n') {
        s.splice(i, 4, '9');
      }
    }
    return parseInt(s.join(""));
}