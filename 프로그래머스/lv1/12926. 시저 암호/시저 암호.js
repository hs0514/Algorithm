function solution([...s], n) {
    let answer = '';
    for(let i = 0; i < [...s].length; i++) {
      s[i] = s[i].charCodeAt()
      if(96 <= s[i] && 122 >= s[i]) { // 소문자
        s[i] = s[i] + n
        if(122 < s[i]) {
          s[i] = s[i] - 122 + 96
        }
      } else if (65 <= s[i] && 90 >= s[i]) { // 대문자
        s[i] = s[i] + n
        if(90 < s[i]) {
          s[i] = s[i] - 90 + 64
        }
      }
    }
    answer = s.map(e => String.fromCharCode(e)).join("")
    return answer;
}