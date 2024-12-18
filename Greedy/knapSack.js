let values = [100, 60, 120],
  weights = [20, 10, 30],
  W = 50,
  N = 3;

let items = [],
  value = 1,
  ratio = 1,
  weight = 1,
  res = 0;

for (let i = 0; i < N; i++) {
  items.push({
    value: values[i],
    weight: weights[i],
    ratio: values[i] / weights[i],
  });
}

items.sort((a, b) => b.ratio - a.ratio);

let i = 0;
while (i < N && W > items[i].weight) {
  W = W - items[i].weight;
  res = res + items[i].value;
  i++;
}

if (W < items[i].weight && i < N) {
  res = res + (W / items[i].weight) * items[i].value;
}

console.log(res);
