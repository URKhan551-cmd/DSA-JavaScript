Median from Data Stream
LeetCode #295
↗
Hard

›
details
Two heaps straddling the middle
Design a data structure that supports adding integers from a stream and returning the median of all values seen so far at any time. 
  The median is the middle value, or the average of the two middle values when the count is even.

  
class DataMedian{
 constructor(){
   this.nums= [];
}

add(num){
  this.nums.push(num);
}

median(){
 let copyArr = [...this.nums];
  let sortArr = copyArr.sort((a,b) => a - b);
let n = sortArr.length;
if(n % 2 === 1){
 return sortArr[Math.floor(n / 2)];
}
const right = n / 2;
const left = right - 1;

return (sortArr[right] + sortArr[left]) / 2;
}
}


//



class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

   push(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (
                this.compare(this.heap[index],  this.heap[parentIndex]) >= 0
            ) {
                break;
            }
      
       [
                this.heap[index],
                this.heap[parentIndex]
            ] = [
                this.heap[parentIndex],
                this.heap[index]
            ];

            index = parentIndex;
        }
    }

  pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let best = index;

while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let best = index;

            if (
                left < this.heap.length &&
                this.compare(
                    this.heap[left],
                    this.heap[best]
                ) < 0
            ) {
                best = left;
            }

            if (
                right < this.heap.length &&
                this.compare(
                    this.heap[right],
                    this.heap[best]
                ) < 0

          ) {
                best = right;
            }

            if (best === index) {
                break;
            }

            [
                this.heap[index],
                this.heap[best]
            ] = [
                this.heap[best],
                this.heap[index]
            ];

            index = best;
        }

        return result;
}


              // OPTIMIZED APPROACH 

  class MedianFinder {

    constructor() {

        // Smaller half
        this.maxHeap = new Heap((a, b) => b - a);

        // Larger half
        this.minHeap = new Heap((a, b) => a - b);
    }

    addNum(num) {

        // Decide which half gets the number.
        if (
            this.maxHeap.isEmpty() ||
            num <= this.maxHeap.peek()
        ) {
            this.maxHeap.push(num);
        } else {
            this.minHeap.push(num);
        }
   // Rebalance the heaps.
        if (
            this.maxHeap.size() >
            this.minHeap.size() + 1
        ) {

            const value = this.maxHeap.pop();

            this.minHeap.push(value);

        } else if (
            this.minHeap.size() >
            this.maxHeap.size()
        ) {

            const value = this.minHeap.pop();

            this.maxHeap.push(value);
        }
    }
findMedian() {

        if (
            this.maxHeap.size() ===
            this.minHeap.size()
        ) {

            return (
                this.maxHeap.peek() +
                this.minHeap.peek()
            ) / 2;
        }

        return this.maxHeap.peek();
    }
}


         // *************************************************************************************


  Task Scheduler
LeetCode #621
↗
Medium
✓ Solved

›
details
Most-frequent-first · max-heap vs. the frame formula
Given task labels and a cooldown n, the same task must run at least n intervals apart. 
Return the minimum number of intervals (including idles) needed to finish every task.


  function leastIntervalBrute(tasks, n) {
  const freq = new Map();
  for (const task of tasks) {
    freq.set(task, (freq.get(task) || 0) + 1);
  }

  const labels = [...freq.keys()];
  const counts = labels.map(label => freq.get(label));
  const memo = new Map();

  function dfs(counts, cooldowns) {
    let remaining = 0;
    for (const c of counts) remaining += c;
    if (remaining === 0) return 0;
const key = counts.join(',') + '|' + cooldowns.join(',');
    if (memo.has(key)) return memo.get(key);

    let best = Infinity;
    let canRun = false;

    for (let i = 0; i < counts.length; i++) {
      if (counts[i] > 0 && cooldowns[i] === 0) {
        canRun = true;

        counts[i]--;

        const nextCooldowns = cooldowns.map(c => Math.max(0, c - 1));
        nextCooldowns[i] = n;

        best = Math.min(best, 1 + dfs(counts, nextCooldowns));

counts[i]++;
      }
    }

    if (!canRun) {
      const nextCooldowns = cooldowns.map(c => Math.max(0, c - 1));
      best = 1 + dfs(counts, nextCooldowns);
    }

    memo.set(key, best);
    return best;
  }

  return dfs(counts, new Array(labels.length).fill(0));
}

console.log(leastIntervalBrute(["A","A","A","B","B","B"], 2)); // 8

  
