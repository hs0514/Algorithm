function solution(left, right) {
    // 코드 간결하게 수정
    let answer = 0;
    for(let i = left; i <= right; i++) {
      let divisor = 0; 
      for(let j = 0; j <= i; j++) {
        if(i%j === 0) divisor++; // 약수 개수 체크
      };
      answer += divisor%2 ? -i : i; // 약수 개수가 홀수면 음수로 변환 후 더해줌
    }; 
    return answer;
}