function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

//function can be passed as parameter
function aggregate(a, b, c, arithmetic) {
  const firstResult = arithmetic(a, b);
  const secondResult = arithmetic(firstResult, c);
  return secondResult;
}


  const sum = aggregate(2, 3, 4, add);
  console.log(sum);
  // sum is 9
  const product = aggregate(2, 3, 4, mul);
  console.log(product);
  // product is 24
