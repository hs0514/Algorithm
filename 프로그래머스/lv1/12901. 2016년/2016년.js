function solution(a, b) {
    // 월 별 며칠까지 있는지 배열 생성 (2016년 윤년이라 2월 29일까지)
    const monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 정답을 위한 일 별 배열 생성
    const dayArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // 1월 1일은 금요일이기 때문에 6번을 금요일로 설정
    let startDay = 6;
    // 파라미터로 받은 월, 일 총 일 수 저장하기 위한 변수
    let monthAdd = 0; 
    for(let i = 0; i < a-1; i++) {
      monthAdd += monthArr[i] // 1. 파라미터로 받은 월 - 1 의 총 일 수를 다 더해줌
    }
    monthAdd += b // 2. 더해준 일에 파라미터로 받은 일을 더해줌
    for(let i = 1; i < monthAdd; i++) { // 3. 총 더해진 일수로 반복하며 해당 요일이 며칠인지 파악
      startDay++
      if(startDay === 8) startDay = 1
    }
    return dayArr[startDay-1]; // 4. 해당 요일의 텍스트 리턴 (배열 0부터 시작이기 때문에 1을 빼줌)
}