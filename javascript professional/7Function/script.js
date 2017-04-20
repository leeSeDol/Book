window.onload=function(){
	function createComparisonFunction(propertyName){
		return function(object1,object2){
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			if( value1<value2 ){
				return -1;
			}else if(value1>value2){
				return 1;
			}else{
				return 0;
			}
		}
	}
	var compareNames=createComparisonFunction("name");
	var result = compareNames({name:"Nicholas"},{name:"Greg"});
	console.log(result);
	compareNames=null;//解除对匿名函数的引用（以便释放内存）

	function createFunctions(){
		var result = [];
		for(var i=0;i<10;i++){
			result[i]=function(num){
				return function(){
					return num;
				}
			}(i);
		}
		return result;
	}
	var a=createFunctions();
	console.log(a[2]());
	

	//关于this对象
	var name="The window";
	var object={
		name:"My object",
		getNameFunc:function(){
			var that=this;
			return function(){
				return that.name;
			}
		}
	};
	console.log(object.getNameFunc()());

	//私有变量，私有函数和特权方法
	function Person(name){
		this.getName=function(){
			return name;
		};
		this.setName=function(value){
			name=value;
		};
	}
	var person=new Person("Nicholas");
	console.log(person.getName());
	person.setName("Greg");
	console.log(person.getName());

	var person2=new Person("Nico");
	console.log(person2.getName());
	person2.setName("Gre");
	console.log(person2.getName());


	//静态私有变量
	/*(function(){
		var privateVariable=10;
		function privateFunction(){
			return false;
		}

		MyObject = function(){
		};
		MyObject.prototype.publicMethod=function(){
			privateVariable++;
			return privateFunction();
		};
	})();

	(function(){
		var name="";
		Person=function(value){
			name=value;
		};
		Person.prototype.getName=function(){
			return name;
		};
		Person.prototype.setName=function(value){
			name=value;
		};
	})();
	var person1=new Person("Nicholas");
	console.log(person1.getName());
	person1.setName("Greg");
	console.log(person1.getName());
	var person2=new Person("Micheal");
	console.log(person1.getName());
	console.log(person2.getName());//静态私有变量的缺点是所有的实例都会返回相同的值
*/
	//模块模式（为单例创建私有变量和特权方法）
	var application=function(){
		var components=[];
		components.push(new Person("Nico"));
		components.push(new Person("Jane"));

		return {
			getComponentCount:function(){
				return components.length;
			},
			registerComponent:function(component){

				if(typeof component == "object"){
					components.push(component);
					console.log(components.length);
				}
			},
			getComponent:function(){
				for(var i=0;i<components.length;i++){
					console.log(components[i].getName());
				}
			}
		};
	};
	
	console.log(application().getComponentCount());
	application().registerComponent(new Person("babra"));
	console.log(application().getComponentCount());
	application().getComponent();
};
