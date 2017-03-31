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
};
