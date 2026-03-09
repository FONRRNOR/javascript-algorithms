/*
Problem: Hash Table
Category: Data Structure
Description: เก็บข้อมูลแบบ key-value
*/

class HashTable {
  constructor() {
    this.table = {};
  }

  set(key, value) {
    this.table[key] = value;
  }

  get(key) {
    return this.table[key];
  }

  remove(key) {
    delete this.table[key];
  }
}

// test
const hash = new HashTable();

hash.set("name", "Alice");
hash.set("age", 25);

console.log(hash.get("name")); // Alice
hash.remove("age");