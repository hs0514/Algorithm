function solution(board, moves) {
    let answer = 0;
    let newArr = []; // 새로운 배열 생성 위한 변수
    let bucket = []; // 뽑은 인형을 담는 바구니
    // 1. 2차원 배열 재정렬
    board.map((e, i) => {
      newArr[i] = [];
      e.map((s, j) => {
        newArr[i].push(board[j][i]);
      });
    });
    for(let i = 0; i < moves.length; i++) {
      let j = 0;
      while(j < newArr[moves[i]-1].length) {
        // 2. 인형 뽑는 위치에 따라서 인형이 해당 위치에 있을 경우에만 바구니에 추가
        if(newArr[moves[i]-1][j] > 0) {
          if(bucket[bucket.length-1] === newArr[moves[i]-1][j]) { // 뽑은 바구니에 같은 인형이 있을 경우
            bucket.pop(); // 마지막 뽑은 인형을 제거하고
            answer += 2; // 3. 뽑은 인형의 개수를 2개씩 추가 (지금 뽑은 인형과 방금 뽑은 인형)
          } else { 
            bucket.push(newArr[moves[i]-1][j]); // 바구니에 같은 인형이 없으면 그냥 추가
          }
          newArr[moves[i]-1].splice(j,1); // 4. 재정렬한 배열에 뽑은 인형은 제거
          break;
        }
        j++
      }
    }
    return answer;
}