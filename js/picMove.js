		var oDiv=document.getElementById('div');
		var aDiv=oDiv.getElementsByTagName('div');
		var oLeft=document.getElementById('arrow_left');
		var oRight=document.getElementById('arrow_right');
		var num=0;
		var x=0; var y=0;
		var timer=null;
		/*-------div移动定位-----*/
		var json=[
				{width: 200, height: 158,top:5, left:28, opacity: 80},
				{width: 280, height: 221,top:25, left:99, opacity:90},
				{width: 380, height: 300,top:41, left:235, opacity: 100},
				{width: 280, height: 221,top:25, left:470, opacity: 90},
				{width: 200, height: 158,top:5, left:619, opacity:80}
				]
		
		/*-------图片大小移动定位-----*/
		var jsonPic=[
				{width: 170, height: 100},
				{width: 245, height: 144},
				{width: 340, height: 200},
				]
		
		/*-------span样式切换-----*/
		var jsonSpan=[
				{"marginTop":4,"fontSize":14},
				{"marginTop":4,"marginRight":3,"marginBottom":2,"marginLeft":3,"fontSize":11,"lineHeight":14,"height":15},
				{"marginRight":8,"fontSize":11},
				
				{"marginTop":6,"fontSize":15},
				{"marginTop":3,"marginRight":4,"marginBottom":0,"marginLeft":4,"fontSize":12,"lineHeight":16,"height":34},
				{"marginRight":14,"fontSize":12},
				
				{"marginTop":10,"fontSize":16},
				{"marginTop":12,"marginRight":5,"marginLeft":5,"fontSize":13,"lineHeight":18,"height":36},
				{"marginRight":20,"fontSize":13},
				]
			
				
		/*-------遮罩div-----*/
		var oDiv1=document.getElementById('div1');
		var oDiv2=document.getElementById('div2');
		var oDiv3=document.getElementById('div3');
		var oDiv4=document.getElementById('div4');
		var oDiv5=document.getElementById('div5');
		
		
		
		/*-------自定义div及其z-index-----*/
		function fn(x,y){
			aDiv[x].style.zIndex=y;
		}
		
		/*----左移----*/
		function Prev(){
			
			num=aDiv.length-1;
			
		/*-------div移动定位-----*/
			startMove(aDiv[num],json[num-1],fn(4,2));
			startMove(aDiv[num-1],json[num-2],fn(3,3));
			startMove(aDiv[num-2],json[num-3],fn(2,2));
			startMove(aDiv[num-3],json[num-4],fn(1,1));
			startMove(aDiv[num-4],json[num],fn(0,0));
			
			
		/*-------pic移动定位-----*/
			var aImg=oDiv.getElementsByTagName('img');
			startMove(aImg[4],jsonPic[1]);
			startMove(aImg[3],jsonPic[2]);
			startMove(aImg[2],jsonPic[1]);
			startMove(aImg[1],jsonPic[0]);
			startMove(aImg[0],jsonPic[0]);
			
			
		/*-------span移动定位-----*/
			var aSpan=oDiv.getElementsByTagName('span');
			startMove(aSpan[14],jsonSpan[5]);
			startMove(aSpan[13],jsonSpan[4]);
			startMove(aSpan[12],jsonSpan[3]);
			
			startMove(aSpan[11],jsonSpan[8]);
			startMove(aSpan[10],jsonSpan[7]);
			startMove(aSpan[9],jsonSpan[6]);
			
			startMove(aSpan[8],jsonSpan[5]);
			startMove(aSpan[7],jsonSpan[4]);
			startMove(aSpan[6],jsonSpan[3]);
			
			
			startMove(aSpan[5],jsonSpan[2]);
			startMove(aSpan[4],jsonSpan[1]);
			startMove(aSpan[3],jsonSpan[0]);
			
			startMove(aSpan[2],jsonSpan[2]);
			startMove(aSpan[1],jsonSpan[1]);
			startMove(aSpan[0],jsonSpan[0]);
						
			
		/*-------插入变换div相对位置-----*/				
			oDiv.appendChild(aDiv[0]);
		};
		
		oLeft.onclick=function(){ 
			Prev();
		};
		
		
		/*----右移----*/
		function Next(){
			num=0;
			
		/*-------div移动定位-----*/
			startMove(aDiv[num],json[num+1],fn(0,2));
			startMove(aDiv[num+1],json[num+2],fn(1,3));
			startMove(aDiv[num+2],json[num+3],fn(2,2));
			startMove(aDiv[num+3],json[num+4],fn(3,1));
			startMove(aDiv[num+4],json[num],fn(4,0));
			
			
		/*-------pic移动定位-----*/
			var aImg=oDiv.getElementsByTagName('img');
			startMove(aImg[4],jsonPic[0]);
			startMove(aImg[3],jsonPic[0]);
			startMove(aImg[2],jsonPic[1]);
			startMove(aImg[1],jsonPic[2]);
			startMove(aImg[0],jsonPic[1]);
			
			
		/*-------span移动定位-----*/
			var aSpan=oDiv.getElementsByTagName('span');
			startMove(aSpan[14],jsonSpan[2]);
			startMove(aSpan[13],jsonSpan[1]);
			startMove(aSpan[12],jsonSpan[0]);
			
			startMove(aSpan[11],jsonSpan[2]);
			startMove(aSpan[10],jsonSpan[1]);
			startMove(aSpan[9],jsonSpan[0]);
			
			startMove(aSpan[8],jsonSpan[5]);
			startMove(aSpan[7],jsonSpan[4]);
			startMove(aSpan[6],jsonSpan[3]);
			
			
			startMove(aSpan[5],jsonSpan[8]);
			startMove(aSpan[4],jsonSpan[7]);
			startMove(aSpan[3],jsonSpan[6]);
			
			startMove(aSpan[2],jsonSpan[5]);
			startMove(aSpan[1],jsonSpan[4]);
			startMove(aSpan[0],jsonSpan[3]);
						
			
		/*-------插入变换div相对位置-----*/
			var last=aDiv[aDiv.length-1];
			oDiv.removeChild(aDiv[aDiv.length-1]);
			oDiv.insertBefore(last,aDiv[0]);
		}
		
		oRight.onclick=function(){
			Next();
		}
		
		
		
		/*-------对遮罩div操作-----*/
		oDiv1.onclick=function(){
			var n=0;
			clearInterval(timer);			
			timer=setInterval(function (){
				Next();
				n++;
				if(n===2){
					clearInterval(timer);
				};
			},420);
		}
		
		oDiv2.onclick=function(){
			Next();
		}
		
		oDiv4.onclick=function(){
			Prev();
		}		
		
		oDiv5.onclick=function(){
			clearInterval(timer);			
			timer=setInterval(function (){
				Prev();
				n++;
				if(n===2){
					clearInterval(timer);
				};
			},420);
			n=0;
		}
		
				
/*键盘触发图片切换*/
document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==37){ //左,		e && e.keyCode==38 :上
			Prev();
		}

		if(e && e.keyCode==39){ //右,		e && e.keyCode==40:下
			Next();
		}
}; 
		
		
		//以下为测试中间代码
		/*aDiv[0].onclick=function(){ 
			Next();
		};
		aDiv[1].onclick=function(){ 
			Next();
		};
		aDiv[2].onclick=function(){ 
			return true;
		};
		aDiv[3].onclick=function(){ 
			num=aDiv.length-1;
			
			startMove(aDiv[num],json[num-1],fn(4,2));
			startMove(aDiv[num-1],json[num-2],fn(3,3));
			startMove(aDiv[num-2],json[num-3],fn(2,2));
			startMove(aDiv[num-3],json[num-4],fn(1,1));
			startMove(aDiv[num-4],json[num],fn(0,1));
				
			oDiv.appendChild(aDiv[0]);
		};
		
		//移动两次
		aDiv[4].onclick=function(){
		
			clearInterval(timer);			
			timer=setInterval(function (){
				Prev();
				n++;
				if(n===2){
					clearInterval(timer);
				};
			},200);
			n=0;
		};*/