const maxSubArray = (nums) => {
    let globalMax= currentMax= nums[0];
    for (let i=1;i<nums.length;i++) {
      currentMax= Math.max(nums[i],currentMax+nums[i]);
      if(globalMax<=currentMax)
      {
        globalMax=currentMax;
      }
    }
    return globalMax;
  };
  
  console.log(maxSubArray([5,4,-1,7,8]));