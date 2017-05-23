//获取元素
function $(name,id) {
if(name.charAt(0)==="#"){
		name = name.substr(1);
		return document.getElementById(name);
	}else{
		if(!id){
			id = document;
		}
		return id.getElementsByTagName(name);
	}
}

//获取样式
function getStyle(obj,attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

//运动函数
function domove(obj,attr,dir,target,endFn) {
	//获取初始值
	var begin = parseInt(getStyle(obj,attr));
	obj.timer = setInterval(function () {
		//修复步数与目标值正负
		if(target>begin&&dir<0 || target<begin&&dir>0){
			dir = -dir
		}
		
		var now = parseInt(getStyle(obj,attr)) + dir;
		//步数与目标值不符
		if(now>=target&&dir>0 ||now<=target&&dir<0 ){
			now=target;
			clearInterval(obj.timer);
			endFn &&endFn();
		};
		obj.style[attr] = now + "px";
	},30)
}