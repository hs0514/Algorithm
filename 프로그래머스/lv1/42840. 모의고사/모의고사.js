function solution(answers) {
    let answer = [];
    let stud = { 
      0: [1, 2, 3, 4, 5],
      1: [2, 1, 2, 3, 2, 4, 2, 5],
      2: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    }
    let studAnswer = [0, 0, 0];
    for (const [j, e] of Object.entries(stud)) {
      answers.map((x, i) => {
        // 문제의 정답 개수가 학생의 정답 패턴 개수보다 많을 경우
        if (answers.length > stud[j].length) stud[j].push(stud[j][i])
        // 문제 답안과 학생 답안이 같을 경우 증가시킴
        if (x === stud[j][i]) studAnswer[j]++
      });
    }
    // 제일 큰 값 추출하여 해당 index+1을 answer에 push
    studAnswer.map((e,i) => {
      if(Math.max(...studAnswer) === e) answer.push(Number(i)+1)
    })
    return answer.sort((a,b) => a-b);
}