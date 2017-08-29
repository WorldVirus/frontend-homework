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

    let alphabetDestructor = () => {
        let firstProperty = propertyArray[0];
        for (let i = 0; i < initial.length; ++i) {
            let bufer = initial[i];
            if (bufer[firstProperty] === 'ё') {
                bufer[firstProperty] = 'е';
            }
        }
        initial.sort(function changer(a, b) {
            if (a[firstProperty] > b[firstProperty]) {
                return 1;
            }
            if (a[firstProperty] < b[firstProperty]) {
                return -1;
            }
        });
    }

    if (!propertyArray.length || !propertyArray) {
        return initial;
    } else {
        alphabetDestructor();
        propertyArray.forEach(function cycle() {
            initial.sort(change)
        });
    }

    return initial;
}
