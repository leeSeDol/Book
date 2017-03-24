window.onload=function(){
/*
	//递归
	function factorial(number){
		if(number==1){
			return number;
		}else{
			return number * factorial(number-1);
		}
	}
	console.log(factorial(5));
	for(var i=0,n=0;i<5;i++){
		n++;
	}
	console.log(i);
	console.log(n);

	//由字符串生成数组
	var sentence ="the quick brown fox jumped over the lazy dog";
	var words=sentence.split(" ");
	for(var i=0;i<words.length;i++){
		console.log(words[i]);
	}

	//查找元素
	var names=["David","Cynthia","Raymond","drink","spit","drink","Raymond","Cynthia","David"];
	var searchName = prompt("Enter a name to seach for:");
	var position = names.indexOf(searchName);
	console.log(position);
	if(position>=0){
		alert("found first:"+name+" at position:"+position+" is: "+names[position]);
	}else{
		alert(searchName+" is not found in array");
		alert(position);
	}
	var position2=names.lastIndexOf(searchName);
	if(position2>=0){
		alert("found first:"+name+" at position:"+position2+" is: "+names[position2]);
	}

	//数组的字符串表示
	var names=["David","Cynthia","Raymond","drink","spit","drink","Raymond","Cynthia","David"];
	var namestr=names.join("/");
	console.log(namestr);
	namestr =names.toString();
	console.log(namestr);

		//由已有的数组创建新的数组
	var cisDept = ["Mike","Clayton","Terrill","Danny","Jennifer"];
	var dmpDept = ["Raymond","Cynthia","Bryan"];
	var itDiv = cisDept.concat(dmpDept);
	console.log(itDiv);
	itDiv=dmpDept.concat(cisDept);
	console.log(itDiv);

	var itDiv=["Raymond","Cynthia","Bryan","Mike","Clayton","Terrill","Danny","Jennifer"];
	itDiv.splice(3,0,"yellow","blue");
	console.log(itDiv);

	//添加或删除数组成员
	var nums=[1,2,3,4,5];
	console.log(nums);
	nums.push(6);
	console.log(nums);
	nums[nums.length]=7;
	console.log(nums);
	nums.unshift(0);
	console.log(nums);
	nums.shift();
	console.log(nums);
	nums.pop();
	console.log(nums);

	//为数组排序
	var nums=[3,1,2,100,4,200];
	nums.sort(compare);
	console.log(nums);
	function compare(num1,num2){
		return num1-num2;
	}
	//迭代器方法
	function square(num){
		console.log(num,num*num);
	}
	var nums=[1,2,3,4,5,6,7,8,9,10];
	nums.forEach(function(number,i){
		square(number);
	});

	function isEven(num){
		return num % 2 == 0; 
	}
	var nums=[2,4,6,8,10];
	var even=nums.every(isEven);
	if(even){
		console.log("all numbers are even");
	}else{
		console.log("not all numbers are even");
	}

	function isEven(num){
		return num % 2 == 0; 
	}
	var nums=[1,2,3,4,5,6,7,8,9,10];
	var even2=nums.some(isEven);
	if(even2){
		console.log("some numbers are even");
	}else{
		console.log("no numbers are even");
	}*/

	function add(runningTotal,currentValue){
		return runningTotal+currentValue;
	}
	var nums=[1,2,3,4,5,6,7,8,9,10];
	var total=nums.reduce(add);
	console.log(total);
};
