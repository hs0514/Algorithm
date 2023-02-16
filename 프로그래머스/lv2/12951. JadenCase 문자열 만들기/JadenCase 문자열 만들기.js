function solution(s) {
    let answer = '';
    answer = s.split(" ").map(e => {
      return e ? e[0].toUpperCase() + e.slice(1).toLowerCase() : ""
    }).join(" ")
    return answer;
}