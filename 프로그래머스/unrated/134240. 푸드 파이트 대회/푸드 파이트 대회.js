function solution(food) {
    let answer = '';
    let arr = [];
    for(let i = 1; i < food.length; i++) {
      arr.push(String(i).repeat(food[i]/2))
    }
    answer = arr.join("") + '0' + arr.reverse().join("");
    return answer;
}