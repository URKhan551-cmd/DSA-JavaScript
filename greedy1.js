// Interview revision: Activity Selection is a greedy optimization problem where the objective is to maximize the number of 
// non-overlapping activities. The greedy strategy is to sort activities by ascending finish time, select the first activity, 
// and then select each subsequent activity whose start >= lastFinishTime. The earliest-finishing choice is safe because it 
// leaves the maximum possible remaining time for future activities; this can be justified using an exchange argument. 
// Sorting takes O(n log n), scanning takes O(n), so overall time complexity is O(n log n). The algorithm uses O(1) auxiliary space 
// for its scan, excluding sorting and the output array.


function activitySelection(activities) {
  // Step 1: Sort by earliest finishing time.
  activities.sort((a, b) => a.end - b.end);

  // Step 2: Store selected activities.
  const selected = [];

  // Step 3: Select the first activity.
  selected.push(activities[0]);

  // Step 4: Remember when the room becomes available.
  let lastFinishTime = activities[0].end;

  // Step 5: Examine the remaining activities.
  for (let i = 1; i < activities.length; i++) {
    const current = activities[i];

    // Step 6: Select only compatible activities.
    if (current.start >= lastFinishTime) {
      selected.push(current);

      // Step 7: Update the room's availability.
      lastFinishTime = current.end;
    }
  }

  return selected;
}

const activities = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 }
];

console.log(activitySelection(activities));


// 7. Trace the execution
// This table is particularly important. It shows how the algorithm's state changes.
// Iteration	Activity	lastFinishTime before	Condition	Decision
// Initial	A [1,4]	—	First activity	Select
// 1	B [3,5]	4	3 >= 4	Reject
// 2	C [0,6]	4	0 >= 4	Reject
// 3	D [5,7]	4	5 >= 4	Select
// 4	E [8,9]	7	8 >= 7	Select
// 5	F [5,9]	9	5 >= 9	Reject


// Notice that lastFinishTime changes only when we select an activity.

// This is how we avoid maintaining unnecessary state.
