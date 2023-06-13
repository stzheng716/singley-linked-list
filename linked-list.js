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

  pop() {
    if (!this.head) {
      throw new Error("no head");
    }
    let removed;

    // different rules for list of 1
    if (this.length === 1) {
      removed = this.head
      this.head = null;
      this.tail = null;
      this.length--
      return removed.val
    }

    // all other lengths apply here
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === this.length - 2) {
        removed = current.next
        current.next = null
        this.tail = current
      }
      this.length -= 1;
      return removed.val
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
    if (idx > this.length || idx < 0) throw new Error("invalid index");

    let current = this.head;
    let count = 0;
    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("invalid index");
    }

    if (idx === 0) this.head.val = val

    let current = this.head;
    let count = 0;
    // let prev;

    while (current !== null) {
      // if (idx === count - 1) {
      //   prev = current
      // }
      if (idx === count)  {
        current.val = val
        // prev.next = current
      }
      current = current.next
      count++
    }
  }
  //

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    if (idx >= this.length || idx < 0) throw new Error("invalid index");


    let newNode = new Node(val);
    let current = this.head;
    let previous;
    let count = 0;
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
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()

    let current = this.head
    let count = 0;
    let previous;
    let nodeToBeRemoved;
    //5, 10, 15, 20
    while (current.next !== null && count !== idx) {
      if (count === idx - 1) {
        previous = current
      }

      count++;
      current = current.next
    }

    nodeToBeRemoved = current
    previous.next = nodeToBeRemoved.next
    nodeToBeRemoved.next = null

    this.length--;
    return nodeToBeRemoved.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) return 0;

    let sum = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.val
      current = current.next
    }

    return sum / this.length
  }

  reverseInPlace(){
    if (this.length <2) return;

    let left = null;
    let right;
    this.tail = this.head;

    while (this.head.next != null){
      
      right = this.head.next;
      this.head.next = left;
      left = this.head;
      this.head = right;
    }
    this.head.next = left;

  }

}

module.exports = LinkedList;
