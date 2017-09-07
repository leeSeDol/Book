window.onload=function(){
	var text1 = document.getElementsByClassName("text")[0];
	if('textShadow' in text1.style){
		text1.classList.add('textshadow');
	}else{
		text1.classList.add('no-textshadow');
	}

	//testProperty('background');
	//testProperty('border');

	//检测在任意元素的element.style对象上检查该属性是否存在
	function testProperty(property){
		var root = document.documentElement;
		if(property in root.style){
			root.classList.add(property.toLowerCase());
			return true;		
		}
		root.classList.add('no-'+property.toLowerCase());
		return false;
	}


	var root = document.documentElement;
	var dummy = document.createElement("p");
	dummy.style.backgroundImage = 'linear-gradient(red,tan)';
	if(dummy.style.backgroundImage){
		root.classList.add('lineargradients');
	}else{
		root.classList.add('no-lineargradients');
	}


	//testValue("lineargradient","linear-gradient(34deg,#31c,#fc0)","background");
	//检测某个具体的属性值是否支持
	function testValue(id,value,property){
		var root = document.documentElement;
		var dummy = document.createElement("p");
		dummy.style[property] = value;
		if(dummy.style[property]){
			root.classList.add(id);
			return true;
		}else{
			root.classList.add("no-"+id);
			return false;
		}

	}
}
