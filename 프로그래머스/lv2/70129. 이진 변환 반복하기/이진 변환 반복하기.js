function solution(n) {
    let i = 0;
    let zeroCnt = 0;
    while(n !== "1") {
      i++
      if(n.length > 0 || n.includes("0")){
        n = [...n].filter(e => {
          if(e === "0") {
            zeroCnt++
          } else return e
        }).length.toString(2)
      } else {
        n = "1"
      }
    }
    return [i, zeroCnt]
}