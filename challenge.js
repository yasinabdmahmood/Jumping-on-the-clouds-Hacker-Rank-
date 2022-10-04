 function jumpingOnClouds(arr){
  let counter=0;
  let i=0;
  while(i<arr.length-1){
    counter+=1;
    if(arr[i+2]===0){
      i+=2;
    }
    else{
      i+=1;
    }
  }
  return counter
} 

const test=[0,1,0,0,0,1,0];

console.log(jumpingOnClouds(test))
