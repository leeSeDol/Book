window.onload=function(){
	/*
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
		console.log("have");
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
	var div2=document.getElementById("myDiv2");
	var appId = div2.dataset.appId;
	var myName = div2.dataset.myname;

	div2.dataset.appId="23456";
	div2.dataset.myname="Michael";

	if(div2.dataset.myname){
		console.log("Hello world , "+div2.dataset.myname);
	}
         
	//innerHTML和outerHTML
	var div=document.getElementById("myDiv");
	console.log(div.outerHTML);
	console.log(div.innerHTML);
	//div.outerHTML="<p>This is a paragraph</p>";
	//insertAdjacentHTML
	div.insertAdjacentHTML("beforebegin","<p>beforebegin</p>");
	div.insertAdjacentHTML("afterbegin","<p>afterbegin</p>");
	div.insertAdjacentHTML("beforeend","<p>beforeend</p>");
	div.insertAdjacentHTML("afterend","<p>afterend</p>");

	//避免频繁操作
	var values=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
	//for(var i=0;i<values.length;i++){
	//	div.innerHTML+="<li>"+values[i]+"</li>";
	//}
	var itemsHtml="";
	for(var i=0;i<values.length;i++){
		itemsHtml+="<li>"+values[i]+"</li>";
	}
	//div.innerHTML=itemsHtml;
	div.scrollIntoView(true);
	//console.log(document.documentElement.contains(document.body));
	//var result = document.documentElement.compareDocumentPosition(document.body);
	//console.log(!!(result & 16));
	var result = document.documentElement.compareDocumentPosition(document.body);
	console.log(!!(result & 16));
	console.log(document.documentElement.contains(document.body));
	console.log(div.innerText);
	console.log(div2.innerHTML);
	div2.innerText="hello world";
	//div2.innerText=div2.innerText;
	function getInnerText(element){
		return (typeof element.textContent=="string") ? element.textContent:element.innerText; 
	}
	console.log(getInnerText(div2));
	function setInnerText(element,text){
 		if(typeof element.textContent =="string"){
 			element.textContent=text;
 			//console.log(2);
 		}else{
 			element.innerText=text;
 		}
	}
	setInnerText(div2,"heeeeeeeeeeeeeeeeeeeeeeeeeee");
	console.log(getInnerText(div2));
	console.log(div.outerText);
	div.outerHTML="<p>hello world</p>";
	//document.charset="utf-16";
	console.log(document.charset);
	console.log(document.charset==document.defaultCharset);
	console.log(document.defaultCharset);
	//滚动
	document.body.scrollByLines(5);*/
	var classDiv=document.getElementById("classDiv");
	var classNames=classDiv.className.split(/\s+/);
	console.log(classNames);
	var pos=-1;
	var len=classNames.length;
	for(var i=0;i<len;i++){
		if(classNames[i]=="user"){
			pos=i;
			break;
		}
	}
	classNames.splice(i,1);
	classDiv.className=classNames.join(" ");
	classDiv.classList.remove("bd");
	classDiv.classList.add("username");
	classDiv.classList.toggle("user");
};
