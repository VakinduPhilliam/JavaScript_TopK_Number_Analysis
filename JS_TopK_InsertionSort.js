/* The function below takes in an array of elements and returns a list of the top K largest elements as defined by the user. */
/* The function Uses Insertion Sort Algorithm. */
/* Written by Vakindu Philliam. */

var m = function TopK(list,k){

//Return list if one element or none
if(list.length<=1){

return list;

}

//Else, iterate through list

for (var i=0; i<list.length;i++){

//Store current value
var value=list[i];

//Compare elements to value and switch accordingly
for(var j=i-1;j>-1&&list[j]>value;j--){

list[j+1]=list[j];

  }

list[j+1]=value;

}

//Return sorted list of top 10 elements
return list.slice(((list.length)-k),list.length);

};


//Run function

var array = [123,35,17,3,48,6,7,1,9,95,39,3,2,1,54,11,33,12,3,4,7,2,3,38,90,32];

console.log(m(array,15));
