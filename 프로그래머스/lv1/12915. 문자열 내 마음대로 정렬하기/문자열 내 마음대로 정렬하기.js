function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b) => { 
      if(a[n] === b[n]) {
        return a < b ? -1 : a > b ? 1 : 0; // 해당 인덱스의 문자가 같을 때는 전체 문자열로 비교
      } else {
        return a[n] < b[n] ? -1 : a[n] > b[n] ? 1 : 0;
      }
    })
    return answer;
}