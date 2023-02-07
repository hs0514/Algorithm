function solution(participant, completion) {
    participant.sort(); 
    completion.sort();
    for(let i=0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]; // 참가자와 완주한 선수가 다를 경우 바로 리턴
            
        }
    }
}