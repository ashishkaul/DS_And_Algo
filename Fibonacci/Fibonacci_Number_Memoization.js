let GetFibonacciNumber = (number) => {
	let result = 0;
	let memoArray =[];
	if(memoArray[number] != undefined);{
		result = memoArray[number];
	}
	if(number == 1 || number == 2){
		result = memoArray[number] = 1;
	} else{
		memoArray[number] = GetFibonacciNumber(number -1) + GetFibonacciNumber(number - 2)
	}
	return memoArray[number];
}