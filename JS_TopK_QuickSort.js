/* The function below takes in an array of elements and returns a list of the top K largest elements as defined by the user. */
/* The function uses Quick sort Algorithm. */
/* Written by Vakindu Philliam. */

var m = function TopK(list,k){

//Return list if one element or none
if(list.length<=1){

return list;

}


//Declare variables
var left=[];
var right=[];
var pivot=list.pop();
var newList=[];

//Iterate through list

for(var i=0;i<list.length;i++){

//Compare elements to pivot and distribute accordingly
if(list[i]<=pivot){

left.push(list[i]);

}else {

right.push(list[i]);

 }

}

//Coalesce the left and right lists
var sorted =newList.concat(TopK(right,right.length),pivot,TopK(left,left.length));

return sorted.slice(0,k);

};


//Run function
var array = [13,5,7,1,2,289,75,63,69,34,22,1,22,11,56,78,97,91,31,53,64,73,18,87];

console.log(m(array,15));