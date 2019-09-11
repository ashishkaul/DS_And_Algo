let GetFibonacciNumber = (number) => {
	let result = 0;
	let memoArray =[];
	memoArray[1] = memoArray[2] = 1
 	for(let i = 3; i <= number; i++){
		memoArray[i] = memoArray[i - 1] + memoArray[i - 2];
	} 
	return memoArray[number];
}