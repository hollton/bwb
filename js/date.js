//日期时间
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=b_version.split(";"); 
if(version[1]){var trim_Version=version[1].replace(/[ ]/g,""); }
function time(){
                var week; var now=new Date();
				
				var date=now.getDate();
				if(date<=9)  date="0"+date
								
                if(new Date().getDay()==0)          week="周日"
                if(new Date().getDay()==1)          week="周一"
                if(new Date().getDay()==2)          week="周二" 
                if(new Date().getDay()==3)          week="周三"
                if(new Date().getDay()==4)          week="周四"
                if(new Date().getDay()==5)          week="周五"
                if(new Date().getDay()==6)          week="周六"
				
				if(browser=="Microsoft Internet Explorer" && (trim_Version=="MSIE6.0"||trim_Version=="MSIE7.0"||trim_Version=="MSIE8.0"))
				{document.getElementById("date").value=(now.getYear()+"年"+(now.getMonth()+1)+"月"+date+"日"+" "+week);}
				else{document.getElementById("date").value=(1900+now.getYear()+"年"+(now.getMonth()+1)+"月"+date+"日"+" "+week);}
				setTimeout(time,60000);}
				
				
//加入收藏   
        function AddFavorite(sURL, sTitle) {   
            sURL = encodeURI(sURL);          try{      
            window.external.addFavorite(sURL, sTitle);      
        }catch(e) {      
            try{      
                window.sidebar.addPanel(sTitle, sURL, "");      
            }catch (e) {      
                alert("抱歉，您的浏览器不支持自动加入收藏，请使用Ctrl+D进行添加,或手动添加到收藏夹中。");   
            }      
        }   
    }