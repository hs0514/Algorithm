function solution(N, stages) {
    let answer = [];
    let fail = {}; // 실패율
    let allStages = stages.length; // 총 도전 한 사람
    for(let i = 1; i <= N; i++) {
      let nums = stages.filter(e => e === i).length; // 총 클리어하지 못한 사람
      fail[i] = nums/allStages;
      allStages = allStages - nums;
    }
    fail = Object.entries(fail).sort((a, b) => b[1] - a[1])
    fail.map((_, i) => answer.push(Number(fail[i][0])))
    return answer;
}