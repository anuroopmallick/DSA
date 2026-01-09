class Queue {
  constructor(n) {
    this.r = -1; // index if last element inserted
    this.f = -1; // index of last element removed
    this.queue = new Array(n).fill(0);
    this.size = 0;
    this.length = n;
  }

  add(number) {
    if (this.size == this.length) return;
    this.r = (this.r + 1) % this.length;
    this.queue[this.r] = number;
    this.size++;
  }

  remove() {
    if (this.size == 0) return -1;
    this.f = (this.f + 1) % this.length;
    let val = this.queue[this.f];
    this.queue[this.f] = 0;
    this.size--;
    return val;
  }

  top() {
    if (this.size == 0) return -1;
    let idx = (this.f + 1) % this.length;
    return this.queue[idx];
  }
}
