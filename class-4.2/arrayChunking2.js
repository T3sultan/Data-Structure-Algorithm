//Given an array and chunk size, divide the array into many sub-arrays .where each sub-array is of length size
//examples
//chunk([1,2,3,4],2)---->[[1,2],[3,4]]
//chunk([1,2,3,4,5],2)--->[[1,2],[3,4],[5]]
//chunk([1,2,3,4,5,6,7,8],3)--->[[1,2,3],[4,5,6],[7,8]]
//chunk([1,2,3,4,5],4)--->[[1,2,3,4],[5]]
//chunk([1,2,3,4,5],10)---->[[1,2,3,4,5]]

function arrayChunk(arr, size) {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    const sliceArr = arr.slice(index, index + size);
    chunked.push(sliceArr);
    index += size;
  }

  console.log(chunked);
}
arrayChunk([1, 2, 3, 4, 5], 10);
