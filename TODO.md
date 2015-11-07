Transpose priorit Table:
```JS
console.clear();
var test = [
[1,1,1],
[2,2,2],
[3,3,3]
];

test = test.map((item, index) => {
return item.map((node, nodeIndex) => {
  return test[nodeIndex][index];
});
});
console.log(test);
```
