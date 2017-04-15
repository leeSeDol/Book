window.onload=function(){
	var string1="sssssssssssss"+"sssssssssssssatssssssssssssbat";
	
	var pattern1=/at/;
	var pattern2=/[bc]at/i;
	var pattern3=/.at/gi;
	
	if(pattern1.test(string1)){
		console.log("string1 have pattern1");
	}
	if(pattern2.test(string1)){
		console.log("string1 have pattern2");
	}
};
