'use strict';

function sorting(initial, propertyArray) {

    let change = (a, b) => {
        let i = 0;
        let firstProperty = propertyArray[i];
        let secondProperty = propertyArray[++i];
        if ((a[firstProperty] > b[firstProperty]) || (a[firstProperty] < b[firstProperty])) {
            return a[firstProperty] - b[firstProperty];
        }
        if ((a[firstProperty] === b[firstProperty]) && (a[secondProperty] > b[secondProperty])) {
            return 1;
        } else {
            return -1;
        }
    }

    let alphabetSorter = () => {
        function sortComparer(a, b) {
            return a[firstProperty].localeCompare(b[firstProperty]);
        }
        let firstProperty = propertyArray[0];
        for (let i = 0; i < initial.length; ++i) {
            let bufer = initial[i];
            if (/[a-zа-яё]/i.test(bufer[firstProperty])) {
                initial.sort(sortComparer);
            } else {
                return 0;
            }
        }
        return initial;
    }

    if (!propertyArray.length || !propertyArray) {
        return initial;
    } else {
        alphabetSorter();
        propertyArray.forEach(function cycle() {
            initial.sort(change);
        });
    }
    return initial;
}
