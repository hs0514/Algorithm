function solution(A,B){
    let answer = 0;
    // A는 오름차순 B는 내림차순 하고 순서대로 곱하기
    A = A.sort((a, b) => a-b);
    B = B.sort((a, b) => b-a);
    answer = A.reduce((acc, cur, i) => {
      return acc + (cur*B[i])
    }, 0)
    return answer;
}