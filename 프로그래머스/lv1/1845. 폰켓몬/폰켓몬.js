function solution(nums) {
    let answer = 0;
    let arr = [];
    arr = nums.filter((e, i) => nums.indexOf(e) === i);
    answer = nums.length/2 >= arr.length ? arr.length : nums.length/2
    return answer;
}