function kthSmallest(matrix, k) {
  const n = matrix.length;

  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;
    let row = 0;
    let col = n - 1;

    // Count elements <= mid.
    while (row < n && col >= 0) {
      if (matrix[row][col] <= mid) {
        count += col + 1;
        row++;
      } else {
        col--;

      }
    }

    if (count < k) {
      // Too few elements <= mid.
      left = mid + 1;
    } else {
      // At least k elements <= mid.
      right = mid;
    }
  }

  return left;
}

