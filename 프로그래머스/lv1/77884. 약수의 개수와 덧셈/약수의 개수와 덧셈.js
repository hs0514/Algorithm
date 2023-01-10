function solution(left, right) {
    let answer = 0;
    let arr = [];
    for(let i = left; i <= right; i++) {
      arr.push(i);
    }; // 1. left, right 사이 값 구하기
    for(let i = 0; i < arr.length; i++) {
      let divisor = 0; 
      for(let j = 0; j <= arr[i]; j++) {
//         console.log(arr[i]%j, arr[i]+"%"+j, arr[i]%j === 0)
        if(arr[i]%j === 0) divisor++; // 2. 약수 개수 체크
      };
//       console.log(divisor, i, "약수의 수")
      arr[i] = divisor%2 ? -arr[i] : arr[i]; // 3. 약수 개수가 홀수면 음수로 변환
    }
    arr.map(e => answer += e); // 4. 총 합 변수에 저장
    return answer;
}