/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() { // 5
    if (!this.head) {
      throw new Error("no head");
    }

    const oldTail = this.tail;    // 5
    let current = this.head;      // 5

    for (let i = 1; i < this.length; i++) {   //1 >  L=1
      // if (this.length === 1){
      //   this.tail = null
      //   this.head = null
      //   return oldTail.val
      // }
      if (i === this.length - 1 ) {  // 1
        current.next = null;
        this.tail = current;
        this.length --;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return oldTail.val;
      }
      current = current.next.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      throw new Error("no head");
    }

    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length || idx <= 0) throw new Error("invalid index");

    let current = this.head;
    let count = 1;
    while (current !== null) {
      if (count === idx) {
        return current.val;
      }
      count++;
      current = current.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0){
      throw new Error("invalid index");
    }
    let current = this.head;
    let count = 0;

    while(current !== null && count !== idx){
      if (count === idx) {
        current.val = val
    }
    count++
  }
}
  //

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) throw new Error("invalid index");

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let current = this.head;
    let previous;
    let count = 1;
    while (current !== null) {
      if (count === idx - 1) {
        previous = current;
      }
      if (count === idx) {
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++
        return;
      }
      count++;
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(this.head === null) return undefined;

    let current = this.head
    let count = 0;
    let previous;
    let nodeToBeRemoved;

    while(current.next){
      if(idx === count - 1){
        previous = current
      }

      if(idx === count){
        nodeToBeRemoved = current
        previous.next = nodeToBeRemoved.next
        nodeToBeRemoved.next = null
      }
      count++;
    }
    
    this.length--;
    return nodeToBeRemoved;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.head === null) return 0;

    let sum = 0;
    let current = this.head;
    while(current !== null){
      sum += current.val
      current = current.next
    }

    return sum/this.length
  }

}

module.exports = LinkedList;
