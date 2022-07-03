function log(n) {
  let count = 0;
  let count_total = 0;
  for (let i = 0; i <= n; i++) {
    count++;
    count_total = count_total + i;
    console.log(i);
    console.log(count_total);
  }
  console.log(count);
  console.log(count_total);
}
log(11);
