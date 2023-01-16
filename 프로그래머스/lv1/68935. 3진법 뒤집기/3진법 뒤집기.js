function solution(n) {
    let answer = 0;
    let ternary = [];
    ternary = n.toString(3).split("").reverse()
    while(ternary[0] == 0) {
      ternary.shift()
    }
    answer = parseInt(ternary.join(""), 3)
    return answer;
}