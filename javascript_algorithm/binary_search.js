const search = (nums, target) => {
  return binary_search(nums, 0, nums.length - 1, target);
};

const binary_search = (nums, start, end, target) => {
  const mid = start + end / 2;
  if (start > end) {
    return -1;
  }
  if (nums[mid] == target) {
    return mid;
  } else if (nums[mid] < target) {
    return binary_search(nums, mid + 1, end, target);
  } else {
    return binary_search(nums, start, mid - 1, target);
  }
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
