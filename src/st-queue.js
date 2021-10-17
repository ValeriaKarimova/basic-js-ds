const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  constructor () {
    this.items = []; 
  
  }

   // 0    1   2    3   4
  // [235, 64, 47, 234, 854]

  getUnderlyingList() {

    let head = new ListNode(this.items[0]);
    let currentItem = head;

    for (let i = 1; i < this.items.length; i++) {
      let newNode = new ListNode(this.items[i]);
      currentItem.next = newNode;
      currentItem = newNode;
    }
    
    return head;
  
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

}
