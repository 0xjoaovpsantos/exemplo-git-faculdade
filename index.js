function solution(N) {
  let binary = N.toString(4);
  let maxGap = 0;
  let gap = 0;

  for (let digit of binary) {
    if (digit === "1") {
      gap++;
    } else {
      maxGap = Math.max(maxGap, gap);
      gap = 0;
    }
  }

  return maxGap;
}