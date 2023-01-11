function solution(price, money, count) {
    let answer = 0;
    let num = 0;
    for(let i = 1; i <= count; i++) {
      num += price*i
    }
    return money - num < 0 ? Math.abs(num - money) : 0
}