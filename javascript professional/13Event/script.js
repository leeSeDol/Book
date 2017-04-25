window.onload=function(){
	/*var EventUtil={
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,handler);
			}else{
				element["on"+type]=handler;
			}
		},
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,handler);
			}else{
				element["on"+type]=null;
			}
		}
	};*/
	var btn=document.getElementById("myBtn");
	btn.addEventListener("click",handlerDOM2,false);
	//与addEventListener的参数必须相同，必须为同一个函数名，重写一遍函数没有用
	btn.removeEventListener("click",handlerDOM2,false);
	btn.addEventListener("click",handlerDOM2,false);
	
	//EventUtil.addHandler(btn,"click",handlerDOM2);
	function handlerDOM2(event){
		alert(event.type);
	};
};
function showMessage(){
	console.log("message");
}

