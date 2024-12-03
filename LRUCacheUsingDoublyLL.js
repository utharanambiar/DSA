class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(null, null);
    this.tail = new ListNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(node) {
    let next = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
    next.prev = node;
  }

  remove(node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    let node = this.cache.get(key);
    this.remove(node);
    this.add(node);
    return node.val;
  }

  put(key, val) {
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      this.remove(node);
    }
    let newNode = new ListNode(key, val);
    this.add(newNode);
    this.cache.set(key, newNode);
    if (this.cache.size > this.capacity) {
      let lru = this.tail.prev;
      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }
}

let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));
lru.put(3, 3);
console.log(lru.get(2));
lru.put(4, 4);
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));
