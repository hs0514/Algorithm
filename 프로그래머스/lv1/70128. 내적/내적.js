function solution(a, b) {
    var answer = 0;
    a.map((e, i) => {
      answer += e * b[i]
    })
    return answer;
}