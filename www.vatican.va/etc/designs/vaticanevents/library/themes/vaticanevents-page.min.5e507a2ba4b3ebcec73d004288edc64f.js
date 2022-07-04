jQuery(document).ready(function(){CarouselSinodo.main()
});
CarouselSinodo={options:{selector:"#carousel-swiper-container"},main:function(b){console.log("carouselSinodo.main");
var d=this;
if(typeof b!="undefined"){this.options=jQuery.extend(this.options,b)
}var f=$(d.options.selector).find(".swiper-wrapper").children().length;
var a=f==1?false:true;
var e=f==1?null:6000;
var c=new Swiper(this.options.selector,{mode:"horizontal",autoplay:e,loop:a,speed:400,})
}};