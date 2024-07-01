import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listhead = null;
  }

  prepend(value) {
    let temp = null;
    if (this.listhead != null) temp = this.listhead;
    this.listhead = new Node(value);
    this.listhead.next = temp;
  };

  append(value) {
    if (this.listhead == null) {
      this.prepend(value)
    }
      else {
      let temp = this.listhead;
      while (temp.next != null) {
        temp = temp.next;
      };
      temp.next = new Node(value);
    };
  };

  size() {
    if (this.listhead == null) return 'This list is empty.';
    else {
      let size = 0;
      let temp = this.listhead;
      while (temp.next != null) {
        temp = temp.next;
        size++;
      }
      return size;
    };
  };

  head() {
    return this.listhead;
  };

  tail() {
    let temp = this.listhead;
    while (temp.next != null) {
      temp = temp.next;
    };
    return temp;
  };

  at(index) {
    if (isNaN(index)) return;
    else if (index > this.size()) return "Nothing at this index.";
    else if (index == 0) return this.listhead;
    else {
      let temp = this.listhead;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      };
      return temp;
    };
  };

  pop() {
    let current = this.listhead;
    let previous = null;
    while (current.next != null) {
      previous = current;
      current = current.next;
    };
    previous.next = null;
  };

  contains(value) {
    let temp = this.listhead;
    if (temp.value == value) return true;
    while (temp.next != null) {
      temp = temp.next;
      if (temp.value == value) return true;
    };
    return false;
  };

  find(value) {
    let temp = this.listhead;
    let index = 0;
    if (temp.value == value) return index;
    while (temp.next != null) {
      temp = temp.next;
      index++;
      if (temp.value == value) return index;
    };
    return null;
  };

  toString() {
    let temp = this.listhead;
    let string = `( ${temp.value} )`;
    while (temp.next != null) {
      temp = temp.next;
      string = string.concat(` -> ( ${temp.value} )`);
    };
    return string;
  };
}