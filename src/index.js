exports.min = function min(array) {
    if (array && array.length > 0) {
        var minArr = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < minArr) {
                minArr = array[i];
            }
        }
        return minArr;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length > 0) {
        maxArr = array[0];
        for (var i = 0; i < array.length; i++) {
            if (array[i] > maxArr) {
                maxArr = array[i];
            }
        }
        return maxArr;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length > 0) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        var result = sum / array.length;
        return result;
    } else {
        return 0;
    }
};