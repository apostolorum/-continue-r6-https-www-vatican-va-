function mainmenu(){jQuery(".siv-hrmenu ul li").hover(function(){jQuery(this).find("ul:first").css({visibility:"visible",display:"none"}).show(400)
},function(){jQuery(this).find("ul:first").css({visibility:"hidden"})
})
}jQuery(document).ready(function(){mainmenu()
});
function shareOnFacebook(){window.open("https://www.facebook.com/sharer.php?u="+encodeURIComponent(document.location.href),"Facebook","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
}function shareOnTwitter(){window.open("https://twitter.com/home?status="+encodeURIComponent(document.location.href),"Twittter","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
}function shareOnGplus(){window.open("https://plus.google.com/share?url="+encodeURIComponent(document.location.href),"Google+","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
}function shareOnMail(){document.location.href="mailto:?subject="+encodeURIComponent(document.title)+"&body=%0A"+encodeURIComponent(document.location.href)
}function initSideMenu(){jQuery("ul.siv-vrmenu li").hover(function(){var a=jQuery(this);
a.children().stop(true,true).fadeIn(500)
},function(){var a=jQuery(this);
a.find("ul").stop(true,true).fadeOut(1200)
})
}jQuery(document).ready(function(){initSideMenu()
});
jQuery(function(){var a=jQuery(".ad-gallery2").adGallery2();
jQuery("#switch-effect").change(function(){a[0].settings.effect=jQuery(this).val();
return false
});
jQuery("#toggle-slideshow").click(function(){a[0].slideshow.toggle();
return false
});
jQuery("#toggle-description").click(function(){if(!a[0].settings.description_wrapper){a[0].settings.description_wrapper=jQuery("#descriptions")
}else{a[0].settings.description_wrapper=false
}return false
})
});
(function(g){g.fn.adGallery2=function(i){var l={loader_image:"/etc/designs/generics2/library/images/photogallery/loader.gif",start_at_index:0,description_wrapper:false,thumb_opacity:1,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:true,callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};
var j=g.extend(false,l,i);
if(i&&i.slideshow){j.slideshow=g.extend(false,l.slideshow,i.slideshow)
}if(!j.slideshow.enable){j.slideshow.autostart=false
}var k=[];
g(this).each(function(){var m=new a(this,j);
k[k.length]=m
});
return k
};
function e(j,k,l){var m=parseInt(j.css("top"),10);
if(k=="left"){var i="-"+this.image_wrapper_height+"px";
j.css("top",this.image_wrapper_height+"px")
}else{var i=this.image_wrapper_height+"px";
j.css("top","-"+this.image_wrapper_height+"px")
}if(l){l.css("bottom","-"+l[0].offsetHeight+"px");
l.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{top:i},new_image:{top:m}}
}function d(j,k,m){var l=parseInt(j.css("left"),10);
if(k=="left"){var i="-"+this.image_wrapper_width+"px";
j.css("left",this.image_wrapper_width+"px")
}else{var i=this.image_wrapper_width+"px";
j.css("left","-"+this.image_wrapper_width+"px")
}if(m){m.css("bottom","-"+m[0].offsetHeight+"px");
m.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{left:i},new_image:{left:l}}
}function c(k,l,n){var j=k.width();
var i=k.height();
var m=parseInt(k.css("left"),10);
var o=parseInt(k.css("top"),10);
k.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});
return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:j,height:i,top:o,left:m}}
}function b(i,j,k){i.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1}}
}function h(i,j,k){i.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1},speed:0}
}function a(j,i){this.init(j,i)
}a.prototype={wrapper:false,image_wrapper:false,gallery2_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(m,l){var k=this;
this.wrapper=g(m);
this.settings=l;
this.setupElements();
this.setupAnimations();
if(this.settings.width){this.image_wrapper_width=this.settings.width;
this.image_wrapper.width(this.settings.width);
this.wrapper.width(this.settings.width)
}else{this.image_wrapper_width=this.image_wrapper.width()
}if(this.settings.height){this.image_wrapper_height=this.settings.height;
this.image_wrapper.height(this.settings.height)
}else{this.image_wrapper_height=this.image_wrapper.height()
}this.nav_display_width=this.nav.width();
this.current_index=0;
this.current_image=false;
this.current_description=false;
this.in_transition=false;
this.findImages();
if(this.settings.display_next_and_prev){this.initNextAndPrev()
}var i=function(n){return k.nextImage(n)
};
this.slideshow=new f(i,this.settings.slideshow);
this.controls.append(this.slideshow.create());
if(this.settings.slideshow.enable){this.slideshow.enable()
}else{this.slideshow.disable()
}if(this.settings.display_back_and_forward){this.initBackAndForward()
}if(this.settings.enable_keyboard_move){this.initKeyEvents()
}var j=parseInt(this.settings.start_at_index,10);
if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){j=window.location.hash.replace(/[^0-9]+/g,"");
if((j*1)!=j){j=this.settings.start_at_index
}}this.loading(true);
this.showImage(j,function(){if(k.settings.slideshow.autostart){k.preloadImage(j+1);
k.slideshow.start()
}});
this.fireCallback(this.settings.callbacks.init)
},setupAnimations:function(){this.animations={"slide-vert":e,"slide-hori":d,resize:c,fade:b,none:h}
},setupElements:function(){this.controls=this.wrapper.find(".ad-controls");
this.gallery2_info=g('<p class="ad-info"></p>');
this.controls.append(this.gallery2_info);
this.image_wrapper=this.wrapper.find(".ad-image-wrapper");
this.image_wrapper.empty();
this.nav=this.wrapper.find(".ad-nav");
this.thumbs_wrapper=this.nav.find(".ad-thumbs");
this.preloads=g('<div class="ad-preloads"></div>');
this.loader=g('<img class="ad-loader" src="'+this.settings.loader_image+'">');
this.image_wrapper.append(this.loader);
this.loader.hide();
g(document.body).append(this.preloads)
},loading:function(i){if(i){this.loader.show()
}else{this.loader.hide()
}},addAnimation:function(i,j){if(g.isFunction(j)){this.animations[i]=j
}},findImages:function(){var n=this;
this.images=[];
var m=0;
var l=0;
var k=this.thumbs_wrapper.find("a");
var j=k.length;
if(this.settings.thumb_opacity<1){k.find("img").css("opacity",this.settings.thumb_opacity)
}k.each(function(p){var r=g(this);
var q=r.attr("href");
var o=r.find("img");
if(!n.isImageLoaded(o[0])){o.load(function(){m+=this.parentNode.parentNode.offsetWidth;
l++
})
}else{m+=o[0].parentNode.parentNode.offsetWidth;
l++
}r.addClass("ad-thumb"+p);
var r=false;
if(o.data("ad-link")){r=o.data("ad-link")
}else{if(o.attr("longdesc")&&o.attr("longdesc").length){r=o.attr("longdesc")
}}var t=false;
if(o.data("ad-desc")){t=o.data("ad-desc")
}else{if(o.attr("alt")&&o.attr("alt").length){t=o.attr("alt")
}}var s=false;
if(o.data("ad-title")){s=o.data("ad-title")
}else{if(o.attr("title")&&o.attr("title").length){s=o.attr("title")
}}n.images[p]={thumb:o.attr("src"),image:q,error:false,preloaded:false,desc:t,title:s,size:false,link:r}
});
var i=setInterval(function(){if(j==l){m-=100;
var q=n.nav.find(".ad-thumb-list");
q.css("width",m+"px");
var p=1;
var o=q.height();
while(p<201){q.css("width",(m+p)+"px");
if(o!=q.height()){break
}o=q.height();
p++
}clearInterval(i)
}},100)
},initKeyEvents:function(){var i=this;
g(document).keydown(function(j){if(j.keyCode==39){i.nextImage();
i.slideshow.stop()
}else{if(j.keyCode==37){i.prevImage();
i.slideshow.stop()
}}})
},initNextAndPrev:function(){this.next_link=g('<div class="ad-next"><div class="ad-next-image"></div></div>');
this.prev_link=g('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
this.image_wrapper.append(this.next_link);
this.image_wrapper.append(this.prev_link);
var i=this;
this.prev_link.add(this.next_link).mouseover(function(j){g(this).css("height",i.image_wrapper_height);
g(this).find("div").show()
}).mouseout(function(j){g(this).find("div").hide()
}).click(function(){if(g(this).is(".ad-next")){i.nextImage();
i.slideshow.stop()
}else{i.prevImage();
i.slideshow.stop()
}}).find("div").css("opacity",0.7)
},initBackAndForward:function(){var k=this;
this.scroll_forward=g('<div class="ad-forward"></div>');
this.scroll_back=g('<div class="ad-back"></div>');
this.nav.append(this.scroll_forward);
this.nav.prepend(this.scroll_back);
var j=0;
var i=false;
g(this.scroll_back).add(this.scroll_forward).click(function(){var l=k.nav_display_width-50;
if(k.settings.scroll_jump>0){var l=k.settings.scroll_jump
}if(g(this).is(".ad-forward")){var m=k.thumbs_wrapper.scrollLeft()+l
}else{var m=k.thumbs_wrapper.scrollLeft()-l
}if(k.settings.slideshow.stop_on_scroll){k.slideshow.stop()
}k.thumbs_wrapper.animate({scrollLeft:m+"px"});
return false
}).css("opacity",0.6).hover(function(){var l="left";
if(g(this).is(".ad-forward")){l="right"
}i=setInterval(function(){j++;
if(j>30&&k.settings.slideshow.stop_on_scroll){k.slideshow.stop()
}var m=k.thumbs_wrapper.scrollLeft()+1;
if(l=="left"){m=k.thumbs_wrapper.scrollLeft()-1
}k.thumbs_wrapper.scrollLeft(m)
},10);
g(this).css("opacity",1)
},function(){j=0;
clearInterval(i);
g(this).css("opacity",0.6)
})
},_afterShow:function(){this.gallery2_info.html((this.current_index+1)+" / "+this.images.length);
if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);
this.next_link.show().css("height",this.image_wrapper_height);
if(this.current_index==(this.images.length-1)){this.next_link.hide()
}if(this.current_index==0){this.prev_link.hide()
}}this.fireCallback(this.settings.callbacks.afterImageVisible)
},_getContainedImageSize:function(j,i){if(i>this.image_wrapper_height){var k=j/i;
i=this.image_wrapper_height;
j=this.image_wrapper_height*k
}if(j>this.image_wrapper_width){var k=i/j;
j=this.image_wrapper_width;
i=this.image_wrapper_width*k
}return{width:j,height:i}
},_centerImage:function(l,j,i){l.css("top","0px");
if(i<this.image_wrapper_height){var k=this.image_wrapper_height-i;
l.css("top",(k/2)+"px")
}l.css("left","0px");
if(j<this.image_wrapper_width){var k=this.image_wrapper_width-j;
l.css("left",(k/2)+"px")
}},_getDescription:function(i){var k=false;
if(i.desc.length||i.title.length){var j="";
if(i.title.length){j='<strong class="ad-description-title">'+i.title+"</strong>"
}var k="";
if(i.desc.length){k="<span>"+i.desc+"</span>"
}k=g('<p class="ad-image-description">'+j+k+"</p>")
}return k
},showImage:function(i,l){if(this.images[i]&&!this.in_transition){var j=this;
var k=this.images[i];
this.in_transition=true;
if(!k.preloaded){this.loading(true);
this.preloadImage(i,function(){j.loading(false);
j._showWhenLoaded(i,l)
})
}else{this._showWhenLoaded(i,l)
}}},_showWhenLoaded:function(q,w){if(this.images[q]){var j=this;
var l=this.images[q];
var m=g(document.createElement("div")).addClass("ad-image");
var o=g(new Image()).attr("src",l.image);
if(l.link){var t=g('<a href="'+l.link+'" target="_blank"></a>');
t.append(o);
m.append(t)
}else{m.append(o)
}this.image_wrapper.prepend(m);
var x=this._getContainedImageSize(l.size.width,l.size.height);
o.attr("width",x.width);
o.attr("height",x.height);
m.css({width:x.width+"px",height:x.height+"px"});
this._centerImage(m,x.width,x.height);
var p=this._getDescription(l,m);
if(p){if(!this.settings.description_wrapper){m.append(p);
var i=x.width-parseInt(p.css("padding-left"),10)-parseInt(p.css("padding-right"),10);
p.css("width",i+"px")
}else{this.settings.description_wrapper.append(p)
}}this.highLightThumb(this.nav.find(".ad-thumb"+q));
var u="right";
if(this.current_index<q){u="left"
}this.fireCallback(this.settings.callbacks.beforeImageVisible);
if(this.current_image||this.settings.animate_first_image){var v=this.settings.animation_speed;
var s="swing";
var n=this.animations[this.settings.effect].call(this,m,u,p);
if(typeof n.speed!="undefined"){v=n.speed
}if(typeof n.easing!="undefined"){s=n.easing
}if(this.current_image){var k=this.current_image;
var r=this.current_description;
k.animate(n.old_image,v,s,function(){k.remove();
if(r){r.remove()
}})
}m.animate(n.new_image,v,s,function(){j.current_index=q;
j.current_image=m;
j.current_description=p;
j.in_transition=false;
j._afterShow();
j.fireCallback(w)
})
}else{this.current_index=q;
this.current_image=m;
j.current_description=p;
this.in_transition=false;
j._afterShow();
this.fireCallback(w)
}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false
}var i=0
}else{var i=this.current_index+1
}return i
},nextImage:function(j){var i=this.nextIndex();
if(i===false){return false
}this.preloadImage(i+1);
this.showImage(i,j);
return true
},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false
}var i=this.images.length-1
}else{var i=this.current_index-1
}return i
},prevImage:function(j){var i=this.prevIndex();
if(i===false){return false
}this.preloadImage(i-1);
this.showImage(i,j);
return true
},preloadAll:function(){var k=this;
var j=0;
function l(){if(j<k.images.length){j++;
k.preloadImage(j,l)
}}k.preloadImage(j,l)
},preloadImage:function(j,m){if(this.images[j]){var l=this.images[j];
if(!this.images[j].preloaded){var i=g(new Image());
i.attr("src",l.image);
if(!this.isImageLoaded(i[0])){this.preloads.append(i);
var k=this;
i.load(function(){l.preloaded=true;
l.size={width:this.width,height:this.height};
k.fireCallback(m)
}).error(function(){l.error=true;
l.preloaded=false;
l.size=false
})
}else{l.preloaded=true;
l.size={width:i[0].width,height:i[0].height};
this.fireCallback(m)
}}else{this.fireCallback(m)
}}},isImageLoaded:function(i){if(typeof i.complete!="undefined"&&!i.complete){return false
}if(typeof i.naturalWidth!="undefined"&&i.naturalWidth==0){return false
}return true
},highLightThumb:function(i){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");
i.addClass("ad-active");
if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);
i.find("img").fadeTo(300,1)
}var j=i[0].parentNode.offsetLeft;
j-=(this.nav_display_width/2)-(i[0].offsetWidth/2);
this.thumbs_wrapper.animate({scrollLeft:j+"px"})
},fireCallback:function(i){if(g.isFunction(i)){i.call(this)
}}};
function f(i,j){this.init(i,j)
}f.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(i,k){var j=this;
this.nextimage_callback=i;
this.settings=k
},create:function(){this.start_link=g('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");
this.stop_link=g('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");
this.countdown=g('<span class="ad-slideshow-countdown"></span>');
this.controls=g('<div class="ad-slideshow-controls"></div>');
this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
this.countdown.hide();
var i=this;
this.start_link.click(function(){i.start()
});
this.stop_link.click(function(){i.stop()
});
g(document).keydown(function(j){if(j.keyCode==83){if(i.running){i.stop()
}else{i.start()
}}});
return this.controls
},disable:function(){this.enabled=false;
this.stop();
this.controls.hide()
},enable:function(){this.enabled=true;
this.controls.show()
},toggle:function(){if(this.enabled){this.disable()
}else{this.enable()
}},start:function(){if(this.running||!this.enabled){return false
}var i=this;
this.running=true;
this.controls.addClass("ad-slideshow-running");
this._next();
this.fireCallback(this.settings.onStart);
return true
},stop:function(){if(!this.running){return false
}this.running=false;
this.countdown.hide();
this.controls.removeClass("ad-slideshow-running");
clearInterval(this.countdown_interval);
this.fireCallback(this.settings.onStop);
return true
},_next:function(){var k=this;
var l=this.settings.countdown_prefix;
var j=this.settings.countdown_sufix;
clearInterval(k.countdown_interval);
this.countdown.show().html(l+(this.settings.speed/1000)+j);
var i=0;
this.countdown_interval=setInterval(function(){i+=1000;
if(i>=k.settings.speed){var n=function(){if(k.running){k._next()
}i=0
};
if(!k.nextimage_callback(n)){k.stop()
}i=0
}var m=parseInt(k.countdown.text().replace(/[^0-9]/g,""),10);
m--;
if(m>0){k.countdown.html(l+m+j)
}},1000)
},fireCallback:function(i){if(g.isFunction(i)){i.call(this)
}}}
})(jQuery);
if(!hs){var hs={lang:{cssDirection:"ltr",loadingText:"Loading...",loadingTitle:"Click to cancel",focusTitle:"Click to bring to front",fullExpandTitle:"Expand to actual size (f)",creditsText:"Powered by <i>Highslide JS</i>",creditsTitle:"Go to the Highslide JS homepage",previousText:"Previous",nextText:"Next",moveText:"Move",closeText:"Close",closeTitle:"Close (esc)",resizeTitle:"Resize",playText:"Play",playTitle:"Play slideshow (spacebar)",pauseText:"Pause",pauseTitle:"Pause slideshow (spacebar)",previousTitle:"Previous (arrow left)",nextTitle:"Next (arrow right)",moveTitle:"Move",fullExpandText:"1:1",number:"Image %1 of %2",restoreTitle:"Click to close image, click and drag to move. Use arrow keys for next and previous."},graphicsDir:"highslide/graphics/",expandDuration:250,restoreDuration:250,marginLeft:15,marginRight:15,marginTop:15,marginBottom:15,zIndexCounter:1001,loadingOpacity:0.75,allowMultipleInstances:true,numberOfImagesToPreload:5,outlineWhileAnimating:2,outlineStartOffset:3,padToMinWidth:false,fullExpandPosition:"bottom right",fullExpandOpacity:1,showCredits:true,creditsHref:"http://highslide.com/",creditsTarget:"_self",enableKeyListener:true,openerTagNames:["a","area"],transitions:[],transitionDuration:250,dimmingOpacity:0,dimmingDuration:50,allowWidthReduction:false,allowHeightReduction:true,preserveContent:true,objectLoadTime:"before",cacheAjax:true,anchor:"auto",align:"auto",targetX:null,targetY:null,dragByHeading:true,minWidth:200,minHeight:200,allowSizeReduction:true,outlineType:"drop-shadow",skin:{controls:'<div class="highslide-controls"><ul><li class="highslide-previous"><a href="#" title="{hs.lang.previousTitle}"><span>{hs.lang.previousText}</span></a></li><li class="highslide-play"><a href="#" title="{hs.lang.playTitle}"><span>{hs.lang.playText}</span></a></li><li class="highslide-pause"><a href="#" title="{hs.lang.pauseTitle}"><span>{hs.lang.pauseText}</span></a></li><li class="highslide-next"><a href="#" title="{hs.lang.nextTitle}"><span>{hs.lang.nextText}</span></a></li><li class="highslide-move"><a href="#" title="{hs.lang.moveTitle}"><span>{hs.lang.moveText}</span></a></li><li class="highslide-full-expand"><a href="#" title="{hs.lang.fullExpandTitle}"><span>{hs.lang.fullExpandText}</span></a></li><li class="highslide-close"><a href="#" title="{hs.lang.closeTitle}" ><span>{hs.lang.closeText}</span></a></li></ul></div>',contentWrapper:'<div class="highslide-header"><ul><li class="highslide-previous"><a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)"><span>{hs.lang.previousText}</span></a></li><li class="highslide-next"><a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)"><span>{hs.lang.nextText}</span></a></li><li class="highslide-move"><a href="#" title="{hs.lang.moveTitle}" onclick="return false"><span>{hs.lang.moveText}</span></a></li><li class="highslide-close"><a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)"><span>{hs.lang.closeText}</span></a></li></ul></div><div class="highslide-body"></div><div class="highslide-footer"><div><span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span></div></div>'},preloadTheseImages:[],continuePreloading:true,expanders:[],overrides:["allowSizeReduction","useBox","anchor","align","targetX","targetY","outlineType","outlineWhileAnimating","captionId","captionText","captionEval","captionOverlay","headingId","headingText","headingEval","headingOverlay","creditsPosition","dragByHeading","autoplay","numberPosition","transitions","dimmingOpacity","width","height","contentId","allowWidthReduction","allowHeightReduction","preserveContent","maincontentId","maincontentText","maincontentEval","objectType","cacheAjax","objectWidth","objectHeight","objectLoadTime","swfOptions","wrapperClassName","minWidth","minHeight","maxWidth","maxHeight","pageOrigin","slideshowGroup","easing","easingClose","fadeInOut","src"],overlays:[],idCounter:0,oPos:{x:["leftpanel","left","center","right","rightpanel"],y:["above","top","middle","bottom","below"]},mouse:{},headingOverlay:{},captionOverlay:{},swfOptions:{flashvars:{},params:{},attributes:{}},timers:[],slideshows:[],pendingOutlines:{},sleeping:[],preloadTheseAjax:[],cacheBindings:[],cachedGets:{},clones:{},onReady:[],uaVersion:/Trident\/4\.0/.test(navigator.userAgent)?8:parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1]),ie:(document.all&&!window.opera),safari:/Safari/.test(navigator.userAgent),geckoMac:/Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),$:function(b){if(b){return document.getElementById(b)
}},push:function(d,c){d[d.length]=c
},createElement:function(h,i,j,k,l){var g=document.createElement(h);
if(i){hs.extend(g,i)
}if(l){hs.setStyles(g,{padding:0,border:"none",margin:0})
}if(j){hs.setStyles(g,j)
}if(k){k.appendChild(g)
}return g
},extend:function(d,f){for(var e in f){d[e]=f[e]
}return d
},setStyles:function(d,f){for(var e in f){if(hs.ieLt9&&e=="opacity"){if(f[e]>0.99){d.style.removeAttribute("filter")
}else{d.style.filter="alpha(opacity="+(f[e]*100)+")"
}}else{d.style[e]=f[e]
}}},animate:function(n,r,o){var p,m,e;
if(typeof o!="object"||o===null){var k=arguments;
o={duration:k[2],easing:k[3],complete:k[4]}
}if(typeof o.duration!="number"){o.duration=250
}o.easing=Math[o.easing]||Math.easeInQuad;
o.curAnim=hs.extend({},r);
for(var q in r){var l=new hs.fx(n,o,q);
p=parseFloat(hs.css(n,q))||0;
m=parseFloat(r[q]);
e=q!="opacity"?"px":"";
l.custom(p,m,e)
}},css:function(e,f){if(e.style[f]){return e.style[f]
}else{if(document.defaultView){return document.defaultView.getComputedStyle(e,null).getPropertyValue(f)
}else{if(f=="opacity"){f="filter"
}var d=e.currentStyle[f.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()
})];
if(f=="filter"){d=d.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100
})
}return d===""?1:d
}}},getPageSize:function(){var h=document,d=window,i=h.compatMode&&h.compatMode!="BackCompat"?h.documentElement:h.body;
var j=hs.ieLt9?i.clientWidth:(h.documentElement.clientWidth||self.innerWidth),g=hs.ieLt9?i.clientHeight:self.innerHeight;
hs.page={width:j,height:g,scrollLeft:hs.ieLt9?i.scrollLeft:pageXOffset,scrollTop:hs.ieLt9?i.scrollTop:pageYOffset};
return hs.page
},getPosition:function(j){if(/area/i.test(j.tagName)){var h=document.getElementsByTagName("img");
for(var f=0;
f<h.length;
f++){var g=h[f].useMap;
if(g&&g.replace(/^.*?#/,"")==j.parentNode.name){j=h[f];
break
}}}var i={x:j.offsetLeft,y:j.offsetTop};
while(j.offsetParent){j=j.offsetParent;
i.x+=j.offsetLeft;
i.y+=j.offsetTop;
if(j!=document.body&&j!=document.documentElement){i.x-=j.scrollLeft;
i.y-=j.scrollTop
}}return i
},expand:function(a,e,j,k){if(!a){a=hs.createElement("a",null,{display:"none"},hs.container)
}if(typeof a.getParams=="function"){return e
}if(k=="html"){for(var l=0;
l<hs.sleeping.length;
l++){if(hs.sleeping[l]&&hs.sleeping[l].a==a){hs.sleeping[l].awake();
hs.sleeping[l]=null;
return false
}}hs.hasHtmlExpanders=true
}try{new hs.Expander(a,e,j,k);
return false
}catch(i){return true
}},htmlExpand:function(a,e,f){return hs.expand(a,e,f,"html")
},getSelfRendered:function(){return hs.createElement("div",{className:"highslide-html-content",innerHTML:hs.replaceLang(hs.skin.contentWrapper)})
},getElementByClass:function(h,j,i){var f=h.getElementsByTagName(j);
for(var g=0;
g<f.length;
g++){if((new RegExp(i)).test(f[g].className)){return f[g]
}}return null
},replaceLang:function(j){j=j.replace(/\s/g," ");
var f=/{hs\.lang\.([^}]+)\}/g,i=j.match(f),h;
if(i){for(var g=0;
g<i.length;
g++){h=i[g].replace(f,"$1");
if(typeof hs.lang[h]!="undefined"){j=j.replace(i[g],hs.lang[h])
}}}return j
},setClickEvents:function(){var d=document.getElementsByTagName("a");
for(var e=0;
e<d.length;
e++){var f=hs.isUnobtrusiveAnchor(d[e]);
if(f&&!d[e].hsHasSetClick){(function(){var a=f;
if(hs.fireEvent(hs,"onSetClickEvent",{element:d[e],type:a})){d[e].onclick=(f=="image")?function(){return hs.expand(this)
}:function(){return hs.htmlExpand(this,{objectType:a})
}
}})();
d[e].hsHasSetClick=true
}}hs.getAnchors()
},isUnobtrusiveAnchor:function(b){if(b.rel=="highslide"){return"image"
}else{if(b.rel=="highslide-ajax"){return"ajax"
}else{if(b.rel=="highslide-iframe"){return"iframe"
}else{if(b.rel=="highslide-swf"){return"swf"
}}}}},getCacheBinding:function(a){for(var f=0;
f<hs.cacheBindings.length;
f++){if(hs.cacheBindings[f][0]==a){var c=hs.cacheBindings[f][1];
hs.cacheBindings[f][1]=c.cloneNode(1);
return c
}}return null
},preloadAjax:function(e){var a=hs.getAnchors();
for(var g=0;
g<a.htmls.length;
g++){var h=a.htmls[g];
if(hs.getParam(h,"objectType")=="ajax"&&hs.getParam(h,"cacheAjax")){hs.push(hs.preloadTheseAjax,h)
}}hs.preloadAjaxElement(0)
},preloadAjaxElement:function(g){if(!hs.preloadTheseAjax[g]){return
}var a=hs.preloadTheseAjax[g];
var h=hs.getNode(hs.getParam(a,"contentId"));
if(!h){h=hs.getSelfRendered()
}var f=new hs.Ajax(a,h,1);
f.onError=function(){};
f.onLoad=function(){hs.push(hs.cacheBindings,[a,h]);
hs.preloadAjaxElement(g+1)
};
f.run()
},focusTopmost:function(){var l=0,g=-1,h=hs.expanders,j,i;
for(var k=0;
k<h.length;
k++){j=h[k];
if(j){i=j.wrapper.style.zIndex;
if(i&&i>l){l=i;
g=k
}}}if(g==-1){hs.focusKey=-1
}else{h[g].focus()
}},getParam:function(a,e){a.getParams=a.onclick;
var f=a.getParams?a.getParams():null;
a.getParams=null;
return(f&&typeof f[e]!="undefined")?f[e]:(typeof hs[e]!="undefined"?hs[e]:null)
},getSrc:function(a){var d=hs.getParam(a,"src");
if(d){return d
}return a.href
},getNode:function(f){var h=hs.$(f),g=hs.clones[f],a={};
if(!h&&!g){return null
}if(!g){g=h.cloneNode(true);
g.id="";
hs.clones[f]=g;
return h
}else{return g.cloneNode(true)
}},discardElement:function(b){if(b){hs.garbageBin.appendChild(b)
}hs.garbageBin.innerHTML=""
},dim:function(c){if(!hs.dimmer){d=true;
hs.dimmer=hs.createElement("div",{className:"highslide-dimming highslide-viewport-size",owner:"",onclick:function(){if(hs.fireEvent(hs,"onDimmerClick")){hs.close()
}}},{visibility:"visible",opacity:0},hs.container,true)
}hs.dimmer.style.display="";
var d=hs.dimmer.owner=="";
hs.dimmer.owner+="|"+c.key;
if(d){if(hs.geckoMac&&hs.dimmingGeckoFix){hs.setStyles(hs.dimmer,{background:"url("+hs.graphicsDir+"geckodimmer.png)",opacity:1})
}else{hs.animate(hs.dimmer,{opacity:c.dimmingOpacity},hs.dimmingDuration)
}}},undim:function(b){if(!hs.dimmer){return
}if(typeof b!="undefined"){hs.dimmer.owner=hs.dimmer.owner.replace("|"+b,"")
}if((typeof b!="undefined"&&hs.dimmer.owner!="")||(hs.upcoming&&hs.getParam(hs.upcoming,"dimmingOpacity"))){return
}if(hs.geckoMac&&hs.dimmingGeckoFix){hs.dimmer.style.display="none"
}else{hs.animate(hs.dimmer,{opacity:0},hs.dimmingDuration,null,function(){hs.dimmer.style.display="none"
})
}},transit:function(f,g){var e=g||hs.getExpander();
g=e;
if(hs.upcoming){return false
}else{hs.last=e
}hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);
try{hs.upcoming=f;
f.onclick()
}catch(h){hs.last=hs.upcoming=null
}try{if(!f||g.transitions[1]!="crossfade"){g.close()
}}catch(h){}return false
},previousOrNext:function(e,f){var d=hs.getExpander(e);
if(d){return hs.transit(d.getAdjacentAnchor(f),d)
}else{return false
}},previous:function(b){return hs.previousOrNext(b,-1)
},next:function(b){return hs.previousOrNext(b,1)
},keyHandler:function(e){if(!e){e=window.event
}if(!e.target){e.target=e.srcElement
}if(typeof e.target.form!="undefined"){return true
}if(!hs.fireEvent(hs,"onKeyDown",e)){return true
}var d=hs.getExpander();
var f=null;
switch(e.keyCode){case 70:if(d){d.doFullExpand()
}return true;
case 32:f=2;
break;
case 34:case 39:case 40:f=1;
break;
case 8:case 33:case 37:case 38:f=-1;
break;
case 27:case 13:f=0
}if(f!==null){hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);
if(!hs.enableKeyListener){return true
}if(e.preventDefault){e.preventDefault()
}else{e.returnValue=false
}if(d){if(f==0){d.close()
}else{if(f==2){if(d.slideshow){d.slideshow.hitSpace()
}}else{if(d.slideshow){d.slideshow.pause()
}hs.previousOrNext(d.key,f)
}}return false
}}return true
},registerOverlay:function(b){hs.push(hs.overlays,hs.extend(b,{hsId:"hsId"+hs.idCounter++}))
},addSlideshow:function(f){var i=f.slideshowGroup;
if(typeof i=="object"){for(var j=0;
j<i.length;
j++){var h={};
for(var g in f){h[g]=f[g]
}h.slideshowGroup=i[j];
hs.push(hs.slideshows,h)
}}else{hs.push(hs.slideshows,f)
}},getWrapperKey:function(l,g){var j,k=/^highslide-wrapper-([0-9]+)$/;
j=l;
while(j.parentNode){if(j.hsKey!==undefined){return j.hsKey
}if(j.id&&k.test(j.id)){return j.id.replace(k,"$1")
}j=j.parentNode
}if(!g){j=l;
while(j.parentNode){if(j.tagName&&hs.isHsAnchor(j)){for(var h=0;
h<hs.expanders.length;
h++){var i=hs.expanders[h];
if(i&&i.a==j){return h
}}}j=j.parentNode
}}return null
},getExpander:function(c,d){if(typeof c=="undefined"){return hs.expanders[hs.focusKey]||null
}if(typeof c=="number"){return hs.expanders[c]||null
}if(typeof c=="string"){c=hs.$(c)
}return hs.expanders[hs.getWrapperKey(c,d)]||null
},isHsAnchor:function(a){return(a.onclick&&a.onclick.toString().replace(/\s/g," ").match(/hs.(htmlE|e)xpand/))
},reOrder:function(){for(var b=0;
b<hs.expanders.length;
b++){if(hs.expanders[b]&&hs.expanders[b].isExpanded){hs.focusTopmost()
}}},fireEvent:function(f,e,d){return f&&f[e]?(f[e](f,d)!==false):true
},mouseClickHandler:function(i){if(!i){i=window.event
}if(i.button>1){return true
}if(!i.target){i.target=i.srcElement
}var e=i.target;
while(e.parentNode&&!(/highslide-(image|move|html|resize)/.test(e.className))){e=e.parentNode
}var h=hs.getExpander(e);
if(h&&(h.isClosing||!h.isExpanded)){return true
}if(h&&i.type=="mousedown"){if(i.target.form){return true
}var g=e.className.match(/highslide-(image|move|resize)/);
if(g){hs.dragArgs={exp:h,type:g[1],left:h.x.pos,width:h.x.size,top:h.y.pos,height:h.y.size,clickX:i.clientX,clickY:i.clientY};
hs.addEventListener(document,"mousemove",hs.dragHandler);
if(i.preventDefault){i.preventDefault()
}if(/highslide-(image|html)-blur/.test(h.content.className)){h.focus();
hs.hasFocused=true
}return false
}else{if(/highslide-html/.test(e.className)&&hs.focusKey!=h.key){h.focus();
h.doShowHide("hidden")
}}}else{if(i.type=="mouseup"){hs.removeEventListener(document,"mousemove",hs.dragHandler);
if(hs.dragArgs){if(hs.styleRestoreCursor&&hs.dragArgs.type=="image"){hs.dragArgs.exp.content.style.cursor=hs.styleRestoreCursor
}var j=hs.dragArgs.hasDragged;
if(!j&&!hs.hasFocused&&!/(move|resize)/.test(hs.dragArgs.type)){if(hs.fireEvent(h,"onImageClick")){h.close()
}}else{if(j||(!j&&hs.hasHtmlExpanders)){hs.dragArgs.exp.doShowHide("hidden")
}}if(hs.dragArgs.exp.releaseMask){hs.dragArgs.exp.releaseMask.style.display="none"
}if(j){hs.fireEvent(hs.dragArgs.exp,"onDrop",hs.dragArgs)
}hs.hasFocused=false;
hs.dragArgs=null
}else{if(/highslide-image-blur/.test(e.className)){e.style.cursor=hs.styleRestoreCursor
}}}}return false
},dragHandler:function(h){if(!hs.dragArgs){return true
}if(!h){h=window.event
}var a=hs.dragArgs,g=a.exp;
if(g.iframe){if(!g.releaseMask){g.releaseMask=hs.createElement("div",null,{position:"absolute",width:g.x.size+"px",height:g.y.size+"px",left:g.x.cb+"px",top:g.y.cb+"px",zIndex:4,background:(hs.ieLt9?"white":"none"),opacity:0.01},g.wrapper,true)
}if(g.releaseMask.style.display=="none"){g.releaseMask.style.display=""
}}a.dX=h.clientX-a.clickX;
a.dY=h.clientY-a.clickY;
var e=Math.sqrt(Math.pow(a.dX,2)+Math.pow(a.dY,2));
if(!a.hasDragged){a.hasDragged=(a.type!="image"&&e>0)||(e>(hs.dragSensitivity||5))
}if(a.hasDragged&&h.clientX>5&&h.clientY>5){if(!hs.fireEvent(g,"onDrag",a)){return false
}if(a.type=="resize"){g.resize(a)
}else{g.moveTo(a.left+a.dX,a.top+a.dY);
if(a.type=="image"){g.content.style.cursor="move"
}}}return false
},wrapperMouseHandler:function(h){try{if(!h){h=window.event
}var e=/mouseover/i.test(h.type);
if(!h.target){h.target=h.srcElement
}if(!h.relatedTarget){h.relatedTarget=e?h.fromElement:h.toElement
}var g=hs.getExpander(h.target);
if(!g.isExpanded){return
}if(!g||!h.relatedTarget||hs.getExpander(h.relatedTarget,true)==g||hs.dragArgs){return
}hs.fireEvent(g,e?"onMouseOver":"onMouseOut",h);
for(var f=0;
f<g.overlays.length;
f++){(function(){var a=hs.$("hsId"+g.overlays[f]);
if(a&&a.hideOnMouseOut){if(e){hs.setStyles(a,{visibility:"visible",display:""})
}hs.animate(a,{opacity:e?a.opacity:0},a.dur)
}})()
}}catch(h){}},addEventListener:function(f,h,e){if(f==document&&h=="ready"){hs.push(hs.onReady,e)
}try{f.addEventListener(h,e,false)
}catch(g){try{f.detachEvent("on"+h,e);
f.attachEvent("on"+h,e)
}catch(g){f["on"+h]=e
}}},removeEventListener:function(f,h,e){try{f.removeEventListener(h,e,false)
}catch(g){try{f.detachEvent("on"+h,e)
}catch(g){f["on"+h]=null
}}},preloadFullImage:function(c){if(hs.continuePreloading&&hs.preloadTheseImages[c]&&hs.preloadTheseImages[c]!="undefined"){var d=document.createElement("img");
d.onload=function(){d=null;
hs.preloadFullImage(c+1)
};
d.src=hs.preloadTheseImages[c]
}},preloadImages:function(h){if(h&&typeof h!="object"){hs.numberOfImagesToPreload=h
}var f=hs.getAnchors();
for(var e=0;
e<f.images.length&&e<hs.numberOfImagesToPreload;
e++){hs.push(hs.preloadTheseImages,hs.getSrc(f.images[e]))
}if(hs.outlineType){new hs.Outline(hs.outlineType,function(){hs.preloadFullImage(0)
})
}else{hs.preloadFullImage(0)
}if(hs.restoreCursor){var g=hs.createElement("img",{src:hs.graphicsDir+hs.restoreCursor})
}},init:function(){if(!hs.container){hs.ieLt7=hs.ie&&hs.uaVersion<7;
hs.ieLt9=hs.ie&&hs.uaVersion<9;
hs.getPageSize();
hs.ie6SSL=hs.ieLt7&&location.protocol=="https:";
for(var b in hs.langDefaults){if(typeof hs[b]!="undefined"){hs.lang[b]=hs[b]
}else{if(typeof hs.lang[b]=="undefined"&&typeof hs.langDefaults[b]!="undefined"){hs.lang[b]=hs.langDefaults[b]
}}}hs.container=hs.createElement("div",{className:"highslide-container"},{position:"absolute",left:0,top:0,width:"100%",zIndex:hs.zIndexCounter,direction:"ltr"},document.body,true);
hs.loading=hs.createElement("a",{className:"highslide-loading",title:hs.lang.loadingTitle,innerHTML:hs.lang.loadingText,href:"javascript:;"},{position:"absolute",top:"-9999px",opacity:hs.loadingOpacity,zIndex:1},hs.container);
hs.garbageBin=hs.createElement("div",null,{display:"none"},hs.container);
hs.viewport=hs.createElement("div",{className:"highslide-viewport highslide-viewport-size"},{visibility:(hs.safari&&hs.uaVersion<525)?"visible":"hidden"},hs.container,1);
hs.clearing=hs.createElement("div",null,{clear:"both",paddingTop:"1px"},null,true);
Math.linearTween=function(d,i,a,c){return a*d/c+i
};
Math.easeInQuad=function(d,i,a,c){return a*(d/=c)*d+i
};
Math.easeOutQuad=function(d,i,a,c){return -a*(d/=c)*(d-2)+i
};
hs.hideSelects=hs.ieLt7;
hs.hideIframes=((window.opera&&hs.uaVersion<9)||navigator.vendor=="KDE"||(hs.ieLt7&&hs.uaVersion<5.5));
hs.fireEvent(this,"onActivate")
}},ready:function(){if(hs.isReady){return
}hs.isReady=true;
for(var b=0;
b<hs.onReady.length;
b++){hs.onReady[b]()
}},updateAnchors:function(){var t,q,i=[],n=[],j=[],s={},g;
for(var p=0;
p<hs.openerTagNames.length;
p++){q=document.getElementsByTagName(hs.openerTagNames[p]);
for(var r=0;
r<q.length;
r++){t=q[r];
g=hs.isHsAnchor(t);
if(g){hs.push(i,t);
if(g[0]=="hs.expand"){hs.push(n,t)
}else{if(g[0]=="hs.htmlExpand"){hs.push(j,t)
}}var o=hs.getParam(t,"slideshowGroup")||"none";
if(!s[o]){s[o]=[]
}hs.push(s[o],t)
}}}hs.anchors={all:i,groups:s,images:n,htmls:j};
return hs.anchors
},getAnchors:function(){return hs.anchors||hs.updateAnchors()
},close:function(d){var c=hs.getExpander(d);
if(c){c.close()
}return false
}};
hs.fx=function(d,e,f){this.options=e;
this.elem=d;
this.prop=f;
if(!e.orig){e.orig={}
}};
hs.fx.prototype={update:function(){(hs.fx.step[this.prop]||hs.fx.step._default)(this);
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}},custom:function(h,i,j){this.startTime=(new Date()).getTime();
this.start=h;
this.end=i;
this.unit=j;
this.now=this.start;
this.pos=this.state=0;
var g=this;
function f(a){return g.step(a)
}f.elem=this.elem;
if(f()&&hs.timers.push(f)==1){hs.timerId=setInterval(function(){var a=hs.timers;
for(var b=0;
b<a.length;
b++){if(!a[b]()){a.splice(b--,1)
}}if(!a.length){clearInterval(hs.timerId)
}},13)
}},step:function(i){var j=(new Date()).getTime();
if(i||j>=this.options.duration+this.startTime){this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var g=true;
for(var f in this.options.curAnim){if(this.options.curAnim[f]!==true){g=false
}}if(g){if(this.options.complete){this.options.complete.call(this.elem)
}}return false
}else{var h=j-this.startTime;
this.state=h/this.options.duration;
this.pos=this.options.easing(h,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update()
}return true
}};
hs.extend(hs.fx,{step:{opacity:function(b){hs.setStyles(b.elem,{opacity:b.now})
},_default:function(d){try{if(d.elem.style&&d.elem.style[d.prop]!=null){d.elem.style[d.prop]=d.now+d.unit
}else{d.elem[d.prop]=d.now
}}catch(c){}}}});
hs.Outline=function(j,l){this.onLoad=l;
this.outlineType=j;
var i=hs.uaVersion,k;
this.hasAlphaImageLoader=hs.ie&&hs.uaVersion<7;
if(!j){if(l){l()
}return
}hs.init();
this.table=hs.createElement("table",{cellSpacing:0},{visibility:"hidden",position:"absolute",borderCollapse:"collapse",width:0},hs.container,true);
var h=hs.createElement("tbody",null,null,this.table,1);
this.td=[];
for(var n=0;
n<=8;
n++){if(n%3==0){k=hs.createElement("tr",null,{height:"auto"},h,true)
}this.td[n]=hs.createElement("td",null,null,k,true);
var m=n!=4?{lineHeight:0,fontSize:0}:{position:"relative"};
hs.setStyles(this.td[n],m)
}this.td[4].className=j+" highslide-outline";
this.preloadGraphic()
};
hs.Outline.prototype={preloadGraphic:function(){var d=hs.graphicsDir+(hs.outlinesDir||"outlines/")+this.outlineType+".png";
var e=hs.safari&&hs.uaVersion<525?hs.container:null;
this.graphic=hs.createElement("img",null,{position:"absolute",top:"-9999px"},e,true);
var f=this;
this.graphic.onload=function(){f.onGraphicLoad()
};
this.graphic.src=d
},onGraphicLoad:function(){var k=this.offset=this.graphic.width/4,i=[[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],l={height:(2*k)+"px",width:(2*k)+"px"};
for(var g=0;
g<=8;
g++){if(i[g]){if(this.hasAlphaImageLoader){var h=(g==1||g==7)?"100%":this.graphic.width+"px";
var j=hs.createElement("div",null,{width:"100%",height:"100%",position:"relative",overflow:"hidden"},this.td[g],true);
hs.createElement("div",null,{filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+this.graphic.src+"')",position:"absolute",width:h,height:this.graphic.height+"px",left:(i[g][0]*k)+"px",top:(i[g][1]*k)+"px"},j,true)
}else{hs.setStyles(this.td[g],{background:"url("+this.graphic.src+") "+(i[g][0]*k)+"px "+(i[g][1]*k)+"px"})
}if(window.opera&&(g==3||g==5)){hs.createElement("div",null,l,this.td[g],true)
}hs.setStyles(this.td[g],l)
}}this.graphic=null;
if(hs.pendingOutlines[this.outlineType]){hs.pendingOutlines[this.outlineType].destroy()
}hs.pendingOutlines[this.outlineType]=this;
if(this.onLoad){this.onLoad()
}},setPosition:function(j,l,n,h,k){var m=this.exp,i=m.wrapper.style,l=l||0,j=j||{x:m.x.pos+l,y:m.y.pos+l,w:m.x.get("wsize")-2*l,h:m.y.get("wsize")-2*l};
if(n){this.table.style.visibility=(j.h>=4*this.offset)?"visible":"hidden"
}hs.setStyles(this.table,{left:(j.x-this.offset)+"px",top:(j.y-this.offset)+"px",width:(j.w+2*this.offset)+"px"});
j.w-=2*this.offset;
j.h-=2*this.offset;
hs.setStyles(this.td[4],{width:j.w>=0?j.w+"px":0,height:j.h>=0?j.h+"px":0});
if(this.hasAlphaImageLoader){this.td[3].style.height=this.td[5].style.height=this.td[4].style.height
}},destroy:function(b){if(b){this.table.style.visibility="hidden"
}else{hs.discardElement(this.table)
}}};
hs.Dimension=function(c,d){this.exp=c;
this.dim=d;
this.ucwh=d=="x"?"Width":"Height";
this.wh=this.ucwh.toLowerCase();
this.uclt=d=="x"?"Left":"Top";
this.lt=this.uclt.toLowerCase();
this.ucrb=d=="x"?"Right":"Bottom";
this.rb=this.ucrb.toLowerCase();
this.p1=this.p2=0
};
hs.Dimension.prototype={get:function(b){switch(b){case"loadingPos":return this.tpos+this.tb+(this.t-hs.loading["offset"+this.ucwh])/2;
case"loadingPosXfade":return this.pos+this.cb+this.p1+(this.size-hs.loading["offset"+this.ucwh])/2;
case"wsize":return this.size+2*this.cb+this.p1+this.p2;
case"fitsize":return this.clientSize-this.marginMin-this.marginMax;
case"maxsize":return this.get("fitsize")-2*this.cb-this.p1-this.p2;
case"opos":return this.pos-(this.exp.outline?this.exp.outline.offset:0);
case"osize":return this.get("wsize")+(this.exp.outline?2*this.exp.outline.offset:0);
case"imgPad":return this.imgSize?Math.round((this.size-this.imgSize)/2):0
}},calcBorders:function(){this.cb=(this.exp.content["offset"+this.ucwh]-this.t)/2;
this.marginMax=hs["margin"+this.ucrb]
},calcThumb:function(){this.t=this.exp.el[this.wh]?parseInt(this.exp.el[this.wh]):this.exp.el["offset"+this.ucwh];
this.tpos=this.exp.tpos[this.dim];
this.tb=(this.exp.el["offset"+this.ucwh]-this.t)/2;
if(this.tpos==0||this.tpos==-1){this.tpos=(hs.page[this.wh]/2)+hs.page["scroll"+this.uclt]
}},calcExpanded:function(){var b=this.exp;
this.justify="auto";
if(b.align=="center"){this.justify="center"
}else{if(new RegExp(this.lt).test(b.anchor)){this.justify=null
}else{if(new RegExp(this.rb).test(b.anchor)){this.justify="max"
}}}this.pos=this.tpos-this.cb+this.tb;
if(this.maxHeight&&this.dim=="x"){b.maxWidth=Math.min(b.maxWidth||this.full,b.maxHeight*this.full/b.y.full)
}this.size=Math.min(this.full,b["max"+this.ucwh]||this.full);
this.minSize=b.allowSizeReduction?Math.min(b["min"+this.ucwh],this.full):this.full;
if(b.isImage&&b.useBox){this.size=b[this.wh];
this.imgSize=this.full
}if(this.dim=="x"&&hs.padToMinWidth){this.minSize=b.minWidth
}this.target=b["target"+this.dim.toUpperCase()];
this.marginMin=hs["margin"+this.uclt];
this.scroll=hs.page["scroll"+this.uclt];
this.clientSize=hs.page[this.wh]
},setSize:function(e){var g=this.exp;
if(g.isImage&&(g.useBox||hs.padToMinWidth)){this.imgSize=e;
this.size=Math.max(this.size,this.imgSize);
g.content.style[this.lt]=this.get("imgPad")+"px"
}else{this.size=e
}g.content.style[this.wh]=e+"px";
g.wrapper.style[this.wh]=this.get("wsize")+"px";
if(g.outline){g.outline.setPosition()
}if(g.releaseMask){g.releaseMask.style[this.wh]=e+"px"
}if(this.dim=="y"&&g.iDoc&&g.body.style.height!="auto"){try{g.iDoc.body.style.overflow="auto"
}catch(d){}}if(g.isHtml){var h=g.scrollerDiv;
if(this.sizeDiff===undefined){this.sizeDiff=g.innerContent["offset"+this.ucwh]-h["offset"+this.ucwh]
}h.style[this.wh]=(this.size-this.sizeDiff)+"px";
if(this.dim=="x"){g.mediumContent.style.width="auto"
}if(g.body){g.body.style[this.wh]="auto"
}}if(this.dim=="x"&&g.overlayBox){g.sizeOverlayBox(true)
}if(this.dim=="x"&&g.slideshow&&g.isImage){if(e==this.full){g.slideshow.disable("full-expand")
}else{g.slideshow.enable("full-expand")
}}},setPos:function(b){this.pos=b;
this.exp.wrapper.style[this.lt]=b+"px";
if(this.exp.outline){this.exp.outline.setPosition()
}}};
hs.Expander=function(n,r,v,i){if(document.readyState&&hs.ie&&!hs.isReady){hs.addEventListener(document,"ready",function(){new hs.Expander(n,r,v,i)
});
return
}this.a=n;
this.custom=v;
this.contentType=i||"image";
this.isHtml=(i=="html");
this.isImage=!this.isHtml;
hs.continuePreloading=false;
this.overlays=[];
this.last=hs.last;
hs.last=null;
hs.init();
var a=this.key=hs.expanders.length;
for(var q=0;
q<hs.overrides.length;
q++){var u=hs.overrides[q];
this[u]=r&&typeof r[u]!="undefined"?r[u]:hs[u]
}if(!this.src){this.src=n.href
}var t=(r&&r.thumbnailId)?hs.$(r.thumbnailId):n;
t=this.thumb=t.getElementsByTagName("img")[0]||t;
this.thumbsUserSetId=t.id||n.id;
if(!hs.fireEvent(this,"onInit")){return true
}for(var q=0;
q<hs.expanders.length;
q++){if(hs.expanders[q]&&hs.expanders[q].a==n&&!(this.last&&this.transitions[1]=="crossfade")){hs.expanders[q].focus();
return false
}}if(!hs.allowSimultaneousLoading){for(var q=0;
q<hs.expanders.length;
q++){if(hs.expanders[q]&&hs.expanders[q].thumb!=t&&!hs.expanders[q].onLoadStarted){hs.expanders[q].cancelLoading()
}}}hs.expanders[a]=this;
if(!hs.allowMultipleInstances&&!hs.upcoming){if(hs.expanders[a-1]){hs.expanders[a-1].close()
}if(typeof hs.focusKey!="undefined"&&hs.expanders[hs.focusKey]){hs.expanders[hs.focusKey].close()
}}this.el=t;
this.tpos=this.pageOrigin||hs.getPosition(t);
hs.getPageSize();
var o=this.x=new hs.Dimension(this,"x");
o.calcThumb();
var p=this.y=new hs.Dimension(this,"y");
p.calcThumb();
if(/area/i.test(t.tagName)){this.getImageMapAreaCorrection(t)
}this.wrapper=hs.createElement("div",{id:"highslide-wrapper-"+this.key,className:"highslide-wrapper "+this.wrapperClassName},{visibility:"hidden",position:"absolute",zIndex:hs.zIndexCounter+=2},null,true);
this.wrapper.onmouseover=this.wrapper.onmouseout=hs.wrapperMouseHandler;
if(this.contentType=="image"&&this.outlineWhileAnimating==2){this.outlineWhileAnimating=0
}if(!this.outlineType||(this.last&&this.isImage&&this.transitions[1]=="crossfade")){this[this.contentType+"Create"]()
}else{if(hs.pendingOutlines[this.outlineType]){this.connectOutline();
this[this.contentType+"Create"]()
}else{this.showLoading();
var s=this;
new hs.Outline(this.outlineType,function(){s.connectOutline();
s[s.contentType+"Create"]()
})
}}return true
};
hs.Expander.prototype={error:function(b){if(hs.debug){alert("Line "+b.lineNumber+": "+b.message)
}else{window.location.href=this.src
}},connectOutline:function(){var b=this.outline=hs.pendingOutlines[this.outlineType];
b.exp=this;
b.table.style.zIndex=this.wrapper.style.zIndex-1;
hs.pendingOutlines[this.outlineType]=null
},showLoading:function(){if(this.onLoadStarted||this.loading){return
}this.loading=hs.loading;
var h=this;
this.loading.onclick=function(){h.cancelLoading()
};
if(!hs.fireEvent(this,"onShowLoading")){return
}var h=this,f=this.x.get("loadingPos")+"px",e=this.y.get("loadingPos")+"px";
if(!g&&this.last&&this.transitions[1]=="crossfade"){var g=this.last
}if(g){f=g.x.get("loadingPosXfade")+"px";
e=g.y.get("loadingPosXfade")+"px";
this.loading.style.zIndex=hs.zIndexCounter++
}setTimeout(function(){if(h.loading){hs.setStyles(h.loading,{left:f,top:e,zIndex:hs.zIndexCounter++})
}},100)
},imageCreate:function(){var c=this;
var d=document.createElement("img");
this.content=d;
d.onload=function(){if(hs.expanders[c.key]){c.contentLoaded()
}};
if(hs.blockRightClick){d.oncontextmenu=function(){return false
}
}d.className="highslide-image";
hs.setStyles(d,{visibility:"hidden",display:"block",position:"absolute",maxWidth:"9999px",zIndex:3});
d.title=hs.lang.restoreTitle;
if(hs.safari&&hs.uaVersion<525){hs.container.appendChild(d)
}if(hs.ie&&hs.flushImgSize){d.src=null
}d.src=this.src;
this.showLoading()
},htmlCreate:function(){if(!hs.fireEvent(this,"onBeforeGetContent")){return
}this.content=hs.getCacheBinding(this.a);
if(!this.content){this.content=hs.getNode(this.contentId)
}if(!this.content){this.content=hs.getSelfRendered()
}this.getInline(["maincontent"]);
if(this.maincontent){var f=hs.getElementByClass(this.content,"div","highslide-body");
if(f){f.appendChild(this.maincontent)
}this.maincontent.style.display="block"
}hs.fireEvent(this,"onAfterGetContent");
var g=this.innerContent=this.content;
if(/(swf|iframe)/.test(this.objectType)){this.setObjContainerSize(g)
}hs.container.appendChild(this.wrapper);
hs.setStyles(this.wrapper,{position:"static",padding:"0 "+hs.marginRight+"px 0 "+hs.marginLeft+"px"});
this.content=hs.createElement("div",{className:"highslide-html"},{position:"relative",zIndex:3,height:0,overflow:"hidden"},this.wrapper);
this.mediumContent=hs.createElement("div",null,null,this.content,1);
this.mediumContent.appendChild(g);
hs.setStyles(g,{position:"relative",display:"block",direction:hs.lang.cssDirection||""});
if(this.width){g.style.width=this.width+"px"
}if(this.height){hs.setStyles(g,{height:this.height+"px",overflow:"hidden"})
}if(g.offsetWidth<this.minWidth){g.style.width=this.minWidth+"px"
}if(this.objectType=="ajax"&&!hs.getCacheBinding(this.a)){this.showLoading();
var h=this;
var e=new hs.Ajax(this.a,g);
e.src=this.src;
e.onLoad=function(){if(hs.expanders[h.key]){h.contentLoaded()
}};
e.onError=function(){location.href=h.src
};
e.run()
}else{if(this.objectType=="iframe"&&this.objectLoadTime=="before"){this.writeExtendedContent()
}else{this.contentLoaded()
}}},contentLoaded:function(){try{if(!this.content){return
}this.content.onload=null;
if(this.onLoadStarted){return
}else{this.onLoadStarted=true
}var i=this.x,m=this.y;
if(this.loading){hs.setStyles(this.loading,{top:"-9999px"});
this.loading=null;
hs.fireEvent(this,"onHideLoading")
}if(this.isImage){i.full=this.content.width;
m.full=this.content.height;
hs.setStyles(this.content,{width:i.t+"px",height:m.t+"px"});
this.wrapper.appendChild(this.content);
hs.container.appendChild(this.wrapper)
}else{if(this.htmlGetSize){this.htmlGetSize()
}}i.calcBorders();
m.calcBorders();
hs.setStyles(this.wrapper,{left:(i.tpos+i.tb-i.cb)+"px",top:(m.tpos+i.tb-m.cb)+"px"});
this.initSlideshow();
this.getOverlays();
var n=i.full/m.full;
i.calcExpanded();
this.justify(i);
m.calcExpanded();
this.justify(m);
if(this.isHtml){this.htmlSizeOperations()
}if(this.overlayBox){this.sizeOverlayBox(0,1)
}if(this.allowSizeReduction){if(this.isImage){this.correctRatio(n)
}else{this.fitOverlayBox()
}var e=this.slideshow;
if(e&&this.last&&e.controls&&e.fixedControls){var l=e.overlayOptions.position||"",r;
for(var p in hs.oPos){for(var q=0;
q<5;
q++){r=this[p];
if(l.match(hs.oPos[p][q])){r.pos=this.last[p].pos+(this.last[p].p1-r.p1)+(this.last[p].size-r.size)*[0,0,0.5,1,1][q];
if(e.fixedControls=="fit"){if(r.pos+r.size+r.p1+r.p2>r.scroll+r.clientSize-r.marginMax){r.pos=r.scroll+r.clientSize-r.size-r.marginMin-r.marginMax-r.p1-r.p2
}if(r.pos<r.scroll+r.marginMin){r.pos=r.scroll+r.marginMin
}}}}}}if(this.isImage&&this.x.full>(this.x.imgSize||this.x.size)){this.createFullExpand();
if(this.overlays.length==1){this.sizeOverlayBox()
}}}this.show()
}catch(o){this.error(o)
}},setObjContainerSize:function(e,f){var c=hs.getElementByClass(e,"DIV","highslide-body");
if(/(iframe|swf)/.test(this.objectType)){if(this.objectWidth){c.style.width=this.objectWidth+"px"
}if(this.objectHeight){c.style.height=this.objectHeight+"px"
}}},writeExtendedContent:function(){if(this.hasExtendedContent){return
}var i=this;
this.body=hs.getElementByClass(this.innerContent,"DIV","highslide-body");
if(this.objectType=="iframe"){this.showLoading();
var h=hs.clearing.cloneNode(1);
this.body.appendChild(h);
this.newWidth=this.innerContent.offsetWidth;
if(!this.objectWidth){this.objectWidth=h.offsetWidth
}var l=this.innerContent.offsetHeight-this.body.offsetHeight,k=this.objectHeight||hs.page.height-l-hs.marginTop-hs.marginBottom,j=this.objectLoadTime=="before"?' onload="if (hs.expanders['+this.key+"]) hs.expanders["+this.key+'].contentLoaded()" ':"";
this.body.innerHTML+='<iframe name="hs'+(new Date()).getTime()+'" frameborder="0" key="'+this.key+'"  style="width:'+this.objectWidth+"px; height:"+k+'px" '+j+' src="'+this.src+'" ></iframe>';
this.ruler=this.body.getElementsByTagName("div")[0];
this.iframe=this.body.getElementsByTagName("iframe")[0];
if(this.objectLoadTime=="after"){this.correctIframeSize()
}}if(this.objectType=="swf"){this.body.id=this.body.id||"hs-flash-id-"+this.key;
var a=this.swfOptions;
if(!a.params){a.params={}
}if(typeof a.params.wmode=="undefined"){a.params.wmode="transparent"
}if(swfobject){swfobject.embedSWF(this.src,this.body.id,this.objectWidth,this.objectHeight,a.version||"7",a.expressInstallSwfurl,a.flashvars,a.params,a.attributes)
}}this.hasExtendedContent=true
},htmlGetSize:function(){if(this.iframe&&!this.objectHeight){this.iframe.style.height=this.body.style.height=this.getIframePageHeight()+"px"
}this.innerContent.appendChild(hs.clearing);
if(!this.x.full){this.x.full=this.innerContent.offsetWidth
}this.y.full=this.innerContent.offsetHeight;
this.innerContent.removeChild(hs.clearing);
if(hs.ie&&this.newHeight>parseInt(this.innerContent.currentStyle.height)){this.newHeight=parseInt(this.innerContent.currentStyle.height)
}hs.setStyles(this.wrapper,{position:"absolute",padding:"0"});
hs.setStyles(this.content,{width:this.x.t+"px",height:this.y.t+"px"})
},getIframePageHeight:function(){var f;
try{var g=this.iDoc=this.iframe.contentDocument||this.iframe.contentWindow.document;
var e=g.createElement("div");
e.style.clear="both";
g.body.appendChild(e);
f=e.offsetTop;
if(hs.ie){f+=parseInt(g.body.currentStyle.marginTop)+parseInt(g.body.currentStyle.marginBottom)-1
}}catch(h){f=300
}return f
},correctIframeSize:function(){var d=this.innerContent.offsetWidth-this.ruler.offsetWidth;
hs.discardElement(this.ruler);
if(d<0){d=0
}var e=this.innerContent.offsetHeight-this.iframe.offsetHeight;
if(this.iDoc&&!this.objectHeight&&!this.height&&this.y.size==this.y.full){try{this.iDoc.body.style.overflow="hidden"
}catch(f){}}hs.setStyles(this.iframe,{width:Math.abs(this.x.size-d)+"px",height:Math.abs(this.y.size-e)+"px"});
hs.setStyles(this.body,{width:this.iframe.style.width,height:this.iframe.style.height});
this.scrollingContent=this.iframe;
this.scrollerDiv=this.scrollingContent
},htmlSizeOperations:function(){this.setObjContainerSize(this.innerContent);
if(this.objectType=="swf"&&this.objectLoadTime=="before"){this.writeExtendedContent()
}if(this.x.size<this.x.full&&!this.allowWidthReduction){this.x.size=this.x.full
}if(this.y.size<this.y.full&&!this.allowHeightReduction){this.y.size=this.y.full
}this.scrollerDiv=this.innerContent;
hs.setStyles(this.mediumContent,{position:"relative",width:this.x.size+"px"});
hs.setStyles(this.innerContent,{border:"none",width:"auto",height:"auto"});
var h=hs.getElementByClass(this.innerContent,"DIV","highslide-body");
if(h&&!/(iframe|swf)/.test(this.objectType)){var f=h;
h=hs.createElement(f.nodeName,null,{overflow:"hidden"},null,true);
f.parentNode.insertBefore(h,f);
h.appendChild(hs.clearing);
h.appendChild(f);
var j=this.innerContent.offsetWidth-h.offsetWidth;
var g=this.innerContent.offsetHeight-h.offsetHeight;
h.removeChild(hs.clearing);
var i=hs.safari||navigator.vendor=="KDE"?1:0;
hs.setStyles(h,{width:(this.x.size-j-i)+"px",height:(this.y.size-g)+"px",overflow:"auto",position:"relative"});
if(i&&f.offsetHeight>h.offsetHeight){h.style.width=(parseInt(h.style.width)+i)+"px"
}this.scrollingContent=h;
this.scrollerDiv=this.scrollingContent
}if(this.iframe&&this.objectLoadTime=="before"){this.correctIframeSize()
}if(!this.scrollingContent&&this.y.size<this.mediumContent.offsetHeight){this.scrollerDiv=this.content
}if(this.scrollerDiv==this.content&&!this.allowWidthReduction&&!/(iframe|swf)/.test(this.objectType)){this.x.size+=17
}if(this.scrollerDiv&&this.scrollerDiv.offsetHeight>this.scrollerDiv.parentNode.offsetHeight){setTimeout("try { hs.expanders["+this.key+"].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",hs.expandDuration)
}},getImageMapAreaCorrection:function(n){var j=n.coords.split(",");
for(var c=0;
c<j.length;
c++){j[c]=parseInt(j[c])
}if(n.shape.toLowerCase()=="circle"){this.x.tpos+=j[0]-j[2];
this.y.tpos+=j[1]-j[2];
this.x.t=this.y.t=2*j[2]
}else{var l,m,i=l=j[0],k=m=j[1];
for(var c=0;
c<j.length;
c++){if(c%2==0){i=Math.min(i,j[c]);
l=Math.max(l,j[c])
}else{k=Math.min(k,j[c]);
m=Math.max(m,j[c])
}}this.x.tpos+=i;
this.x.t=l-i;
this.y.tpos+=k;
this.y.t=m-k
}},justify:function(m,i){var l,k=m.target,n=m==this.x?"x":"y";
if(k&&k.match(/ /)){l=k.split(" ");
k=l[0]
}if(k&&hs.$(k)){m.pos=hs.getPosition(hs.$(k))[n];
if(l&&l[1]&&l[1].match(/^[-]?[0-9]+px$/)){m.pos+=parseInt(l[1])
}if(m.size<m.minSize){m.size=m.minSize
}}else{if(m.justify=="auto"||m.justify=="center"){var o=false;
var j=m.exp.allowSizeReduction;
if(m.justify=="center"){m.pos=Math.round(m.scroll+(m.clientSize+m.marginMin-m.marginMax-m.get("wsize"))/2)
}else{m.pos=Math.round(m.pos-((m.get("wsize")-m.t)/2))
}if(m.pos<m.scroll+m.marginMin){m.pos=m.scroll+m.marginMin;
o=true
}if(!i&&m.size<m.minSize){m.size=m.minSize;
j=false
}if(m.pos+m.get("wsize")>m.scroll+m.clientSize-m.marginMax){if(!i&&o&&j){m.size=Math.min(m.size,m.get(n=="y"?"fitsize":"maxsize"))
}else{if(m.get("wsize")<m.get("fitsize")){m.pos=m.scroll+m.clientSize-m.marginMax-m.get("wsize")
}else{m.pos=m.scroll+m.marginMin;
if(!i&&j){m.size=m.get(n=="y"?"fitsize":"maxsize")
}}}}if(!i&&m.size<m.minSize){m.size=m.minSize;
j=false
}}else{if(m.justify=="max"){m.pos=Math.floor(m.pos-m.size+m.t)
}}}if(m.pos<m.marginMin){var p=m.pos;
m.pos=m.marginMin;
if(j&&!i){m.size=m.size-(m.pos-p)
}}},correctRatio:function(n){var i=this.x,j=this.y,l=false,m=Math.min(i.full,i.size),h=Math.min(j.full,j.size),k=(this.useBox||hs.padToMinWidth);
if(m/h>n){m=h*n;
if(m<i.minSize){m=i.minSize;
h=m/n
}l=true
}else{if(m/h<n){h=m/n;
l=true
}}if(hs.padToMinWidth&&i.full<i.minSize){i.imgSize=i.full;
j.size=j.imgSize=j.full
}else{if(this.useBox){i.imgSize=m;
j.imgSize=h
}else{i.size=m;
j.size=h
}}l=this.fitOverlayBox(this.useBox?null:n,l);
if(k&&j.size<j.imgSize){j.imgSize=j.size;
i.imgSize=j.size*n
}if(l||k){i.pos=i.tpos-i.cb+i.tb;
i.minSize=i.size;
this.justify(i,true);
j.pos=j.tpos-j.cb+j.tb;
j.minSize=j.size;
this.justify(j,true);
if(this.overlayBox){this.sizeOverlayBox()
}}},fitOverlayBox:function(e,h){var f=this.x,g=this.y;
if(this.overlayBox&&(this.isImage||this.allowHeightReduction)){while(g.size>this.minHeight&&f.size>this.minWidth&&g.get("wsize")>g.get("fitsize")){g.size-=10;
if(e){f.size=g.size*e
}this.sizeOverlayBox(0,1);
h=true
}}return h
},reflow:function(){if(this.scrollerDiv){var b=/iframe/i.test(this.scrollerDiv.tagName)?(this.getIframePageHeight()+1)+"px":"auto";
if(this.body){this.body.style.height=b
}this.scrollerDiv.style.height=b;
this.y.setSize(this.innerContent.offsetHeight)
}},show:function(){var d=this.x,c=this.y;
this.doShowHide("hidden");
hs.fireEvent(this,"onBeforeExpand");
if(this.slideshow&&this.slideshow.thumbstrip){this.slideshow.thumbstrip.selectThumb()
}this.changeSize(1,{wrapper:{width:d.get("wsize"),height:c.get("wsize"),left:d.pos,top:c.pos},content:{left:d.p1+d.get("imgPad"),top:c.p1+c.get("imgPad"),width:d.imgSize||d.size,height:c.imgSize||c.size}},hs.expandDuration)
},changeSize:function(s,n,u){var l=this.transitions,r=s?(this.last?this.last.a:null):hs.upcoming,m=(l[1]&&r&&hs.getParam(r,"transitions")[1]==l[1])?l[1]:l[0];
if(this[m]&&m!="expand"){this[m](s,n);
return
}if(this.outline&&!this.outlineWhileAnimating){if(s){this.outline.setPosition()
}else{this.outline.destroy((this.isHtml&&this.preserveContent))
}}if(!s){this.destroyOverlays()
}var t=this,o=t.x,p=t.y,q=this.easing;
if(!s){q=this.easingClose||q
}var v=s?function(){if(t.outline){t.outline.table.style.visibility="visible"
}setTimeout(function(){t.afterExpand()
},50)
}:function(){t.afterClose()
};
if(s){hs.setStyles(this.wrapper,{width:o.t+"px",height:p.t+"px"})
}if(s&&this.isHtml){hs.setStyles(this.wrapper,{left:(o.tpos-o.cb+o.tb)+"px",top:(p.tpos-p.cb+p.tb)+"px"})
}if(this.fadeInOut){hs.setStyles(this.wrapper,{opacity:s?0:1});
hs.extend(n.wrapper,{opacity:s})
}hs.animate(this.wrapper,n.wrapper,{duration:u,easing:q,step:function(d,b){if(t.outline&&t.outlineWhileAnimating&&b.prop=="top"){var a=s?b.pos:1-b.pos;
var c={w:o.t+(o.get("wsize")-o.t)*a,h:p.t+(p.get("wsize")-p.t)*a,x:o.tpos+(o.pos-o.tpos)*a,y:p.tpos+(p.pos-p.tpos)*a};
t.outline.setPosition(c,0,1)
}if(t.isHtml){if(b.prop=="left"){t.mediumContent.style.left=(o.pos-d)+"px"
}if(b.prop=="top"){t.mediumContent.style.top=(p.pos-d)+"px"
}}}});
hs.animate(this.content,n.content,u,q,v);
if(s){this.wrapper.style.visibility="visible";
this.content.style.visibility="visible";
if(this.isHtml){this.innerContent.style.visibility="visible"
}this.a.className+=" highslide-active-anchor"
}},fade:function(m,k){this.outlineWhileAnimating=false;
var p=this,i=m?hs.expandDuration:0;
if(m){hs.animate(this.wrapper,k.wrapper,0);
hs.setStyles(this.wrapper,{opacity:0,visibility:"visible"});
hs.animate(this.content,k.content,0);
this.content.style.visibility="visible";
hs.animate(this.wrapper,{opacity:1},i,null,function(){p.afterExpand()
})
}if(this.outline){this.outline.table.style.zIndex=this.wrapper.style.zIndex;
var q=m||-1,o=this.outline.offset,r=m?3:o,l=m?o:3;
for(var n=r;
q*n<=q*l;
n+=q,i+=25){(function(){var a=m?l-n:r-n;
setTimeout(function(){p.outline.setPosition(0,a,1)
},i)
})()
}}if(m){}else{setTimeout(function(){if(p.outline){p.outline.destroy(p.preserveContent)
}p.destroyOverlays();
hs.animate(p.wrapper,{opacity:0},hs.restoreDuration,null,function(){p.afterClose()
})
},i)
}},crossfade:function(x,r,q){if(!x){return
}var y=this,n=this.last,s=this.x,t=this.y,A=n.x,C=n.y,D=this.wrapper,v=this.content,B=this.overlayBox;
hs.removeEventListener(document,"mousemove",hs.dragHandler);
hs.setStyles(v,{width:(s.imgSize||s.size)+"px",height:(t.imgSize||t.size)+"px"});
if(B){B.style.overflow="visible"
}this.outline=n.outline;
if(this.outline){this.outline.exp=y
}n.outline=null;
var w=hs.createElement("div",{className:"highslide-"+this.contentType},{position:"absolute",zIndex:4,overflow:"hidden",display:"none"});
var u={oldImg:n,newImg:this};
for(var z in u){this[z]=u[z].content.cloneNode(1);
hs.setStyles(this[z],{position:"absolute",border:0,visibility:"visible"});
w.appendChild(this[z])
}D.appendChild(w);
if(this.isHtml){hs.setStyles(this.mediumContent,{left:0,top:0})
}if(B){B.className="";
D.appendChild(B)
}w.style.display="";
n.content.style.display="none";
if(hs.safari&&hs.uaVersion<525){this.wrapper.style.visibility="visible"
}hs.animate(D,{width:s.size},{duration:hs.transitionDuration,step:function(d,g){var a=g.pos,h=1-a;
var b,f={},e=["pos","size","p1","p2"];
for(var c in e){b=e[c];
f["x"+b]=Math.round(h*A[b]+a*s[b]);
f["y"+b]=Math.round(h*C[b]+a*t[b]);
f.ximgSize=Math.round(h*(A.imgSize||A.size)+a*(s.imgSize||s.size));
f.ximgPad=Math.round(h*A.get("imgPad")+a*s.get("imgPad"));
f.yimgSize=Math.round(h*(C.imgSize||C.size)+a*(t.imgSize||t.size));
f.yimgPad=Math.round(h*C.get("imgPad")+a*t.get("imgPad"))
}if(y.outline){y.outline.setPosition({x:f.xpos,y:f.ypos,w:f.xsize+f.xp1+f.xp2+2*s.cb,h:f.ysize+f.yp1+f.yp2+2*t.cb})
}n.wrapper.style.clip="rect("+(f.ypos-C.pos)+"px, "+(f.xsize+f.xp1+f.xp2+f.xpos+2*A.cb-A.pos)+"px, "+(f.ysize+f.yp1+f.yp2+f.ypos+2*C.cb-C.pos)+"px, "+(f.xpos-A.pos)+"px)";
hs.setStyles(v,{top:(f.yp1+t.get("imgPad"))+"px",left:(f.xp1+s.get("imgPad"))+"px",marginTop:(t.pos-f.ypos)+"px",marginLeft:(s.pos-f.xpos)+"px"});
hs.setStyles(D,{top:f.ypos+"px",left:f.xpos+"px",width:(f.xp1+f.xp2+f.xsize+2*s.cb)+"px",height:(f.yp1+f.yp2+f.ysize+2*t.cb)+"px"});
hs.setStyles(w,{width:(f.ximgSize||f.xsize)+"px",height:(f.yimgSize||f.ysize)+"px",left:(f.xp1+f.ximgPad)+"px",top:(f.yp1+f.yimgPad)+"px",visibility:"visible"});
hs.setStyles(y.oldImg,{top:(C.pos-f.ypos+C.p1-f.yp1+C.get("imgPad")-f.yimgPad)+"px",left:(A.pos-f.xpos+A.p1-f.xp1+A.get("imgPad")-f.ximgPad)+"px"});
hs.setStyles(y.newImg,{opacity:a,top:(t.pos-f.ypos+t.p1-f.yp1+t.get("imgPad")-f.yimgPad)+"px",left:(s.pos-f.xpos+s.p1-f.xp1+s.get("imgPad")-f.ximgPad)+"px"});
if(B){hs.setStyles(B,{width:f.xsize+"px",height:f.ysize+"px",left:(f.xp1+s.cb)+"px",top:(f.yp1+t.cb)+"px"})
}},complete:function(){D.style.visibility=v.style.visibility="visible";
v.style.display="block";
hs.discardElement(w);
y.afterExpand();
n.afterClose();
y.last=null
}})
},reuseOverlay:function(g,h){if(!this.last){return false
}for(var e=0;
e<this.last.overlays.length;
e++){var f=hs.$("hsId"+this.last.overlays[e]);
if(f&&f.hsId==g.hsId){this.genOverlayBox();
f.reuse=this.key;
hs.push(this.overlays,this.last.overlays[e]);
return true
}}return false
},afterExpand:function(){this.isExpanded=true;
this.focus();
if(this.isHtml&&this.objectLoadTime=="after"){this.writeExtendedContent()
}if(this.iframe){try{var i=this,j=this.iframe.contentDocument||this.iframe.contentWindow.document;
hs.addEventListener(j,"mousedown",function(){if(hs.focusKey!=i.key){i.focus()
}})
}catch(k){}if(hs.ie&&typeof this.isClosing!="boolean"){this.iframe.style.width=(this.objectWidth-1)+"px"
}}if(this.dimmingOpacity){hs.dim(this)
}if(hs.upcoming&&hs.upcoming==this.a){hs.upcoming=null
}this.prepareNextOutline();
var l=hs.page,e=hs.mouse.x+l.scrollLeft,h=hs.mouse.y+l.scrollTop;
this.mouseIsOver=this.x.pos<e&&e<this.x.pos+this.x.get("wsize")&&this.y.pos<h&&h<this.y.pos+this.y.get("wsize");
if(this.overlayBox){this.showOverlays()
}hs.fireEvent(this,"onAfterExpand")
},prepareNextOutline:function(){var d=this.key;
var c=this.outlineType;
new hs.Outline(c,function(){try{hs.expanders[d].preloadNext()
}catch(a){}})
},preloadNext:function(){var c=this.getAdjacentAnchor(1);
if(c&&c.onclick.toString().match(/hs\.expand/)){var d=hs.createElement("img",{src:hs.getSrc(c)})
}},getAdjacentAnchor:function(f){var d=this.getAnchorIndex(),e=hs.anchors.groups[this.slideshowGroup||"none"];
if(e&&!e[d+f]&&this.slideshow&&this.slideshow.repeat){if(f==1){return e[0]
}else{if(f==-1){return e[e.length-1]
}}}return(e&&e[d+f])||null
},getAnchorIndex:function(){var d=hs.getAnchors().groups[this.slideshowGroup||"none"];
if(d){for(var c=0;
c<d.length;
c++){if(d[c]==this.a){return c
}}}return null
},getNumber:function(){if(this[this.numberPosition]){var d=hs.anchors.groups[this.slideshowGroup||"none"];
if(d){var c=hs.lang.number.replace("%1",this.getAnchorIndex()+1).replace("%2",d.length);
this[this.numberPosition].innerHTML='<div class="highslide-number">'+c+"</div>"+this[this.numberPosition].innerHTML
}}},initSlideshow:function(){if(!this.last){for(var h=0;
h<hs.slideshows.length;
h++){var e=hs.slideshows[h],g=e.slideshowGroup;
if(typeof g=="undefined"||g===null||g===this.slideshowGroup){this.slideshow=new hs.Slideshow(this.key,e)
}}}else{this.slideshow=this.last.slideshow
}var e=this.slideshow;
if(!e){return
}var f=e.expKey=this.key;
e.checkFirstAndLast();
e.disable("full-expand");
if(e.controls){this.createOverlay(hs.extend(e.overlayOptions||{},{overlayId:e.controls,hsId:"controls",zIndex:5}))
}if(e.thumbstrip){e.thumbstrip.add(this)
}if(!this.last&&this.autoplay){e.play(true)
}if(e.autoplay){e.autoplay=setTimeout(function(){hs.next(f)
},(e.interval||500))
}},cancelLoading:function(){hs.discardElement(this.wrapper);
hs.expanders[this.key]=null;
if(hs.upcoming==this.a){hs.upcoming=null
}hs.undim(this.key);
if(this.loading){hs.loading.style.left="-9999px"
}hs.fireEvent(this,"onHideLoading")
},writeCredits:function(){if(this.credits){return
}this.credits=hs.createElement("a",{href:hs.creditsHref,target:hs.creditsTarget,className:"highslide-credits",innerHTML:hs.lang.creditsText,title:hs.lang.creditsTitle});
this.createOverlay({overlayId:this.credits,position:this.creditsPosition||"top left",hsId:"credits"})
},getInline:function(types,addOverlay){for(var i=0;
i<types.length;
i++){var type=types[i],s=null;
if(type=="caption"&&!hs.fireEvent(this,"onBeforeGetCaption")){return
}else{if(type=="heading"&&!hs.fireEvent(this,"onBeforeGetHeading")){return
}}if(!this[type+"Id"]&&this.thumbsUserSetId){this[type+"Id"]=type+"-for-"+this.thumbsUserSetId
}if(this[type+"Id"]){this[type]=hs.getNode(this[type+"Id"])
}if(!this[type]&&!this[type+"Text"]&&this[type+"Eval"]){try{s=eval(this[type+"Eval"])
}catch(e){}}if(!this[type]&&this[type+"Text"]){s=this[type+"Text"]
}if(!this[type]&&!s){this[type]=hs.getNode(this.a["_"+type+"Id"]);
if(!this[type]){var next=this.a.nextSibling;
while(next&&!hs.isHsAnchor(next)){if((new RegExp("highslide-"+type)).test(next.className||null)){if(!next.id){this.a["_"+type+"Id"]=next.id="hsId"+hs.idCounter++
}this[type]=hs.getNode(next.id);
break
}next=next.nextSibling
}}}if(!this[type]&&!s&&this.numberPosition==type){s="\n"
}if(!this[type]&&s){this[type]=hs.createElement("div",{className:"highslide-"+type,innerHTML:s})
}if(addOverlay&&this[type]){var o={position:(type=="heading")?"above":"below"};
for(var x in this[type+"Overlay"]){o[x]=this[type+"Overlay"][x]
}o.overlayId=this[type];
this.createOverlay(o)
}}},doShowHide:function(b){if(hs.hideSelects){this.showHideElements("SELECT",b)
}if(hs.hideIframes){this.showHideElements("IFRAME",b)
}if(hs.geckoMac){this.showHideElements("*",b)
}},showHideElements:function(r,s){var p=document.getElementsByTagName(r);
var t=r=="*"?"overflow":"visibility";
for(var o=0;
o<p.length;
o++){if(t=="visibility"||(document.defaultView.getComputedStyle(p[o],"").getPropertyValue("overflow")=="auto"||p[o].getAttribute("hidden-by")!=null)){var m=p[o].getAttribute("hidden-by");
if(s=="visible"&&m){m=m.replace("["+this.key+"]","");
p[o].setAttribute("hidden-by",m);
if(!m){p[o].style[t]=p[o].origProp
}}else{if(s=="hidden"){var i=hs.getPosition(p[o]);
i.w=p[o].offsetWidth;
i.h=p[o].offsetHeight;
if(!this.dimmingOpacity){var l=(i.x+i.w<this.x.get("opos")||i.x>this.x.get("opos")+this.x.get("osize"));
var n=(i.y+i.h<this.y.get("opos")||i.y>this.y.get("opos")+this.y.get("osize"))
}var q=hs.getWrapperKey(p[o]);
if(!l&&!n&&q!=this.key){if(!m){p[o].setAttribute("hidden-by","["+this.key+"]");
p[o].origProp=p[o].style[t];
p[o].style[t]="hidden"
}else{if(m.indexOf("["+this.key+"]")==-1){p[o].setAttribute("hidden-by",m+"["+this.key+"]")
}}}else{if((m=="["+this.key+"]"||hs.focusKey==q)&&q!=this.key){p[o].setAttribute("hidden-by","");
p[o].style[t]=p[o].origProp||""
}else{if(m&&m.indexOf("["+this.key+"]")>-1){p[o].setAttribute("hidden-by",m.replace("["+this.key+"]",""))
}}}}}}}},focus:function(){this.wrapper.style.zIndex=hs.zIndexCounter+=2;
for(var d=0;
d<hs.expanders.length;
d++){if(hs.expanders[d]&&d==hs.focusKey){var c=hs.expanders[d];
c.content.className+=" highslide-"+c.contentType+"-blur";
if(c.isImage){c.content.style.cursor=hs.ieLt7?"hand":"pointer";
c.content.title=hs.lang.focusTitle
}hs.fireEvent(c,"onBlur")
}}if(this.outline){this.outline.table.style.zIndex=this.wrapper.style.zIndex-1
}this.content.className="highslide-"+this.contentType;
if(this.isImage){this.content.title=hs.lang.restoreTitle;
if(hs.restoreCursor){hs.styleRestoreCursor=window.opera?"pointer":"url("+hs.graphicsDir+hs.restoreCursor+"), pointer";
if(hs.ieLt7&&hs.uaVersion<6){hs.styleRestoreCursor="hand"
}this.content.style.cursor=hs.styleRestoreCursor
}}hs.focusKey=this.key;
hs.addEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);
hs.fireEvent(this,"onFocus")
},moveTo:function(d,c){this.x.setPos(d);
this.y.setPos(c)
},resize:function(g){var f,e,h=g.width/g.height;
f=Math.max(g.width+g.dX,Math.min(this.minWidth,this.x.full));
if(this.isImage&&Math.abs(f-this.x.full)<12){f=this.x.full
}e=this.isHtml?g.height+g.dY:f/h;
if(e<Math.min(this.minHeight,this.y.full)){e=Math.min(this.minHeight,this.y.full);
if(this.isImage){f=e*h
}}this.resizeTo(f,e)
},resizeTo:function(d,c){this.y.setSize(c);
this.x.setSize(d);
this.wrapper.style.height=this.y.get("wsize")+"px"
},close:function(){if(this.isClosing||!this.isExpanded){return
}if(this.transitions[1]=="crossfade"&&hs.upcoming){hs.getExpander(hs.upcoming).cancelLoading();
hs.upcoming=null
}if(!hs.fireEvent(this,"onBeforeClose")){return
}this.isClosing=true;
if(this.slideshow&&!hs.upcoming){this.slideshow.pause()
}hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);
try{if(this.isHtml){this.htmlPrepareClose()
}this.content.style.cursor="default";
this.changeSize(0,{wrapper:{width:this.x.t,height:this.y.t,left:this.x.tpos-this.x.cb+this.x.tb,top:this.y.tpos-this.y.cb+this.y.tb},content:{left:0,top:0,width:this.x.t,height:this.y.t}},hs.restoreDuration)
}catch(b){this.afterClose()
}},htmlPrepareClose:function(){if(hs.geckoMac){if(!hs.mask){hs.mask=hs.createElement("div",null,{position:"absolute"},hs.container)
}hs.setStyles(hs.mask,{width:this.x.size+"px",height:this.y.size+"px",left:this.x.pos+"px",top:this.y.pos+"px",display:"block"})
}if(this.objectType=="swf"){try{hs.$(this.body.id).StopPlay()
}catch(b){}}if(this.objectLoadTime=="after"&&!this.preserveContent){this.destroyObject()
}if(this.scrollerDiv&&this.scrollerDiv!=this.scrollingContent){this.scrollerDiv.style.overflow="hidden"
}},destroyObject:function(){if(hs.ie&&this.iframe){try{this.iframe.contentWindow.document.body.innerHTML=""
}catch(b){}}if(this.objectType=="swf"){swfobject.removeSWF(this.body.id)
}this.body.innerHTML=""
},sleep:function(){if(this.outline){this.outline.table.style.display="none"
}this.releaseMask=null;
this.wrapper.style.display="none";
this.isExpanded=false;
hs.push(hs.sleeping,this)
},awake:function(){try{hs.expanders[this.key]=this;
if(!hs.allowMultipleInstances&&hs.focusKey!=this.key){try{hs.expanders[hs.focusKey].close()
}catch(e){}}var g=hs.zIndexCounter++,f={display:"",zIndex:g};
hs.setStyles(this.wrapper,f);
this.isClosing=false;
var h=this.outline||0;
if(h){if(!this.outlineWhileAnimating){f.visibility="hidden"
}hs.setStyles(h.table,f)
}if(this.slideshow){this.initSlideshow()
}this.show()
}catch(e){}},createOverlay:function(h){var i=h.overlayId,g=(h.relativeTo=="viewport"&&!/panel$/.test(h.position));
if(typeof i=="string"){i=hs.getNode(i)
}if(h.html){i=hs.createElement("div",{innerHTML:h.html})
}if(!i||typeof i=="string"){return
}if(!hs.fireEvent(this,"onCreateOverlay",{overlay:i})){return
}i.style.display="block";
h.hsId=h.hsId||h.overlayId;
if(this.transitions[1]=="crossfade"&&this.reuseOverlay(h,i)){return
}this.genOverlayBox();
var j=h.width&&/^[0-9]+(px|%)$/.test(h.width)?h.width:"auto";
if(/^(left|right)panel$/.test(h.position)&&!/^[0-9]+px$/.test(h.width)){j="200px"
}var f=hs.createElement("div",{id:"hsId"+hs.idCounter++,hsId:h.hsId},{position:"absolute",visibility:"hidden",width:j,direction:hs.lang.cssDirection||"",opacity:0},g?hs.viewport:this.overlayBox,true);
if(g){f.hsKey=this.key
}f.appendChild(i);
hs.extend(f,{opacity:1,offsetX:0,offsetY:0,dur:(h.fade===0||h.fade===false||(h.fade==2&&hs.ie))?0:250});
hs.extend(f,h);
if(this.gotOverlays){this.positionOverlay(f);
if(!f.hideOnMouseOut||this.mouseIsOver){hs.animate(f,{opacity:f.opacity},f.dur)
}}hs.push(this.overlays,hs.idCounter-1)
},positionOverlay:function(j){var i=j.position||"middle center",l=(j.relativeTo=="viewport"),g=j.offsetX,h=j.offsetY;
if(l){hs.viewport.style.display="block";
j.hsKey=this.key;
if(j.offsetWidth>j.parentNode.offsetWidth){j.style.width="100%"
}}else{if(j.parentNode!=this.overlayBox){this.overlayBox.appendChild(j)
}}if(/left$/.test(i)){j.style.left=g+"px"
}if(/center$/.test(i)){hs.setStyles(j,{left:"50%",marginLeft:(g-Math.round(j.offsetWidth/2))+"px"})
}if(/right$/.test(i)){j.style.right=-g+"px"
}if(/^leftpanel$/.test(i)){hs.setStyles(j,{right:"100%",marginRight:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"});
this.x.p1=j.offsetWidth
}else{if(/^rightpanel$/.test(i)){hs.setStyles(j,{left:"100%",marginLeft:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"});
this.x.p2=j.offsetWidth
}}var k=j.parentNode.offsetHeight;
j.style.height="auto";
if(l&&j.offsetHeight>k){j.style.height=hs.ieLt7?k+"px":"100%"
}if(/^top/.test(i)){j.style.top=h+"px"
}if(/^middle/.test(i)){hs.setStyles(j,{top:"50%",marginTop:(h-Math.round(j.offsetHeight/2))+"px"})
}if(/^bottom/.test(i)){j.style.bottom=-h+"px"
}if(/^above$/.test(i)){hs.setStyles(j,{left:(-this.x.p1-this.x.cb)+"px",right:(-this.x.p2-this.x.cb)+"px",bottom:"100%",marginBottom:this.y.cb+"px",width:"auto"});
this.y.p1=j.offsetHeight
}else{if(/^below$/.test(i)){hs.setStyles(j,{position:"relative",left:(-this.x.p1-this.x.cb)+"px",right:(-this.x.p2-this.x.cb)+"px",top:"100%",marginTop:this.y.cb+"px",width:"auto"});
this.y.p2=j.offsetHeight;
j.style.position="absolute"
}}},getOverlays:function(){this.getInline(["heading","caption"],true);
this.getNumber();
if(this.caption){hs.fireEvent(this,"onAfterGetCaption")
}if(this.heading){hs.fireEvent(this,"onAfterGetHeading")
}if(this.heading&&this.dragByHeading){this.heading.className+=" highslide-move"
}if(hs.showCredits){this.writeCredits()
}for(var g=0;
g<hs.overlays.length;
g++){var i=hs.overlays[g],h=i.thumbnailId,f=i.slideshowGroup;
if((!h&&!f)||(h&&h==this.thumbsUserSetId)||(f&&f===this.slideshowGroup)){if(this.isImage||(this.isHtml&&i.useOnHtml)){this.createOverlay(i)
}}}var j=[];
for(var g=0;
g<this.overlays.length;
g++){var i=hs.$("hsId"+this.overlays[g]);
if(/panel$/.test(i.position)){this.positionOverlay(i)
}else{hs.push(j,i)
}}for(var g=0;
g<j.length;
g++){this.positionOverlay(j[g])
}this.gotOverlays=true
},genOverlayBox:function(){if(!this.overlayBox){this.overlayBox=hs.createElement("div",{className:this.wrapperClassName},{position:"absolute",width:(this.x.size||(this.useBox?this.width:null)||this.x.full)+"px",height:(this.y.size||this.y.full)+"px",visibility:"hidden",overflow:"hidden",zIndex:hs.ie?4:"auto"},hs.container,true)
}},sizeOverlayBox:function(m,o){var p=this.overlayBox,j=this.x,k=this.y;
hs.setStyles(p,{width:j.size+"px",height:k.size+"px"});
if(m||o){for(var n=0;
n<this.overlays.length;
n++){var l=hs.$("hsId"+this.overlays[n]);
var i=(hs.ieLt7||document.compatMode=="BackCompat");
if(l&&/^(above|below)$/.test(l.position)){if(i){l.style.width=(p.offsetWidth+2*j.cb+j.p1+j.p2)+"px"
}k[l.position=="above"?"p1":"p2"]=l.offsetHeight
}if(l&&i&&/^(left|right)panel$/.test(l.position)){l.style.height=(p.offsetHeight+2*k.cb)+"px"
}}}if(m){hs.setStyles(this.content,{top:k.p1+"px"});
hs.setStyles(p,{top:(k.p1+k.cb)+"px"})
}},showOverlays:function(){var b=this.overlayBox;
b.className="";
hs.setStyles(b,{top:(this.y.p1+this.y.cb)+"px",left:(this.x.p1+this.x.cb)+"px",overflow:"visible"});
if(hs.safari){b.style.visibility="visible"
}this.wrapper.appendChild(b);
for(var f=0;
f<this.overlays.length;
f++){var e=hs.$("hsId"+this.overlays[f]);
e.style.zIndex=e.zIndex||4;
if(!e.hideOnMouseOut||this.mouseIsOver){e.style.visibility="visible";
hs.setStyles(e,{visibility:"visible",display:""});
hs.animate(e,{opacity:e.opacity},e.dur)
}}},destroyOverlays:function(){if(!this.overlays.length){return
}if(this.slideshow){var f=this.slideshow.controls;
if(f&&hs.getExpander(f)==this){f.parentNode.removeChild(f)
}}for(var e=0;
e<this.overlays.length;
e++){var c=hs.$("hsId"+this.overlays[e]);
if(c&&c.parentNode==hs.viewport&&hs.getExpander(c)==this){hs.discardElement(c)
}}if(this.isHtml&&this.preserveContent){this.overlayBox.style.top="-9999px";
hs.container.appendChild(this.overlayBox)
}else{hs.discardElement(this.overlayBox)
}},createFullExpand:function(){if(this.slideshow&&this.slideshow.controls){this.slideshow.enable("full-expand");
return
}this.fullExpandLabel=hs.createElement("a",{href:"javascript:hs.expanders["+this.key+"].doFullExpand();",title:hs.lang.fullExpandTitle,className:"highslide-full-expand"});
if(!hs.fireEvent(this,"onCreateFullExpand")){return
}this.createOverlay({overlayId:this.fullExpandLabel,position:hs.fullExpandPosition,hideOnMouseOut:true,opacity:hs.fullExpandOpacity})
},doFullExpand:function(){try{if(!hs.fireEvent(this,"onDoFullExpand")){return
}if(this.fullExpandLabel){hs.discardElement(this.fullExpandLabel)
}this.focus();
var d=this.x.size;
this.resizeTo(this.x.full,this.y.full);
var e=this.x.pos-(this.x.size-d)/2;
if(e<hs.marginLeft){e=hs.marginLeft
}this.moveTo(e,this.y.pos);
this.doShowHide("hidden")
}catch(f){this.error(f)
}},afterClose:function(){this.a.className=this.a.className.replace("highslide-active-anchor","");
this.doShowHide("visible");
if(this.isHtml&&this.preserveContent&&this.transitions[1]!="crossfade"){this.sleep()
}else{if(this.outline&&this.outlineWhileAnimating){this.outline.destroy()
}hs.discardElement(this.wrapper)
}if(hs.mask){hs.mask.style.display="none"
}this.destroyOverlays();
if(!hs.viewport.childNodes.length){hs.viewport.style.display="none"
}if(this.dimmingOpacity){hs.undim(this.key)
}hs.fireEvent(this,"onAfterClose");
hs.expanders[this.key]=null;
hs.reOrder()
}};
hs.Ajax=function(a,f,e){this.a=a;
this.content=f;
this.pre=e
};
hs.Ajax.prototype={run:function(){var i;
if(!this.src){this.src=hs.getSrc(this.a)
}if(this.src.match("#")){var g=this.src.split("#");
this.src=g[0];
this.id=g[1]
}if(hs.cachedGets[this.src]){this.cachedGet=hs.cachedGets[this.src];
if(this.id){this.getElementContent()
}else{this.loadHTML()
}return
}try{i=new XMLHttpRequest()
}catch(e){try{i=new ActiveXObject("Msxml2.XMLHTTP")
}catch(e){try{i=new ActiveXObject("Microsoft.XMLHTTP")
}catch(e){this.onError()
}}}var h=this;
i.onreadystatechange=function(){if(h.xhr.readyState==4){if(h.id){h.getElementContent()
}else{h.loadHTML()
}}};
var j=this.src;
this.xhr=i;
if(hs.forceAjaxReload){j=j.replace(/$/,(/\?/.test(j)?"&":"?")+"dummy="+(new Date()).getTime())
}i.open("GET",j,true);
i.setRequestHeader("X-Requested-With","XMLHttpRequest");
i.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
i.send(null)
},getElementContent:function(){hs.init();
var b=window.opera||hs.ie6SSL?{src:"about:blank"}:null;
this.iframe=hs.createElement("iframe",b,{position:"absolute",top:"-9999px"},hs.container);
this.loadHTML()
},loadHTML:function(){var l=this.cachedGet||this.xhr.responseText,e;
if(this.pre){hs.cachedGets[this.src]=l
}if(!hs.ie||hs.uaVersion>=5.5){l=l.replace(new RegExp("<link[^>]*>","gi"),"").replace(new RegExp("<script[^>]*>.*?<\/script>","gi"),"");
if(this.iframe){var j=this.iframe.contentDocument;
if(!j&&this.iframe.contentWindow){j=this.iframe.contentWindow.document
}if(!j){var i=this;
setTimeout(function(){i.loadHTML()
},25);
return
}j.open();
j.write(l);
j.close();
try{l=j.getElementById(this.id).innerHTML
}catch(k){try{l=this.iframe.document.getElementById(this.id).innerHTML
}catch(k){}}hs.discardElement(this.iframe)
}else{e=/(<body[^>]*>|<\/body>)/ig;
if(e.test(l)){l=l.split(e)[hs.ieLt9?1:2]
}}}hs.getElementByClass(this.content,"DIV","highslide-body").innerHTML=l;
this.onLoad();
for(var h in this){this[h]=null
}}};
hs.Slideshow=function(f,d){if(hs.dynamicallyUpdateAnchors!==false){hs.updateAnchors()
}this.expKey=f;
for(var e in d){this[e]=d[e]
}if(this.useControls){this.getControls()
}if(this.thumbstrip){this.thumbstrip=hs.Thumbstrip(this)
}};
hs.Slideshow.prototype={getControls:function(){this.controls=hs.createElement("div",{innerHTML:hs.replaceLang(hs.skin.controls)},null,hs.container);
var d=["play","pause","previous","next","move","full-expand","close"];
this.btn={};
var f=this;
for(var e=0;
e<d.length;
e++){this.btn[d[e]]=hs.getElementByClass(this.controls,"li","highslide-"+d[e]);
this.enable(d[e])
}this.btn.pause.style.display="none"
},checkFirstAndLast:function(){if(this.repeat||!this.controls){return
}var f=hs.expanders[this.expKey],d=f.getAnchorIndex(),e=/disabled$/;
if(d==0){this.disable("previous")
}else{if(e.test(this.btn.previous.getElementsByTagName("a")[0].className)){this.enable("previous")
}}if(d+1==hs.anchors.groups[f.slideshowGroup||"none"].length){this.disable("next");
this.disable("play")
}else{if(e.test(this.btn.next.getElementsByTagName("a")[0].className)){this.enable("next");
this.enable("play")
}}},enable:function(g){if(!this.btn){return
}var h=this,a=this.btn[g].getElementsByTagName("a")[0],f=/disabled$/;
a.onclick=function(){h[g]();
return false
};
if(f.test(a.className)){a.className=a.className.replace(f,"")
}},disable:function(d){if(!this.btn){return
}var a=this.btn[d].getElementsByTagName("a")[0];
a.onclick=function(){return false
};
if(!/disabled$/.test(a.className)){a.className+=" disabled"
}},hitSpace:function(){if(this.autoplay){this.pause()
}else{this.play()
}},play:function(b){if(this.btn){this.btn.play.style.display="none";
this.btn.pause.style.display=""
}this.autoplay=true;
if(!b){hs.next(this.expKey)
}},pause:function(){if(this.btn){this.btn.pause.style.display="none";
this.btn.play.style.display=""
}clearTimeout(this.autoplay);
this.autoplay=null
},previous:function(){this.pause();
hs.previous(this.btn.previous)
},next:function(){this.pause();
hs.next(this.btn.next)
},move:function(){},"full-expand":function(){hs.getExpander().doFullExpand()
},close:function(){hs.close(this.btn.close)
}};
hs.Thumbstrip=function(E){function z(a){hs.extend(I||{},{overlayId:x,hsId:"thumbstrip",className:"highslide-thumbstrip-"+C+"-overlay "+(I.className||"")});
if(hs.ieLt7){I.fade=0
}a.createOverlay(I);
hs.setStyles(x.parentNode,{overflow:"hidden"})
}function L(a){K(undefined,Math.round(a*x[G?"offsetWidth":"offsetHeight"]*0.7))
}function K(c,b){if(c===undefined){for(var d=0;
d<F.length;
d++){if(F[d]==hs.expanders[E.expKey].a){c=d;
break
}}}if(c===undefined){return
}var m=x.getElementsByTagName("a"),e=m[c],l=e.parentNode,g=G?"Left":"Top",a=G?"Right":"Bottom",h=G?"Width":"Height",s="offset"+g,k="offset"+h,j=B.parentNode.parentNode[k],o=j-w[k],n=parseInt(w.style[G?"left":"top"])||0,r=n,q=20;
if(b!==undefined){r=n-b;
if(o>0){o=0
}if(r>0){r=0
}if(r<o){r=o
}}else{for(var d=0;
d<m.length;
d++){m[d].className=""
}e.className="highslide-active-anchor";
var f=c>0?m[c-1].parentNode[s]:l[s],t=l[s]+l[k]+(m[c+1]?m[c+1].parentNode[k]:0);
if(t>j-n){r=j-t
}else{if(f<-n){r=-f
}}}var p=l[s]+(l[k]-H[k])/2+r;
hs.animate(w,G?{left:r}:{top:r},null,"easeOutQuad");
hs.animate(H,G?{left:p}:{top:p},null,"easeOutQuad");
D.style.display=r<0?"block":"none";
v.style.display=(r>o)?"block":"none"
}var F=hs.anchors.groups[hs.expanders[E.expKey].slideshowGroup||"none"],I=E.thumbstrip,C=I.mode||"horizontal",i=(C=="float"),A=i?["div","ul","li","span"]:["table","tbody","tr","td"],G=(C=="horizontal"),x=hs.createElement("div",{className:"highslide-thumbstrip highslide-thumbstrip-"+C,innerHTML:'<div class="highslide-thumbstrip-inner"><'+A[0]+"><"+A[1]+"></"+A[1]+"></"+A[0]+'></div><div class="highslide-scroll-up"><div></div></div><div class="highslide-scroll-down"><div></div></div><div class="highslide-marker"><div></div></div>'},{display:"none"},hs.container),J=x.childNodes,B=J[0],D=J[1],v=J[2],H=J[3],w=B.firstChild,N=x.getElementsByTagName(A[1])[0],M;
for(var y=0;
y<F.length;
y++){if(y==0||!G){M=hs.createElement(A[2],null,null,N)
}(function(){var b=F[y],c=hs.createElement(A[3],null,null,M),a=y;
hs.createElement("a",{href:b.href,onclick:function(){if(/highslide-active-anchor/.test(this.className)){return false
}hs.getExpander(this).focus();
return hs.transit(b)
},innerHTML:hs.stripItemFormatter?hs.stripItemFormatter(b):b.innerHTML},null,c)
})()
}if(!i){D.onclick=function(){L(-1)
};
v.onclick=function(){L(1)
};
hs.addEventListener(N,document.onmousewheel!==undefined?"mousewheel":"DOMMouseScroll",function(b){var a=0;
b=b||window.event;
if(b.wheelDelta){a=b.wheelDelta/120;
if(hs.opera){a=-a
}}else{if(b.detail){a=-b.detail/3
}}if(a){L(-a*0.2)
}if(b.preventDefault){b.preventDefault()
}b.returnValue=false
})
}return{add:z,selectThumb:K}
};
hs.langDefaults=hs.lang;
var HsExpander=hs.Expander;
if(hs.ie&&window==window.top){(function(){try{document.documentElement.doScroll("left")
}catch(b){setTimeout(arguments.callee,50);
return
}hs.ready()
})()
}hs.addEventListener(document,"DOMContentLoaded",hs.ready);
hs.addEventListener(window,"load",hs.ready);
hs.addEventListener(document,"ready",function(){if(hs.expandCursor||hs.dimmingOpacity){var f=hs.createElement("style",{type:"text/css"},null,document.getElementsByTagName("HEAD")[0]);
function d(b,a){if(hs.ie&&hs.uaVersion<9){var c=document.styleSheets[document.styleSheets.length-1];
if(typeof(c.addRule)=="object"){c.addRule(b,a)
}}else{f.appendChild(document.createTextNode(b+" {"+a+"}"))
}}function e(a){return"expression( ( ( ignoreMe = document.documentElement."+a+" ? document.documentElement."+a+" : document.body."+a+" ) ) + 'px' );"
}if(hs.expandCursor){d(".highslide img","cursor: url("+hs.graphicsDir+hs.expandCursor+"), pointer !important;")
}d(".highslide-viewport-size",hs.ie&&(hs.uaVersion<7||document.compatMode=="BackCompat")?"position: absolute; left:"+e("scrollLeft")+"top:"+e("scrollTop")+"width:"+e("clientWidth")+"height:"+e("clientHeight"):"position: fixed; width: 100%; height: 100%; left: 0; top: 0")
}});
hs.addEventListener(window,"resize",function(){hs.getPageSize();
if(hs.viewport){for(var e=0;
e<hs.viewport.childNodes.length;
e++){var d=hs.viewport.childNodes[e],f=hs.getExpander(d);
f.positionOverlay(d);
if(d.hsId=="thumbstrip"){f.slideshow.thumbstrip.selectThumb()
}}}});
hs.addEventListener(document,"mousemove",function(b){hs.mouse={x:b.clientX,y:b.clientY}
});
hs.addEventListener(document,"mousedown",hs.mouseClickHandler);
hs.addEventListener(document,"mouseup",hs.mouseClickHandler);
hs.addEventListener(document,"ready",hs.setClickEvents);
hs.addEventListener(window,"load",hs.preloadImages);
hs.addEventListener(window,"load",hs.preloadAjax)
}hs.graphicsDir="/etc/designs/generics2/library/images/graphics/";
hs.align="center";
hs.transitions=["expand","crossfade"];
hs.outlineType="rounded-white";
hs.fadeInOut=true;
hs.numberPosition="caption";
hs.dimmingOpacity=0.75;
if(hs.addSlideshow){hs.addSlideshow({interval:5000,repeat:false,useControls:true,fixedControls:"fit",overlayOptions:{opacity:0.75,position:"bottom center",hideOnMouseOut:true}})
}jQuery(function(){var a=jQuery(".ad-gallery").adGallery();
jQuery("#switch-effect").change(function(){a[0].settings.effect=jQuery(this).val();
return false
});
jQuery("#toggle-slideshow").click(function(){a[0].slideshow.toggle();
return false
});
jQuery("#toggle-description").click(function(){if(!a[0].settings.description_wrapper){a[0].settings.description_wrapper=jQuery("#descriptions")
}else{a[0].settings.description_wrapper=false
}return false
});
if(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|PlayBook|NokiaBrowser/i)){jQuery("#gallery .ad-image-wrapper").bind("tap",function(b){a[0].nextImage()
});
jQuery("#gallery .ad-image-wrapper").bind("swipeleft",function(b){a[0].nextImage()
});
jQuery("#gallery .ad-image-wrapper").bind("swiperight",function(b){a[0].prevImage()
})
}});
(function(g){g.fn.adGallery=function(j){var l={loader_image:"/etc/designs/generics2/library/images/photogallery/loader.gif",start_at_index:0,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:true,callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};
var k=g.extend(false,l,j);
if(j&&j.slideshow){k.slideshow=g.extend(false,l.slideshow,j.slideshow)
}if(!k.slideshow.enable){k.slideshow.autostart=false
}var i=[];
g(this).each(function(){var m=new c(this,k);
i[i.length]=m
});
return i
};
function f(j,k,l){var m=parseInt(j.css("top"),10);
if(k=="left"){var i="-"+this.image_wrapper_height+"px";
j.css("top",this.image_wrapper_height+"px")
}else{var i=this.image_wrapper_height+"px";
j.css("top","-"+this.image_wrapper_height+"px")
}if(l){l.css("bottom","-"+l[0].offsetHeight+"px");
l.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{top:i},new_image:{top:m}}
}function e(j,k,m){var l=parseInt(j.css("left"),10);
if(k=="left"){var i="-"+this.image_wrapper_width+"px";
j.css("left",this.image_wrapper_width+"px")
}else{var i=this.image_wrapper_width+"px";
j.css("left","-"+this.image_wrapper_width+"px")
}if(m){m.css("bottom","-"+m[0].offsetHeight+"px");
m.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{left:i},new_image:{left:l}}
}function d(k,l,n){var j=k.width();
var i=k.height();
var m=parseInt(k.css("left"),10);
var o=parseInt(k.css("top"),10);
k.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});
return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:j,height:i,top:o,left:m}}
}function b(i,j,k){i.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1}}
}function h(i,j,k){i.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1},speed:0}
}function c(j,i){this.init(j,i)
}c.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(m,l){var k=this;
this.wrapper=g(m);
this.settings=l;
this.setupElements();
this.setupAnimations();
if(this.settings.width){this.image_wrapper_width=this.settings.width;
this.image_wrapper.width(this.settings.width);
this.wrapper.width(this.settings.width)
}else{this.image_wrapper_width=this.image_wrapper.width()
}if(this.settings.height){this.image_wrapper_height=this.settings.height;
this.image_wrapper.height(this.settings.height)
}else{this.image_wrapper_height=this.image_wrapper.height()
}this.nav_display_width=this.nav.width();
this.current_index=0;
this.current_image=false;
this.current_description=false;
this.in_transition=false;
this.findImages();
if(this.settings.display_next_and_prev){this.initNextAndPrev()
}var i=function(n){return k.nextImage(n)
};
this.slideshow=new a(i,this.settings.slideshow);
this.controls.append(this.slideshow.create());
if(this.settings.slideshow.enable){this.slideshow.enable()
}else{this.slideshow.disable()
}if(this.settings.display_back_and_forward){this.initBackAndForward()
}if(this.settings.enable_keyboard_move){this.initKeyEvents()
}var j=parseInt(this.settings.start_at_index,10);
if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){j=window.location.hash.replace(/[^0-9]+/g,"");
if((j*1)!=j){j=this.settings.start_at_index
}}this.loading(true);
this.showImage(j,function(){if(k.settings.slideshow.autostart){k.preloadImage(j+1);
k.slideshow.start()
}});
this.fireCallback(this.settings.callbacks.init)
},setupAnimations:function(){this.animations={"slide-vert":f,"slide-hori":e,resize:d,fade:b,none:h}
},setupElements:function(){this.controls=this.wrapper.find(".ad-controls");
this.gallery_info=g('<p class="ad-info"></p>');
this.controls.append(this.gallery_info);
this.image_wrapper=this.wrapper.find(".ad-image-wrapper");
this.image_wrapper.empty();
this.nav=this.wrapper.find(".ad-nav");
this.thumbs_wrapper=this.nav.find(".ad-thumbs");
this.preloads=g('<div class="ad-preloads"></div>');
this.loader=g('<img class="ad-loader" src="'+this.settings.loader_image+'">');
this.image_wrapper.append(this.loader);
this.loader.hide();
g(document.body).append(this.preloads)
},loading:function(i){if(i){this.loader.show()
}else{this.loader.hide()
}},addAnimation:function(i,j){if(g.isFunction(j)){this.animations[i]=j
}},findImages:function(){var n=this;
this.images=[];
var m=0;
var l=0;
var k=this.thumbs_wrapper.find("a");
var j=k.length;
if(this.settings.thumb_opacity<1){k.find("img").css("opacity",this.settings.thumb_opacity)
}k.each(function(p){var r=g(this);
var q=r.attr("href");
var o=r.find("img");
if(!n.isImageLoaded(o[0])){o.load(function(){m+=this.parentNode.parentNode.offsetWidth;
l++
})
}else{m+=o[0].parentNode.parentNode.offsetWidth;
l++
}r.addClass("ad-thumb"+p);
r.click(function(){n.showImage(p);
n.slideshow.stop();
return false
}).hover(function(){if(!g(this).is(".ad-active")&&n.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,1)
}n.preloadImage(p)
},function(){if(!g(this).is(".ad-active")&&n.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,n.settings.thumb_opacity)
}});
var r=false;
if(o.data("ad-link")){r=o.data("ad-link")
}else{if(o.attr("longdesc")&&o.attr("longdesc").length){r=o.attr("longdesc")
}}var t=false;
if(o.data("ad-desc")){t=o.data("ad-desc")
}else{if(o.attr("alt")&&o.attr("alt").length){t=o.attr("alt")
}}var s=false;
if(o.data("ad-title")){s=o.data("ad-title")
}else{if(o.attr("title")&&o.attr("title").length){s=o.attr("title")
}}n.images[p]={thumb:o.attr("src"),image:q,error:false,preloaded:false,desc:t,title:s,size:false,link:r}
});
var i=setInterval(function(){if(j==l){m-=100;
var q=n.nav.find(".ad-thumb-list");
q.css("width",m+"px");
var p=1;
var o=q.height();
while(p<201){q.css("width",(m+p)+"px");
if(o!=q.height()){break
}o=q.height();
p++
}clearInterval(i)
}},100)
},initKeyEvents:function(){var i=this;
g(document).keydown(function(j){if(j.keyCode==39){i.nextImage();
i.slideshow.stop()
}else{if(j.keyCode==37){i.prevImage();
i.slideshow.stop()
}}})
},initNextAndPrev:function(){this.next_link=g('<div class="ad-next"><div class="ad-next-image"></div></div>');
this.prev_link=g('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
this.image_wrapper.append(this.next_link);
this.image_wrapper.append(this.prev_link);
var i=this;
this.prev_link.add(this.next_link).mouseover(function(j){g(this).css("height",i.image_wrapper_height);
g(this).find("div").show()
}).mouseout(function(j){g(this).find("div").hide()
}).click(function(){if(g(this).is(".ad-next")){i.nextImage();
i.slideshow.stop()
}else{i.prevImage();
i.slideshow.stop()
}}).find("div").css("opacity",0.7)
},initBackAndForward:function(){var k=this;
this.scroll_forward=g('<div class="ad-forward"></div>');
this.scroll_back=g('<div class="ad-back"></div>');
this.nav.append(this.scroll_forward);
this.nav.prepend(this.scroll_back);
var j=0;
var i=false;
g(this.scroll_back).add(this.scroll_forward).click(function(){var l=k.nav_display_width-50;
if(k.settings.scroll_jump>0){var l=k.settings.scroll_jump
}if(g(this).is(".ad-forward")){var m=k.thumbs_wrapper.scrollLeft()+l
}else{var m=k.thumbs_wrapper.scrollLeft()-l
}if(k.settings.slideshow.stop_on_scroll){k.slideshow.stop()
}k.thumbs_wrapper.animate({scrollLeft:m+"px"});
return false
}).css("opacity",0.6).hover(function(){var l="left";
if(g(this).is(".ad-forward")){l="right"
}i=setInterval(function(){j++;
if(j>30&&k.settings.slideshow.stop_on_scroll){k.slideshow.stop()
}var m=k.thumbs_wrapper.scrollLeft()+1;
if(l=="left"){m=k.thumbs_wrapper.scrollLeft()-1
}k.thumbs_wrapper.scrollLeft(m)
},10);
g(this).css("opacity",1)
},function(){j=0;
clearInterval(i);
g(this).css("opacity",0.6)
})
},_afterShow:function(){this.gallery_info.html((this.current_index+1)+" / "+this.images.length);
if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);
this.next_link.show().css("height",this.image_wrapper_height);
if(this.current_index==(this.images.length-1)){this.next_link.hide()
}if(this.current_index==0){this.prev_link.hide()
}}this.fireCallback(this.settings.callbacks.afterImageVisible)
},_getContainedImageSize:function(j,i){if(i>this.image_wrapper_height){var k=j/i;
i=this.image_wrapper_height;
j=this.image_wrapper_height*k
}if(j>this.image_wrapper_width){var k=i/j;
j=this.image_wrapper_width;
i=this.image_wrapper_width*k
}return{width:j,height:i}
},_centerImage:function(l,j,i){l.css("top","0px");
if(i<this.image_wrapper_height){var k=this.image_wrapper_height-i;
l.css("top",(k/2)+"px")
}l.css("left","0px");
if(j<this.image_wrapper_width){var k=this.image_wrapper_width-j;
l.css("left",(k/2)+"px")
}},_getDescription:function(i){var k=false;
if(i.desc.length||i.title.length){var j="";
if(i.title.length){j='<strong class="ad-description-title">'+i.title+"</strong>"
}var k="";
if(i.desc.length){k="<span>"+i.desc+"</span>"
}k=g('<p class="ad-image-description">'+j+k+"</p>")
}return k
},showImage:function(i,l){if(this.images[i]&&!this.in_transition){var j=this;
var k=this.images[i];
this.in_transition=true;
if(!k.preloaded){this.loading(true);
this.preloadImage(i,function(){j.loading(false);
j._showWhenLoaded(i,l)
})
}else{this._showWhenLoaded(i,l)
}}},_showWhenLoaded:function(q,w){if(this.images[q]){var j=this;
var l=this.images[q];
var m=g(document.createElement("div")).addClass("ad-image");
var o=g(new Image()).attr("src",l.image);
if(l.link){var t=g('<a href="'+l.link+'" target="_blank"></a>');
t.append(o);
m.append(t)
}else{m.append(o)
}this.image_wrapper.prepend(m);
var x=this._getContainedImageSize(l.size.width,l.size.height);
o.attr("width",x.width);
o.attr("height",x.height);
m.css({width:x.width+"px",height:x.height+"px"});
this._centerImage(m,x.width,x.height);
var p=this._getDescription(l,m);
if(p){if(!this.settings.description_wrapper){m.append(p);
var i=x.width-parseInt(p.css("padding-left"),10)-parseInt(p.css("padding-right"),10);
p.css("width",i+"px")
}else{this.settings.description_wrapper.append(p)
}}this.highLightThumb(this.nav.find(".ad-thumb"+q));
var u="right";
if(this.current_index<q){u="left"
}this.fireCallback(this.settings.callbacks.beforeImageVisible);
if(this.current_image||this.settings.animate_first_image){var v=this.settings.animation_speed;
var s="swing";
var n=this.animations[this.settings.effect].call(this,m,u,p);
if(typeof n.speed!="undefined"){v=n.speed
}if(typeof n.easing!="undefined"){s=n.easing
}if(this.current_image){var k=this.current_image;
var r=this.current_description;
k.animate(n.old_image,v,s,function(){k.remove();
if(r){r.remove()
}})
}m.animate(n.new_image,v,s,function(){j.current_index=q;
j.current_image=m;
j.current_description=p;
j.in_transition=false;
j._afterShow();
j.fireCallback(w)
})
}else{this.current_index=q;
this.current_image=m;
j.current_description=p;
this.in_transition=false;
j._afterShow();
this.fireCallback(w)
}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false
}var i=0
}else{var i=this.current_index+1
}return i
},nextImage:function(j){var i=this.nextIndex();
if(i===false){return false
}this.preloadImage(i+1);
this.showImage(i,j);
return true
},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false
}var i=this.images.length-1
}else{var i=this.current_index-1
}return i
},prevImage:function(j){var i=this.prevIndex();
if(i===false){return false
}this.preloadImage(i-1);
this.showImage(i,j);
return true
},preloadAll:function(){var k=this;
var j=0;
function l(){if(j<k.images.length){j++;
k.preloadImage(j,l)
}}k.preloadImage(j,l)
},preloadImage:function(j,m){if(this.images[j]){var l=this.images[j];
if(!this.images[j].preloaded){var i=g(new Image());
i.attr("src",l.image);
if(!this.isImageLoaded(i[0])){this.preloads.append(i);
var k=this;
i.load(function(){l.preloaded=true;
l.size={width:this.width,height:this.height};
k.fireCallback(m)
}).error(function(){l.error=true;
l.preloaded=false;
l.size=false
})
}else{l.preloaded=true;
l.size={width:i[0].width,height:i[0].height};
this.fireCallback(m)
}}else{this.fireCallback(m)
}}},isImageLoaded:function(i){if(typeof i.complete!="undefined"&&!i.complete){return false
}if(typeof i.naturalWidth!="undefined"&&i.naturalWidth==0){return false
}return true
},highLightThumb:function(i){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");
i.addClass("ad-active");
if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);
i.find("img").fadeTo(300,1)
}var j=i[0].parentNode.offsetLeft;
j-=(this.nav_display_width/2)-(i[0].offsetWidth/2);
this.thumbs_wrapper.animate({scrollLeft:j+"px"})
},fireCallback:function(i){if(g.isFunction(i)){i.call(this)
}}};
function a(i,j){this.init(i,j)
}a.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(i,k){var j=this;
this.nextimage_callback=i;
this.settings=k
},create:function(){this.start_link=g('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");
this.stop_link=g('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");
this.countdown=g('<span class="ad-slideshow-countdown"></span>');
this.controls=g('<div class="ad-slideshow-controls"></div>');
this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
this.countdown.hide();
var i=this;
this.start_link.click(function(){i.start()
});
this.stop_link.click(function(){i.stop()
});
g(document).keydown(function(j){if(j.keyCode==83){if(i.running){i.stop()
}else{i.start()
}}});
return this.controls
},disable:function(){this.enabled=false;
this.stop();
this.controls.hide()
},enable:function(){this.enabled=true;
this.controls.show()
},toggle:function(){if(this.enabled){this.disable()
}else{this.enable()
}},start:function(){if(this.running||!this.enabled){return false
}var i=this;
this.running=true;
this.controls.addClass("ad-slideshow-running");
this._next();
this.fireCallback(this.settings.onStart);
return true
},stop:function(){if(!this.running){return false
}this.running=false;
this.countdown.hide();
this.controls.removeClass("ad-slideshow-running");
clearInterval(this.countdown_interval);
this.fireCallback(this.settings.onStop);
return true
},_next:function(){var k=this;
var l=this.settings.countdown_prefix;
var j=this.settings.countdown_sufix;
clearInterval(k.countdown_interval);
this.countdown.show().html(l+(this.settings.speed/1000)+j);
var i=0;
this.countdown_interval=setInterval(function(){i+=1000;
if(i>=k.settings.speed){var n=function(){if(k.running){k._next()
}i=0
};
if(!k.nextimage_callback(n)){k.stop()
}i=0
}var m=parseInt(k.countdown.text().replace(/[^0-9]/g,""),10);
m--;
if(m>0){k.countdown.html(l+m+j)
}},1000)
},fireCallback:function(i){if(g.isFunction(i)){i.call(this)
}}}
})(jQuery);
function sivLoadList(a,c,b){jQuery.ajax({type:"GET",dataType:"html",url:a,success:function(f,d,e){if(f){jQuery("#"+c).html(f)
}if(b!=null&&typeof b=="function"){b.call()
}},error:function(d,f,e){}})
}(function(a){a.fn.jfontsize=function(d){var f=a(this);
var e={btnMinusClasseId:"#jfontsize-minus",btnDefaultClasseId:"#jfontsize-default",btnPlusClasseId:"#jfontsize-plus",btnMinusMaxHits:10,btnPlusMaxHits:10,sizeChange:1};
if((a.isArray(d))||(!d)){d=a.extend(e,d)
}else{e.sizeChange=d;
d=e
}var c=new Array();
var b=new Array();
a(this).each(function(g){c[g]=0;
b[g]
});
a("#jfontsize-minus, #jfontsize-default, #jfontsize-plus").removeAttr("href");
a("#jfontsize-minus, #jfontsize-default, #jfontsize-plus").css("cursor","pointer");
a("#jfontsize-minus").click(function(){f.each(function(g){if(c[g]>(-(d.btnMinusMaxHits))){b[g]=a(this).css("font-size");
b[g]=b[g].replace("px","");
fontsize=a(this).css("font-size");
fontsize=parseInt(fontsize.replace("px",""));
fontsize=fontsize-(d.sizeChange);
b[g]=b[g]-(c[g]*d.sizeChange);
c[g]--;
a(this).css("font-size",fontsize+"px")
}})
});
a("#jfontsize-default").click(function(){f.each(function(g){c[g]=0;
a(this).css("font-size",b[g]+"px")
})
});
a("#jfontsize-plus").click(function(){f.each(function(g){if(c[g]<d.btnPlusMaxHits){b[g]=a(this).css("font-size");
b[g]=b[g].replace("px","");
fontsize=a(this).css("font-size");
fontsize=parseInt(fontsize.replace("px",""));
fontsize=fontsize+d.sizeChange;
b[g]=b[g]-(c[g]*d.sizeChange);
c[g]++;
a(this).css("font-size",fontsize+"px")
}})
})
}
})(jQuery);
SPCPopupCookies={initCookies:function(a){var b=SPC_Cookie.getCookie(a+"_accept_cookies_cond");
if(b==""){$("#spc-popup-cookie").fadeIn("slow");
$("#spc-popup-cookie").removeClass("hide-popup")
}$("#spc-popup-cookie .btn-accept").click(function(c){c.preventDefault;
SPC_Cookie.setCookie(a+"_accept_cookies_cond",true,90);
$("#spc-popup-cookie").fadeOut("slow");
$("#spc-popup-cookie").addClass("hide-popup")
})
}};
SPC_Cookie={getCookie:function(d){var b=d+"=";
var a=document.cookie.split(";");
for(var e=0;
e<a.length;
e++){var f=a[e];
while(f.charAt(0)==" "){f=f.substring(1)
}if(f.indexOf(b)==0){return f.substring(b.length,f.length)
}}return""
},setCookie:function(b,f,c){var e=new Date();
e.setTime(e.getTime()+(c*24*60*60*1000));
var a="expires="+e.toUTCString();
document.cookie=b+"="+f+";"+a+";path=/"
},};
/*!
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * tabs/tabs.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(g){g.tools=g.tools||{version:"v1.2.6"},g.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(b,d){f[b]=d
}};
var f={"default":function(d,c){this.getPanes().hide().eq(d).show(),c.call()
},fade:function(l,k){var o=this.getConf(),n=o.fadeOutSpeed,m=this.getPanes();
n?m.fadeOut(n):m.hide(),m.eq(l).fadeIn(o.fadeInSpeed,k)
},slide:function(e,d){var k=this.getConf();
this.getPanes().slideUp(k.slideUpSpeed),this.getPanes().eq(e).slideDown(k.slideDownSpeed,d)
},ajax:function(d,c){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),c)
}},j,i;
g.tools.tabs.addEffect("horizontal",function(a,k){if(!j){var d=this.getPanes().eq(a),c=this.getCurrentPane();
i||(i=this.getPanes().eq(0).width()),j=!0,d.show(),c.animate({width:0},{step:function(b){d.css("width",i-b)
},complete:function(){g(this).hide(),k.call(),j=!1
}}),c.length||(k.call(),j=!1)
}});
function h(p,o,n){var m=this,l=p.add(this),k=p.find(n.tabs),b=o.jquery?o:p.children(o),a;
k.length||(k=p.children()),b.length||(b=p.parent().find(o)),b.length||(b=g(o)),g.extend(this,{click:function(s,r){var q=k.eq(s);
typeof s=="string"&&s.replace("#","")&&(q=k.filter("[href*="+s.replace("#","")+"]"),s=Math.max(k.index(q),0));
if(n.rotate){var e=k.length-1;
if(s<0){return m.click(e,r)
}if(s>e){return m.click(0,r)
}}if(!q.length){if(a>=0){return m
}s=n.initialIndex,q=k.eq(s)
}if(s===a){return m
}r=r||g.Event(),r.type="onBeforeClick",l.trigger(r,[s]);
if(!r.isDefaultPrevented()){f[n.effect].call(m,s,function(){a=s,r.type="onClick",l.trigger(r,[s])
}),k.removeClass(n.current),q.addClass(n.current);
return m
}},getConf:function(){return n
},getTabs:function(){return k
},getPanes:function(){return b
},getCurrentPane:function(){return b.eq(a)
},getCurrentTab:function(){return k.eq(a)
},getIndex:function(){return a
},next:function(){return m.click(a+1)
},prev:function(){return m.click(a-1)
},destroy:function(){k.unbind(n.event).removeClass(n.current),b.find("a[href^=#]").unbind("click.T");
return m
}}),g.each("onBeforeClick,onClick".split(","),function(d,e){g.isFunction(n[e])&&g(m).bind(e,n[e]),m[e]=function(c){c&&g(m).bind(e,c);
return m
}
}),n.history&&g.fn.history&&(g.tools.history.init(k),n.event="history"),k.each(function(c){g(this).bind(n.event,function(d){m.click(c,d);
return d.preventDefault()
})
}),b.find("a[href^=#]").bind("click.T",function(c){m.click(g(this).attr("href"),c)
}),location.hash&&n.tabs=="a"&&p.find("[href="+location.hash+"]").length?m.click(location.hash):(n.initialIndex===0||n.initialIndex>0)&&m.click(n.initialIndex)
}g.fn.tabs=function(a,k){var e=this.data("tabs");
e&&(e.destroy(),this.removeData("tabs")),g.isFunction(k)&&(k={onBeforeClick:k}),k=g.extend({},g.tools.tabs.conf,k),this.each(function(){e=new h(g(this),a,k),g(this).data("tabs",e)
});
return k.api?e:this
}
})(jQuery);
jQuery(function(){if(jQuery("ul.tabs").length>0){jQuery("ul.tabs").tabs("div.cq-tabctrl-lt1 > div")
}});
(function(b){b.fn.camera=function(a8,a7){function a5(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)){return true
}}function av(){var c=b(aR).width();
b("li",aR).removeClass("camera_visThumb");
b("li",aR).each(function(){var p=b(this).position(),o=b("ul",aR).outerWidth(),n=b("ul",aR).offset().left,m=b("> div",aR).offset().left,l=m-n;
if(l>0){b(".camera_prevThumbs",ag).removeClass("hideNav")
}else{b(".camera_prevThumbs",ag).addClass("hideNav")
}if(o-l>c){b(".camera_nextThumbs",ag).removeClass("hideNav")
}else{b(".camera_nextThumbs",ag).addClass("hideNav")
}var k=p.left,j=p.left+b(this).width();
if(j-l<=c&&k-l>=0){b(this).addClass("camera_visThumb")
}})
}function ar(){function e(){aQ=a4.width();
if(a8.height.indexOf("%")!=-1){var d=Math.round(aQ/(100/parseFloat(a8.height)));
if(a8.minHeight!=""&&d<parseFloat(a8.minHeight)){aP=parseFloat(a8.minHeight)
}else{aP=d
}a4.css({height:aP})
}else{if(a8.height=="auto"){aP=a4.height()
}else{aP=parseFloat(a8.height);
a4.css({height:aP})
}}b(".camerarelative",aZ).css({width:aQ,height:aP});
b(".imgLoaded",aZ).each(function(){var v=b(this),u=v.attr("width"),t=v.attr("height"),s=v.index(),r,q,p=v.attr("data-alignment"),o=v.attr("data-portrait");
if(typeof p==="undefined"||p===false||p===""){p=a8.alignment
}if(typeof o==="undefined"||o===false||o===""){o=a8.portrait
}if(o==false||o=="false"){if(u/t<aQ/aP){var n=aQ/u;
var m=Math.abs(aP-t*n)*0.5;
switch(p){case"topLeft":r=0;
break;
case"topCenter":r=0;
break;
case"topRight":r=0;
break;
case"centerLeft":r="-"+m+"px";
break;
case"center":r="-"+m+"px";
break;
case"centerRight":r="-"+m+"px";
break;
case"bottomLeft":r="-"+m*2+"px";
break;
case"bottomCenter":r="-"+m*2+"px";
break;
case"bottomRight":r="-"+m*2+"px";
break
}v.css({height:t*n,"margin-left":0,"margin-top":r,position:"absolute",visibility:"visible",width:aQ})
}else{var n=aP/t;
var m=Math.abs(aQ-u*n)*0.5;
switch(p){case"topLeft":q=0;
break;
case"topCenter":q="-"+m+"px";
break;
case"topRight":q="-"+m*2+"px";
break;
case"centerLeft":q=0;
break;
case"center":q="-"+m+"px";
break;
case"centerRight":q="-"+m*2+"px";
break;
case"bottomLeft":q=0;
break;
case"bottomCenter":q="-"+m+"px";
break;
case"bottomRight":q="-"+m*2+"px";
break
}v.css({height:aP,"margin-left":q,"margin-top":0,position:"absolute",visibility:"visible",width:u*n})
}}else{if(u/t<aQ/aP){var n=aP/t;
var m=Math.abs(aQ-u*n)*0.5;
switch(p){case"topLeft":q=0;
break;
case"topCenter":q=m+"px";
break;
case"topRight":q=m*2+"px";
break;
case"centerLeft":q=0;
break;
case"center":q=m+"px";
break;
case"centerRight":q=m*2+"px";
break;
case"bottomLeft":q=0;
break;
case"bottomCenter":q=m+"px";
break;
case"bottomRight":q=m*2+"px";
break
}v.css({height:aP,"margin-left":q,"margin-top":0,position:"absolute",visibility:"visible",width:u*n})
}else{var n=aQ/u;
var m=Math.abs(aP-t*n)*0.5;
switch(p){case"topLeft":r=0;
break;
case"topCenter":r=0;
break;
case"topRight":r=0;
break;
case"centerLeft":r=m+"px";
break;
case"center":r=m+"px";
break;
case"centerRight":r=m+"px";
break;
case"bottomLeft":r=m*2+"px";
break;
case"bottomCenter":r=m*2+"px";
break;
case"bottomRight":r=m*2+"px";
break
}v.css({height:t*n,"margin-left":0,"margin-top":r,position:"absolute",visibility:"visible",width:aQ})
}}})
}var f;
if(au==true){clearTimeout(f);
f=setTimeout(e,200)
}else{e()
}au=true
}function ae(f){for(var e,h,g=f.length;
g;
e=parseInt(Math.random()*g),h=f[--g],f[g]=f[e],f[e]=h){}return f
}function ad(c){return Math.ceil(c)==Math.floor(c)
}function aa(){if(b(aR).length&&!b(aS).length){var s=b(aR).outerWidth(),r=b("ul > li",aR).outerWidth(),q=b("li.cameracurrent",aR).length?b("li.cameracurrent",aR).position():"",p=b("ul > li",aR).length*b("ul > li",aR).outerWidth(),o=b("ul",aR).offset().left,n=b("> div",aR).offset().left,m;
if(o<0){m="-"+(n-o)
}else{m=n-o
}if(aF==true){b("ul",aR).width(b("ul > li",aR).length*b("ul > li",aR).outerWidth());
if(b(aR).length&&!b(aS).lenght){a4.css({marginBottom:b(aR).outerHeight()})
}av();
b("ul",aR).width(b("ul > li",aR).length*b("ul > li",aR).outerWidth());
if(b(aR).length&&!b(aS).lenght){a4.css({marginBottom:b(aR).outerHeight()})
}}aF=false;
var l=b("li.cameracurrent",aR).length?q.left:"",f=b("li.cameracurrent",aR).length?q.left+b("li.cameracurrent",aR).outerWidth():"";
if(l<b("li.cameracurrent",aR).outerWidth()){l=0
}if(f-m>s){if(l+s<p){b("ul",aR).animate({"margin-left":"-"+l+"px"},500,av)
}else{b("ul",aR).animate({"margin-left":"-"+(b("ul",aR).outerWidth()-s)+"px"},500,av)
}}else{if(l-m<0){b("ul",aR).animate({"margin-left":"-"+l+"px"},500,av)
}else{b("ul",aR).css({"margin-left":"auto","margin-right":"auto"});
setTimeout(av,100)
}}}}function aJ(){a9=0;
var f=b(".camera_bar_cont",ag).width(),e=b(".camera_bar_cont",ag).height();
if(a2!="pie"){switch(ah){case"leftToRight":b("#"+a1).css({right:f});
break;
case"rightToLeft":b("#"+a1).css({left:f});
break;
case"topToBottom":b("#"+a1).css({bottom:e});
break;
case"bottomToTop":b("#"+a1).css({top:e});
break
}}else{aE.clearRect(0,0,a8.pieDiameter,a8.pieDiameter)
}}function aG(bp){a0.addClass("camerasliding");
ak=false;
var bo=parseFloat(b("div.cameraSlide.cameracurrent",aZ).index());
if(bp>0){var bn=bp-1
}else{if(bo==aB-1){var bn=0
}else{var bn=bo+1
}}var bm=b(".cameraSlide:eq("+bn+")",aZ);
var bl=b(".cameraSlide:eq("+(bn+1)+")",aZ).addClass("cameranext");
if(bo!=bn+1){bl.hide()
}b(".cameraContent",a3).fadeOut(600);
b(".camera_caption",a3).show();
b(".camerarelative",bm).append(b("> div ",a0).eq(bn).find("> div.camera_effected"));
b(".camera_target_content .cameraContent:eq("+bn+")",a4).append(b("> div ",a0).eq(bn).find("> div"));
if(!b(".imgLoaded",bm).length){var bk=aO[bn];
var bj=new Image;
bj.src=bk;
bm.css("visibility","hidden");
bm.prepend(b(bj).attr("class","imgLoaded").css("visibility","hidden"));
var bi,bf;
if(!b(bj).get(0).complete||bi=="0"||bf=="0"||typeof bi==="undefined"||bi===false||typeof bf==="undefined"||bf===false){b(".camera_loader",a4).delay(500).fadeIn(400);
bj.onload=function(){bi=bj.naturalWidth;
bf=bj.naturalHeight;
b(bj).attr("data-alignment",aK[bn]).attr("data-portrait",aL[bn]);
b(bj).attr("width",bi);
b(bj).attr("height",bf);
aZ.find(".cameraSlide_"+bn).hide().css("visibility","visible");
ar();
aG(bn+1)
}
}}else{if(aO.length>bn+1&&!b(".imgLoaded",bl).length){var bd=aO[bn+1];
var S=new Image;
S.src=bd;
bl.prepend(b(S).attr("class","imgLoaded").css("visibility","hidden"));
S.onload=function(){bi=S.naturalWidth;
bf=S.naturalHeight;
b(S).attr("data-alignment",aK[bn+1]).attr("data-portrait",aL[bn+1]);
b(S).attr("width",bi);
b(S).attr("height",bf);
ar()
}
}a8.onLoaded.call(this);
if(b(".camera_loader",a4).is(":visible")){b(".camera_loader",a4).fadeOut(400)
}else{b(".camera_loader",a4).css({visibility:"hidden"});
b(".camera_loader",a4).fadeOut(400,function(){b(".camera_loader",a4).css({visibility:"visible"})
})
}var M=a8.rows,L=a8.cols,K=1,E=0,B,z,y,v,u,t=new Array("simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz");
marginLeft=0,marginTop=0,opacityOnGrid=0;
if(a8.opacityOnGrid==true){opacityOnGrid=0
}else{opacityOnGrid=1
}var s=b(" > div",a0).eq(bn).attr("data-fx");
if(a5()&&a8.mobileFx!=""&&a8.mobileFx!="default"){v=a8.mobileFx
}else{if(typeof s!=="undefined"&&s!==false&&s!=="default"){v=s
}else{v=a8.fx
}}if(v=="random"){v=ae(t);
v=v[0]
}else{v=v;
if(v.indexOf(",")>0){v=v.replace(/ /g,"");
v=v.split(",");
v=ae(v);
v=v[0]
}}dataEasing=b(" > div",a0).eq(bn).attr("data-easing");
mobileEasing=b(" > div",a0).eq(bn).attr("data-mobileEasing");
if(a5()&&a8.mobileEasing!=""&&a8.mobileEasing!="default"){if(typeof mobileEasing!=="undefined"&&mobileEasing!==false&&mobileEasing!=="default"){u=mobileEasing
}else{u=a8.mobileEasing
}}else{if(typeof dataEasing!=="undefined"&&dataEasing!==false&&dataEasing!=="default"){u=dataEasing
}else{u=a8.easing
}}B=b(" > div",a0).eq(bn).attr("data-slideOn");
if(typeof B!=="undefined"&&B!==false){r=B
}else{if(a8.slideOn=="random"){var r=new Array("next","prev");
r=ae(r);
r=r[0]
}else{r=a8.slideOn
}}var h=b(" > div",a0).eq(bn).attr("data-time");
if(typeof h!=="undefined"&&h!==false&&h!==""){z=parseFloat(h)
}else{z=a8.time
}var g=b(" > div",a0).eq(bn).attr("data-transPeriod");
if(typeof g!=="undefined"&&g!==false&&g!==""){y=parseFloat(g)
}else{y=a8.transPeriod
}if(!b(a0).hasClass("camerastarted")){v="simpleFade";
r="next";
u="";
y=400;
b(a0).addClass("camerastarted")
}switch(v){case"simpleFade":L=1;
M=1;
break;
case"curtainTopLeft":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"curtainTopRight":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"curtainBottomLeft":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"curtainBottomRight":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"curtainSliceLeft":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"curtainSliceRight":if(a8.slicedCols==0){L=a8.cols
}else{L=a8.slicedCols
}M=1;
break;
case"blindCurtainTopLeft":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"blindCurtainTopRight":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"blindCurtainBottomLeft":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"blindCurtainBottomRight":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"blindCurtainSliceTop":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"blindCurtainSliceBottom":if(a8.slicedRows==0){M=a8.rows
}else{M=a8.slicedRows
}L=1;
break;
case"stampede":E="-"+y;
break;
case"mosaic":E=a8.gridDifference;
break;
case"mosaicReverse":E=a8.gridDifference;
break;
case"mosaicRandom":break;
case"mosaicSpiral":E=a8.gridDifference;
K=1.7;
break;
case"mosaicSpiralReverse":E=a8.gridDifference;
K=1.7;
break;
case"topLeftBottomRight":E=a8.gridDifference;
K=6;
break;
case"bottomRightTopLeft":E=a8.gridDifference;
K=6;
break;
case"bottomLeftTopRight":E=a8.gridDifference;
K=6;
break;
case"topRightBottomLeft":E=a8.gridDifference;
K=6;
break;
case"scrollLeft":L=1;
M=1;
break;
case"scrollRight":L=1;
M=1;
break;
case"scrollTop":L=1;
M=1;
break;
case"scrollBottom":L=1;
M=1;
break;
case"scrollHorz":L=1;
M=1;
break
}var bq=0;
var R=M*L;
var e=aQ-Math.floor(aQ/L)*L;
var bb=aP-Math.floor(aP/M)*M;
var U;
var f;
var bc=0;
var V=0;
var i=new Array;
var be=new Array;
var W=new Array;
while(bq<R){i.push(bq);
be.push(bq);
ay.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
var j=b(".cameraappended:eq("+bq+")",aZ);
if(v=="scrollLeft"||v=="scrollRight"||v=="scrollTop"||v=="scrollBottom"||v=="scrollHorz"){aj.eq(bn).clone().show().appendTo(j)
}else{if(r=="next"){aj.eq(bn).clone().show().appendTo(j)
}else{aj.eq(bo).clone().show().appendTo(j)
}}if(bq%L<e){U=1
}else{U=0
}if(bq%L==0){bc=0
}if(Math.floor(bq/L)<bb){f=1
}else{f=0
}j.css({height:Math.floor(aP/M+f+1),left:bc,top:V,width:Math.floor(aQ/L+U+1)});
b("> .cameraSlide",j).css({height:aP,"margin-left":"-"+bc+"px","margin-top":"-"+V+"px",width:aQ});
bc=bc+j.width()-1;
if(bq%L==L-1){V=V+j.height()-1
}bq++
}switch(v){case"curtainTopLeft":break;
case"curtainBottomLeft":break;
case"curtainSliceLeft":break;
case"curtainTopRight":i=i.reverse();
break;
case"curtainBottomRight":i=i.reverse();
break;
case"curtainSliceRight":i=i.reverse();
break;
case"blindCurtainTopLeft":break;
case"blindCurtainBottomLeft":i=i.reverse();
break;
case"blindCurtainSliceTop":break;
case"blindCurtainTopRight":break;
case"blindCurtainBottomRight":i=i.reverse();
break;
case"blindCurtainSliceBottom":i=i.reverse();
break;
case"stampede":i=ae(i);
break;
case"mosaic":break;
case"mosaicReverse":i=i.reverse();
break;
case"mosaicRandom":i=ae(i);
break;
case"mosaicSpiral":var bg=M/2,X,k,bh,ab=0;
for(bh=0;
bh<bg;
bh++){k=bh;
for(X=bh;
X<L-bh-1;
X++){W[ab++]=k*L+X
}X=L-bh-1;
for(k=bh;
k<M-bh-1;
k++){W[ab++]=k*L+X
}k=M-bh-1;
for(X=L-bh-1;
X>bh;
X--){W[ab++]=k*L+X
}X=bh;
for(k=M-bh-1;
k>bh;
k--){W[ab++]=k*L+X
}}i=W;
break;
case"mosaicSpiralReverse":var bg=M/2,X,k,bh,ab=R-1;
for(bh=0;
bh<bg;
bh++){k=bh;
for(X=bh;
X<L-bh-1;
X++){W[ab--]=k*L+X
}X=L-bh-1;
for(k=bh;
k<M-bh-1;
k++){W[ab--]=k*L+X
}k=M-bh-1;
for(X=L-bh-1;
X>bh;
X--){W[ab--]=k*L+X
}X=bh;
for(k=M-bh-1;
k>bh;
k--){W[ab--]=k*L+X
}}i=W;
break;
case"topLeftBottomRight":for(var k=0;
k<M;
k++){for(var X=0;
X<L;
X++){W.push(X+k)
}}be=W;
break;
case"bottomRightTopLeft":for(var k=0;
k<M;
k++){for(var X=0;
X<L;
X++){W.push(X+k)
}}be=W.reverse();
break;
case"bottomLeftTopRight":for(var k=M;
k>0;
k--){for(var X=0;
X<L;
X++){W.push(X+k)
}}be=W;
break;
case"topRightBottomLeft":for(var k=0;
k<M;
k++){for(var X=L;
X>0;
X--){W.push(X+k)
}}be=W;
break
}b.each(i,function(w,l){function p(){b(this).addClass("cameraeased");
if(b(".cameraeased",aZ).length>=0){b(aR).css({visibility:"visible"})
}if(b(".cameraeased",aZ).length==R){aa();
b(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",a3).each(function(){b(this).css("visibility","hidden")
});
aj.eq(bn).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent");
aj.eq(bo).css("z-index","1").removeClass("cameracurrent");
b(".cameraContent",a3).eq(bn).addClass("cameracurrent");
if(bo>=0){b(".cameraContent",a3).eq(bo).removeClass("cameracurrent")
}a8.onEndTransition.call(this);
if(b("> div",a0).eq(bn).attr("data-video")!="hide"&&b(".cameraContent.cameracurrent .imgFake",a3).length){b(".cameraContent.cameracurrent .imgFake",a3).click()
}var D=aj.eq(bn).find(".fadeIn").length;
var A=b(".cameraContent",a3).eq(bn).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
if(D!=0){b(".cameraSlide.cameracurrent .fadeIn",a3).each(function(){if(b(this).attr("data-easing")!=""){var Q=b(this).attr("data-easing")
}else{var Q=u
}var P=b(this);
if(typeof P.attr("data-outerWidth")==="undefined"||P.attr("data-outerWidth")===false||P.attr("data-outerWidth")===""){var O=P.outerWidth();
P.attr("data-outerWidth",O)
}else{var O=P.attr("data-outerWidth")
}if(typeof P.attr("data-outerHeight")==="undefined"||P.attr("data-outerHeight")===false||P.attr("data-outerHeight")===""){var N=P.outerHeight();
P.attr("data-outerHeight",N)
}else{var N=P.attr("data-outerHeight")
}var J=P.position();
var I=J.left;
var H=J.top;
var G=P.attr("class");
var F=P.index();
var o=P.parents(".camerarelative").outerHeight();
var c=P.parents(".camerarelative").outerWidth();
if(G.indexOf("fadeIn")!=-1){P.animate({opacity:0},0).css("visibility","visible").delay(z/D*0.1*(F-1)).animate({opacity:1},z/D*0.15,Q)
}else{P.css("visibility","visible")
}})
}b(".cameraContent.cameracurrent",a3).show();
if(A!=0){b(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",a3).each(function(){if(b(this).attr("data-easing")!=""){var m=b(this).attr("data-easing")
}else{var m=u
}var N=b(this);
var J=N.position();
var I=J.left;
var H=J.top;
var G=N.attr("class");
var F=N.index();
var o=N.outerHeight();
if(G.indexOf("moveFromLeft")!=-1){N.css({left:"-"+aQ+"px",right:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({left:J.left},z/A*0.15,m)
}else{if(G.indexOf("moveFromRight")!=-1){N.css({left:aQ+"px",right:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({left:J.left},z/A*0.15,m)
}else{if(G.indexOf("moveFromTop")!=-1){N.css({top:"-"+aP+"px",bottom:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({top:J.top},z/A*0.15,m,function(){N.css({top:"auto",bottom:0})
})
}else{if(G.indexOf("moveFromBottom")!=-1){N.css({top:aP+"px",bottom:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({top:J.top},z/A*0.15,m)
}else{if(G.indexOf("fadeFromLeft")!=-1){N.animate({opacity:0},0).css({left:"-"+aQ+"px",right:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({left:J.left,opacity:1},z/A*0.15,m)
}else{if(G.indexOf("fadeFromRight")!=-1){N.animate({opacity:0},0).css({left:aQ+"px",right:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({left:J.left,opacity:1},z/A*0.15,m)
}else{if(G.indexOf("fadeFromTop")!=-1){N.animate({opacity:0},0).css({top:"-"+aP+"px",bottom:"auto"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({top:J.top,opacity:1},z/A*0.15,m,function(){N.css({top:"auto",bottom:0})
})
}else{if(G.indexOf("fadeFromBottom")!=-1){N.animate({opacity:0},0).css({bottom:"-"+o+"px"});
N.css("visibility","visible").delay(z/A*0.1*(F-1)).animate({bottom:"0",opacity:1},z/A*0.15,m)
}else{if(G.indexOf("fadeIn")!=-1){N.animate({opacity:0},0).css("visibility","visible").delay(z/A*0.1*(F-1)).animate({opacity:1},z/A*0.15,m)
}else{N.css("visibility","visible")
}}}}}}}}}})
}b(".cameraappended",aZ).remove();
a0.removeClass("camerasliding");
aj.eq(bo).hide();
var x=b(".camera_bar_cont",ag).width(),n=b(".camera_bar_cont",ag).height(),C;
if(a2!="pie"){C=0.05
}else{C=0.005
}b("#"+a1).animate({opacity:a8.loaderOpacity},200);
aq=setInterval(function(){if(a0.hasClass("stopped")){clearInterval(aq)
}if(a2!="pie"){if(a9<=1.002&&!a0.hasClass("stopped")&&!a0.hasClass("paused")&&!a0.hasClass("hovered")){a9=a9+C
}else{if(a9<=1&&(a0.hasClass("stopped")||a0.hasClass("paused")||a0.hasClass("stopped")||a0.hasClass("hovered"))){a9=a9
}else{if(!a0.hasClass("stopped")&&!a0.hasClass("paused")&&!a0.hasClass("hovered")){clearInterval(aq);
af();
b("#"+a1).animate({opacity:0},200,function(){clearTimeout(ap);
ap=setTimeout(aJ,q);
aG();
a8.onStartLoading.call(this)
})
}}}switch(ah){case"leftToRight":b("#"+a1).animate({right:x-x*a9},z*C,"linear");
break;
case"rightToLeft":b("#"+a1).animate({left:x-x*a9},z*C,"linear");
break;
case"topToBottom":b("#"+a1).animate({bottom:n-n*a9},z*C,"linear");
break;
case"bottomToTop":b("#"+a1).animate({bottom:n-n*a9},z*C,"linear");
break
}}else{aH=a9;
aE.clearRect(0,0,a8.pieDiameter,a8.pieDiameter);
aE.globalCompositeOperation="destination-over";
aE.beginPath();
aE.arc(a8.pieDiameter/2,a8.pieDiameter/2,a8.pieDiameter/2-a8.loaderStroke,0,Math.PI*2,false);
aE.lineWidth=a8.loaderStroke;
aE.strokeStyle=a8.loaderBgColor;
aE.stroke();
aE.closePath();
aE.globalCompositeOperation="source-over";
aE.beginPath();
aE.arc(a8.pieDiameter/2,a8.pieDiameter/2,a8.pieDiameter/2-a8.loaderStroke,0,Math.PI*2*aH,false);
aE.lineWidth=a8.loaderStroke-a8.loaderPadding*2;
aE.strokeStyle=a8.loaderColor;
aE.stroke();
aE.closePath();
if(a9<=1.002&&!a0.hasClass("stopped")&&!a0.hasClass("paused")&&!a0.hasClass("hovered")){a9=a9+C
}else{if(a9<=1&&(a0.hasClass("stopped")||a0.hasClass("paused")||a0.hasClass("hovered"))){a9=a9
}else{if(!a0.hasClass("stopped")&&!a0.hasClass("paused")&&!a0.hasClass("hovered")){clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},200,function(){clearTimeout(ap);
ap=setTimeout(aJ,q);
aG();
a8.onStartLoading.call(this)
})
}}}}},z*C)
}}if(l%L<e){U=1
}else{U=0
}if(l%L==0){bc=0
}if(Math.floor(l/L)<bb){f=1
}else{f=0
}switch(v){case"simpleFade":height=aP;
width=aQ;
opacityOnGrid=0;
break;
case"curtainTopLeft":height=0,width=Math.floor(aQ/L+U+1),marginTop="-"+Math.floor(aP/M+f+1)+"px";
break;
case"curtainTopRight":height=0,width=Math.floor(aQ/L+U+1),marginTop="-"+Math.floor(aP/M+f+1)+"px";
break;
case"curtainBottomLeft":height=0,width=Math.floor(aQ/L+U+1),marginTop=Math.floor(aP/M+f+1)+"px";
break;
case"curtainBottomRight":height=0,width=Math.floor(aQ/L+U+1),marginTop=Math.floor(aP/M+f+1)+"px";
break;
case"curtainSliceLeft":height=0,width=Math.floor(aQ/L+U+1);
if(l%2==0){marginTop=Math.floor(aP/M+f+1)+"px"
}else{marginTop="-"+Math.floor(aP/M+f+1)+"px"
}break;
case"curtainSliceRight":height=0,width=Math.floor(aQ/L+U+1);
if(l%2==0){marginTop=Math.floor(aP/M+f+1)+"px"
}else{marginTop="-"+Math.floor(aP/M+f+1)+"px"
}break;
case"blindCurtainTopLeft":height=Math.floor(aP/M+f+1),width=0,marginLeft="-"+Math.floor(aQ/L+U+1)+"px";
break;
case"blindCurtainTopRight":height=Math.floor(aP/M+f+1),width=0,marginLeft=Math.floor(aQ/L+U+1)+"px";
break;
case"blindCurtainBottomLeft":height=Math.floor(aP/M+f+1),width=0,marginLeft="-"+Math.floor(aQ/L+U+1)+"px";
break;
case"blindCurtainBottomRight":height=Math.floor(aP/M+f+1),width=0,marginLeft=Math.floor(aQ/L+U+1)+"px";
break;
case"blindCurtainSliceBottom":height=Math.floor(aP/M+f+1),width=0;
if(l%2==0){marginLeft="-"+Math.floor(aQ/L+U+1)+"px"
}else{marginLeft=Math.floor(aQ/L+U+1)+"px"
}break;
case"blindCurtainSliceTop":height=Math.floor(aP/M+f+1),width=0;
if(l%2==0){marginLeft="-"+Math.floor(aQ/L+U+1)+"px"
}else{marginLeft=Math.floor(aQ/L+U+1)+"px"
}break;
case"stampede":height=0;
width=0;
marginLeft=aQ*0.2*(w%L-(L-Math.floor(L/2)))+"px";
marginTop=aP*0.2*(Math.floor(w/L)+1-(M-Math.floor(M/2)))+"px";
break;
case"mosaic":height=0;
width=0;
break;
case"mosaicReverse":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)+"px";
marginTop=Math.floor(aP/M+f+1)+"px";
break;
case"mosaicRandom":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)*0.5+"px";
marginTop=Math.floor(aP/M+f+1)*0.5+"px";
break;
case"mosaicSpiral":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)*0.5+"px";
marginTop=Math.floor(aP/M+f+1)*0.5+"px";
break;
case"mosaicSpiralReverse":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)*0.5+"px";
marginTop=Math.floor(aP/M+f+1)*0.5+"px";
break;
case"topLeftBottomRight":height=0;
width=0;
break;
case"bottomRightTopLeft":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)+"px";
marginTop=Math.floor(aP/M+f+1)+"px";
break;
case"bottomLeftTopRight":height=0;
width=0;
marginLeft=0;
marginTop=Math.floor(aP/M+f+1)+"px";
break;
case"topRightBottomLeft":height=0;
width=0;
marginLeft=Math.floor(aQ/L+U+1)+"px";
marginTop=0;
break;
case"scrollRight":height=aP;
width=aQ;
marginLeft=-aQ;
break;
case"scrollLeft":height=aP;
width=aQ;
marginLeft=aQ;
break;
case"scrollTop":height=aP;
width=aQ;
marginTop=aP;
break;
case"scrollBottom":height=aP;
width=aQ;
marginTop=-aP;
break;
case"scrollHorz":height=aP;
width=aQ;
if(bo==0&&bn==aB-1){marginLeft=-aQ
}else{if(bo<bn||bo==aB-1&&bn==0){marginLeft=aQ
}else{marginLeft=-aQ
}}break
}var d=b(".cameraappended:eq("+l+")",aZ);
if(typeof aq!=="undefined"){clearInterval(aq);
clearTimeout(ap);
ap=setTimeout(aJ,y+E)
}if(b(aS).length){b(".camera_pag li",a4).removeClass("cameracurrent");
b(".camera_pag li",a4).eq(bn).addClass("cameracurrent")
}if(b(aR).length){b("li",aR).removeClass("cameracurrent");
b("li",aR).eq(bn).addClass("cameracurrent");
b("li",aR).not(".cameracurrent").find("img").animate({opacity:0.5},0);
b("li.cameracurrent img",aR).animate({opacity:1},0);
b("li",aR).hover(function(){b("img",this).stop(true,false).animate({opacity:1},150)
},function(){if(!b(this).hasClass("cameracurrent")){b("img",this).stop(true,false).animate({opacity:0.5},150)
}})
}var q=parseFloat(y)+parseFloat(E);
if(v=="scrollLeft"||v=="scrollRight"||v=="scrollTop"||v=="scrollBottom"||v=="scrollHorz"){a8.onStartTransition.call(this);
q=0;
d.delay((y+E)/R*be[w]*K*0.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(aP/M+f+1),"margin-top":0,"margin-left":0,width:Math.floor(aQ/L+U+1)},y-E,u,p);
aj.eq(bo).delay((y+E)/R*be[w]*K*0.5).animate({"margin-left":marginLeft*-1,"margin-top":marginTop*-1},y-E,u,function(){b(this).css({"margin-top":0,"margin-left":0})
})
}else{a8.onStartTransition.call(this);
q=parseFloat(y)+parseFloat(E);
if(r=="next"){d.delay((y+E)/R*be[w]*K*0.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(aP/M+f+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(aQ/L+U+1)},y-E,u,p)
}else{aj.eq(bn).show().css("z-index","999").addClass("cameracurrent");
aj.eq(bo).css("z-index","1").removeClass("cameracurrent");
b(".cameraContent",a3).eq(bn).addClass("cameracurrent");
b(".cameraContent",a3).eq(bo).removeClass("cameracurrent");
d.delay((y+E)/R*be[w]*K*0.5).css({display:"block",height:Math.floor(aP/M+f+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(aQ/L+U+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},y-E,u,p)
}}})
}}var a6={alignment:"center",autoAdvance:true,mobileAutoAdvance:true,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:true,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:0.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:true,navigationHover:true,mobileNavHover:true,opacityOnGrid:false,overlayer:true,pagination:true,playPause:true,pauseOnClick:true,pieDiameter:38,piePosition:"rightTop",portrait:false,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:false,time:7000,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}};
var a8=b.extend({},a6,a8);
var a4=b(this).addClass("camera_wrap");
a4.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
var a3=b(".camera_fakehover",a4);
a3.append('<div class="camera_target"></div>');
if(a8.overlayer==true){a3.append('<div class="camera_overlayer"></div>')
}a3.append('<div class="camera_target_content"></div>');
var a2;
if(a8.loader=="pie"&&b.browser.msie&&b.browser.version<9){a2="bar"
}else{a2=a8.loader
}if(a2=="pie"){a3.append('<div class="camera_pie"></div>')
}else{if(a2=="bar"){a3.append('<div class="camera_bar"></div>')
}else{a3.append('<div class="camera_bar" style="display:none"></div>')
}}if(a8.playPause==true){a3.append('<div class="camera_commands"></div>')
}if(a8.navigation==true){a3.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>')
}if(a8.thumbnails==true){a4.append('<div class="camera_thumbs_cont" />')
}if(a8.thumbnails==true&&a8.pagination!=true){b(".camera_thumbs_cont",a4).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />')
}if(a8.pagination==true){a4.append('<div class="camera_pag"></div>')
}a4.append('<div class="camera_loader"></div>');
b(".camera_caption",a4).each(function(){b(this).wrapInner("<div />")
});
var a1="pie_"+a4.index(),a0=b(".camera_src",a4),aZ=b(".camera_target",a4),aY=b(".camera_target_content",a4),aX=b(".camera_pie",a4),aW=b(".camera_bar",a4),aV=b(".camera_prev",a4),aU=b(".camera_next",a4),aT=b(".camera_commands",a4),aS=b(".camera_pag",a4),aR=b(".camera_thumbs_cont",a4);
var aQ,aP;
var aO=new Array;
b("> div",a0).each(function(){aO.push(b(this).attr("data-src"))
});
var aN=new Array;
b("> div",a0).each(function(){if(b(this).attr("data-link")){aN.push(b(this).attr("data-link"))
}else{aN.push("")
}});
var aM=new Array;
b("> div",a0).each(function(){if(b(this).attr("data-target")){aM.push(b(this).attr("data-target"))
}else{aM.push("")
}});
var aL=new Array;
b("> div",a0).each(function(){if(b(this).attr("data-portrait")){aL.push(b(this).attr("data-portrait"))
}else{aL.push("")
}});
var aK=new Array;
b("> div",a0).each(function(){if(b(this).attr("data-alignment")){aK.push(b(this).attr("data-alignment"))
}else{aK.push("")
}});
var aD=new Array;
b("> div",a0).each(function(){if(b(this).attr("data-thumb")){aD.push(b(this).attr("data-thumb"))
}else{aD.push("")
}});
var aB=aO.length;
b(aY).append('<div class="cameraContents" />');
var aA;
for(aA=0;
aA<aB;
aA++){b(".cameraContents",aY).append('<div class="cameraContent" />');
if(aN[aA]!=""){var az=b("> div ",a0).eq(aA).attr("data-box");
if(typeof az!=="undefined"&&az!==false&&az!=""){az='data-box="'+b("> div ",a0).eq(aA).attr("data-box")+'"'
}else{az=""
}b(".camera_target_content .cameraContent:eq("+aA+")",a4).append('<a class="camera_link" href="'+aN[aA]+'" '+az+' target="'+aM[aA]+'"></a>')
}}b(".camera_caption",a4).each(function(){var d=b(this).parent().index(),e=a4.find(".cameraContent").eq(d);
b(this).appendTo(e)
});
aZ.append('<div class="cameraCont" />');
var ay=b(".cameraCont",a4);
var ax;
for(ax=0;
ax<aB;
ax++){ay.append('<div class="cameraSlide cameraSlide_'+ax+'" />');
var aw=b("> div:eq("+ax+")",a0);
aZ.find(".cameraSlide_"+ax).clone(aw)
}b(window).bind("load resize pageshow",function(){aa();
av()
});
ay.append('<div class="cameraSlide cameraSlide_'+ax+'" />');
var au;
a4.show();
var aQ=aZ.width();
var aP=aZ.height();
var at;
b(window).bind("resize pageshow",function(){if(au==true){ar()
}b("ul",aR).animate({"margin-top":0},0,aa);
if(!a0.hasClass("paused")){a0.addClass("paused");
if(b(".camera_stop",ag).length){b(".camera_stop",ag).hide();
b(".camera_play",ag).show();
if(a2!="none"){b("#"+a1).hide()
}}else{if(a2!="none"){b("#"+a1).hide()
}}clearTimeout(at);
at=setTimeout(function(){a0.removeClass("paused");
if(b(".camera_play",ag).length){b(".camera_play",ag).hide();
b(".camera_stop",ag).show();
if(a2!="none"){b("#"+a1).fadeIn()
}}else{if(a2!="none"){b("#"+a1).fadeIn()
}}},1500)
}});
var aq,ap;
var ao,an,am,aT,aS;
var al,ak;
if(a5()&&a8.mobileAutoAdvance!=""){an=a8.mobileAutoAdvance
}else{an=a8.autoAdvance
}if(an==false){a0.addClass("paused")
}if(a5()&&a8.mobileNavHover!=""){am=a8.mobileNavHover
}else{am=a8.navigationHover
}if(a0.length!=0){var aj=b(".cameraSlide",aZ);
aj.wrapInner('<div class="camerarelative" />');
var ai;
var ah=a8.barDirection;
var ag=a4;
b("iframe",a3).each(function(){var e=b(this);
var g=e.attr("src");
e.attr("data-src",g);
var f=e.parent().index(".camera_src > div");
b(".camera_target_content .cameraContent:eq("+f+")",a4).append(e)
});
function af(){b("iframe",a3).each(function(){b(".camera_caption",a3).show();
var n=b(this);
var m=n.attr("data-src");
n.attr("src",m);
var l=a8.imagePath+"blank.gif";
var k=new Image;
k.src=l;
if(a8.height.indexOf("%")!=-1){var g=Math.round(aQ/(100/parseFloat(a8.height)));
if(a8.minHeight!=""&&g<parseFloat(a8.minHeight)){aP=parseFloat(a8.minHeight)
}else{aP=g
}}else{if(a8.height=="auto"){aP=a4.height()
}else{aP=parseFloat(a8.height)
}}n.after(b(k).attr({"class":"imgFake",width:aQ,height:aP}));
var f=n.clone();
n.remove();
b(k).bind("click",function(){if(b(this).css("position")=="absolute"){b(this).remove();
if(m.indexOf("vimeo")!=-1||m.indexOf("youtube")!=-1){if(m.indexOf("?")!=-1){autoplay="&autoplay=1"
}else{autoplay="?autoplay=1"
}}else{if(m.indexOf("dailymotion")!=-1){if(m.indexOf("?")!=-1){autoplay="&autoPlay=1"
}else{autoplay="?autoPlay=1"
}}}f.attr("src",m+autoplay);
ak=true
}else{b(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(f);
f.css({position:"absolute",top:0,left:0,zIndex:9})
}})
})
}af();
if(a8.hover==true){if(!a5()){a3.hover(function(){a0.addClass("hovered")
},function(){a0.removeClass("hovered")
})
}}if(am==true){b(aV,a4).animate({opacity:0},0);
b(aU,a4).animate({opacity:0},0);
b(aT,a4).animate({opacity:0},0);
if(a5()){a3.live("vmouseover",function(){b(aV,a4).animate({opacity:1},200);
b(aU,a4).animate({opacity:1},200);
b(aT,a4).animate({opacity:1},200)
});
a3.live("vmouseout",function(){b(aV,a4).delay(500).animate({opacity:0},200);
b(aU,a4).delay(500).animate({opacity:0},200);
b(aT,a4).delay(500).animate({opacity:0},200)
})
}else{a3.hover(function(){b(aV,a4).animate({opacity:1},200);
b(aU,a4).animate({opacity:1},200);
b(aT,a4).animate({opacity:1},200)
},function(){b(aV,a4).animate({opacity:0},200);
b(aU,a4).animate({opacity:0},200);
b(aT,a4).animate({opacity:0},200)
})
}}b(".camera_stop",ag).live("click",function(){an=false;
a0.addClass("paused");
if(b(".camera_stop",ag).length){b(".camera_stop",ag).hide();
b(".camera_play",ag).show();
if(a2!="none"){b("#"+a1).hide()
}}else{if(a2!="none"){b("#"+a1).hide()
}}});
b(".camera_play",ag).live("click",function(){an=true;
a0.removeClass("paused");
if(b(".camera_play",ag).length){b(".camera_play",ag).hide();
b(".camera_stop",ag).show();
if(a2!="none"){b("#"+a1).show()
}}else{if(a2!="none"){b("#"+a1).show()
}}});
if(a8.pauseOnClick==true){b(".camera_target_content",a3).mouseup(function(){an=false;
a0.addClass("paused");
b(".camera_stop",ag).hide();
b(".camera_play",ag).show();
b("#"+a1).hide()
})
}b(".cameraContent, .imgFake",a3).hover(function(){al=true
},function(){al=false
});
b(".cameraContent, .imgFake",a3).bind("click",function(){if(ak==true&&al==true){an=false;
b(".camera_caption",a3).hide();
a0.addClass("paused");
b(".camera_stop",ag).hide();
b(".camera_play",ag).show();
b("#"+a1).hide()
}})
}if(a2!="pie"){aW.append('<span class="camera_bar_cont" />');
b(".camera_bar_cont",aW).animate({opacity:a8.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":a8.loaderBgColor}).append('<span id="'+a1+'" />');
b("#"+a1).animate({opacity:0},0);
var ac=b("#"+a1);
ac.css({position:"absolute","background-color":a8.loaderColor});
switch(a8.barPosition){case"left":aW.css({right:"auto",width:a8.loaderStroke});
break;
case"right":aW.css({left:"auto",width:a8.loaderStroke});
break;
case"top":aW.css({bottom:"auto",height:a8.loaderStroke});
break;
case"bottom":aW.css({top:"auto",height:a8.loaderStroke});
break
}switch(ah){case"leftToRight":ac.css({left:0,right:0,top:a8.loaderPadding,bottom:a8.loaderPadding});
break;
case"rightToLeft":ac.css({left:0,right:0,top:a8.loaderPadding,bottom:a8.loaderPadding});
break;
case"topToBottom":ac.css({left:a8.loaderPadding,right:a8.loaderPadding,top:0,bottom:0});
break;
case"bottomToTop":ac.css({left:a8.loaderPadding,right:a8.loaderPadding,top:0,bottom:0});
break
}}else{aX.append('<canvas id="'+a1+'"></canvas>');
var ba;
var ac=document.getElementById(a1);
ac.setAttribute("width",a8.pieDiameter);
ac.setAttribute("height",a8.pieDiameter);
var aC;
switch(a8.piePosition){case"leftTop":aC="left:0; top:0;";
break;
case"rightTop":aC="right:0; top:0;";
break;
case"leftBottom":aC="left:0; bottom:0;";
break;
case"rightBottom":aC="right:0; bottom:0;";
break
}ac.setAttribute("style","position:absolute; z-index:1002; "+aC);
var a9;
var aH;
if(ac&&ac.getContext){var aE=ac.getContext("2d");
aE.rotate(Math.PI*(3/2));
aE.translate(-a8.pieDiameter,0)
}}if(a2=="none"||an==false){b("#"+a1).hide();
b(".camera_canvas_wrap",ag).hide()
}if(b(aS).length){b(aS).append('<ul class="camera_pag_ul" />');
var a;
for(a=0;
a<aB;
a++){b(".camera_pag_ul",a4).append('<li class="pag_nav_'+a+'" style="position:relative; z-index:1002"><span><span>'+a+"</span></span></li>")
}b(".camera_pag_ul li",a4).hover(function(){b(this).addClass("camera_hover");
if(b(".camera_thumb",this).length){var e=b(".camera_thumb",this).outerWidth(),g=b(".camera_thumb",this).outerHeight(),f=b(this).outerWidth();
b(".camera_thumb",this).show().css({top:"-"+g+"px",left:"-"+(e-f)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200);
b(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)
}},function(){b(this).removeClass("camera_hover");
b(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){b(this).css({marginTop:"5px"}).hide()
});
b(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){b(this).css({marginTop:"5px"}).hide()
})
})
}if(b(aR).length){var aI;
if(!b(aS).length){b(aR).append("<div />");
b(aR).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>');
b("> div",aR).append("<ul />");
b.each(aD,function(f,i){if(b("> div",a0).eq(f).attr("data-thumb")!=""){var h=b("> div",a0).eq(f).attr("data-thumb"),g=new Image;
g.src=h;
b("ul",aR).append('<li class="pix_thumb pix_thumb_'+f+'" />');
b("li.pix_thumb_"+f,aR).append(b(g).attr("class","camera_thumb"))
}})
}else{b.each(aD,function(f,i){if(b("> div",a0).eq(f).attr("data-thumb")!=""){var h=b("> div",a0).eq(f).attr("data-thumb"),g=new Image;
g.src=h;
b("li.pag_nav_"+f,aS).append(b(g).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0));
b("li.pag_nav_"+f+" > img",aS).after('<div class="thumb_arrow" />');
b("li.pag_nav_"+f+" > .thumb_arrow",aS).animate({opacity:0},0)
}});
a4.css({marginBottom:b(aS).outerHeight()})
}}else{if(!b(aR).length&&b(aS).length){a4.css({marginBottom:b(aS).outerHeight()})
}}var aF=true;
if(b(aT).length){b(aT).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>');
if(an==true){b(".camera_play",ag).hide();
b(".camera_stop",ag).show()
}else{b(".camera_stop",ag).hide();
b(".camera_play",ag).show()
}}aJ();
b(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",a3).each(function(){b(this).css("visibility","hidden")
});
a8.onStartLoading.call(this);
aG();
if(b(aV).length){b(aV).click(function(){if(!a0.hasClass("camerasliding")){var d=parseFloat(b(".cameraSlide.cameracurrent",aZ).index());
clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",a4).animate({opacity:0},0);
aJ();
if(d!=0){aG(d)
}else{aG(aB)
}a8.onStartLoading.call(this)
}})
}if(b(aU).length){b(aU).click(function(){if(!a0.hasClass("camerasliding")){var d=parseFloat(b(".cameraSlide.cameracurrent",aZ).index());
clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},0);
aJ();
if(d==aB-1){aG(1)
}else{aG(d+2)
}a8.onStartLoading.call(this)
}})
}if(a5()){a3.bind("swipeleft",function(f){if(!a0.hasClass("camerasliding")){var e=parseFloat(b(".cameraSlide.cameracurrent",aZ).index());
clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},0);
aJ();
if(e==aB-1){aG(1)
}else{aG(e+2)
}a8.onStartLoading.call(this)
}});
a3.bind("swiperight",function(f){if(!a0.hasClass("camerasliding")){var e=parseFloat(b(".cameraSlide.cameracurrent",aZ).index());
clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},0);
aJ();
if(e!=0){aG(e)
}else{aG(aB)
}a8.onStartLoading.call(this)
}})
}if(b(aS).length){b(".camera_pag li",a4).click(function(){if(!a0.hasClass("camerasliding")){var f=parseFloat(b(this).index());
var e=parseFloat(b(".cameraSlide.cameracurrent",aZ).index());
if(f!=e){clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},0);
aJ();
aG(f+1);
a8.onStartLoading.call(this)
}}})
}if(b(aR).length){b(".pix_thumb img",aR).click(function(){if(!a0.hasClass("camerasliding")){var f=parseFloat(b(this).parents("li").index());
var e=parseFloat(b(".cameracurrent",aZ).index());
if(f!=e){clearInterval(aq);
af();
b("#"+a1+", .camera_canvas_wrap",ag).animate({opacity:0},0);
b(".pix_thumb",aR).removeClass("cameracurrent");
b(this).parents("li").addClass("cameracurrent");
aJ();
aG(f+1);
aa();
a8.onStartLoading.call(this)
}}});
b(".camera_thumbs_cont .camera_prevThumbs",ag).hover(function(){b(this).stop(true,false).animate({opacity:1},250)
},function(){b(this).stop(true,false).animate({opacity:0.7},250)
});
b(".camera_prevThumbs",ag).click(function(){var g=0,k=b(aR).outerWidth(),j=b("ul",aR).offset().left,i=b("> div",aR).offset().left,h=i-j;
b(".camera_visThumb",aR).each(function(){var d=b(this).outerWidth();
g=g+d
});
if(h-g>0){b("ul",aR).animate({"margin-left":"-"+(h-g)+"px"},500,av)
}else{b("ul",aR).animate({"margin-left":0},500,av)
}});
b(".camera_thumbs_cont .camera_nextThumbs",ag).hover(function(){b(this).stop(true,false).animate({opacity:1},250)
},function(){b(this).stop(true,false).animate({opacity:0.7},250)
});
b(".camera_nextThumbs",ag).click(function(){var h=0,m=b(aR).outerWidth(),l=b("ul",aR).outerWidth(),k=b("ul",aR).offset().left,j=b("> div",aR).offset().left,i=j-k;
b(".camera_visThumb",aR).each(function(){var d=b(this).outerWidth();
h=h+d
});
if(i+h+h<l){b("ul",aR).animate({"margin-left":"-"+(i+h)+"px"},500,av)
}else{b("ul",aR).animate({"margin-left":"-"+(l-m)+"px"},500,av)
}})
}}
})(jQuery);
(function(b){b.fn.cameraStop=function(){var a=b(this),h=b(".camera_src",a),g="pie_"+a.index();
h.addClass("stopped");
if(b(".camera_showcommands").length){var f=b(".camera_thumbs_wrap",a)
}else{var f=a
}}
})(jQuery);
(function(b){b.fn.cameraPause=function(){var a=b(this);
var d=b(".camera_src",a);
d.addClass("paused")
}
})(jQuery);
(function(b){b.fn.cameraResume=function(){var a=b(this);
var d=b(".camera_src",a);
if(typeof autoAdv==="undefined"||autoAdv!==true){d.removeClass("paused")
}}
})(jQuery);
jQuery.fn.endlessRiver=function(a){a=jQuery.extend({speed:100,pause:true,buttons:false},a);
return this.each(function(){var t=jQuery;
var q=t(this);
var p="ER_"+new Date().getTime();
q.wrap('<div id="'+p+'"></div>');
q.css({margin:"0 !important",padding:"0 !important"});
var n,i;
var m=true;
var g=q.offset().left;
var b=1;
q.children("li.tick-clones").remove();
q.addClass("newsticker");
var v=q.wrap("<div class='mask'></div>");
var d=q.parent().wrap("<div class='tickercontainer'></div>");
var k=q.children("li");
var s=function(){b=1;
q.append(k.clone(true).addClass("tick-clones"));
q.children("li").each(function(j){b+=t(this,j).outerWidth(true)
})
};
var r=d.outerWidth(true);
while(b<r){s()
}q.width(b*10);
q.height(q.parent().height());
function o(l,j){q.animate({left:"-="+l},j,"linear",function(){q.children("li:first").appendTo(q);
q.css("left",0);
n=q.children("li:first").outerWidth(true);
i=j/l*n;
if(m){o(n,i)
}})
}n=q.children("li:first").outerWidth(true);
i=n/a.speed*1000;
o(n,i);
function h(){q.hover(f,c)
}function f(){m=false;
q.stop()
}function c(){m=true;
var w=q.offset().left;
var j=w+q.children("li:first").outerWidth(true)-g;
var l=i/n*j;
o(j,l)
}if(a.pause){h()
}if(a.buttons){var e=t('<ul class="er-controls"><li class="prev glyphicon glyphicon-chevron-left"></li><li class="pause glyphicon glyphicon-pause"></li><li class="next glyphicon glyphicon-chevron-right"></li></ul>');
e.insertAfter(d);
t("body").on("click","#"+p+" .er-controls > .pause",function(){if(!m){return false
}t(this).toggleClass("pause glyphicon-pause play glyphicon-play");
q.unbind("mouseenter mouseleave");
m=false
});
t("body").on("click","#"+p+" .er-controls > .play",function(){if(m){return false
}t(this).toggleClass("pause glyphicon-pause play glyphicon-play");
m=true;
h();
var w=q.offset().left;
var j=w+q.children("li:first").outerWidth(true)-g;
var l=i/n*j;
o(j,l)
});
var u=false;
t("body").on("click","#"+p+" .er-controls > .next",function(){if(m){t("#"+p+" .er-controls > .pause").toggleClass("pause glyphicon-pause play glyphicon-play");
m=false;
return
}if(u){return false
}var l=q.children("li:first").outerWidth(true);
var j=l/a.speed*1000;
u=true;
q.stop(true,true).animate({left:"-="+l},j,"linear",function(){q.children("li:first").appendTo(q);
q.css("left",0);
u=false
})
});
t("body").on("click","#"+p+" .er-controls > .prev",function(){if(m){t("#"+p+" .er-controls > .pause").toggleClass("pause glyphicon-pause play glyphicon-play");
m=false;
return
}if(u){return false
}var l=q.children("li:last").outerWidth(true);
q.css("left","-"+l+"px");
q.children("li:last").prependTo(q);
var j=l/a.speed*1000;
u=true;
q.stop(true,true).animate({left:"+="+l},j,"linear",function(){u=false
})
})
}})
};
$(document).ready(function(){$("#myBreakingNews").endlessRiver({speed:100,pause:true,buttons:true})
});