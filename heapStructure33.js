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

  
//

  function leastInterval_bruteForce(tasks, n) {
  // 1. Frequency map
  const freq = {};
  for (let t of tasks) {
    freq[t] = (freq[t] || 0) + 1;
  }

  // 2. When can each task be used again?
  const nextValid = {};
  for (let t in freq) {
    nextValid[t] = 0;
  }

  let time = 0;
  let remaining = tasks.length;  // 6 number of element in tasks arr
  const schedule = []; // to see what we scheduled

// 3. Simulate until all done
  while (remaining > 0) {  // jab tak remainig jo k ab 6 ha 
    let bestTask = null;   // wo remaining 6 to 0 nahi hota loop run
    let maxCount = -1;

    // Brute force scan: O(26) at each time -> try every task type
    for (let task in freq) {    // freq k ander 2 Task ha [A] & [B]
      if (freq[task] > 0 && nextValid[task] <= time) {  // ab deko [A] value 
        if (freq[task] > maxCount) {     // ager [A] ki value 0 se zyada ha tab
           // // ager [A] value maxCount 
          maxCount = freq[task];       //maxCount = -1 pehle ab 3 ho jayega.
          bestTask = task;     //        bestTask=null ta ab [A] ho jayega.
        }
      }
    }
    if (bestTask!== null) {
      // Run the best task
      freq[bestTask]--;    // bestTask wale ko freq se decrement karo 
      nextValid[bestTask] = time + n + 1;     // 
      remaining--;   // 5  bad ma 4 bad ma 3.....
      schedule.push(bestTask);
      console.log(`Time ${time}: Run ${bestTask}`);
    } else {
      // No task available -> idle
      schedule.push('idle');
      console.log(`Time ${time}: idle`);
    }

    time++;
  }
 console.log('Schedule:', schedule.join(' -> '));
  return time; // time is total intervals including idles
}

// Test
console.log(leastInterval_bruteForce(["A","A","A","B","B","B"], 2));
// Output: A -> B -> idle -> A -> B -> idle -> A -> B = 8

console.log(leastInterval_bruteForce(["A","A","A","B","B","B"], 0)); // 6
console.log(leastInterval_bruteForce(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)); // 16


  // ********************

  function leastInterval(tasks, n) {
    // Count how many times each task appears
    const frequencies = {};

    for (const task of tasks) {
        frequencies[task] = (frequencies[task] || 0) + 1;
    }

    // Tasks currently cooling down.
    // Each object tells us when the task becomes available.
    const cooldown = [];

    let time = 0;

    while (true) {
        // Remove tasks whose cooldown has finished
        for (let i = cooldown.length - 1; i >= 0; i--) {
            if (cooldown[i].availableAt <= time) {
                cooldown.splice(i, 1);
            }
        }
    
        // Find the available task with the highest frequency
        let bestTask = null;

        for (const task in frequencies) {
            // Task is already cooling down
            const isCooling = cooldown.some(
                item => item.task === task
            );

            if (isCooling) {
                continue;
            }

            // Choose the task with the largest remaining count
            if (
                bestTask === null ||
                frequencies[task] > frequencies[bestTask]
            ) {
                bestTask = task;
            }
        }

    // Nothing available → CPU idles
        if (bestTask === null) {
            time++;
            continue;
        }

        // Execute the task
        frequencies[bestTask]--;

        // If there are more copies of this task,
        // put it into cooldown.
        if (frequencies[bestTask] > 0) {
            cooldown.push({
                task: bestTask,
                availableAt: time + n + 1
            });
        }

        // Remove task completely when finished
        if (frequencies[bestTask] === 0) {
            delete frequencies[bestTask];
        }

        time++;
   // Everything is finished
        if (Object.keys(frequencies).length === 0) {
            return time;
        }
    }
}

  // **************************


  class MaxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

  pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        this.bubbleDown();

        return max;
    }

   bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] >= this.heap[index]) {
                break;
            }

            [
                this.heap[parentIndex],
                this.heap[index]
            ] = [
                this.heap[index],
                this.heap[parentIndex]
            ];

            index = parentIndex;
        }
    }

   bubbleDown() {
        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let largest = index;

            if (
                left < this.heap.length &&
                this.heap[left] > this.heap[largest]
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] > this.heap[largest]
            ) {
                largest = right;
            }

       if (largest === index) {
                break;
            }

            [
                this.heap[index],
                this.heap[largest]
            ] = [
                this.heap[largest],
                this.heap[index]
            ];

            index = largest;
        }
    }
}

  // ***************************

  function leastInterval(tasks, n) {
    // --------------------------------
    // 1. Count task frequencies
    // --------------------------------

    const frequencyMap = new Map();

    for (const task of tasks) {
        frequencyMap.set(
            task,
            (frequencyMap.get(task) || 0) + 1
        );
    }

   // --------------------------------
    // 2. Put frequencies into max heap
    // --------------------------------

    const maxHeap = new MaxHeap();

    for (const count of frequencyMap.values()) {
        maxHeap.push(count);
    }

    // --------------------------------
    // 3. Cooldown queue
    // --------------------------------

    const cooldownQueue = [];

    let time = 0;

    // --------------------------------
    // 4. Simulate CPU
    // --------------------------------

  while (
        maxHeap.size > 0 ||
        cooldownQueue.length > 0
    ) {

        // Move tasks whose cooldown finished
        // back into the heap.
        while (
            cooldownQueue.length > 0 &&
            cooldownQueue[0].readyAt <= time
        ) {
            const task = cooldownQueue.shift();

            maxHeap.push(task.count);
        }

        // --------------------------------
        // Execute a task if possible
        // --------------------------------

        if (maxHeap.size > 0) {
            let count = maxHeap.pop();

            count--;

        // Task still has copies remaining
            if (count > 0) {
                cooldownQueue.push({
                    count: count,
                    readyAt: time + n + 1
                });
            }
        }

        // CPU used one interval
        time++;
    }

    return time;
}


  // ****************


  Better implementation
class MaxxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) {
                break;
            }
        [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let index = 0;

            while (true) {
                const left = 2 * index + 1;
                const right = 2 * index + 2;

                let largest = index;

         if (
                    left < this.heap.length &&
                    this.heap[left] > this.heap[largest]
                ) {
                    largest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] > this.heap[largest]
                ) {
                    largest = right;
                }

                if (largest === index) {
                    break;
                }

                [this.heap[index], this.heap[largest]] =
                    [this.heap[largest], this.heap[index]];

                index = largest;
          }
        }

        return max;
    }
}


  // 
  OPTIMIZED MATHEMATICAL APPROACH
    function mostFrequentFirst(lists, n){
  let map = new Map();
 for(let list of lists){
  map.set(list, (map.get(list) || 0) + 1);
}
let maxFrequency = 0;
for(const frequency of map.values()){
 maxFrequency = Math.max(maxFrequency, frequncy);
}
let numberOfMaxFrequencyTask = 0;
for(const frequency of map.values()){
 if(frequency === maxFrequency){
   numberOfMaxFrequencyTask++;
}
}

let formula = (maxFrequency - 1) * (n + 1) + numberOfMaxFrequencyTask;
return Math.max(lists.length, formula) 

}
