/*
Problem: Linked List
Category: Data Structure
Description: โครงสร้างข้อมูลแบบ linked nodes
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// test
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print();