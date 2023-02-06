function solution(k, m, score) {
    let answer = 0;
    const allBox = Math.floor(score.length/m);
    const sortScore = score.sort((a,b) => b-a)
    let s = 0;
    for(let i = 0; i < allBox; i++) {
      answer += sortScore[s-1+m] * m
      s += m
    }
    return answer; 
}