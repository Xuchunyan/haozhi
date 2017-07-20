window.onload = function () {
    // //浏览器的可视宽
    // var oDoc = document.documentElement.clientWidth;
    // // 外围的div
    // var oWh = document.getElementsByClassName("wp_wheel")[0];
    // //里面的ul
    // var oUl = document.getElementsByClassName("wheel_pic")[0];
    // // ul里的li
    // var aLi = oUl.children;
    // //轮播区的div的宽
    // oWh.style.width = oDoc + "px";
    // // 轮播区的图片的li的宽
    //
    // for (var i = 0;i<aLi.length;i++){
    //     aLi[i].style.width = oDoc+ "px";
    // }
    //
    // //轮播区图片的ul的宽
    // //oUl.innerHTML += oUl.innerHTML;
    // oUl.style.width = aLi[0].offsetWidth*aLi.length +"px";
    //
    // var num = 0;
    // function wheel() {
    //     setInterval(function () {
    //         num+=aLi[0].offsetWidth;
    //         if (num > 0){
    //           num  = aLi[0].offsetWidth-oUl.offsetWidth;
    //
    //         }
    //         oUl.style.left = num + "px"
    //     },1000)
    // };
    //  wheel();
    //

// 下层轮播
    var oBox = document.getElementById("box");
    var oUl1 = document.getElementById("ul");
    var aLi1 = oUl1.children;

    var oL = document.getElementById("left");
    var oR= document.getElementById("right");

    oUl1.innerHTML += oUl1.innerHTML;
    oUl1.style.width = aLi1[0].offsetWidth*aLi1.length +"px";
      var num=0;
      var timer = null;
        function run() {
            clearInterval(timer);
          timer=setInterval(function () {
              num -= 2;
              if (num<-oUl1.offsetWidth/2){
                    num=0;
              }
              oUl1.style.left = num + "px"
              console.log()
          },10)
        }
        run()

    oL.onclick =function () {
        run();
    }
    oR.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            num +=2;
            if (num>0){
                num = -oUl.offsetWidth/2;
            }
            oUl.style.left = num + "px";
        },
            10);
    }

    oBox.onmouseover = function () {
        clearInterval(timer);
    };
    oBox.onmouseout = function () {
        run();
    }

    var float = document.getElementsByClassName("float");
    console.log(float.lenght)

};
