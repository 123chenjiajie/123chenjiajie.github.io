

//倒计时
var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 6, 22, 11),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());

//header

//搜索条的滚动变色
window.onscroll = function(){
var header = document.querySelector(".index header");
var headerh1 = document.querySelector(".index header h1");
var headeri = document.querySelectorAll(".index header .header-right i");
    if(header !=null){
        if(document.body.scrollTop > 30){
    header.style.background="#fff"; 
    headerh1.style.color="#8146ec"        
    headeri[0].style.color="#4a4a4a";      
    headeri[1].style.color="#4a4a4a";      
    
    }else{
      header.style.background=""; 
        headerh1.style.color=""        
    headeri[0].style.color="";      
    headeri[1].style.color="";  
    }  
    }
       
    var listi =document.querySelector(".index .scroller");
    if(listi !=null){
     if (document.body.scrollTop > 360){
     listi.style.display = "block";
      listi.style.transition="1s"
    } else {
     listi.style.display = "";
        listi.style.transition=""
    }
        }
    
    
    
    var mheader = document.querySelector(".my header");
var mheaderh1 = document.querySelector(".my header h1");
var mheaderi = document.querySelectorAll(".my header .header-right i");
    if(mheader !=null){
        if(document.body.scrollTop > 30){
    mheader.style.background="#fff"; 
    mheaderh1.style.color="#8146ec"        
    mheaderi[0].style.color="#4a4a4a";      
    mheaderi[1].style.color="#4a4a4a";      
    
    }else{
      mheader.style.background=""; 
        mheaderh1.style.color=""        
    mheaderi[0].style.color="";      
    mheaderi[1].style.color="";  
    }  
    }
}



//banner轮播图
 var swiper = new Swiper('.swiper-container', {
//      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


//banner背景随轮播图发生改变
var bannerbg = document.querySelector(".banner-bg");
if(bannerbg !== null){
setInterval(function(){
    if(swiper.activeIndex=="0"){
        bannerbg.style.background="#fc9f3f"//1
    }else if(swiper.activeIndex=="1"){
        bannerbg.style.background="#4168de"//1
    }else if(swiper.activeIndex=="2"){
        bannerbg.style.background="#32c2ed"//2
    }else if(swiper.activeIndex=="3"){
        bannerbg.style.background="#f3ca52"//3
    }else if(swiper.activeIndex=="4"){
        bannerbg.style.background="#fa6c8f"//4
    }else if(swiper.activeIndex=="5"){
        bannerbg.style.background="#56a7bc"//5
    }else if(swiper.activeIndex=="6"){
        bannerbg.style.background="#fc9f3f"//6
    }else if(swiper.activeIndex=="7"){
        bannerbg.style.background="#4168de"//1
    }
},500)
}
        





//分类页数

//选项卡
var classifynav = document.querySelectorAll(".classify .main .nav .s");
var classifylist = document.querySelectorAll(".classify .main .text");
for(var i=0;i<classifynav.length;i++){
    //获取焦点
    classifynav[i].index=i;
    classifynav[i].onclick = function(){
        for(var i=0;i<classifynav.length;i++){
            //删除class
            classifynav[i].classList.remove("active");
            classifylist[i].classList.remove("active");
        }
        //添加class
        classifynav[this.index].classList.add("active");
        classifylist[this.index].classList.add("active");
    }
}

//select



var tanchu = document.querySelector(".index .tanchu")
var fangwen = document.querySelector(".index .tanchu .fangwen");
    
    if(tanchu !=null){
     setTimeout(function(){
    tanchu.style.display="block"
},500)


fangwen.onclick=function(){
 tanchu.style.display="none";
}
            
    }
    









