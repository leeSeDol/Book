window.onload=function(){
	//querySelector方法和querySelectorAll方法
	var body=document.querySelector("body");
	console.log(body);
	var myDiv=document.querySelector("#myDiv");
	var ems=myDiv.querySelectorAll("em");
	for(var i=0;i<ems.length;i++){
		console.log(ems[i].innerHTML);
	}

	var strongs = document.querySelectorAll("p strong");
	for(var i=0,len=strongs.length ; i<len ; i++){
		strong=strongs[i];
		strong.className="important";
	}
	
	//去除值为bd的类
/*	var div=document.getElementById("classDiv");
	var classNames = div.className.split(/\s+/);
	var pos = -1,
		i,
		len;
	for(var i=0,len=classNames.length;i<len;i++){
		if(classNames[i] == "bd"){
			pos=i;
			break;
		}
	}
	classNames.splice(i,1);
	div.className=classNames.join(" ");*/

	var div=document.getElementById("classDiv");
	var classNames = div.className.split(/\s+/);
	var pos=-1,
		i,
		len;
	for(var i=0,len=classNames.length;i<len;i++){
		if(classNames[i]=="bd"){
			pos=i;
			break;
		}
	}
	classNames.splice(i,1);
	div.className = classNames.join(" ");

	div.classList.remove("user");
	div.classList.add("user");
	div.classList.toggle("bd");
	if(div.classList.contains("bd")&&div.classList.contains("user")){
		alert("have");
	}
	var button = document.getElementById("myButton");
	button.focus();
	console.log(document.activeElement === button);
	console.log(document.hasFocus());
	if( document.readyState == "complete" ){
		console.log("the document has complete");
	}
	document.compatMode = "BackCompat";
	if( document.compatMode == "CSS1Compat" ){
		console.log("Standards mode");
	}else if(document.compatMode == "BackCompat"){
		console.log("Quirks mode");
	}
	var head = document.head || document.getElementsByTagName("head")[0];
	console.log(document.charset);
	//document.charset="UTF-8";
	if(document.charset != document.defaultCharset){
		console.log("Custom character set being used.");
	}
};
