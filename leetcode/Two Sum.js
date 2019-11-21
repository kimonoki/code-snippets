var twoSum = function (nums, target) {
    let position;
    nums.sort((a, b) => a - b);
    for (let index0 = 0; index0 < nums.length; index0++) {
        if (nums[index0] > target) position = index0;
    }
    for (let index = 0; index < position; index++) {
        const number1 = nums[index];
        for (let index2 = index; index2 < nums.length; index2++) {
            const number2 = nums[index2];
            if (number1 + number2 == target) {
                return [index, index2];
            }
        }
    }
};

