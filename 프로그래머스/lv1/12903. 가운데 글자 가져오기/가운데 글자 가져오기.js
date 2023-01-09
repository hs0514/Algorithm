function solution(s) {
    let len = s.length
    if(Number.isInteger(len/2)) {
      return s[len/2 - 1] + s[len/2]
    } else {
      return s[Math.floor(len/2)]
    }
}