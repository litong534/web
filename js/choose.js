arr = [1,15,60,2,23,561,21,16];
function chooseSort(arr){
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1;j<arr.length;j++) {
      if(arr[i]>arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

chooseSort(arr);
console.log(arr);