function solution(s) {
    let answer = [];
    for(let i = 0; i < s.length; i++) {
      let j = i;
      let num = 0;
      let plusNum = 0;
      let minusNum = -1;
      do {
        j--;
        plusNum++;
        if (s[i] === s[j]) {
          num = plusNum;
          break; // 같은 문자 나오면 종료
        } else {
          num = minusNum; // 같은 문자 없을 경우 계속 -1
        }
      } while (j > 0);
      answer.push(num); // 문자 탐색 종료 후 배열에 push
    }
    return answer;
}