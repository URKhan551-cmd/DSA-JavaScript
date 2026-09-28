K Closest Points to Origin
LeetCode #973
↗
Medium

›
details
Max-heap of size k, keyed by distance
Given an array of points on the plane and a value k, return 
  the k points closest to the origin, measured by Euclidean distance. The answer may be returned in any order.
  
  function kclosestPoints(arr, k) {
  if (k <= 0) return [];
  if (k >= arr.length) return arr;

  return arr
    .map(point => ({
      point,
      dist: point[0] * point[0] + point[1] * point[1]
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k)
    .map(item => item.point);
}


function kclosestPoints22(arr, k){
 let n = arr.length;
if(n < 0) return [];
arr.sort((a,b) => {
 let distanceA = a[0] * a[0] + a[1] * a[1];
let distanceB = b[0] * b[0] + b[1] * b[1];

return distanceA - distanceB;
})
return arr.slice(0, k);
}
