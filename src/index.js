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