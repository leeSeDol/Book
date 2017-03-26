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
	}

	function add(runningTotal,currentValue){
		return runningTotal+currentValue;
	}
	var nums=[1,2,3,4,5,6,7,8,9,10];
	var total=nums.reduce(add);
	console.log(total);
	function concat(accumulatedString,item){
		return accumulatedString+item;
	}
	var words=["the ","quick ","brown ","fox "];
	var sentence = words.reduce(concat);
	console.log(sentence);
	var sentence2 = words.reduceRight(concat);
	console.log(sentence2);
	//迭代器方法(生成新数组)
	//map方法
	function curve(grade){
		return grade+=5;
	}
	var grades=[77,65,81,92,83];
	var newGrades=grades.map(curve);
	console.log(newGrades);
	function first(word){
		return word[0];
	}
	var words=["for","your","information"];
	var acronym=words.map(first);
	console.log(acronym.join(""));
	//filter方法
	function isEven(num){
		return num % 2 == 0;
	}
	function isOdd(num){
		return num % 2 == 1;
	}
	var nums=[];
	for(var i=0;i<20;i++){
		nums[i] = i + 1;
	}
	var evens=nums.filter(isEven);
	var odds=nums.filter(isOdd);
	console.log(evens);
	console.log(odds);
	function passing(num){
		return num>=60;
	}
	var grades=[];
	for(var i=0;i<100;i++){
		grades[i]=Math.floor(Math.random()*101);
	}
	var passGrades=grades.filter(passing);
	console.log(grades);
	console.log(passGrades);
	//filter方法
	function afterc(str){
		if(str.indexOf("cie")>-1){
			return true;
		}
		return false;
	}
	var words=["recieve","deceive","percieve","deceit","concieve"];
	var misspelled = words.filter(afterc);
	console.log(misspelled);
	//二维数组
	var twod=[];
	var rows=5;
	for(var i=0;i<rows;i++){
		twod[i]=[];
	}
	console.log(twod[0][0]);
	//另一种创建二维数组的方法
	Array.matrix=function(numrows,numcols,initial){
		var arr=[];
		for(var i=0;i<numrows;i++){
			var columns=[];
			for(var j=0;j<numcols;j++){
				columns[j]=initial;
			}
			arr[i]=columns;
		}
		return arr;
	}
	var nums=Array.matrix(5,5,0);
	console.log(nums);*/
	//处理二维数组中的元素
};
