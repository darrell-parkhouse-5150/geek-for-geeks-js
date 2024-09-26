const max_area = height => {
    let ma = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        ma = Math.max(ma, area)

        if (height[left] < height[right])
            left++

        else
            right--
    }

    return ma;
}

const _max_area = height => {
    if (!Array.isArray(height) || height.length < 2) {
        throw new Error('Invalid input. Height should be an array with at least 2 elements.');
    }

    let ma = 0;
    let left = 0;
    let right = height.length - 1;

    try {
        while (left < right) {
            const area = Math.min(height[left], height[right]) * (right - left);
            ma = Math.max(ma, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
    } catch (error) {
        // Handle specific errors here
        console.error('An error occurred:', error.message);
    }

    return ma;
}