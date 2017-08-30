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
        let firstProperty = propertyArray[0];
        let collator = new Intl.Collator();
        function comparator(a, b) {
            return collator.compare(a, b);
        }
        let array = [];
        for (let i = 0; i < initial.length; ++i) {
            let bufer = initial[i];
            if (/[a-zа-яё]/i.test(bufer[firstProperty])) {
                array.push(bufer[firstProperty]);
            } else {
                return 0;
            }
        }
        array.sort(comparator);
        for (let i = 0; i < initial.length; ++i) {
            let bufer = initial[i];
            bufer[firstProperty] = array[i];
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
