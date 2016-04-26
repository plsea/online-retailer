// JavaScript Document


//元素移动
function move(obj,footer,target,attr,endFn){

	footer = parseInt(getStyle(obj,attr))<target?footer:-footer;

	clearInterval(obj.timer);

	obj.timer = setInterval(function(){

	speed = parseInt(getStyle(obj,attr)) + footer;

	if(speed < target && footer <0 ){
		speed = target;
	}
	if(speed > target && footer > 0 ){
		speed = target;
	}

	if(speed == target){
		clearInterval(obj.timer);
		endFn && endFn();
	}
	obj.style[attr] = speed + 'px';
	}
,30);
}

//getStyle获取元素身上的参数
function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];};


//图片淡入淡出效果
  var iNow = 0;
	//淡入fadeIn
	function fadeIn(obj){
		var iOpic = getStyle(obj,'opacity');
		if(iOpic == 1){
			return false;
		}
		var oPci = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){

				var iSpeed = 5;

				if(oPci == 100){
					clearInterval(obj.timer);
				}else{
				oPci = oPci+iSpeed;
				obj.style.opacity = oPci/100 ;
				}

			},30);
	}

	//淡出fadeOut
	function fadeOut(obj){
		var iOpic = getStyle(obj,'opacity');
		if(iOpic === 0){
			return false;
		}
		var oPci = 100;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){

				var iSpeed = -5;

				if(oPci === 0){
					clearInterval(obj.timer);
				}else{
					oPci += iSpeed;
					obj.style.opacity = oPci/100 ;
				}
			},30)
	};

	//淡入淡出主程序
	function fadeAuto (){

	if(iNow == aLi.length - 1){
		iNow = 0;
	}else{
		iNow++;
	}
	for(var i = 0;i < aLi.length;i++ ){
		fadeOut(obj);
	}
	fadeIn(obj);
	}