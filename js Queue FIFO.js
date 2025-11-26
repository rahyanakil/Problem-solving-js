//  Queue
//queue FIFO(fIRST IN FIRST OUT MAINTAIN KORE )
//ENQUEUE
// DEQUEUE
// 2 VABE KORA JAI 1.Array 2. Linked List

//Array Implementation
class Queue {
  constructor() {
    this.items = [];
  }
  //* O(1)
  enqueue(value) {
    this.items.push(value);
  }
  //* O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  //* O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  //* O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //* O(n)
  print() {
    console.log("Start ->", this.items.join("->"), "->end");
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();

queue.print();
