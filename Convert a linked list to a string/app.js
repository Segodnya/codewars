class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  let result = "";
  if (list === null) {
    return "null";
  }

  while (list.next !== null) {
    result = result + list.data + " -> ";
    list.data = list.next.data;
    list.next = list.next.next;
  }
  result = result + list.data + " -> " + "null";
  return result;
}

console.log(stringify(new Node(1, new Node(2, new Node(3))))); // "1 -> 2 -> 3 -> null"
console.log(stringify(null)); // "null"
