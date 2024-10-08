const two_sum = (nums, target) => {
    let left = 0; right = nums.length - 1

    while (left < right) {
        const sum = nums[left] + nums[right]

        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left ++
        } else {
            right --
        }
    }

    return []
}