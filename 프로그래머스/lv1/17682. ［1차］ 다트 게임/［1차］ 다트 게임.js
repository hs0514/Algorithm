function solution(dartResult) {
    let answer = 0;
    let bonus = '';
    dartResult = [...dartResult]; // 1. 문자열 배열로 만들기
    for(let i = 0; i < dartResult.length; i++) {
      // 2. 보너스에 따라 숫자 set
      bonus = dartResult[i] === 'S' ? 1 : dartResult[i] === 'D' ? 2 : 3;
      if((dartResult[i] === 'S' || dartResult[i] === 'D') || dartResult[i] === 'T'){
        // 3. 각 점수에 보너스 만큼 제곱해줌
        if(dartResult[i-2] == 1 && dartResult[i-1] == 0) { // 점수가 10점일 때
          dartResult.splice(i-2, 3, Math.pow(Number(dartResult[i-2]+dartResult[i-1]), bonus));
          i = i-1;
        } else dartResult.splice(i-1, 2, Math.pow(Number(dartResult[i-1]), bonus)); // 10점이 아닐때
      }
      // 4. 옵션이 * 일 때
      if(dartResult[i] === '*'){ 
        if (i-2 !== -1) { // 중간에 *이 끼여있을 때
           dartResult.splice(i-1, 2, dartResult[i-1] * 2);
           dartResult[i-2] = dartResult[i-2] * 2
        } else { // 첫번째 점수에 *이 있을 때
           dartResult.splice(i-1, 2, dartResult[i-1] * 2);
        }
      } else if(dartResult[i] === '#') { // 5. 옵션이 # 일 때
          dartResult.splice(i-1, 2, dartResult[i-1] * (-1));
      }
    }
    dartResult.map(e => answer += e); // 6. 전부 다 더해주기
    return answer;
}