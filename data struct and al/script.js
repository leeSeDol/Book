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
*/
	//数组的字符串表示
	var names=["David","Cynthia","Raymond","drink","spit","drink","Raymond","Cynthia","David"];
	var namestr=names.join("/");
	console.log(namestr);
	namestr =names.toString();
	console.log(namestr);

};
