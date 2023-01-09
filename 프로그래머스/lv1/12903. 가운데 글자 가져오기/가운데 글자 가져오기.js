function solution(s) {
    let arr = s.split("")
    if(Number.isInteger(arr.length/2)) {
      return arr[arr.length/2 - 1] + arr[arr.length/2]
    } else {
      return arr[Math.floor(arr.length/2)]
    }
}