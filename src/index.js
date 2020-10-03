exports.min = function min(array) {
    var minArr = array[0];

    if (array.length == 0) {
        var result = 0;
        return result;
    } else {
        for (var i = 0; i < array.length; i++) {
            if (array[i] < minArr) {
                minArr = array[i];
            }
        }
        return minArr;
    }
};

exports.max = function max(array) {
    maxArr = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > maxArr) {
            maxArr = array[i];
        }
    }
    return maxArr;
};

exports.avg = function avg(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var result = sum / array.length;
    return result;
};