/* The function below takes in an array of elements and returns a list of the top K largest elements as defined by the user. */
/* The function uses Bubble sort Algorithm */
/* Written by Vakindu Philliam. */

var m = function TopK(list,k){

//Return list if one element or none
if(list.length<=1){

return list;

}

//Else, iterate through array list

var done=false;
while(!done){
done=true;

for(var i=0;i<list.length;i++){

//Compare adjacent elements and switch if necessary
if(list[i-1]<list[i]){
done =false;
var temp=list[i-1];
list[i-1]=list[i];
list[i]=temp;

   }

  }
}

//Return sorted list of top 10 largest elements

return list.slice(0,k);

};


//Run function

var array = [89,1,2,78,39,1,2,33,43,56,71,23,3,1,4,7,1,34,3,7,8,33,12];

console.log(m(array,15));
