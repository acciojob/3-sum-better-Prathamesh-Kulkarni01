function threeSum(arr, target) {
// write your code here
	let i=0;
	arr=arr.sort()
	let closest=9999
	while(arr.length-2>i){
		let j=i+1;
		let k=arr.length-1;
		while(j<k){
			let sum=arr[i]+arr[j]+arr[k]
			if(Math.abs(target-sum)<Math.abs(target-closest)){
				closest=sum
			}
			if(sum>target){
				k--;
			}else{
				j++
			}
			
		}
		i++;
	}
  return closest
}

module.exports = threeSum;
