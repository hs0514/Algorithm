function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false
  for(let i = 0; i < s.length; i++) {
      if(isNaN(Number(s[i]))) return false
  }
  return true
}
/*
체크해야 될 것
1. s의 length
2. s를 number로 변환 후의 length (ex> 3e10)
3. NaN
4. s의 type

2번에 걸려서 결국 문자 1개씩 체크
소수일 경우도 생각 했었는데 제한사항에 소수의 예 (1.24) 같은 예시 없으니 주의
제한사항 잘 보고 문제 풀기
*/