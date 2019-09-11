let GetFibonacciNumber = (number) => {
	let result = 0;
  
	if(number ==1 || number ==2){
		result = 1;
	}else{
		result = GetFibonacciNumber(number -1) + GetFibonacciNumber(number - 2);
	}
	return result;
}