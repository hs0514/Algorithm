function solution(X, Y) {
    let answer = '';
    let xObj = {};
    let yObj = {};
    // 1. 파라미터 X와 Y의 각각 숫자 개수 count해서 객체에 저장
    [...X].forEach((x) => { 
      xObj[x] = (xObj[x] || 0)+1; 
    });
    [...Y].forEach((x) => { 
      yObj[x] = (yObj[x] || 0)+1;
    });
    for(const x in xObj) {
      for(const y in yObj) {
        // 2. 반복문 돌며 같은 숫자가 있을 때         
        if(x === y) {
          // 같은 숫자의 개수가 같거나 한쪽이 클 경우 작은쪽만큼 반복시킴
          if((xObj[x] <= yObj[y]) || (xObj[x] == yObj[y])) answer += x.repeat(xObj[x]);
          else if(xObj[x] >= yObj[y]) answer += y.repeat(yObj[y]);
        } 
      }
    }
    // 3. 문자열이 2개 이상 '0'으로만 이루어져 있을 경우 한개로 변환
    if(answer.length > 1 && answer.match(/[^0]/g) === null) answer = "0"
    // 4. answer에 값이 없을땐 "-1"을, 값이 있을땐 뒤집은 문자열을 리턴
    return answer === '' ? "-1" : answer.split("").reverse().join("");
}