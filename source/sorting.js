'use strict';


function sorting (initial, propertyArray){

if (propertyArray.length == 0)
    { return initial; }

else{
for (var i=0;i<propertyArray.length;++i)
{
  var firstProperty = propertyArray[i];
  var secondProperty = propertyArray[++i];
  initial.sort(function change (a, b) {
      if (a[firstProperty] > b[firstProperty]) {return 1;}
      if (a[firstProperty] < b[firstProperty]) {return -1;}
      if ((a[firstProperty] == b[firstProperty]) && (a[secondProperty] > b[secondProperty])) {return 1;}
      else {return -1;}

    return 0;
    });
  }
}

 return initial;
}
