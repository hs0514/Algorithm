function solution(arr)
{
    let answer = [];
    answer = arr.filter((e, i) => {
      return arr[i-1] !== e;
    })
    /* 
       arr[i-1] !== e 해당 조건에서 첫번째는 무조건 true가 나올 것. (index가 -1이기 때문)
       두번째 부터는 현재 인덱스의 값과 그 전 인덱스의 값을 비교함.
    */
    return answer;
}