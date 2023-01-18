function solution([...t], [...p]) {
    let arr = [];
    let i = 0;
    while(i + p.length - 1 < t.length) {
      let num = 0;
      num = t.slice(i, i + p.length).join("")
      arr.push(num)
      i++
    }
    arr = arr.filter(e => Number(e) <= Number(p.join("")))
    return arr.length;
}