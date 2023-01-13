function solution(d, budget) {
    let answer = 0;
    let total = 0;
    d.sort((a, b) => a - b).map(e => {
      total+=e;
      if(total <= budget) answer++
    });
    return answer;
}
