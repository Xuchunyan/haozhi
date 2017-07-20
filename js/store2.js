$.ajax({
			type:"get",
			url:"../json/store2.json",
			success:function(data)
			{
				console.log(data)

				var list="<ul>"
				
			for(var i=0;i<data.store.length;i++)
			{
				list+="	<li><img src='"+data.store[i].src+"' ><h3>"+data.store[i].title+"</h3><p>"+data.store[i].con+"</p></li>"
			}
			list+="</ul>"
				$(".nav1").html(list)
		
			}
					


})
	 	
	 	








window.onload=function(){
		var oBox=document.getElementById('box');
		
		var oUl=document.getElementById('ul1');
		
		var aLi=oUl.children;
		
		var oL=document.getElementById('left');
		var oR=document.getElementById('right');
		
		oUl.innerHTML+=oUl.innerHTML;
		oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
		
		var n=0;
		var timer=null;
		
		oL.onclick=function(){
			toL();	
		};
		function toL(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n-=20;
				  
				  if(n<-oUl.offsetWidth/2){
					n=0;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},100)	
		};
		toL();
		oR.onclick=function(){
			clearInterval(timer);
			timer=setInterval(function(){
				  n+=20;
				  
				  if(n>0){
					n=-oUl.offsetWidth/2;  
				  }
				  
				  oUl.style.left=n+'px';
						
			},100)	
		};
		
		
		oBox.onmouseover=function(){
			clearInterval(timer);	
		};
		oBox.onmouseout=function(){
			toL();
		};
	};