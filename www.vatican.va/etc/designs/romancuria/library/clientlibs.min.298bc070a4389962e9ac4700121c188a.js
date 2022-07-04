$(document).ready(function(){});
RomanCuria={main:function(){RomanCuria.indexPageSearch()
},indexPageSearch:function(){$("#search-criteria").bind("keypress paste focus keyup",function(){console.log("event");
var a=$(this).val().trim();
a=a.replace(/\s+/g,"");
console.log("lenght"+a.length);
if(a.length>2){console.log("cercaaalenght"+a.length);
$("#index-search").click()
}else{console.log("reset");
$(".romancuria_indexpage .wrapper .navigation_component_content .navList_li").show()
}});
$("#index-search").click(function(){var a=$("#search-criteria").val().toLowerCase().replace(/\s+/g,"");
$(".romancuria_indexpage .wrapper .navigation_component_content .navList_li").hide();
$(".romancuria_indexpage .wrapper .navigation_component_content .navList_li .navigation_component .navigation_component_link a").each(function(){var b=$(this).text().toLowerCase().replace(/\s+/g,"");
if(b.indexOf(a)>=0){$(this).parent().parent().parent().show()
}})
})
},};