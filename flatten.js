function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      res.push(element);
    }
  }
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
alert(flatten(arr));
