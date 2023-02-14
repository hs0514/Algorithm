function solution(s) {
    let answer = '';
    s = s.split(" ").sort((a,b) => a-b)
    answer = s.shift() + " "
    answer += s.pop()
    return answer;
}