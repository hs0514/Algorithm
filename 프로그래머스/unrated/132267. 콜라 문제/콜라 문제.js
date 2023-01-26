function solution(a, b, n) {
    // 초기 값 set
    let remainder = n%a; // 전체 병의 수에서 교환하고 남은 병들의 수
    let receive = ((n-remainder)/a)*b; // 교환하고 받은 병 수
    let all = remainder + receive; // 지금 가지고 있는 총 병의 수
    let answer = receive; // 교환하고 받은 병의 수 총합
    while(all > remainder){
      remainder = all%a; 
      receive = ((all-remainder)/a) * b;   
      all = remainder + receive; 
      answer += receive;
    }
    return answer;
}