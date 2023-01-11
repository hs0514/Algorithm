function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
      // 1. 2진수로 변경, padStart로 앞자리 0 채워줌
      arr1[i] = arr1[i].toString(2).padStart(n, 0)
      arr2[i] = arr2[i].toString(2).padStart(n, 0)
      answer[i] = ''; // 2. 아래 answer[i]는 undefined 이기 때문에 '' 빈 문자열로 초기화 
      for(let j = 0; j < n; j++) {
          if(arr1[i][j] == 1 || arr2[i][j] == 1) { // 3. 둘 중에 하나라도 1일경우 # 추가
            answer[i] += '#'
          } else { // 3. 아닐 경우 공백 추가
            answer[i] += ' '
          }
      }
    }
    return answer;
}