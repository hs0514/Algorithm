function solution(sizes) {
    let num1 = 0;
    let num2 = 0;
    sizes.map(e =>{
      e.sort((a,b) => a-b)
        .map((x, i) => {
        if(i === 0 && num1 < x) num1 = x;
        if(i === 1 && num2 < x) num2 = x;
      })
    })
    return num1 * num2;
}