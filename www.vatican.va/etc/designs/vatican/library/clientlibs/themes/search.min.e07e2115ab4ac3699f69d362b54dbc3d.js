/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)
},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()
};
m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)
},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
},pushStack:function(a){var b=m.merge(this.constructor(),a);
return b.prevObject=this,b.context=this.context,b
},each:function(a,b){return m.each(this,a,b)
},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)
}))
},slice:function(){return this.pushStack(d.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(a){var b=this.length,c=+a+(0>a?b:0);
return this.pushStack(c>=0&&b>c?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor(null)
},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);
i>h;
h++){if(null!=(e=arguments[h])){for(d in e){a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c))
}}}return g
},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isFunction:function(a){return"function"===m.type(a)
},isArray:Array.isArray||function(a){return"array"===m.type(a)
},isWindow:function(a){return null!=a&&a==a.window
},isNumeric:function(a){return !m.isArray(a)&&a-parseFloat(a)+1>=0
},isEmptyObject:function(a){var b;
for(b in a){return !1
}return !0
},isPlainObject:function(a){var b;
if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a)){return !1
}try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf")){return !1
}}catch(c){return !1
}if(k.ownLast){for(b in a){return j.call(a,b)
}}for(b in a){}return void 0===b||j.call(a,b)
},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)
})(b)
},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)
},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);
if(c){if(g){for(;
f>e;
e++){if(d=b.apply(a[e],c),d===!1){break
}}}else{for(e in a){if(d=b.apply(a[e],c),d===!1){break
}}}}else{if(g){for(;
f>e;
e++){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}else{for(e in a){if(d=b.call(a[e],e,a[e]),d===!1){break
}}}}return a
},trim:function(a){return null==a?"":(a+"").replace(n,"")
},makeArray:function(a,b){var c=b||[];
return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
},inArray:function(a,b,c){var d;
if(b){if(g){return g.call(b,a,c)
}for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;
d>c;
c++){if(c in b&&b[c]===a){return c
}}}return -1
},merge:function(a,b){var c=+b.length,d=0,e=a.length;
while(c>d){a[e++]=b[d++]
}if(c!==c){while(void 0!==b[d]){a[e++]=b[d++]
}}return a.length=e,a
},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;
g>f;
f++){d=!b(a[f],f),d!==h&&e.push(a[f])
}return e
},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];
if(h){for(;
g>f;
f++){d=b(a[f],f,c),null!=d&&i.push(d)
}}else{for(f in a){d=b(a[f],f,c),null!=d&&i.push(d)
}}return e.apply([],i)
},guid:1,proxy:function(a,b){var c,e,f;
return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))
},e.guid=a.guid=a.guid||m.guid++,e):void 0
},now:function(){return +new Date
},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()
});
function r(a){var b=a.length,c=m.type(a);
return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a
}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0
},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;
d>c;
c++){if(a[c]===b){return c
}}return -1
},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)
},eb=function(){m()
};
try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType
}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))
}:function(a,b){var c=a.length,d=0;
while(a[c++]=b[d++]){}a.length=c-1
}}
}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;
if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k){return d
}if(!e&&p){if(11!==k&&(f=_.exec(a))){if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode){return d
}if(h.id===j){return d.push(h),d
}}else{if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j){return d.push(h),d
}}}else{if(f[2]){return H.apply(d,b.getElementsByTagName(a)),d
}if((j=f[3])&&c.getElementsByClassName){return H.apply(d,b.getElementsByClassName(j)),d
}}}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;
while(l--){o[l]=s+rb(o[l])
}w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")
}if(x){try{return H.apply(d,w.querySelectorAll(x)),d
}catch(y){}finally{r||b.removeAttribute("id")
}}}}return i(a.replace(R,"$1"),b,d,e)
}function hb(){var a=[];
function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e
}return b
}function ib(a){return a[u]=!0,a
}function jb(a){var b=n.createElement("div");
try{return !!a(b)
}catch(c){return !1
}finally{b.parentNode&&b.parentNode.removeChild(b),b=null
}}function kb(a,b){var c=a.split("|"),e=a.length;
while(e--){d.attrHandle[c[e]]=b
}}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);
if(d){return d
}if(c){while(c=c.nextSibling){if(c===b){return -1
}}}return a?1:-1
}function mb(a){return function(b){var c=b.nodeName.toLowerCase();
return"input"===c&&b.type===a
}
}function nb(a){return function(b){var c=b.nodeName.toLowerCase();
return("input"===c||"button"===c)&&b.type===a
}
}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;
while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))
}})
})
}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;
return b?"HTML"!==b.nodeName:!1
},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;
return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")
}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length
}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length
}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);
return c&&c.parentNode?[c]:[]
}},d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){return a.getAttribute("id")===b
}
}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);
return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");
return c&&c.value===b
}
}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0
}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);
if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)
}return d
}return f
},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0
},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")
}),jb(function(a){var b=g.createElement("input");
b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")
})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)
}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;
return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))
}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return !0
}}}return !1
},B=b?function(a,b){if(a===b){return l=!0,0
}var d=!a.compareDocumentPosition-!b.compareDocumentPosition;
return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)
}:function(a,b){if(a===b){return l=!0,0
}var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
if(!e||!f){return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0
}if(e===f){return lb(a,b)
}c=a;
while(c=c.parentNode){h.unshift(c)
}c=b;
while(c=c.parentNode){i.unshift(c)
}while(h[d]===i[d]){d++
}return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0
},g):n
},gb.matches=function(a,b){return gb(a,null,null,b)
},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b))){try{var d=s.call(a,b);
if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType){return d
}}catch(e){}}return gb(b,n,null,[a]).length>0
},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)
},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);
var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;
return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null
},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;
if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))
}while(e--){a.splice(d[e],1)
}}return k=null,a
},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;
if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent){return a.textContent
}for(a=a.firstChild;
a;
a=a.nextSibling){c+=e(a)
}}else{if(3===f||4===f){return a.nodeValue
}}}else{while(b=a[d++]){c+=e(b)
}}return c
},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a
},PSEUDO:function(a){var b,c=!a[6]&&a[2];
return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))
}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();
return"*"===a?function(){return !0
}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b
}
},CLASS:function(a){var b=y[a+" "];
return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")
})
},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);
return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0
}
},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
return 1===d&&0===e?function(a){return !!a.parentNode
}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;
if(q){if(f){while(p){l=b;
while(l=l[p]){if(h?l.nodeName.toLowerCase()===r:1===l.nodeType){return !1
}}o=p="only"===a&&!o&&"nextSibling"
}return !0
}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];
while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];
break
}}}else{if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w){m=j[1]
}else{while(l=++n&&l&&l[p]||(m=n=0)||o.pop()){if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b)){break
}}}}return m-=e,m===d||m%d===0&&m/d>=0
}}
},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);
return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;
while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g])
}}):function(a){return e(a,0,c)
}):e
}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));
return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;
while(h--){(f=g[h])&&(a[h]=!(b[h]=f))
}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()
}
}),has:ib(function(a){return function(b){return gb(a,b).length>0
}
}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1
}
}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;
do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang")){return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")
}}while((b=b.parentNode)&&1===b.nodeType);
return !1
}
}),target:function(b){var c=a.location&&a.location.hash;
return c&&c.slice(1)===b.id
},root:function(a){return a===o
},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:function(a){return a.disabled===!1
},disabled:function(a){return a.disabled===!0
},checked:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&!!a.checked||"option"===b&&!!a.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !d.pseudos.empty(a)
},header:function(a){return Z.test(a.nodeName)
},input:function(a){return Y.test(a.nodeName)
},button:function(a){var b=a.nodeName.toLowerCase();
return"input"===b&&"button"===a.type||"button"===b
},text:function(a){var b;
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())
},first:ob(function(){return[0]
}),last:ob(function(a,b){return[b-1]
}),eq:ob(function(a,b,c){return[0>c?c+b:c]
}),even:ob(function(a,b){for(var c=0;
b>c;
c+=2){a.push(c)
}return a
}),odd:ob(function(a,b){for(var c=1;
b>c;
c+=2){a.push(c)
}return a
}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;
--d>=0;
){a.push(d)
}return a
}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;
++d<b;
){a.push(d)
}return a
})}},d.pseudos.nth=d.pseudos.eq;
for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=mb(b)
}for(b in {submit:!0,reset:!0}){d.pseudos[b]=nb(b)
}function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];
if(k){return b?0:k.slice(0)
}h=a,i=[],j=d.preFilter;
while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));
for(g in d.filter){!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))
}if(!c){break
}}return b?h.length:h?gb.error(a):z(a,i).slice(0)
};
function rb(a){for(var b=0,c=a.length,d="";
c>b;
b++){d+=a[b].value
}return d
}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;
return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e){return a(b,c,f)
}}}:function(b,c,g){var h,i,j=[w,f];
if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g)){return !0
}}}else{while(b=b[d]){if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f){return j[2]=h[2]
}if(i[d]=j,j[2]=a(b,c,g)){return !0
}}}}}
}function tb(a){return a.length>1?function(b,c,d){var e=a.length;
while(e--){if(!a[e](b,c,d)){return !1
}}return !0
}:a[0]
}function ub(a,b,c){for(var d=0,e=b.length;
e>d;
d++){gb(a,b[d],c)
}return c
}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;
i>h;
h++){(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h))
}return g
}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;
if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;
while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))
}}if(f){if(e||a){if(e){j=[],k=r.length;
while(k--){(l=r[k])&&j.push(q[k]=l)
}e(null,r=[],j,i)
}k=r.length;
while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))
}}}else{r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)
}})
}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b
},h,!0),l=sb(function(a){return J(b,a)>-1
},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));
return b=null,e
}];
f>i;
i++){if(c=d.relative[a[i].type]){m=[sb(tb(m),c)]
}else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;
f>e;
e++){if(d.relative[a[e].type]){break
}}return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))
}m.push(c)
}}return tb(m)
}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||0.1,x=u.length;
for(k&&(j=g!==n&&g);
q!==x&&null!=(l=u[q]);
q++){if(e&&l){m=0;
while(o=a[m++]){if(o(l,g,h)){i.push(l);
break
}}k&&(w=v)
}c&&((l=!o&&l)&&p--,f&&r.push(l))
}if(p+=q,c&&q!==p){m=0;
while(o=b[m++]){o(r,s,g,h)
}if(f){if(p>0){while(q--){r[q]||s[q]||(s[q]=F.call(i))
}}s=vb(s)
}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)
}return k&&(w=v,j=t),r
};
return c?ib(f):f
}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];
if(!f){b||(b=g(a)),c=b.length;
while(c--){f=xb(b[c]),f[u]?d.push(f):e.push(f)
}f=A(a,yb(e,d)),f.selector=a
}return f
},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);
if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b){return e
}n&&(b=b.parentNode),a=a.slice(j.shift().value.length)
}i=X.needsContext.test(a)?0:j.length;
while(i--){if(k=j[i],d.relative[l=k.type]){break
}if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a){return H.apply(e,f),e
}break
}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e
},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))
}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)
}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue
}),jb(function(a){return null==a.getAttribute("disabled")
})||kb(K,function(a,b,c){var d;
return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null
}),gb
}(a);
m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;
var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;
function w(a,b,c){if(m.isFunction(b)){return m.grep(a,function(a,d){return !!b.call(a,d,a)!==c
})
}if(b.nodeType){return m.grep(a,function(a){return a===b!==c
})
}if("string"==typeof b){if(v.test(b)){return m.filter(b,a,c)
}b=m.filter(b,a)
}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c
})
}m.filter=function(a,b,c){var d=b[0];
return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType
}))
},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;
if("string"!=typeof a){return this.pushStack(m(a).filter(function(){for(b=0;
e>b;
b++){if(m.contains(d[b],this)){return !0
}}}))
}for(b=0;
e>b;
b++){m.find(a,d[b],c)
}return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c
},filter:function(a){return this.pushStack(w(this,a||[],!1))
},not:function(a){return this.pushStack(w(this,a||[],!0))
},is:function(a){return !!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length
}});
var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;
if(!a){return this
}if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b){return !b||b.jquery?(b||x).find(a):this.constructor(b).find(a)
}if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b)){for(c in b){m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2]){return x.find(a)
}this.length=1,this[0]=d
}return this.context=y,this.selector=a,this
}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))
};
A.prototype=m.fn,x=m(y);
var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};
m.extend({dir:function(a,b,c){var d=[],e=a[b];
while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c))){1===e.nodeType&&d.push(e),e=e[b]
}return d
},sibling:function(a,b){for(var c=[];
a;
a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)
}return c
}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;
return this.filter(function(){for(b=0;
d>b;
b++){if(m.contains(this,c[b])){return !0
}}})
},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;
e>d;
d++){for(c=this[d];
c&&c!==b;
c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);
break
}}}return this.pushStack(f.length>1?m.unique(f):f)
},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}});
function D(a,b){do{a=a[b]
}while(a&&1!==a.nodeType);
return a
}m.each({parent:function(a){var b=a.parentNode;
return b&&11!==b.nodeType?b:null
},parents:function(a){return m.dir(a,"parentNode")
},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)
},next:function(a){return D(a,"nextSibling")
},prev:function(a){return D(a,"previousSibling")
},nextAll:function(a){return m.dir(a,"nextSibling")
},prevAll:function(a){return m.dir(a,"previousSibling")
},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)
},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)
},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)
},children:function(a){return m.sibling(a.firstChild)
},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)
}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)
}
});
var E=/\S+/g,F={};
function G(a){var b=F[a]={};
return m.each(a.match(E)||[],function(a,c){b[c]=!0
}),b
}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);
var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;
h&&e>f;
f++){if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;
break
}}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())
},k={add:function(){if(h){var d=h.length;
!function f(b){m.each(b,function(b,c){var d=m.type(c);
"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)
})
}(arguments),b?e=h.length:c&&(g=d,j(c))
}return this
},remove:function(){return h&&m.each(arguments,function(a,c){var d;
while((d=m.inArray(c,h,d))>-1){h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)
}}),this
},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)
},empty:function(){return h=[],e=0,this
},disable:function(){return h=i=c=void 0,this
},disabled:function(){return !h
},lock:function(){return i=void 0,c||k.disable(),this
},locked:function(){return !i
},fireWith:function(a,c){return !h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c
},always:function(){return e.done(arguments).fail(arguments),this
},then:function(){var a=arguments;
return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];
e[f[1]](function(){var a=g&&g.apply(this,arguments);
a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)
})
}),a=null
}).promise()
},promise:function(a){return null!=a?m.extend(a,d):d
}},e={};
return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];
d[f[1]]=g.add,h&&g.add(function(){c=h
},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this
},e[f[0]+"With"]=g.fireWith
}),d.promise(e),a&&a.call(e,e),e
},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)
}
},i,j,k;
if(e>1){for(i=new Array(e),j=new Array(e),k=new Array(e);
e>b;
b++){c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f
}}return f||g.resolveWith(k,c),g.promise()
}});
var H;
m.fn.ready=function(a){return m.ready.promise().done(a),this
},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)
},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body){return setTimeout(m.ready)
}m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))
}}});
function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))
}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())
}m.ready.promise=function(b){if(!H){if(H=m.Deferred(),"complete"===y.readyState){setTimeout(m.ready)
}else{if(y.addEventListener){y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1)
}else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);
var c=!1;
try{c=null==a.frameElement&&y.documentElement
}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")
}catch(a){return setTimeout(e,50)
}I(),m.ready()
}}()
}}}return H.promise(b)
};
var K="undefined",L;
for(L in m(k)){break
}k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))
}),function(){var a=y.createElement("div");
if(null==k.deleteExpando){k.deleteExpando=!0;
try{delete a.test
}catch(b){k.deleteExpando=!1
}}a=null
}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b
};
var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;
function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();
if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c
}catch(e){}m.data(a,b,c)
}else{c=void 0
}}return c
}function P(a){var b;
for(b in a){if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b){return !1
}}return !0
}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b){return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f
}}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;
while(e--){delete d[b[e]]
}if(c?!P(d):!m.isEmptyObject(d)){return
}}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)
}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)
},data:function(a,b,c){return Q(a,b,c)
},removeData:function(a,b){return R(a,b)
},_data:function(a,b,c){return Q(a,b,c,!0)
},_removeData:function(a,b){return R(a,b,!0)
}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;
while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])))
}m._data(f,"parsedAttrs",!0)
}return e
}return"object"==typeof a?this.each(function(){m.data(this,a)
}):arguments.length>1?this.each(function(){m.data(this,a,b)
}):f?O(f,a,m.data(f,a)):void 0
},removeData:function(a){return this.each(function(){m.removeData(this,a)
})
}}),m.extend({queue:function(a,b,c){var d;
return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0
},dequeue:function(a,b){b=b||"fx";
var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)
};
"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()
},_queueHooks:function(a,b){var c=b+"queueHooks";
return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)
})})
}}),m.fn.extend({queue:function(a,b){var c=2;
return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);
m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){m.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])
};
"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";
while(g--){c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))
}return h(),e.promise(b)
}});
var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)
},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
if("object"===m.type(c)){e=!0;
for(h in c){m.access(a,b,h,c[h],!0,f,g)
}}else{if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)
})),b)){for(;
i>h;
h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))
}}}return e?a:j?b.call(a):i?b(a[0],c):f
},W=/^(?:checkbox|radio)$/i;
!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();
if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1
}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;
try{delete b.test
}catch(d){k.deleteExpando=!1
}}}(),function(){var b,c,d=y.createElement("div");
for(b in {submit:!0,change:!0,focusin:!0}){c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1)
}d=null
}();
var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;
function ab(){return !0
}function bb(){return !1
}function cb(){try{return y.activeElement
}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);
if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)
},k.elem=a),b=(b||"").match(E)||[""],h=b.length;
while(h--){f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0)
}a=null
}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);
if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;
while(j--){if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;
while(f--){g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g))
}i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])
}else{for(o in k){m.event.remove(a,o+b[j],c,d,!0)
}}}m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))
}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];
if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);
h;
h=h.parentNode){o.push(h),l=h
}l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)
}n=0;
while((h=o[n++])&&!b.isPropagationStopped()){b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault())
}if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;
try{d[p]()
}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)
}return b.result
}},dispatch:function(a){a=m.event.fix(a);
var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};
if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;
while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;
while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped()){(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,a),a.result
}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
if(h&&i.nodeType&&(!a.button||"click"!==a.type)){for(;
i!=this;
i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;
h>f;
f++){d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d)
}e.length&&g.push({elem:i,handlers:e})
}}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g
},fix:function(a){if(a[m.expando]){return a
}var b,c,d,e=a.type,f=a,g=this.fixHooks[e];
g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;
while(b--){c=d[b],a[c]=f[c]
}return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus){try{return this.focus(),!1
}catch(a){}}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0
},_default:function(a){return m.nodeName(a.target,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});
d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()
}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)
}:function(a,b,c){var d="on"+b;
a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))
},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void (this[m.expando]=!0)):new m.Event(a,b)
},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()
}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c
}}
}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;
c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0
}),m._data(c,"submitBubbles",!0))
})
},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))
},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")
}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)
}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)
})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;
X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)
}),m._data(b,"changeBubbles",!0))
})
},handle:function(a){var b=a.target;
return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0
},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)
}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)
};
m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);
e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)
},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;
e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))
}}
}),m.fn.extend({on:function(a,b,c,d,e){var f,g;
if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);
for(f in a){this.on(f,b,c,a[f],e)
}return this
}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1){d=bb
}else{if(!d){return this
}}return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)
},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)
})
},one:function(a,b,c,d){return this.on(a,b,c,d,1)
},off:function(a,b,c){var d,e;
if(a&&a.preventDefault&&a.handleObj){return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this
}if("object"==typeof a){for(e in a){this.off(e,b,a[e])
}return this
}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)
})
},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)
})
},triggerHandler:function(a,b){var c=this[0];
return c?m.event.trigger(a,b,c,!0):void 0
}});
function db(a){var b=eb.split("|"),c=a.createDocumentFragment();
if(c.createElement){while(b.length){c.createElement(b.pop())
}}return c
}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));
rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;
function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;
if(!f){for(f=[],c=a.childNodes||a;
null!=(d=c[e]);
e++){!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b))
}}return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f
}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)
}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a
}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a
}function yb(a){var b=pb.exec(a.type);
return b?a.type=b[1]:a.removeAttribute("type"),a
}function zb(a,b){for(var c,d=0;
null!=(c=a[d]);
d++){m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))
}}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;
if(h){delete g.handle,g.events={};
for(c in h){for(d=0,e=h[c].length;
e>d;
d++){m.event.add(b,c,h[c][d])
}}}g.data&&(g.data=m.extend({},g.data))
}}function Bb(a,b){var c,d,e;
if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);
for(d in e.events){m.removeEvent(b,d,e.handle)
}b.removeAttribute(m.expando)
}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)
}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);
if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a))){for(d=ub(f),h=ub(a),g=0;
null!=(e=h[g]);
++g){d[g]&&Bb(e,d[g])
}}if(b){if(c){for(h=h||ub(a),d=d||ub(f),g=0;
null!=(e=h[g]);
g++){Ab(e,d[g])
}}else{Ab(a,f)
}}return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f
},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;
n>q;
q++){if(f=a[q],f||0===f){if("object"===m.type(f)){m.merge(p,f.nodeType?[f]:f)
}else{if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];
while(e--){h=h.lastChild
}if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;
while(e--){m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)
}}m.merge(p,h.childNodes),h.textContent="";
while(h.firstChild){h.removeChild(h.firstChild)
}h=o.lastChild
}else{p.push(b.createTextNode(f))
}}}}h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;
while(f=p[q++]){if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;
while(f=h[e++]){ob.test(f.type||"")&&c.push(f)
}}}return h=null,o
},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;
null!=(d=a[h]);
h++){if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events){for(e in g.events){n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle)
}}j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))
}}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))
},null,a,arguments.length)
},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.appendChild(a)
}})
},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);
b.insertBefore(a,b.firstChild)
}})
},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;
null!=(c=d[e]);
e++){b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c))
}return this
},empty:function(){for(var a,b=0;
null!=(a=this[b]);
b++){1===a.nodeType&&m.cleanData(ub(a,!1));
while(a.firstChild){a.removeChild(a.firstChild)
}a.options&&m.nodeName(a,"select")&&(a.options.length=0)
}return this
},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)
})
},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;
if(void 0===a){return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0
}if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");
try{for(;
d>c;
c++){b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a)
}b=0
}catch(e){}}b&&this.empty().append(a)
},null,a,arguments.length)
},replaceWith:function(){var a=arguments[0];
return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)
}),a&&(a.length||a.nodeType)?this:this.remove()
},detach:function(a){return this.remove(a,!0)
},domManip:function(a,b){a=e.apply([],a);
var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);
if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p)){return this.each(function(c){var d=n.eq(c);
q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)
})
}if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;
l>j;
j++){d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j)
}if(f){for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;
f>j;
j++){d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")))
}}i=c=null
}return this
}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;
h>=d;
d++){c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get())
}return this.pushStack(e)
}
});
var Cb,Db={};
function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");
return e.detach(),f
}function Fb(a){var b=y,c=Db[a];
return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c
}!function(){var a;
k.shrinkWrapBlocks=function(){if(null!=a){return a
}a=!1;
var b,c,d;
return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0
}
}();
var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;
a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""
}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle
},Jb=function(a,b,c){var d,e,f,g,h=a.style;
return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"
});
function Lb(a,b){return{get:function(){var c=a();
if(null!=c){return c?void delete this.get:(this.get=b).apply(this,arguments)
}}}
}!function(){var b,c,d,e,f,g,h;
if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g
},boxSizingReliable:function(){return null==f&&i(),f
},pixelPosition:function(){return null==e&&i(),e
},reliableMarginRight:function(){return null==h&&i(),h
}});
function i(){var b,c,d,i;
c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))
}}}(),m.swap=function(a,b,c,d){var e,f,g={};
for(f in b){g[f]=a.style[f],a.style[f]=b[f]
}e=c.apply(a,d||[]);
for(f in b){a.style[f]=g[f]
}return e
};
var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];
function Ub(a,b){if(b in a){return b
}var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;
while(e--){if(b=Tb[e]+c,b in a){return b
}}return d
}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;
h>g;
g++){d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))))
}for(g=0;
h>g;
g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"))
}return a
}function Wb(a,b,c){var d=Pb.exec(b);
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b
}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;
4>f;
f+=2){"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)))
}return g
}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);
if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e)){return e
}d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0
}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"
}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");
return""===c?"1":c
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;
if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c){return g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]
}if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set" in g&&void 0===(c=g.set(a,c,d))))){try{i[b]=c
}catch(j){}}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);
return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get" in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f
}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)
}):Yb(a,b,d):void 0
},set:function(a,c,d){var e=d&&Ib(a);
return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)
}}
}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":b?"1":""
},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)
}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0
}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];
4>d;
d++){e[a+T[d]+b]=f[d]||f[d-2]||f[0]
}return e
}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)
}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;
if(m.isArray(b)){for(d=Ib(a),e=b.length;
e>g;
g++){f[b[g]]=m.css(a,b[g],!1,d)
}return f
}return void 0!==c?m.style(a,b,c):m.css(a,b)
},a,b,arguments.length>1)
},show:function(){return Vb(this,!0)
},hide:function(){return Vb(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()
})
}});
function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];
return a&&a.get?a.get(this):Zb.propHooks._default.get(this)
},run:function(a){var b,c=Zb.propHooks[this.prop];
return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this
}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]
},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now
}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},m.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
}},m.fx=Zb.prototype.init,m.fx.step={};
var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;
if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;
do{h=h||".5",g/=h,m.style(c.elem,a,g+f)
}while(h!==(h=c.cur()/d)&&1!==h&&--i)
}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c
}]};
function fc(){return setTimeout(function(){$b=void 0
}),$b=m.now()
}function gc(a,b){var c,d={height:a},e=0;
for(b=b?1:0;
4>e;
e+=2-b){c=T[e],d["margin"+c]=d["padding"+c]=a
}return b&&(d.opacity=d.width=a),d
}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;
g>f;
f++){if(d=e[f].call(c,b,a)){return d
}}}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");
c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()
}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()
})
})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]
}));
for(d in b){if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d]){continue
}q=!0
}o[d]=r&&r[d]||m.style(a,d)
}else{j=void 0
}}if(m.isEmptyObject(o)){"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j)
}else{r?"hidden" in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()
}),n.done(function(){var b;
m._removeData(a,"fxshow");
for(b in o){m.style(a,b,o[b])
}});
for(d in o){g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))
}}}function jc(a,b){var c,d,e,f,g;
for(c in a){if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];
for(c in f){c in a||(a[c]=f[c],b[c]=e)
}}else{b[d]=e
}}}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem
}),i=function(){if(e){return !1
}for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;
i>g;
g++){j.tweens[g].run(f)
}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)
},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);
return j.tweens.push(d),d
},stop:function(b){var c=0,d=b?j.tweens.length:0;
if(e){return this
}for(e=!0;
d>c;
c++){j.tweens[c].run(1)
}return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this
}}),k=j.props;
for(jc(k,j.opts.specialEasing);
g>f;
f++){if(d=dc[f].call(j,a,k,j.opts)){return d
}}return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)
}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");
for(var c,d=0,e=a.length;
e>d;
d++){c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)
}},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)
}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};
return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)
},d
},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)
},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);
(e||m._data(this,"finish"))&&b.stop(!0)
};
return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)
},stop:function(a,b,c){var d=function(a){var b=a.stop;
delete a.stop,b(c)
};
return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);
if(e){g[e]&&g[e].stop&&d(g[e])
}else{for(e in g){g[e]&&g[e].stop&&cc.test(e)&&d(g[e])
}}for(e=f.length;
e--;
){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))
}(b||!c)&&m.dequeue(this,a)
})
},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;
for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;
b--;
){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))
}for(b=0;
g>b;
b++){d[b]&&d[b].finish&&d[b].finish.call(this)
}delete c.finish
})
}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];
m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)
}
}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)
}
}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;
for($b=m.now();
c<b.length;
c++){a=b[c],a()||b[c]!==a||b.splice(c--,1)
}b.length||m.fx.stop(),$b=void 0
},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()
},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))
},m.fx.stop=function(){clearInterval(_b),_b=null
},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);
c.stop=function(){clearTimeout(d)
}
})
},function(){var a,b,c,d,e;
b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value
}();
var lc=/\r/g;
m.fn.extend({val:function(a){var b,c,d,e=this[0];
if(arguments.length){return d=m.isFunction(a),this.each(function(c){var e;
1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""
})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e))
})
}if(e){return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)
}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");
return null!=b?b:m.trim(m.text(a))
}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;
h>i;
i++){if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f){return b
}g.push(b)
}}return g
},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;
while(g--){if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0){try{d.selected=c=!0
}catch(h){d.scrollHeight
}}else{d.selected=!1
}}return c||(a.selectedIndex=-1),e
}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0
}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
});
var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;
m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)
},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)
})
}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
if(a&&3!==f&&8!==f&&2!==f){return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get" in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set" in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))
}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);
if(f&&1===a.nodeType){while(c=f[e++]){d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)
}}},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;
return a.setAttribute("type",b),c&&(a.value=c),b
}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c
}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;
oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;
return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e
}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null
}
}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void (a.defaultValue=b):mc&&mc.set(a,b,c)
}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);
return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0
}},oc.id=oc.name=oc.coords=function(a,b,c){var d;
return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null
},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);
return c&&c.specified?c.value:void 0
},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)
}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0
}}
})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0
},set:function(a,b){return a.style.cssText=b+""
}});
var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;
m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)
},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]
}catch(b){}})
}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
if(a&&3!==g&&8!==g&&2!==g){return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b]
}},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");
return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1
}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)
}}
}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null
}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this
}),k.enctype||(m.propFix.enctype="encoding");
var uc=/[\t\r\n\f]/g;
m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).addClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;
while(e=b[f++]){d.indexOf(" "+e+" ")<0&&(d+=e+" ")
}g=m.trim(d),c.className!==g&&(c.className=g)
}}}return this
},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;
if(m.isFunction(a)){return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))
})
}if(j){for(b=(a||"").match(E)||[];
i>h;
h++){if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;
while(e=b[f++]){while(d.indexOf(" "+e+" ")>=0){d=d.replace(" "+e+" "," ")
}}g=a?m.trim(d):"",c.className!==g&&(c.className=g)
}}}return this
},toggleClass:function(a,b){var c=typeof a;
return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)
}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];
while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)
}}else{(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")
}})
},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;
d>c;
c++){if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0){return !0
}}return !1
}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)
}
}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)
},bind:function(a,b,c){return this.on(a,null,b,c)
},unbind:function(a,b){return this.off(a,null,b)
},delegate:function(a,b,c,d){return this.on(b,a,c,d)
},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)
}});
var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
m.parseJSON=function(b){if(a.JSON&&a.JSON.parse){return a.JSON.parse(b+"")
}var c,d=null,e=m.trim(b+"");
return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")
}))?Function("return "+e)():m.error("Invalid JSON: "+b)
},m.parseXML=function(b){var c,d;
if(!b||"string"!=typeof b){return null
}try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))
}catch(e){c=void 0
}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c
};
var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");
try{zc=location.href
}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href
}yc=Gc.exec(zc.toLowerCase())||[];
function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");
var d,e=0,f=b.toLowerCase().match(E)||[];
if(m.isFunction(c)){while(d=f[e++]){"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)
}}}
}function Mc(a,b,c,d){var e={},f=a===Ic;
function g(h){var i;
return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);
return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)
}),i
}return g(b.dataTypes[0])||!e["*"]&&g("*")
}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};
for(d in b){void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d])
}return c&&m.extend(!0,a,c),a
}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;
while("*"===i[0]){i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"))
}if(e){for(g in h){if(h[g]&&h[g].test(e)){i.unshift(g);
break
}}}if(i[0] in c){f=i[0]
}else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;
break
}d||(d=g)
}f=f||d
}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0
}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();
if(k[1]){for(g in a.converters){j[g.toLowerCase()]=a.converters[g]
}}f=k.shift();
while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift()){if("*"===f){f=i
}else{if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g){for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));
break
}}}if(g!==!0){if(g&&a["throws"]){b=g(b)
}else{try{b=g(b)
}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}
}}}}}}}return{state:"success",data:b}
}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)
},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};
var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;
if(2===t){if(!j){j={};
while(b=Cc.exec(f)){j[b[1].toLowerCase()]=b[2]
}}b=j[a.toLowerCase()]
}return null==b?null:b
},getAllResponseHeaders:function(){return 2===t?f:null
},setRequestHeader:function(a,b){var c=a.toLowerCase();
return t||(a=s[c]=s[c]||a,r[a]=b),this
},overrideMimeType:function(a){return t||(k.mimeType=a),this
},statusCode:function(a){var b;
if(a){if(2>t){for(b in a){q[b]=[q[b],a[b]]
}}else{v.always(a[v.status])
}}return this
},abort:function(a){var b=a||u;
return i&&i.abort(b),x(0,b),this
}};
if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t){return v
}h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);
for(d in k.headers){v.setRequestHeader(d,k.headers[d])
}if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t)){return v.abort()
}u="abort";
for(d in {success:1,error:1,complete:1}){v[d](k[d])
}if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")
},k.timeout));
try{t=1,i.send(r,x)
}catch(w){if(!(2>t)){throw w
}x(-1,w)
}}else{x(-1,"No Transport")
}function x(a,b,c,d){var j,r,s,u,w,x=b;
2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))
}return v
},getJSON:function(a,b,c){return m.get(a,b,c,"json")
},getScript:function(a,b){return m.get(a,void 0,b,"script")
}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})
}
}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
},m.fn.extend({wrapAll:function(a){if(m.isFunction(a)){return this.each(function(b){m(this).wrapAll(a.call(this,b))
})
}if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;
while(a.firstChild&&1===a.firstChild.nodeType){a=a.firstChild
}return a
}).append(this)
}return this
},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))
}:function(){var b=m(this),c=b.contents();
c.length?c.wrapAll(a):b.append(a)
})
},wrap:function(a){var b=m.isFunction(a);
return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)
}).end()
}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))
},m.expr.filters.visible=function(a){return !m.expr.filters.hidden(a)
};
var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;
function Vc(a,b,c,d){var e;
if(m.isArray(b)){m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)
})
}else{if(c||"object"!==m.type(b)){d(a,b)
}else{for(e in b){Vc(a+"["+e+"]",b[e],c,d)
}}}}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)
};
if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a)){m.each(a,function(){e(this.name,this.value)
})
}else{for(c in a){Vc(c,a[c],b,e)
}}return d.join("&").replace(Qc,"+")
},m.fn.extend({serialize:function(){return m.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");
return a?m.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))
}).map(function(a,b){var c=m(this).val();
return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}
}):{name:b.name,value:c.replace(Sc,"\r\n")}
}).get()
}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()
}:Zc;
var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc){Xc[a](void 0,!0)
}}),k.cors=!!Yc&&"withCredentials" in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;
return{send:function(c,d){var e,f=a.xhr(),g=++Wc;
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields){for(e in a.xhrFields){f[e]=a.xhrFields[e]
}}a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
for(e in c){void 0!==c[e]&&f.setRequestHeader(e,c[e]+"")
}f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;
if(b&&(e||4===f.readyState)){if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e){4!==f.readyState&&f.abort()
}else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);
try{i=f.statusText
}catch(k){i=""
}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404
}}j&&d(h,i,j,f.getAllResponseHeaders())
},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()
},abort:function(){b&&b(void 0,!0)
}}
}});
function Zc(){try{return new a.XMLHttpRequest
}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")
}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a
}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)
}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;
return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))
},c.insertBefore(b,c.firstChild)
},abort:function(){b&&b.onload(void 0,!0)
}}
}});
var _c=[],ad=/(=)\?(?=&|$)|\?\?/;
m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;
return this[a]=!0,a
}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]
},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments
},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0
}),"script"):void 0
}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a){return null
}"boolean"==typeof b&&(c=b,b=!1),b=b||y;
var d=u.exec(a),e=!c&&[];
return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))
};
var bd=m.fn.load;
m.fn.load=function(a,b,c){if("string"!=typeof a&&bd){return bd.apply(this,arguments)
}var d,e,f,g=this,h=a.indexOf(" ");
return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)
}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])
}),this
},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)
}
}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem
}).length
};
var cd=a.document.documentElement;
function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1
}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};
"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using" in b?b.using.call(a,n):l.css(n)
}},m.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)
})
}var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;
if(f){return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d
}},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;
while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position")){a=a.offsetParent
}return a||cd
})
}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);
m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);
return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void (f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)
},a,d,arguments.length,null)
}
}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0
})
}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");
return V(this,function(b,c,d){var e;
return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)
},b,f?d:void 0,f,null)
}
})
}),m.fn.size=function(){return this.length
},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m
});
var ed=a.jQuery,fd=a.$;
return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m
},typeof b===K&&(a.jQuery=a.$=m),m
});
/*! jQuery UI - v1.12.1 - 2019-12-01
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(k){function G(a){for(var c=a.css("visibility");
"inherit"===c;
){a=a.parent(),c=a.css("visibility")
}return"hidden"!==c
}function C(c){for(var d,a;
c.length&&c[0]!==document;
){if(d=c.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(a=parseInt(c.css("zIndex"),10),!isNaN(a)&&0!==a)){return a
}c=c.parent()
}return 0
}function q(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=z(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function z(c){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return c.on("mouseout",a,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")
}).on("mouseover",a,y)
}function y(){k.datepicker._isDisabledDatepicker(x.inline?x.dpDiv.parent()[0]:x.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))
}function J(d,a){k.extend(d,a);
for(var c in a){null==a[c]&&(d[c]=a[c])
}return d
}function w(a){return function(){var c=this.element.val();
a.apply(this,arguments),this._refresh(),c!==this.element.val()&&this._trigger("change")
}
}k.ui=k.ui||{},k.ui.version="1.12.1";
var D=0,B=Array.prototype.slice;
k.cleanData=function(a){return function(d){var e,g,f;
for(f=0;
null!=(g=d[f]);
f++){try{e=k._data(g,"events"),e&&e.remove&&k(g).triggerHandler("remove")
}catch(c){}}a(d)
}
}(k.cleanData),k.widget=function(t,m,v){var f,d,u,c={},p=t.split(".")[0];
t=t.split(".")[1];
var g=p+"-"+t;
return v||(v=m,m=k.Widget),k.isArray(v)&&(v=k.extend.apply(null,[{}].concat(v))),k.expr[":"][g.toLowerCase()]=function(a){return !!k.data(a,g)
},k[p]=k[p]||{},f=k[p][t],d=k[p][t]=function(a,h){return this._createWidget?(arguments.length&&this._createWidget(a,h),void 0):new d(a,h)
},k.extend(d,f,{version:v.version,_proto:k.extend({},v),_childConstructors:[]}),u=new m,u.options=k.widget.extend({},u.options),k.each(v,function(h,a){return k.isFunction(a)?(c[h]=function(){function e(){return m.prototype[h].apply(this,arguments)
}function i(l){return m.prototype[h].apply(this,l)
}return function(){var n,l=this._super,r=this._superApply;
return this._super=e,this._superApply=i,n=a.apply(this,arguments),this._super=l,this._superApply=r,n
}
}(),void 0):(c[h]=a,void 0)
}),d.prototype=k.widget.extend(u,{widgetEventPrefix:f?u.widgetEventPrefix||t:t},c,{constructor:d,namespace:p,widgetName:t,widgetFullName:g}),f?(k.each(f._childConstructors,function(l,a){var h=a.prototype;
k.widget(h.namespace+"."+h.widgetName,d,a._proto)
}),delete f._childConstructors):m._childConstructors.push(d),k.widget.bridge(t,d),d
},k.widget.extend=function(g){for(var d,f,l=B.call(arguments,1),h=0,c=l.length;
c>h;
h++){for(d in l[h]){f=l[h][d],l[h].hasOwnProperty(d)&&void 0!==f&&(g[d]=k.isPlainObject(f)?k.isPlainObject(g[d])?k.widget.extend({},g[d],f):k.widget.extend({},f):f)
}}return g
},k.widget.bridge=function(d,a){var c=a.prototype.widgetFullName||d;
k.fn[d]=function(h){var g="string"==typeof h,e=B.call(arguments,1),f=this;
return g?this.length||"instance"!==h?this.each(function(){var l,m=k.data(this,c);
return"instance"===h?(f=m,!1):m?k.isFunction(m[h])&&"_"!==h.charAt(0)?(l=m[h].apply(m,e),l!==m&&void 0!==l?(f=l&&l.jquery?f.pushStack(l.get()):l,!1):void 0):k.error("no such method '"+h+"' for "+d+" widget instance"):k.error("cannot call methods on "+d+" prior to initialization; attempted to call method '"+h+"'")
}):f=void 0:(e.length&&(h=k.widget.extend.apply(null,[h].concat(e))),this.each(function(){var i=k.data(this,c);
i?(i.option(h||{}),i._init&&i._init()):k.data(this,c,new a(h,this))
})),f
}
},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(c,a){a=k(a||this.defaultElement||this)[0],this.element=k(a),this.uuid=D++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=k(),this.hoverable=k(),this.focusable=k(),this.classesElementLookup={},a!==this&&(k.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(d){d.target===a&&this.destroy()
}}),this.document=k(a.style?a.ownerDocument:a.document||a),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this.options=k.widget.extend({},this.options,this._getCreateOptions(),c),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){var a=this;
this._destroy(),k.each(this.classesElementLookup,function(d,c){a._removeClass(c,d)
}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)
},_destroy:k.noop,widget:function(){return this.element
},option:function(g,d){var f,l,h,c=g;
if(0===arguments.length){return k.widget.extend({},this.options)
}if("string"==typeof g){if(c={},f=g.split("."),g=f.shift(),f.length){for(l=c[g]=k.widget.extend({},this.options[g]),h=0;
f.length-1>h;
h++){l[f[h]]=l[f[h]]||{},l=l[f[h]]
}if(g=f.pop(),1===arguments.length){return void 0===l[g]?null:l[g]
}l[g]=d
}else{if(1===arguments.length){return void 0===this.options[g]?null:this.options[g]
}c[g]=d
}}return this._setOptions(c),this
},_setOptions:function(a){var c;
for(c in a){this._setOption(c,a[c])
}return this
},_setOption:function(a,c){return"classes"===a&&this._setOptionClasses(c),this.options[a]=c,"disabled"===a&&this._setOptionDisabled(c),this
},_setOptionClasses:function(d){var a,c,f;
for(a in d){f=this.classesElementLookup[a],d[a]!==this.options.classes[a]&&f&&f.length&&(c=k(f.get()),this._removeClass(f,a),c.addClass(this._classes({element:c,keys:a,classes:d,add:!0})))
}},_setOptionDisabled:function(a){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!a),a&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_classes:function(d){function a(g,l){var e,h;
for(h=0;
g.length>h;
h++){e=f.classesElementLookup[g[h]]||k(),e=d.add?k(k.unique(e.get().concat(d.element.get()))):k(e.not(d.element).get()),f.classesElementLookup[g[h]]=e,c.push(g[h]),l&&d.classes[g[h]]&&c.push(d.classes[g[h]])
}}var c=[],f=this;
return d=k.extend({element:this.element,classes:this.options.classes||{}},d),this._on(d.element,{remove:"_untrackClassesElement"}),d.keys&&a(d.keys.match(/\S+/g)||[],!0),d.extra&&a(d.extra.match(/\S+/g)||[]),c.join(" ")
},_untrackClassesElement:function(c){var a=this;
k.each(a.classesElementLookup,function(d,e){-1!==k.inArray(c.target,e)&&(a.classesElementLookup[d]=k(e.not(c.target).get()))
})
},_removeClass:function(c,d,a){return this._toggleClass(c,d,a,!1)
},_addClass:function(c,d,a){return this._toggleClass(c,d,a,!0)
},_toggleClass:function(c,f,a,d){d="boolean"==typeof d?d:a;
var h="string"==typeof c||null===c,g={extra:h?f:a,keys:h?c:f,element:h?this.element:c,add:d};
return g.element.toggleClass(this._classes(g),d),this
},_on:function(d,a,c){var g,f=this;
"boolean"!=typeof d&&(c=a,a=d,d=!1),c?(a=g=k(a),this.bindings=this.bindings.add(a)):(c=a,a=this.element,g=this.widget()),k.each(c,function(n,i){function o(){return d||f.options.disabled!==!0&&!k(this).hasClass("ui-state-disabled")?("string"==typeof i?f[i]:i).apply(f,arguments):void 0
}"string"!=typeof i&&(o.guid=i.guid=i.guid||o.guid||k.guid++);
var m=n.match(/^([\w:-]*)\s*(.*)$/),e=m[1]+f.eventNamespace,p=m[2];
p?g.on(e,p,o):a.on(e,o)
})
},_off:function(c,a){a=(a||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,c.off(a).off(a),this.bindings=k(this.bindings.not(c).get()),this.focusable=k(this.focusable.not(c).get()),this.hoverable=k(this.hoverable.not(c).get())
},_delay:function(c,f){function a(){return("string"==typeof c?d[c]:c).apply(d,arguments)
}var d=this;
return setTimeout(a,f||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(c){this._addClass(k(c.currentTarget),null,"ui-state-hover")
},mouseleave:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(c){this._addClass(k(c.currentTarget),null,"ui-state-focus")
},focusout:function(c){this._removeClass(k(c.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(g,d,f){var l,h,c=this.options[g];
if(f=f||{},d=k.Event(d),d.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase(),d.target=this.element[0],h=d.originalEvent){for(l in h){l in d||(d[l]=h[l])
}}return this.element.trigger(d,f),!(k.isFunction(c)&&c.apply(this.element[0],[d].concat(f))===!1||d.isDefaultPrevented())
}},k.each({show:"fadeIn",hide:"fadeOut"},function(c,a){k.Widget.prototype["_"+c]=function(e,h,g){"string"==typeof h&&(h={effect:h});
var d,f=h?h===!0||"number"==typeof h?a:h.effect||a:c;
h=h||{},"number"==typeof h&&(h={duration:h}),d=!k.isEmptyObject(h),h.complete=g,h.delay&&e.delay(h.delay),d&&k.effects&&k.effects.effect[f]?e[c](h):f!==c&&e[f]?e[f](h.duration,h.easing,g):e.queue(function(l){k(this)[c](),g&&g.call(e[0]),l()
})
}
}),k.widget,function(){function L(c,d,a){return[parseFloat(c[0])*(P.test(c[0])?d/100:1),parseFloat(c[1])*(P.test(c[1])?a/100:1)]
}function t(c,a){return parseInt(k.css(c,a),10)||0
}function Q(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:k.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}var m,g=Math.max,O=Math.abs,f=/left|center|right/,v=/top|center|bottom/,p=/[\+\-]\d+(\.[\d]+)?%?/,N=/^\w+/,P=/%$/,M=k.fn.position;
k.position={scrollbarWidth:function(){if(void 0!==m){return m
}var d,a,c=k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),h=c.children()[0];
return k("body").append(c),d=h.offsetWidth,c.css("overflow","scroll"),a=h.offsetWidth,d===a&&(a=c[0].clientWidth),c.remove(),m=d-a
},getScrollInfo:function(d){var a=d.isWindow||d.isDocument?"":d.element.css("overflow-x"),c=d.isWindow||d.isDocument?"":d.element.css("overflow-y"),l="scroll"===a||"auto"===a&&d.width<d.element[0].scrollWidth,h="scroll"===c||"auto"===c&&d.height<d.element[0].scrollHeight;
return{width:h?k.position.scrollbarWidth():0,height:l?k.position.scrollbarWidth():0}
},getWithinInfo:function(d){var a=k(d||window),c=k.isWindow(a[0]),l=!!a[0]&&9===a[0].nodeType,h=!c&&!l;
return{element:a,isWindow:c,isDocument:l,offset:h?k(d).offset():{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:a.outerWidth(),height:a.outerHeight()}
}},k.fn.position=function(c){if(!c||!c.of){return M.apply(this,arguments)
}c=k.extend({},c);
var S,a,i,h,d,s,R=k(c.of),o=k.position.getWithinInfo(c.within),l=k.position.getScrollInfo(o),r=(c.collision||"flip").split(" "),e={};
return s=Q(R),R[0].preventDefault&&(c.at="left top"),a=s.width,i=s.height,h=s.offset,d=k.extend({},h),k.each(["my","at"],function(){var u,T,n=(c[this]||"").split(" ");
1===n.length&&(n=f.test(n[0])?n.concat(["center"]):v.test(n[0])?["center"].concat(n):["center","center"]),n[0]=f.test(n[0])?n[0]:"center",n[1]=v.test(n[1])?n[1]:"center",u=p.exec(n[0]),T=p.exec(n[1]),e[this]=[u?u[0]:0,T?T[0]:0],c[this]=[N.exec(n[0])[0],N.exec(n[1])[0]]
}),1===r.length&&(r[1]=r[0]),"right"===c.at[0]?d.left+=a:"center"===c.at[0]&&(d.left+=a/2),"bottom"===c.at[1]?d.top+=i:"center"===c.at[1]&&(d.top+=i/2),S=L(e.at,a,i),d.left+=S[0],d.top+=S[1],this.each(function(){var ab,u,V=k(this),U=V.outerWidth(),X=V.outerHeight(),W=t(this,"marginLeft"),aa=t(this,"marginTop"),Y=U+W+t(this,"marginRight")+l.width,T=X+aa+t(this,"marginBottom")+l.height,n=k.extend({},d),Z=L(e.my,V.outerWidth(),V.outerHeight());
"right"===c.my[0]?n.left-=U:"center"===c.my[0]&&(n.left-=U/2),"bottom"===c.my[1]?n.top-=X:"center"===c.my[1]&&(n.top-=X/2),n.left+=Z[0],n.top+=Z[1],ab={marginLeft:W,marginTop:aa},k.each(["left","top"],function(ad,ac){k.ui.position[r[ad]]&&k.ui.position[r[ad]][ac](n,{targetWidth:a,targetHeight:i,elemWidth:U,elemHeight:X,collisionPosition:ab,collisionWidth:Y,collisionHeight:T,offset:[S[0]+Z[0],S[1]+Z[1]],my:c.my,at:c.at,within:o,elem:V})
}),c.using&&(u=function(ae){var ah=h.left-n.left,ad=ah+a-U,af=h.top-n.top,ag=af+i-X,ac={target:{element:R,left:h.left,top:h.top,width:a,height:i},element:{element:V,left:n.left,top:n.top,width:U,height:X},horizontal:0>ad?"left":ah>0?"right":"center",vertical:0>ag?"top":af>0?"bottom":"middle"};
U>a&&a>O(ah+ad)&&(ac.horizontal="center"),X>i&&i>O(af+ag)&&(ac.vertical="middle"),ac.important=g(O(ah),O(ad))>g(O(af),O(ag))?"horizontal":"vertical",c.using.call(this,ae,ac)
}),V.offset(k.extend(n,{using:u}))
})
},k.ui.position={fit:{left:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollLeft:V.offset.left,T=V.width,c=U.left-S.collisionPosition.marginLeft,R=d-c,o=c+S.collisionWidth-T-d;
S.collisionWidth>T?R>0&&0>=o?(u=U.left+R+S.collisionWidth-T-d,U.left+=R-u):U.left=o>0&&0>=R?d:R>o?d+T-S.collisionWidth:d:R>0?U.left+=R:o>0?U.left-=o:U.left=g(U.left-c,U.left)
},top:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollTop:V.offset.top,T=S.within.height,c=U.top-S.collisionPosition.marginTop,R=d-c,o=c+S.collisionHeight-T-d;
S.collisionHeight>T?R>0&&0>=o?(u=U.top+R+S.collisionHeight-T-d,U.top+=R-u):U.top=o>0&&0>=R?d:R>o?d+T-S.collisionHeight:d:R>0?U.top+=R:o>0?U.top-=o:U.top=g(U.top-c,U.top)
}},flip:{left:function(ac,Y){var V,ad,T=Y.within,S=T.offset.left+T.scrollLeft,a=T.width,W=T.isWindow?T.scrollLeft:T.offset.left,U=ac.left-Y.collisionPosition.marginLeft,aa=U-W,ab=U+Y.collisionWidth-a-W,Z="left"===Y.my[0]?-Y.elemWidth:"right"===Y.my[0]?Y.elemWidth:0,R="left"===Y.at[0]?Y.targetWidth:"right"===Y.at[0]?-Y.targetWidth:0,X=-2*Y.offset[0];
0>aa?(V=ac.left+Z+R+X+Y.collisionWidth-a-S,(0>V||O(aa)>V)&&(ac.left+=Z+R+X)):ab>0&&(ad=ac.left-Y.collisionPosition.marginLeft+Z+R+X-W,(ad>0||ab>O(ad))&&(ac.left+=Z+R+X))
},top:function(ad,Z){var V,ae,T=Z.within,S=T.offset.top+T.scrollTop,a=T.height,W=T.isWindow?T.scrollTop:T.offset.top,U=ad.top-Z.collisionPosition.marginTop,ab=U-W,ac=U+Z.collisionHeight-a-W,aa="top"===Z.my[1],R=aa?-Z.elemHeight:"bottom"===Z.my[1]?Z.elemHeight:0,Y="top"===Z.at[1]?Z.targetHeight:"bottom"===Z.at[1]?-Z.targetHeight:0,X=-2*Z.offset[1];
0>ab?(ae=ad.top+R+Y+X+Z.collisionHeight-a-S,(0>ae||O(ab)>ae)&&(ad.top+=R+Y+X)):ac>0&&(V=ad.top-Z.collisionPosition.marginTop+R+Y+X-W,(V>0||ac>O(V))&&(ad.top+=R+Y+X))
}},flipfit:{left:function(){k.ui.position.flip.left.apply(this,arguments),k.ui.position.fit.left.apply(this,arguments)
},top:function(){k.ui.position.flip.top.apply(this,arguments),k.ui.position.fit.top.apply(this,arguments)
}}}
}(),k.ui.position,k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(a){return function(c){return !!k.data(c,a)
}
}):function(d,a,c){return !!k.data(d,c[3])
}}),k.fn.extend({disableSelection:function(){var a="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(a+".ui-disableSelection",function(c){c.preventDefault()
})
}
}(),enableSelection:function(){return this.off(".ui-disableSelection")
}}),k.ui.focusable=function(e,g){var t,p,d,m,f,c=e.nodeName.toLowerCase();
return"area"===c?(t=e.parentNode,p=t.name,e.href&&p&&"map"===t.nodeName.toLowerCase()?(d=k("img[usemap='#"+p+"']"),d.length>0&&d.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(c)?(m=!e.disabled,m&&(f=k(e).closest("fieldset")[0],f&&(m=!f.disabled))):m="a"===c?e.href||g:g,m&&k(e).is(":visible")&&G(k(e)))
},k.extend(k.expr[":"],{focusable:function(a){return k.ui.focusable(a,null!=k.attr(a,"tabindex"))
}}),k.ui.focusable,k.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):k(this[0].form)
},k.ui.formResetMixin={_formResetHandler:function(){var a=k(this);
setTimeout(function(){var c=a.data("ui-form-reset-instances");
k.each(c,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var a=this.form.data("ui-form-reset-instances")||[];
a.length||this.form.on("reset.ui-form-reset",this._formResetHandler),a.push(this),this.form.data("ui-form-reset-instances",a)
}},_unbindFormResetHandler:function(){if(this.form.length){var a=this.form.data("ui-form-reset-instances");
a.splice(k.inArray(this,a),1),a.length?this.form.data("ui-form-reset-instances",a):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}},"1.7"===k.fn.jquery.substring(0,3)&&(k.each(["Width","Height"],function(g,d){function f(n,a,m,p){return k.each(l,function(){a-=parseFloat(k.css(n,"padding"+this))||0,m&&(a-=parseFloat(k.css(n,"border"+this+"Width"))||0),p&&(a-=parseFloat(k.css(n,"margin"+this))||0)
}),a
}var l="Width"===d?["Left","Right"]:["Top","Bottom"],h=d.toLowerCase(),c={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};
k.fn["inner"+d]=function(a){return void 0===a?c["inner"+d].call(this):this.each(function(){k(this).css(h,f(this,a)+"px")
})
},k.fn["outer"+d]=function(a,i){return"number"!=typeof a?c["outer"+d].call(this,a):this.each(function(){k(this).css(h,f(this,a,!0,i)+"px")
})
}
}),k.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.ui.escapeSelector=function(){var a=/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
return function(c){return c.replace(a,"\\$1")
}
}(),k.fn.labels=function(){var d,a,c,g,f;
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(g=this.eq(0).parents("label"),c=this.attr("id"),c&&(d=this.eq(0).parents().last(),f=d.add(d.length?d.siblings():this.siblings()),a="label[for='"+k.ui.escapeSelector(c)+"']",g=g.add(f.find(a).addBack(a))),this.pushStack(g))
},k.fn.scrollParent=function(d){var a=this.css("position"),c="absolute"===a,g=d?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var h=k(this);
return c&&"static"===h.css("position")?!1:g.test(h.css("overflow")+h.css("overflow-y")+h.css("overflow-x"))
}).eq(0);
return"fixed"!==a&&f.length?f:k(this[0].ownerDocument||document)
},k.extend(k.expr[":"],{tabbable:function(d){var a=k.attr(d,"tabindex"),c=null!=a;
return(!c||a>=0)&&k.ui.focusable(d,c)
}}),k.fn.extend({uniqueId:function(){var a=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&k(this).removeAttr("id")
})
}}),k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var I=!1;
k(document).on("mouseup",function(){I=!1
}),k.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.on("mousedown."+this.widgetName,function(c){return a._mouseDown(c)
}).on("click."+this.widgetName,function(c){return !0===k.data(c.target,a.widgetName+".preventClickEvent")?(k.removeData(c.target,a.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1):void 0
}),this.started=!1
},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(d){if(!I){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(d),this._mouseDownEvent=d;
var a=this,c=1===d.which,f="string"==typeof this.options.cancel&&d.target.nodeName?k(d.target).closest(this.options.cancel).length:!1;
return c&&!f&&this._mouseCapture(d)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(d)!==!1,!this._mouseStarted)?(d.preventDefault(),!0):(!0===k.data(d.target,this.widgetName+".preventClickEvent")&&k.removeData(d.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return a._mouseMove(e)
},this._mouseUpDelegate=function(e){return a._mouseUp(e)
},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),d.preventDefault(),I=!0,!0)):!0
}},_mouseMove:function(a){if(this._mouseMoved){if(k.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button){return this._mouseUp(a)
}if(!a.which){if(a.originalEvent.altKey||a.originalEvent.ctrlKey||a.originalEvent.metaKey||a.originalEvent.shiftKey){this.ignoreMissingWhich=!0
}else{if(!this.ignoreMissingWhich){return this._mouseUp(a)
}}}}return(a.which||a.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==!1,this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted)
},_mouseUp:function(a){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&k.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,I=!1,a.preventDefault()
},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}}),k.ui.plugin={add:function(d,a,c){var g,f=k.ui[d].prototype;
for(g in c){f.plugins[g]=f.plugins[g]||[],f.plugins[g].push([a,c[g]])
}},call:function(c,f,a,d){var h,g=c.plugins[f];
if(g&&(d||c.element[0].parentNode&&11!==c.element[0].parentNode.nodeType)){for(h=0;
g.length>h;
h++){c.options[g[h][0]]&&g[h][1].apply(c.element,a)
}}}},k.ui.safeActiveElement=function(c){var d;
try{d=c.activeElement
}catch(a){d=c.body
}return d||(d=c.body),d.nodeName||(d=c.body),d
},k.ui.safeBlur=function(a){a&&"body"!==a.nodeName.toLowerCase()&&k(a).trigger("blur")
},k.widget("ui.draggable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()
},_setOption:function(a,c){this._super(a,c),"handle"===a&&(this._removeHandleClassName(),this._setHandleClassName())
},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)
},_mouseCapture:function(c){var a=this.options;
return this.helper||a.disabled||k(c.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(c),this.handle?(this._blurActiveElement(c),this._blockFrames(a.iframeFix===!0?"iframe":a.iframeFix),!0):!1)
},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var c=k(this);
return k("<div>").css("position","absolute").appendTo(c.parent()).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).offset(c.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_blurActiveElement:function(d){var a=k.ui.safeActiveElement(this.document[0]),c=k(d.target);
c.closest(a).length||k.ui.safeBlur(a)
},_mouseStart:function(c){var a=this.options;
return this.helper=this._createHelper(c),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),k.ui.ddmanager&&(k.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===k(this).css("position")
}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(c),this.originalPosition=this.position=this._generatePosition(c,!1),this.originalPageX=c.pageX,this.originalPageY=c.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this._setContainment(),this._trigger("start",c)===!1?(this._clear(),!1):(this._cacheHelperProportions(),k.ui.ddmanager&&!a.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,c),this._mouseDrag(c,!0),k.ui.ddmanager&&k.ui.ddmanager.dragStart(this,c),!0)
},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}
},_mouseDrag:function(d,a){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(d,!0),this.positionAbs=this._convertPositionTo("absolute"),!a){var c=this._uiHash();
if(this._trigger("drag",d,c)===!1){return this._mouseUp(new k.Event("mouseup",d)),!1
}this.position=c.position
}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",k.ui.ddmanager&&k.ui.ddmanager.drag(this,d),!1
},_mouseStop:function(d){var a=this,c=!1;
return k.ui.ddmanager&&!this.options.dropBehaviour&&(c=k.ui.ddmanager.drop(this,d)),this.dropped&&(c=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||this.options.revert===!0||k.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?k(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){a._trigger("stop",d)!==!1&&a._clear()
}):this._trigger("stop",d)!==!1&&this._clear(),!1
},_mouseUp:function(a){return this._unblockFrames(),k.ui.ddmanager&&k.ui.ddmanager.dragStop(this,a),this.handleElement.is(a.target)&&this.element.trigger("focus"),k.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new k.Event("mouseup",{target:this.element[0]})):this._clear(),this
},_getHandle:function(a){return this.options.handle?!!k(a.target).closest(this.element.find(this.options.handle)).length:!0
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper),f=c?k(a.helper.apply(this.element[0],[d])):"clone"===a.helper?this.element.clone().removeAttr("id"):this.element;
return f.parents("body").length||f.appendTo("parent"===a.appendTo?this.element[0].parentNode:a.appendTo),c&&f[0]===this.element[0]&&this._setPositionRelative(),f[0]===this.element[0]||/(fixed|absolute)/.test(f.css("position"))||f.css("position","absolute"),f
},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]
},_getParentOffset:function(){var c=this.offsetParent.offset(),a=this.document[0];
return"absolute"===this.cssPosition&&this.scrollParent[0]!==a&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(c.left+=this.scrollParent.scrollLeft(),c.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(c={top:0,left:0}),{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"!==this.cssPosition){return{top:0,left:0}
}var a=this.element.position(),c=this._isRootNode(this.scrollParent[0]);
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+(c?0:this.scrollParent.scrollTop()),left:a.left-(parseInt(this.helper.css("left"),10)||0)+(c?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,g=this.options,f=this.document[0];
return this.relativeContainer=null,g.containment?"window"===g.containment?(this.containment=[k(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,k(window).scrollLeft()+k(window).width()-this.helperProportions.width-this.margins.left,k(window).scrollTop()+(k(window).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===g.containment?(this.containment=[0,0,k(f).width()-this.helperProportions.width-this.margins.left,(k(f).height()||f.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):g.containment.constructor===Array?(this.containment=g.containment,void 0):("parent"===g.containment&&(g.containment=this.helper[0].parentNode),a=k(g.containment),c=a[0],c&&(d=/(scroll|auto)/.test(a.css("overflow")),this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(d?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=a),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(c,f){f||(f=this.position);
var a="absolute"===c?1:-1,d=this._isRootNode(this.scrollParent[0]);
return{top:f.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:d?0:this.offset.scroll.top)*a,left:f.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:d?0:this.offset.scroll.left)*a}
},_generatePosition:function(L,u){var m,M,f,d,v=this.options,c=this._isRootNode(this.scrollParent[0]),p=L.pageX,g=L.pageY;
return c&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),u&&(this.containment&&(this.relativeContainer?(M=this.relativeContainer.offset(),m=[this.containment[0]+M.left,this.containment[1]+M.top,this.containment[2]+M.left,this.containment[3]+M.top]):m=this.containment,L.pageX-this.offset.click.left<m[0]&&(p=m[0]+this.offset.click.left),L.pageY-this.offset.click.top<m[1]&&(g=m[1]+this.offset.click.top),L.pageX-this.offset.click.left>m[2]&&(p=m[2]+this.offset.click.left),L.pageY-this.offset.click.top>m[3]&&(g=m[3]+this.offset.click.top)),v.grid&&(f=v.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/v.grid[1])*v.grid[1]:this.originalPageY,g=m?f-this.offset.click.top>=m[1]||f-this.offset.click.top>m[3]?f:f-this.offset.click.top>=m[1]?f-v.grid[1]:f+v.grid[1]:f,d=v.grid[0]?this.originalPageX+Math.round((p-this.originalPageX)/v.grid[0])*v.grid[0]:this.originalPageX,p=m?d-this.offset.click.left>=m[0]||d-this.offset.click.left>m[2]?d:d-this.offset.click.left>=m[0]?d-v.grid[0]:d+v.grid[0]:d),"y"===v.axis&&(p=this.originalPageX),"x"===v.axis&&(g=this.originalPageY)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()
},_trigger:function(d,a,c){return c=c||this._uiHash(),k.ui.plugin.call(this,d,[a,c,this],!0),/^(drag|start|stop)/.test(d)&&(this.positionAbs=this._convertPositionTo("absolute"),c.offset=this.positionAbs),k.Widget.prototype._trigger.call(this,d,a,c)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),k.ui.plugin.add("draggable","connectToSortable",{start:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.sortables=[],k(c.options.connectToSortable).each(function(){var e=k(this).sortable("instance");
e&&!e.options.disabled&&(c.sortables.push(e),e.refreshPositions(),e._trigger("activate",d,f))
})
},stop:function(d,a,c){var f=k.extend({},a,{item:c.element});
c.cancelHelperRemoval=!1,k.each(c.sortables,function(){var e=this;
e.isOver?(e.isOver=0,c.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(d),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",d,f))
})
},drag:function(d,a,c){k.each(c.sortables,function(){var f=!1,e=this;
e.positionAbs=c.positionAbs,e.helperProportions=c.helperProportions,e.offset.click=c.offset.click,e._intersectsWith(e.containerCache)&&(f=!0,k.each(c.sortables,function(){return this.positionAbs=c.positionAbs,this.helperProportions=c.helperProportions,this.offset.click=c.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&k.contains(e.element[0],this.element[0])&&(f=!1),f
})),f?(e.isOver||(e.isOver=1,c._parent=a.helper.parent(),e.currentItem=a.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return a.helper[0]
},d.target=e.currentItem[0],e._mouseCapture(d,!0),e._mouseStart(d,!0,!0),e.offset.click.top=c.offset.click.top,e.offset.click.left=c.offset.click.left,e.offset.parent.left-=c.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=c.offset.parent.top-e.offset.parent.top,c._trigger("toSortable",d),c.dropped=e.element,k.each(c.sortables,function(){this.refreshPositions()
}),c.currentItem=c.element,e.fromOutside=c),e.currentItem&&(e._mouseDrag(d),a.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",d,e._uiHash(e)),e._mouseStop(d,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),a.helper.appendTo(c._parent),c._refreshOffsets(d),a.position=c._generatePosition(d,!0),c._trigger("fromSortable",d),c.dropped=!1,k.each(c.sortables,function(){this.refreshPositions()
}))
})
}}),k.ui.plugin.add("draggable","cursor",{start:function(d,a,c){var g=k("body"),f=c.options;
g.css("cursor")&&(f._cursor=g.css("cursor")),g.css("cursor",f.cursor)
},stop:function(d,a,c){var f=c.options;
f._cursor&&k("body").css("cursor",f._cursor)
}}),k.ui.plugin.add("draggable","opacity",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("opacity")&&(f._opacity=g.css("opacity")),g.css("opacity",f.opacity)
},stop:function(d,a,c){var f=c.options;
f._opacity&&k(a.helper).css("opacity",f._opacity)
}}),k.ui.plugin.add("draggable","scroll",{start:function(c,d,a){a.scrollParentNotHidden||(a.scrollParentNotHidden=a.helper.scrollParent(!1)),a.scrollParentNotHidden[0]!==a.document[0]&&"HTML"!==a.scrollParentNotHidden[0].tagName&&(a.overflowOffset=a.scrollParentNotHidden.offset())
},drag:function(h,d,f){var m=f.options,l=!1,c=f.scrollParentNotHidden[0],g=f.document[0];
c!==g&&"HTML"!==c.tagName?(m.axis&&"x"===m.axis||(f.overflowOffset.top+c.offsetHeight-h.pageY<m.scrollSensitivity?c.scrollTop=l=c.scrollTop+m.scrollSpeed:h.pageY-f.overflowOffset.top<m.scrollSensitivity&&(c.scrollTop=l=c.scrollTop-m.scrollSpeed)),m.axis&&"y"===m.axis||(f.overflowOffset.left+c.offsetWidth-h.pageX<m.scrollSensitivity?c.scrollLeft=l=c.scrollLeft+m.scrollSpeed:h.pageX-f.overflowOffset.left<m.scrollSensitivity&&(c.scrollLeft=l=c.scrollLeft-m.scrollSpeed))):(m.axis&&"x"===m.axis||(h.pageY-k(g).scrollTop()<m.scrollSensitivity?l=k(g).scrollTop(k(g).scrollTop()-m.scrollSpeed):k(window).height()-(h.pageY-k(g).scrollTop())<m.scrollSensitivity&&(l=k(g).scrollTop(k(g).scrollTop()+m.scrollSpeed))),m.axis&&"y"===m.axis||(h.pageX-k(g).scrollLeft()<m.scrollSensitivity?l=k(g).scrollLeft(k(g).scrollLeft()-m.scrollSpeed):k(window).width()-(h.pageX-k(g).scrollLeft())<m.scrollSensitivity&&(l=k(g).scrollLeft(k(g).scrollLeft()+m.scrollSpeed)))),l!==!1&&k.ui.ddmanager&&!m.dropBehaviour&&k.ui.ddmanager.prepareOffsets(f,h)
}}),k.ui.plugin.add("draggable","snap",{start:function(d,a,c){var f=c.options;
c.snapElements=[],k(f.snap.constructor!==String?f.snap.items||":data(ui-draggable)":f.snap).each(function(){var h=k(this),g=h.offset();
this!==c.element[0]&&c.snapElements.push({item:this,width:h.outerWidth(),height:h.outerHeight(),top:g.top,left:g.left})
})
},drag:function(X,T,M){var Q,P,ab,N,U,S,Z,L,Y,O,W=M.options,V=W.snapTolerance,R=T.offset.left,ac=R+M.helperProportions.width,t=T.offset.top,aa=t+M.helperProportions.height;
for(Y=M.snapElements.length-1;
Y>=0;
Y--){U=M.snapElements[Y].left-M.margins.left,S=U+M.snapElements[Y].width,Z=M.snapElements[Y].top-M.margins.top,L=Z+M.snapElements[Y].height,U-V>ac||R>S+V||Z-V>aa||t>L+V||!k.contains(M.snapElements[Y].item.ownerDocument,M.snapElements[Y].item)?(M.snapElements[Y].snapping&&M.options.snap.release&&M.options.snap.release.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=!1):("inner"!==W.snapMode&&(Q=V>=Math.abs(Z-aa),P=V>=Math.abs(L-t),ab=V>=Math.abs(U-ac),N=V>=Math.abs(S-R),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z-M.helperProportions.height,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U-M.helperProportions.width}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S}).left)),O=Q||P||ab||N,"outer"!==W.snapMode&&(Q=V>=Math.abs(Z-t),P=V>=Math.abs(L-aa),ab=V>=Math.abs(U-R),N=V>=Math.abs(S-ac),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L-M.helperProportions.height,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S-M.helperProportions.width}).left)),!M.snapElements[Y].snapping&&(Q||P||ab||N||O)&&M.options.snap.snap&&M.options.snap.snap.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=Q||P||ab||N||O)
}}}),k.ui.plugin.add("draggable","stack",{start:function(g,d,f){var l,h=f.options,c=k.makeArray(k(h.stack)).sort(function(m,a){return(parseInt(k(m).css("zIndex"),10)||0)-(parseInt(k(a).css("zIndex"),10)||0)
});
c.length&&(l=parseInt(k(c[0]).css("zIndex"),10)||0,k(c).each(function(a){k(this).css("zIndex",l+a)
}),this.css("zIndex",l+c.length))
}}),k.ui.plugin.add("draggable","zIndex",{start:function(d,a,c){var g=k(a.helper),f=c.options;
g.css("zIndex")&&(f._zIndex=g.css("zIndex")),g.css("zIndex",f.zIndex)
},stop:function(d,a,c){var f=c.options;
f._zIndex&&k(a.helper).css("zIndex",f._zIndex)
}}),k.ui.draggable,k.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var d,a=this.options,c=a.accept;
this.isover=!1,this.isout=!0,this.accept=k.isFunction(c)?c:function(e){return e.is(c)
},this.proportions=function(){return arguments.length?(d=arguments[0],void 0):d?d:d={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
},this._addToManager(a.scope),a.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(a){k.ui.ddmanager.droppables[a]=k.ui.ddmanager.droppables[a]||[],k.ui.ddmanager.droppables[a].push(this)
},_splice:function(a){for(var c=0;
a.length>c;
c++){a[c]===this&&a.splice(c,1)
}},_destroy:function(){var a=k.ui.ddmanager.droppables[this.options.scope];
this._splice(a)
},_setOption:function(d,a){if("accept"===d){this.accept=k.isFunction(a)?a:function(e){return e.is(a)
}
}else{if("scope"===d){var c=k.ui.ddmanager.droppables[this.options.scope];
this._splice(c),this._addToManager(a)
}}this._super(d,a)
},_activate:function(c){var a=k.ui.ddmanager.current;
this._addActiveClass(),a&&this._trigger("activate",c,this.ui(a))
},_deactivate:function(c){var a=k.ui.ddmanager.current;
this._removeActiveClass(),a&&this._trigger("deactivate",c,this.ui(a))
},_over:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._addHoverClass(),this._trigger("over",c,this.ui(a)))
},_out:function(c){var a=k.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this._removeHoverClass(),this._trigger("out",c,this.ui(a)))
},_drop:function(d,a){var c=a||k.ui.ddmanager.current,f=!1;
return c&&(c.currentItem||c.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=k(this).droppable("instance");
return e.options.greedy&&!e.options.disabled&&e.options.scope===c.options.scope&&e.accept.call(e.element[0],c.currentItem||c.element)&&j(c,k.extend(e,{offset:e.element.offset()}),e.options.tolerance,d)?(f=!0,!1):void 0
}),f?!1:this.accept.call(this.element[0],c.currentItem||c.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",d,this.ui(c)),this.element):!1):!1
},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var j=k.ui.intersect=function(){function a(d,f,c){return d>=f&&f+c>d
}return function(L,t,Q,m){if(!t.offset){return !1
}var g=(L.positionAbs||L.position.absolute).left+L.margins.left,O=(L.positionAbs||L.position.absolute).top+L.margins.top,f=g+L.helperProportions.width,v=O+L.helperProportions.height,p=t.offset.left,N=t.offset.top,P=p+t.proportions().width,M=N+t.proportions().height;
switch(Q){case"fit":return g>=p&&P>=f&&O>=N&&M>=v;
case"intersect":return g+L.helperProportions.width/2>p&&P>f-L.helperProportions.width/2&&O+L.helperProportions.height/2>N&&M>v-L.helperProportions.height/2;
case"pointer":return a(m.pageY,N,t.proportions().height)&&a(m.pageX,p,t.proportions().width);
case"touch":return(O>=N&&M>=O||v>=N&&M>=v||N>O&&v>M)&&(g>=p&&P>=g||f>=p&&P>=f||p>g&&f>P);
default:return !1
}}
}();
k.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,d){var f,m,l=k.ui.ddmanager.droppables[h.options.scope]||[],c=d?d.type:null,g=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
k:for(f=0;
l.length>f;
f++){if(!(l[f].options.disabled||h&&!l[f].accept.call(l[f].element[0],h.currentItem||h.element))){for(m=0;
g.length>m;
m++){if(g[m]===l[f].element[0]){l[f].proportions().height=0;
continue k
}}l[f].visible="none"!==l[f].element.css("display"),l[f].visible&&("mousedown"===c&&l[f]._activate.call(l[f],d),l[f].offset=l[f].element.offset(),l[f].proportions({width:l[f].element[0].offsetWidth,height:l[f].element[0].offsetHeight}))
}}},drop:function(d,a){var c=!1;
return k.each((k.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&j(d,this,this.options.tolerance,a)&&(c=this._drop.call(this,a)||c),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],d.currentItem||d.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,a)))
}),c
},dragStart:function(c,a){c.element.parentsUntil("body").on("scroll.droppable",function(){c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
})
},drag:function(c,a){c.options.refreshPositions&&k.ui.ddmanager.prepareOffsets(c,a),k.each(k.ui.ddmanager.droppables[c.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var e,h,g,d=j(c,this,this.options.tolerance,a),f=!d&&this.isover?"isout":d&&!this.isover?"isover":null;
f&&(this.options.greedy&&(h=this.options.scope,g=this.element.parents(":data(ui-droppable)").filter(function(){return k(this).droppable("instance").options.scope===h
}),g.length&&(e=k(g[0]).droppable("instance"),e.greedyChild="isover"===f)),e&&"isover"===f&&(e.isover=!1,e.isout=!0,e._out.call(e,a)),this[f]=!0,this["isout"===f?"isover":"isout"]=!1,this["isover"===f?"_over":"_out"].call(this,a),e&&"isout"===f&&(e.isout=!1,e.isover=!0,e._over.call(e,a)))
}})
},dragStop:function(c,a){c.element.parentsUntil("body").off("scroll.droppable"),c.options.refreshPositions||k.ui.ddmanager.prepareOffsets(c,a)
}},k.uiBackCompat!==!1&&k.widget("ui.droppable",k.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)
},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)
},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
}}),k.ui.droppable,k.widget("ui.resizable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseFloat(a)||0
},_isNumber:function(a){return !isNaN(parseFloat(a))
},_hasScroll:function(d,a){if("hidden"===k(d).css("overflow")){return !1
}var c=a&&"left"===a?"scrollLeft":"scrollTop",f=!1;
return d[c]>0?!0:(d[c]=1,f=d[c]>0,d[c]=0,f)
},_create:function(){var d,a=this.options,c=this;
this._addClass("ui-resizable"),k.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,d={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(d),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(d),this._proportionallyResize()),this._setupHandles(),a.autoHide&&k(this.element).on("mouseenter",function(){a.disabled||(c._removeClass("ui-resizable-autohide"),c._handles.show())
}).on("mouseleave",function(){a.disabled||c.resizing||(c._addClass("ui-resizable-autohide"),c._handles.hide())
}),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var c,a=function(d){k(d).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(a(this.element),c=this.element,this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")}).insertAfter(c),c.remove()),this.originalElement.css("resize",this.originalResizeStyle),a(this.originalElement),this
},_setOption:function(a,c){switch(this._super(a,c),a){case"handles":this._removeHandles(),this._setupHandles();
break;
default:}},_setupHandles:function(){var h,d,f,m,l,c=this.options,g=this;
if(this.handles=c.handles||(k(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=k(),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),f=this.handles.split(","),this.handles={},d=0;
f.length>d;
d++){h=k.trim(f[d]),m="ui-resizable-"+h,l=k("<div>"),this._addClass(l,"ui-resizable-handle "+m),l.css({zIndex:c.zIndex}),this.handles[h]=".ui-resizable-"+h,this.element.append(l)
}}this._renderAxis=function(r){var a,p,u,t;
r=r||this.element;
for(a in this.handles){this.handles[a].constructor===String?this.handles[a]=this.element.children(this.handles[a]).first().show():(this.handles[a].jquery||this.handles[a].nodeType)&&(this.handles[a]=k(this.handles[a]),this._on(this.handles[a],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(p=k(this.handles[a],this.element),t=/sw|ne|nw|se|n|s/.test(a)?p.outerHeight():p.outerWidth(),u=["padding",/ne|nw|n/.test(a)?"Top":/se|sw|s/.test(a)?"Bottom":/^e$/.test(a)?"Right":"Left"].join(""),r.css(u,t),this._proportionallyResize()),this._handles=this._handles.add(this.handles[a])
}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){g.resizing||(this.className&&(l=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=l&&l[1]?l[1]:"se")
}),c.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))
},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(d){var a,c,f=!1;
for(a in this.handles){c=k(this.handles[a])[0],(c===d.target||k.contains(c,d.target))&&(f=!0)
}return !this.options.disabled&&f
},_mouseStart:function(g){var d,f,l,h=this.options,c=this.element;
return this.resizing=!0,this._renderProxy(),d=this._num(this.helper.css("left")),f=this._num(this.helper.css("top")),h.containment&&(d+=k(h.containment).scrollLeft()||0,f+=k(h.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:f},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:c.width(),height:c.height()},this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()},this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()},this.originalPosition={left:d,top:f},this.originalMousePosition={left:g.pageX,top:g.pageY},this.aspectRatio="number"==typeof h.aspectRatio?h.aspectRatio:this.originalSize.width/this.originalSize.height||1,l=k(".ui-resizable-"+this.axis).css("cursor"),k("body").css("cursor","auto"===l?this.axis+"-resize":l),this._addClass("ui-resizable-resizing"),this._propagate("start",g),!0
},_mouseDrag:function(m){var d,g,t=this.originalMousePosition,p=this.axis,c=m.pageX-t.left||0,l=m.pageY-t.top||0,f=this._change[p];
return this._updatePrevProperties(),f?(d=f.apply(this,[m,c,l]),this._updateVirtualBoundaries(m.shiftKey),(this._aspectRatio||m.shiftKey)&&(d=this._updateRatio(d,m)),d=this._respectSize(d,m),this._updateCache(d),this._propagate("resize",m),g=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),k.isEmptyObject(g)||(this._updatePrevProperties(),this._trigger("resize",m,this.ui()),this._applyChanges()),!1):!1
},_mouseStop:function(u){this.resizing=!1;
var p,M,g,f,L,d,t,m=this.options,v=this;
return this._helper&&(p=this._proportionallyResizeElements,M=p.length&&/textarea/i.test(p[0].nodeName),g=M&&this._hasScroll(p[0],"left")?0:v.sizeDiff.height,f=M?0:v.sizeDiff.width,L={width:v.helper.width()-f,height:v.helper.height()-g},d=parseFloat(v.element.css("left"))+(v.position.left-v.originalPosition.left)||null,t=parseFloat(v.element.css("top"))+(v.position.top-v.originalPosition.top)||null,m.animate||this.element.css(k.extend(L,{top:t,left:d})),v.helper.height(v.size.height),v.helper.width(v.size.width),this._helper&&!m.animate&&this._proportionallyResize()),k("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",u),this._helper&&this.helper.remove(),!1
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var a={};
return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a
},_updateVirtualBoundaries:function(f){var h,d,g,m,l,c=this.options;
l={minWidth:this._isNumber(c.minWidth)?c.minWidth:0,maxWidth:this._isNumber(c.maxWidth)?c.maxWidth:1/0,minHeight:this._isNumber(c.minHeight)?c.minHeight:0,maxHeight:this._isNumber(c.maxHeight)?c.maxHeight:1/0},(this._aspectRatio||f)&&(h=l.minHeight*this.aspectRatio,g=l.minWidth/this.aspectRatio,d=l.maxHeight*this.aspectRatio,m=l.maxWidth/this.aspectRatio,h>l.minWidth&&(l.minWidth=h),g>l.minHeight&&(l.minHeight=g),l.maxWidth>d&&(l.maxWidth=d),l.maxHeight>m&&(l.maxHeight=m)),this._vBoundaries=l
},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)
},_updateRatio:function(c){var f=this.position,a=this.size,d=this.axis;
return this._isNumber(c.height)?c.width=c.height*this.aspectRatio:this._isNumber(c.width)&&(c.height=c.width/this.aspectRatio),"sw"===d&&(c.left=f.left+(a.width-c.width),c.top=null),"nw"===d&&(c.top=f.top+(a.height-c.height),c.left=f.left+(a.width-c.width)),c
},_respectSize:function(N){var v=this._vBoundaries,p=this.axis,O=this._isNumber(N.width)&&v.maxWidth&&v.maxWidth<N.width,g=this._isNumber(N.height)&&v.maxHeight&&v.maxHeight<N.height,f=this._isNumber(N.width)&&v.minWidth&&v.minWidth>N.width,M=this._isNumber(N.height)&&v.minHeight&&v.minHeight>N.height,d=this.originalPosition.left+this.originalSize.width,u=this.originalPosition.top+this.originalSize.height,m=/sw|nw|w/.test(p),L=/nw|ne|n/.test(p);
return f&&(N.width=v.minWidth),M&&(N.height=v.minHeight),O&&(N.width=v.maxWidth),g&&(N.height=v.maxHeight),f&&m&&(N.left=d-v.minWidth),O&&m&&(N.left=d-v.maxWidth),M&&L&&(N.top=u-v.minHeight),g&&L&&(N.top=u-v.maxHeight),N.width||N.height||N.left||!N.top?N.width||N.height||N.top||!N.left||(N.left=null):N.top=null,N
},_getPaddingPlusBorderDimensions:function(c){for(var f=0,a=[],d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],g=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];
4>f;
f++){a[f]=parseFloat(d[f])||0,a[f]+=parseFloat(g[f])||0
}return{height:a[0]+a[2],width:a[1]+a[3]}
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var c,d=0,a=this.helper||this.element;
this._proportionallyResizeElements.length>d;
d++){c=this._proportionallyResizeElements[d],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(c)),c.css({height:a.height()-this.outerDimensions.height||0,width:a.width()-this.outerDimensions.width||0})
}}},_renderProxy:function(){var c=this.element,a=this.options;
this.elementOffset=c.offset(),this._helper?(this.helper=this.helper||k("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(a,c){return{width:this.originalSize.width+c}
},w:function(c,f){var a=this.originalSize,d=this.originalPosition;
return{left:d.left+f,width:a.width-f}
},n:function(c,f,a){var d=this.originalSize,g=this.originalPosition;
return{top:g.top+a,height:d.height-a}
},s:function(c,d,a){return{height:this.originalSize.height+a}
},se:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},sw:function(d,a,c){return k.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
},ne:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[d,a,c]))
},nw:function(d,a,c){return k.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[d,a,c]))
}},_propagate:function(c,a){k.ui.plugin.call(this,c,[a,this.ui()]),"resize"!==c&&this._trigger(c,a,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),k.ui.plugin.add("resizable","animate",{stop:function(u){var p=k(this).resizable("instance"),M=p.options,g=p._proportionallyResizeElements,f=g.length&&/textarea/i.test(g[0].nodeName),L=f&&p._hasScroll(g[0],"left")?0:p.sizeDiff.height,d=f?0:p.sizeDiff.width,t={width:p.size.width-d,height:p.size.height-L},m=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,v=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null;
p.element.animate(k.extend(t,v&&m?{top:v,left:m}:{}),{duration:M.animateDuration,easing:M.animateEasing,step:function(){var a={width:parseFloat(p.element.css("width")),height:parseFloat(p.element.css("height")),top:parseFloat(p.element.css("top")),left:parseFloat(p.element.css("left"))};
g&&g.length&&k(g[0]).css({width:a.width,height:a.height}),p._updateCache(a),p._propagate("resize",u)
}})
}}),k.ui.plugin.add("resizable","containment",{start:function(){var L,t,Q,m,g,O,f,v=k(this).resizable("instance"),p=v.options,N=v.element,P=p.containment,M=P instanceof k?P.get(0):/parent/.test(P)?N.parent().get(0):P;
M&&(v.containerElement=k(M),/document/.test(P)||P===document?(v.containerOffset={left:0,top:0},v.containerPosition={left:0,top:0},v.parentData={element:k(document),left:0,top:0,width:k(document).width(),height:k(document).height()||document.body.parentNode.scrollHeight}):(L=k(M),t=[],k(["Top","Right","Left","Bottom"]).each(function(a,c){t[a]=v._num(L.css("padding"+c))
}),v.containerOffset=L.offset(),v.containerPosition=L.position(),v.containerSize={height:L.innerHeight()-t[3],width:L.innerWidth()-t[1]},Q=v.containerOffset,m=v.containerSize.height,g=v.containerSize.width,O=v._hasScroll(M,"left")?M.scrollWidth:g,f=v._hasScroll(M)?M.scrollHeight:m,v.parentData={element:M,left:Q.left,top:Q.top,width:O,height:f}))
},resize:function(N){var L,S,t,m,Q=k(this).resizable("instance"),f=Q.options,M=Q.containerOffset,v=Q.position,P=Q._aspectRatio||N.shiftKey,R={top:0,left:0},O=Q.containerElement,g=!0;
O[0]!==document&&/static/.test(O.css("position"))&&(R=M),v.left<(Q._helper?M.left:0)&&(Q.size.width=Q.size.width+(Q._helper?Q.position.left-M.left:Q.position.left-R.left),P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1),Q.position.left=f.helper?M.left:0),v.top<(Q._helper?M.top:0)&&(Q.size.height=Q.size.height+(Q._helper?Q.position.top-M.top:Q.position.top),P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1),Q.position.top=Q._helper?M.top:0),t=Q.containerElement.get(0)===Q.element.parent().get(0),m=/relative|absolute/.test(Q.containerElement.css("position")),t&&m?(Q.offset.left=Q.parentData.left+Q.position.left,Q.offset.top=Q.parentData.top+Q.position.top):(Q.offset.left=Q.element.offset().left,Q.offset.top=Q.element.offset().top),L=Math.abs(Q.sizeDiff.width+(Q._helper?Q.offset.left-R.left:Q.offset.left-M.left)),S=Math.abs(Q.sizeDiff.height+(Q._helper?Q.offset.top-R.top:Q.offset.top-M.top)),L+Q.size.width>=Q.parentData.width&&(Q.size.width=Q.parentData.width-L,P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1)),S+Q.size.height>=Q.parentData.height&&(Q.size.height=Q.parentData.height-S,P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1)),g||(Q.position.left=Q.prevPosition.left,Q.position.top=Q.prevPosition.top,Q.size.width=Q.prevSize.width,Q.size.height=Q.prevSize.height)
},stop:function(){var t=k(this).resizable("instance"),m=t.options,v=t.containerOffset,f=t.containerPosition,d=t.containerElement,u=k(t.helper),c=u.offset(),p=u.outerWidth()-t.sizeDiff.width,g=u.outerHeight()-t.sizeDiff.height;
t._helper&&!m.animate&&/relative/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g}),t._helper&&!m.animate&&/static/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g})
}}),k.ui.plugin.add("resizable","alsoResize",{start:function(){var c=k(this).resizable("instance"),a=c.options;
k(a.alsoResize).each(function(){var d=k(this);
d.data("ui-resizable-alsoresize",{width:parseFloat(d.width()),height:parseFloat(d.height()),left:parseFloat(d.css("left")),top:parseFloat(d.css("top"))})
})
},resize:function(h,d){var f=k(this).resizable("instance"),m=f.options,l=f.originalSize,c=f.originalPosition,g={height:f.size.height-l.height||0,width:f.size.width-l.width||0,top:f.position.top-c.top||0,left:f.position.left-c.left||0};
k(m.alsoResize).each(function(){var i=k(this),a=k(this).data("ui-resizable-alsoresize"),r={},p=i.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
k.each(p,function(o,s){var n=(a[s]||0)+(g[s]||0);
n&&n>=0&&(r[s]=n||null)
}),i.css(r)
})
},stop:function(){k(this).removeData("ui-resizable-alsoresize")
}}),k.ui.plugin.add("resizable","ghost",{start:function(){var c=k(this).resizable("instance"),a=c.size;
c.ghost=c.originalElement.clone(),c.ghost.css({opacity:0.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}),c._addClass(c.ghost,"ui-resizable-ghost"),k.uiBackCompat!==!1&&"string"==typeof c.options.ghost&&c.ghost.addClass(this.options.ghost),c.ghost.appendTo(c.helper)
},resize:function(){var a=k(this).resizable("instance");
a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
},stop:function(){var a=k(this).resizable("instance");
a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))
}}),k.ui.plugin.add("resizable","grid",{resize:function(){var X,T=k(this).resizable("instance"),M=T.options,Q=T.size,P=T.originalSize,aa=T.originalPosition,N=T.axis,U="number"==typeof M.grid?[M.grid,M.grid]:M.grid,S=U[0]||1,Z=U[1]||1,L=Math.round((Q.width-P.width)/S)*S,Y=Math.round((Q.height-P.height)/Z)*Z,O=P.width+L,W=P.height+Y,V=M.maxWidth&&O>M.maxWidth,R=M.maxHeight&&W>M.maxHeight,ab=M.minWidth&&M.minWidth>O,t=M.minHeight&&M.minHeight>W;
M.grid=U,ab&&(O+=S),t&&(W+=Z),V&&(O-=S),R&&(W-=Z),/^(se|s|e)$/.test(N)?(T.size.width=O,T.size.height=W):/^(ne)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.top=aa.top-Y):/^(sw)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.left=aa.left-L):((0>=W-Z||0>=O-S)&&(X=T._getPaddingPlusBorderDimensions(this)),W-Z>0?(T.size.height=W,T.position.top=aa.top-Y):(W=Z-X.height,T.size.height=W,T.position.top=aa.top+P.height-W),O-S>0?(T.size.width=O,T.position.left=aa.left-L):(O=S-X.width,T.size.width=O,T.position.left=aa.left+P.width-O))
}}),k.ui.resizable,k.widget("ui.selectable",k.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var a=this;
this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){a.elementPos=k(a.element[0]).offset(),a.selectees=k(a.options.filter,a.element[0]),a._addClass(a.selectees,"ui-selectee"),a.selectees.each(function(){var c=k(this),d=c.offset(),e={left:d.left-a.elementPos.left,top:d.top-a.elementPos.top};
k.data(this,"selectable-item",{element:this,$element:c,left:e.left,top:e.top,right:e.left+c.outerWidth(),bottom:e.top+c.outerHeight(),startselected:!1,selected:c.hasClass("ui-selected"),selecting:c.hasClass("ui-selecting"),unselecting:c.hasClass("ui-unselecting")})
})
},this.refresh(),this._mouseInit(),this.helper=k("<div>"),this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()
},_mouseStart:function(d){var a=this,c=this.options;
this.opos=[d.pageX,d.pageY],this.elementPos=k(this.element[0]).offset(),this.options.disabled||(this.selectees=k(c.filter,this.element[0]),this._trigger("start",d),k(c.appendTo).append(this.helper),this.helper.css({left:d.pageX,top:d.pageY,width:0,height:0}),c.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var e=k.data(this,"selectable-item");
e.startselected=!0,d.metaKey||d.ctrlKey||(a._removeClass(e.$element,"ui-selected"),e.selected=!1,a._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,a._trigger("unselecting",d,{unselecting:e.element}))
}),k(d.target).parents().addBack().each(function(){var e,f=k.data(this,"selectable-item");
return f?(e=!d.metaKey&&!d.ctrlKey||!f.$element.hasClass("ui-selected"),a._removeClass(f.$element,e?"ui-unselecting":"ui-selected")._addClass(f.$element,e?"ui-selecting":"ui-unselecting"),f.unselecting=!e,f.selecting=e,f.selected=e,e?a._trigger("selecting",d,{selecting:f.element}):a._trigger("unselecting",d,{unselecting:f.element}),!1):void 0
}))
},_mouseDrag:function(m){if(this.dragged=!0,!this.options.disabled){var d,g=this,t=this.options,p=this.opos[0],c=this.opos[1],l=m.pageX,f=m.pageY;
return p>l&&(d=l,l=p,p=d),c>f&&(d=f,f=c,c=d),this.helper.css({left:p,top:c,width:l-p,height:f-c}),this.selectees.each(function(){var e=k.data(this,"selectable-item"),a=!1,h={};
e&&e.element!==g.element[0]&&(h.left=e.left+g.elementPos.left,h.right=e.right+g.elementPos.left,h.top=e.top+g.elementPos.top,h.bottom=e.bottom+g.elementPos.top,"touch"===t.tolerance?a=!(h.left>l||p>h.right||h.top>f||c>h.bottom):"fit"===t.tolerance&&(a=h.left>p&&l>h.right&&h.top>c&&f>h.bottom),a?(e.selected&&(g._removeClass(e.$element,"ui-selected"),e.selected=!1),e.unselecting&&(g._removeClass(e.$element,"ui-unselecting"),e.unselecting=!1),e.selecting||(g._addClass(e.$element,"ui-selecting"),e.selecting=!0,g._trigger("selecting",m,{selecting:e.element}))):(e.selecting&&((m.metaKey||m.ctrlKey)&&e.startselected?(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,g._addClass(e.$element,"ui-selected"),e.selected=!0):(g._removeClass(e.$element,"ui-selecting"),e.selecting=!1,e.startselected&&(g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0),g._trigger("unselecting",m,{unselecting:e.element}))),e.selected&&(m.metaKey||m.ctrlKey||e.startselected||(g._removeClass(e.$element,"ui-selected"),e.selected=!1,g._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,g._trigger("unselecting",m,{unselecting:e.element})))))
}),!1
}},_mouseStop:function(c){var a=this;
return this.dragged=!1,k(".ui-unselecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-unselecting"),d.unselecting=!1,d.startselected=!1,a._trigger("unselected",c,{unselected:d.element})
}),k(".ui-selecting",this.element[0]).each(function(){var d=k.data(this,"selectable-item");
a._removeClass(d.$element,"ui-selecting")._addClass(d.$element,"ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,a._trigger("selected",c,{selected:d.element})
}),this._trigger("stop",c),this.helper.remove(),!1
}}),k.widget("ui.sortable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(c,d,a){return c>=d&&d+a>c
},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))
},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0
},_setOption:function(a,c){this._super(a,c),"handle"===a&&this._setHandleClassName()
},_setHandleClassName:function(){var a=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),k.each(this.items,function(){a._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(d,a){var c=null,g=!1,f=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(d),k(d.target).parents().each(function(){return k.data(this,f.widgetName+"-item")===f?(c=k(this),!1):void 0
}),k.data(d.target,f.widgetName+"-item")===f&&(c=k(d.target)),c?!this.options.handle||a||(k(this.options.handle,c).find("*").addBack().each(function(){this===d.target&&(g=!0)
}),g)?(this.currentItem=c,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(g,d,f){var l,h,c=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(g),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},k.extend(this.offset,{click:{left:g.pageX-this.offset.left,top:g.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(g),this.originalPageX=g.pageX,this.originalPageY=g.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),c.containment&&this._setContainment(),c.cursor&&"auto"!==c.cursor&&(h=this.document.find("body"),this.storedCursor=h.css("cursor"),h.css("cursor",c.cursor),this.storedStylesheet=k("<style>*{ cursor: "+c.cursor+" !important; }</style>").appendTo(h)),c.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",c.opacity)),c.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",c.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",g,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!f){for(l=this.containers.length-1;
l>=0;
l--){this.containers[l]._trigger("activate",g,this._uiHash(this))
}}return k.ui.ddmanager&&(k.ui.ddmanager.current=this),k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,g),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(g),!0
},_mouseDrag:function(h){var d,f,m,l,c=this.options,g=!1;
for(this.position=this._generatePosition(h),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-h.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+c.scrollSpeed:h.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-h.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+c.scrollSpeed:h.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(h.pageY-this.document.scrollTop()<c.scrollSensitivity?g=this.document.scrollTop(this.document.scrollTop()-c.scrollSpeed):this.window.height()-(h.pageY-this.document.scrollTop())<c.scrollSensitivity&&(g=this.document.scrollTop(this.document.scrollTop()+c.scrollSpeed)),h.pageX-this.document.scrollLeft()<c.scrollSensitivity?g=this.document.scrollLeft(this.document.scrollLeft()-c.scrollSpeed):this.window.width()-(h.pageX-this.document.scrollLeft())<c.scrollSensitivity&&(g=this.document.scrollLeft(this.document.scrollLeft()+c.scrollSpeed))),g!==!1&&k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,h)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),d=this.items.length-1;
d>=0;
d--){if(f=this.items[d],m=f.item[0],l=this._intersectsWithPointer(f),l&&f.instance===this.currentContainer&&m!==this.currentItem[0]&&this.placeholder[1===l?"next":"prev"]()[0]!==m&&!k.contains(this.placeholder[0],m)&&("semi-dynamic"===this.options.type?!k.contains(this.element[0],m):!0)){if(this.direction=1===l?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(f)){break
}this._rearrange(h,f),this._trigger("change",h,this._uiHash());
break
}}return this._contactContainers(h),k.ui.ddmanager&&k.ui.ddmanager.drag(this,h),this._trigger("sort",h,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(g,d){if(g){if(k.ui.ddmanager&&!this.options.dropBehaviour&&k.ui.ddmanager.drop(this,g),this.options.revert){var f=this,l=this.placeholder.offset(),h=this.options.axis,c={};
h&&"x"!==h||(c.left=l.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),h&&"y"!==h||(c.top=l.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,k(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,d)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp(new k.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),k.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?k(this.domPosition.prev).after(this.currentItem):k(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},k(a).each(function(){var e=(k(d.item||this).attr(d.attribute||"id")||"").match(d.expression||/(.+)[\-=_](.+)/);
e&&c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]))
}),!c.length&&d.key&&c.push(d.key+"="),c.join("&")
},toArray:function(d){var a=this._getItemsAsjQuery(d&&d.connected),c=[];
return d=d||{},a.each(function(){c.push(k(d.item||this).attr(d.attribute||"id")||"")
}),c
},_intersectsWith:function(T){var O=this.positionAbs.left,M=O+this.helperProportions.width,U=this.positionAbs.top,v=U+this.helperProportions.height,m=T.left,R=m+T.width,f=T.top,N=f+T.height,L=this.offset.click.top,Q=this.offset.click.left,S="x"===this.options.axis||U+L>f&&N>U+L,P="y"===this.options.axis||O+Q>m&&R>O+Q,g=S&&P;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>T[this.floating?"width":"height"]?g:O+this.helperProportions.width/2>m&&R>M-this.helperProportions.width/2&&U+this.helperProportions.height/2>f&&N>v-this.helperProportions.height/2
},_intersectsWithPointer:function(c){var f,a,d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top,c.height),h="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left,c.width),g=d&&h;
return g?(f=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection(),this.floating?"right"===a||"down"===f?2:1:f&&("down"===f?2:1)):!1
},_intersectsWithSides:function(c){var f=this._isOverAxis(this.positionAbs.top+this.offset.click.top,c.top+c.height/2,c.height),a=this._isOverAxis(this.positionAbs.left+this.offset.click.left,c.left+c.width/2,c.width),d=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();
return this.floating&&g?"right"===g&&a||"left"===g&&!a:d&&("down"===d&&f||"up"===d&&!f)
},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==a&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==a&&(a>0?"right":"left")
},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(t){function m(){c.push(this)
}var v,f,d,u,c=[],p=[],g=this._connectWith();
if(g&&t){for(v=g.length-1;
v>=0;
v--){for(d=k(g[v],this.document[0]),f=d.length-1;
f>=0;
f--){u=k.data(d[f],this.widgetFullName),u&&u!==this&&!u.options.disabled&&p.push([k.isFunction(u.options.items)?u.options.items.call(u.element):k(u.options.items,u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),u])
}}}for(p.push([k.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):k(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),v=p.length-1;
v>=0;
v--){p[v][0].each(m)
}return k(c)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=k.grep(this.items,function(d){for(var c=0;
a.length>c;
c++){if(a[c]===d.item[0]){return !1
}}return !0
})
},_refreshItems:function(L){this.items=[],this.containers=[this];
var t,Q,m,g,O,f,v,p,N=this.items,P=[[k.isFunction(this.options.items)?this.options.items.call(this.element[0],L,{item:this.currentItem}):k(this.options.items,this.element),this]],M=this._connectWith();
if(M&&this.ready){for(t=M.length-1;
t>=0;
t--){for(m=k(M[t],this.document[0]),Q=m.length-1;
Q>=0;
Q--){g=k.data(m[Q],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(P.push([k.isFunction(g.options.items)?g.options.items.call(g.element[0],L,{item:this.currentItem}):k(g.options.items,g.element),g]),this.containers.push(g))
}}}for(t=P.length-1;
t>=0;
t--){for(O=P[t][1],f=P[t][0],Q=0,p=f.length;
p>Q;
Q++){v=k(f[Q]),v.data(this.widgetName+"-item",O),N.push({item:v,instance:O,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(d){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var a,c,g,f;
for(a=this.items.length-1;
a>=0;
a--){c=this.items[a],c.instance!==this.currentContainer&&this.currentContainer&&c.item[0]!==this.currentItem[0]||(g=this.options.toleranceElement?k(this.options.toleranceElement,c.item):c.item,d||(c.width=g.outerWidth(),c.height=g.outerHeight()),f=g.offset(),c.left=f.left,c.top=f.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(a=this.containers.length-1;
a>=0;
a--){f=this.containers[a].element.offset(),this.containers[a].containerCache.left=f.left,this.containers[a].containerCache.top=f.top,this.containers[a].containerCache.width=this.containers[a].element.outerWidth(),this.containers[a].containerCache.height=this.containers[a].element.outerHeight()
}}return this
},_createPlaceholder:function(d){d=d||this;
var a,c=d.options;
c.placeholder&&c.placeholder.constructor!==String||(a=c.placeholder,c.placeholder={element:function(){var e=d.currentItem[0].nodeName.toLowerCase(),f=k("<"+e+">",d.document[0]);
return d._addClass(f,"ui-sortable-placeholder",a||d.currentItem[0].className)._removeClass(f,"ui-sortable-helper"),"tbody"===e?d._createTrPlaceholder(d.currentItem.find("tr").eq(0),k("<tr>",d.document[0]).appendTo(f)):"tr"===e?d._createTrPlaceholder(d.currentItem,f):"img"===e&&f.attr("src",d.currentItem.attr("src")),a||f.css("visibility","hidden"),f
},update:function(e,f){(!a||c.forcePlaceholderSize)&&(f.height()||f.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10)))
}}),d.placeholder=k(c.placeholder.element.call(d.element,d.currentItem)),d.currentItem.after(d.placeholder),c.placeholder.update(d,d.placeholder)
},_createTrPlaceholder:function(d,a){var c=this;
d.children().each(function(){k("<td>&#160;</td>",c.document[0]).attr("colspan",k(this).attr("colspan")||1).appendTo(a)
})
},_contactContainers:function(N){var L,S,t,m,Q,f,M,v,P,R,O=null,g=null;
for(L=this.containers.length-1;
L>=0;
L--){if(!k.contains(this.currentItem[0],this.containers[L].element[0])){if(this._intersectsWith(this.containers[L].containerCache)){if(O&&k.contains(this.containers[L].element[0],O.element[0])){continue
}O=this.containers[L],g=L
}else{this.containers[L].containerCache.over&&(this.containers[L]._trigger("out",N,this._uiHash(this)),this.containers[L].containerCache.over=0)
}}}if(O){if(1===this.containers.length){this.containers[g].containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1)
}else{for(t=10000,m=null,P=O.floating||this._isFloating(this.currentItem),Q=P?"left":"top",f=P?"width":"height",R=P?"pageX":"pageY",S=this.items.length-1;
S>=0;
S--){k.contains(this.containers[g].element[0],this.items[S].item[0])&&this.items[S].item[0]!==this.currentItem[0]&&(M=this.items[S].item.offset()[Q],v=!1,N[R]-M>this.items[S][f]/2&&(v=!0),t>Math.abs(N[R]-M)&&(t=Math.abs(N[R]-M),m=this.items[S],this.direction=v?"up":"down"))
}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[g]){return this.currentContainer.containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash()),this.currentContainer.containerCache.over=1),void 0
}m?this._rearrange(N,m,null,!0):this._rearrange(N,null,this.containers[g].element,!0),this._trigger("change",N,this._uiHash()),this.containers[g]._trigger("change",N,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1
}}},_createHelper:function(d){var a=this.options,c=k.isFunction(a.helper)?k(a.helper.apply(this.element[0],[d,this.currentItem])):"clone"===a.helper?this.currentItem.clone():this.currentItem;
return c.parents("body").length||k("parent"!==a.appendTo?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]),c[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!c[0].style.width||a.forceHelperSize)&&c.width(this.currentItem.width()),(!c[0].style.height||a.forceHelperSize)&&c.height(this.currentItem.height()),c
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),k.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&k.ui.ie)&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,a,c,f=this.options;
"parent"===f.containment&&(f.containment=this.helper[0].parentNode),("document"===f.containment||"window"===f.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===f.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===f.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(f.containment)||(d=k(f.containment)[0],a=k(f.containment).offset(),c="hidden"!==k(d).css("overflow"),this.containment=[a.left+(parseInt(k(d).css("borderLeftWidth"),10)||0)+(parseInt(k(d).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(k(d).css("borderTopWidth"),10)||0)+(parseInt(k(d).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(k(d).css("borderLeftWidth"),10)||0)-(parseInt(k(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(k(d).css("borderTopWidth"),10)||0)-(parseInt(k(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(d,a){a||(a=this.position);
var c="absolute"===d?1:-1,g="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(g[0].tagName);
return{top:a.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:g.scrollTop())*c,left:a.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:g.scrollLeft())*c}
},_generatePosition:function(m){var d,g,t=this.options,p=m.pageX,c=m.pageY,l="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(l[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(m.pageX-this.offset.click.left<this.containment[0]&&(p=this.containment[0]+this.offset.click.left),m.pageY-this.offset.click.top<this.containment[1]&&(c=this.containment[1]+this.offset.click.top),m.pageX-this.offset.click.left>this.containment[2]&&(p=this.containment[2]+this.offset.click.left),m.pageY-this.offset.click.top>this.containment[3]&&(c=this.containment[3]+this.offset.click.top)),t.grid&&(d=this.originalPageY+Math.round((c-this.originalPageY)/t.grid[1])*t.grid[1],c=this.containment?d-this.offset.click.top>=this.containment[1]&&d-this.offset.click.top<=this.containment[3]?d:d-this.offset.click.top>=this.containment[1]?d-t.grid[1]:d+t.grid[1]:d,g=this.originalPageX+Math.round((p-this.originalPageX)/t.grid[0])*t.grid[0],p=this.containment?g-this.offset.click.left>=this.containment[0]&&g-this.offset.click.left<=this.containment[2]?g:g-this.offset.click.left>=this.containment[0]?g-t.grid[0]:g+t.grid[0]:g)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:l.scrollTop()),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:l.scrollLeft())}
},_rearrange:function(c,f,a,d){a?a[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?f.item[0]:f.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var g=this.counter;
this._delay(function(){g===this.counter&&this.refreshPositions(!d)
})
},_clear:function(c,f){function a(l,m,h){return function(e){h._trigger(l,e,m._uiHash(m))
}
}this.reverting=!1;
var d,g=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){("auto"===this._storedCSS[d]||"static"===this._storedCSS[d])&&(this._storedCSS[d]="")
}this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!f&&g.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||f||g.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(f||(g.push(function(e){this._trigger("remove",e,this._uiHash())
}),g.push(function(e){return function(h){e._trigger("receive",h,this._uiHash(this))
}
}.call(this,this.currentContainer)),g.push(function(e){return function(h){e._trigger("update",h,this._uiHash(this))
}
}.call(this,this.currentContainer)))),d=this.containers.length-1;
d>=0;
d--){f||g.push(a("deactivate",this,this.containers[d])),this.containers[d].containerCache.over&&(g.push(a("out",this,this.containers[d])),this.containers[d].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,f||this._trigger("beforeStop",c,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!f){for(d=0;
g.length>d;
d++){g[d].call(this,c)
}this._trigger("stop",c,this._uiHash())
}return this.fromOutside=!1,!this.cancelHelperRemoval
},_trigger:function(){k.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(c){var a=c||this;
return{helper:a.helper,placeholder:a.placeholder||k([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:c?c.element:null}
}}),k.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;
this.prevShow=this.prevHide=k(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),this._processPanels(),0>a.active&&(a.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():k()}
},_createIcons:function(){var d,a,c=this.options.icons;
c&&(d=k("<span>"),this._addClass(d,"ui-accordion-header-icon","ui-icon "+c.header),d.prependTo(this.headers),a=this.active.children(".ui-accordion-header-icon"),this._removeClass(a,c.header)._addClass(a,null,c.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(c)),this._super(a,c),"collapsible"!==a||c||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),c&&this._createIcons()),void 0)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!a)
},_keydown:function(d){if(!d.altKey&&!d.ctrlKey){var a=k.ui.keyCode,c=this.headers.length,g=this.headers.index(d.target),f=!1;
switch(d.keyCode){case a.RIGHT:case a.DOWN:f=this.headers[(g+1)%c];
break;
case a.LEFT:case a.UP:f=this.headers[(g-1+c)%c];
break;
case a.SPACE:case a.ENTER:this._eventHandler(d);
break;
case a.HOME:f=this.headers[0];
break;
case a.END:f=this.headers[c-1]
}f&&(k(d.target).attr("tabIndex",-1),k(f).attr("tabIndex",0),k(f).trigger("focus"),d.preventDefault())
}},_panelKeyDown:function(a){a.keyCode===k.ui.keyCode.UP&&a.ctrlKey&&k(a.currentTarget).prev().trigger("focus")
},refresh:function(){var a=this.options;
this._processPanels(),a.active===!1&&a.collapsible===!0||!this.headers.length?(a.active=!1,this.active=k()):a.active===!1?this._activate(0):this.active.length&&!k.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=k()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){var a=this.headers,c=this.panels;
this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),c&&(this._off(a.not(this.headers)),this._off(c.not(this.panels)))
},_refresh:function(){var d,a=this.options,c=a.heightStyle,f=this.element.parent();
this.active=this._findActive(a.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var l=k(this),g=l.uniqueId().attr("id"),h=l.next(),m=h.uniqueId().attr("id");
l.attr("aria-controls",m),h.attr("aria-labelledby",g)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===c?(d=f.height(),this.element.siblings(":visible").each(function(){var e=k(this),g=e.css("position");
"absolute"!==g&&"fixed"!==g&&(d-=e.outerHeight(!0))
}),this.headers.each(function(){d-=k(this).outerHeight(!0)
}),this.headers.next().each(function(){k(this).height(Math.max(0,d-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===c&&(d=0,this.headers.next().each(function(){var e=k(this).is(":visible");
e||k(this).show(),d=Math.max(d,k(this).css("height","").height()),e||k(this).hide()
}).height(d))
},_activate:function(c){var a=this._findActive(c)[0];
a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return"number"==typeof a?this.headers.eq(a):k()
},_setupEvents:function(c){var a={keydown:"_keydown"};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(v){var p,O,g=this.options,f=this.active,M=k(v.currentTarget),d=M[0]===f[0],t=d&&g.collapsible,m=t?k():M.next(),L=f.next(),N={oldHeader:f,oldPanel:L,newHeader:t?k():M,newPanel:m};
v.preventDefault(),d&&!g.collapsible||this._trigger("beforeActivate",v,N)===!1||(g.active=t?!1:this.headers.index(M),this.active=d?k():M,this._toggle(N),this._removeClass(f,"ui-accordion-header-active","ui-state-active"),g.icons&&(p=f.children(".ui-accordion-header-icon"),this._removeClass(p,null,g.icons.activeHeader)._addClass(p,null,g.icons.header)),d||(this._removeClass(M,"ui-accordion-header-collapsed")._addClass(M,"ui-accordion-header-active","ui-state-active"),g.icons&&(O=M.children(".ui-accordion-header-icon"),this._removeClass(O,null,g.icons.header)._addClass(O,null,g.icons.activeHeader)),this._addClass(M.next(),"ui-accordion-content-active")))
},_toggle:function(d){var a=d.newPanel,c=this.prevShow.length?this.prevShow:d.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=a,this.prevHide=c,this.options.animate?this._animate(a,c,d):(c.hide(),a.show(),this._toggleComplete(d)),c.attr({"aria-hidden":"true"}),c.prev().attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&c.length?c.prev().attr({tabIndex:-1,"aria-expanded":"false"}):a.length&&this.headers.filter(function(){return 0===parseInt(k(this).attr("tabIndex"),10)
}).attr("tabIndex",-1),a.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(R,M,v){var S,m,g,P=this,f=0,L=R.css("box-sizing"),p=R.length&&(!M.length||R.index()<M.index()),O=this.options.animate||{},Q=p&&O.down||O,N=function(){P._toggleComplete(v)
};
return"number"==typeof Q&&(g=Q),"string"==typeof Q&&(m=Q),m=m||Q.easing||O.easing,g=g||Q.duration||O.duration,M.length?R.length?(S=R.show().outerHeight(),M.animate(this.hideProps,{duration:g,easing:m,step:function(a,c){c.now=Math.round(a)
}}),R.hide().animate(this.showProps,{duration:g,easing:m,complete:N,step:function(c,a){a.now=Math.round(c),"height"!==a.prop?"content-box"===L&&(f+=a.now):"content"!==P.options.heightStyle&&(a.now=Math.round(S-M.outerHeight()-f),f=0)
}}),void 0):M.animate(this.hideProps,g,m,N):R.animate(this.showProps,g,m,N)
},_toggleComplete:function(c){var d=c.oldPanel,a=d.prev();
this._removeClass(d,"ui-accordion-content-active"),this._removeClass(a,"ui-accordion-header-active")._addClass(a,"ui-accordion-header-collapsed"),d.length&&(d.parent()[0].className=d.parent()[0].className),this._trigger("activate",null,c)
}}),k.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()
},"click .ui-menu-item":function(d){var a=k(d.target),c=k(k.ui.safeActiveElement(this.document[0]));
!this.mouseHandled&&a.not(".ui-state-disabled").length&&(this.select(d),d.isPropagationStopped()||(this.mouseHandled=!0),a.has(".ui-menu").length?this.expand(d):!this.element.is(":focus")&&c.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(d){if(!this.previousFilter){var a=k(d.target).closest(".ui-menu-item"),c=k(d.currentTarget);
a[0]===c[0]&&(this._removeClass(c.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(d,c))
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(c,d){var a=this.active||this.element.find(this.options.items).eq(0);
d||this.focus(c,a)
},blur:function(a){this._delay(function(){var c=!k.contains(this.element[0],k.ui.safeActiveElement(this.document[0]));
c&&this.collapseAll(a)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1
}})
},_destroy:function(){var c=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),a=c.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),a.children().each(function(){var d=k(this);
d.data("ui-menu-submenu-caret")&&d.remove()
})
},_keydown:function(g){var d,f,l,h,c=!0;
switch(g.keyCode){case k.ui.keyCode.PAGE_UP:this.previousPage(g);
break;
case k.ui.keyCode.PAGE_DOWN:this.nextPage(g);
break;
case k.ui.keyCode.HOME:this._move("first","first",g);
break;
case k.ui.keyCode.END:this._move("last","last",g);
break;
case k.ui.keyCode.UP:this.previous(g);
break;
case k.ui.keyCode.DOWN:this.next(g);
break;
case k.ui.keyCode.LEFT:this.collapse(g);
break;
case k.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(g);
break;
case k.ui.keyCode.ENTER:case k.ui.keyCode.SPACE:this._activate(g);
break;
case k.ui.keyCode.ESCAPE:this.collapse(g);
break;
default:c=!1,f=this.previousFilter||"",h=!1,l=g.keyCode>=96&&105>=g.keyCode?""+(g.keyCode-96):String.fromCharCode(g.keyCode),clearTimeout(this.filterTimer),l===f?h=!0:l=f+l,d=this._filterMenuItems(l),d=h&&-1!==d.index(this.active.next())?this.active.nextAll(".ui-menu-item"):d,d.length||(l=String.fromCharCode(g.keyCode),d=this._filterMenuItems(l)),d.length?(this.focus(g,d),this.previousFilter=l,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}c&&g.preventDefault()
},_activate:function(a){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(a):this.select(a))
},refresh:function(){var m,d,g,t,p,c=this,l=this.options.icons.submenu,f=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),g=f.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var n=k(this),a=n.prev(),h=k("<span>").data("ui-menu-submenu-caret",!0);
c._addClass(h,"ui-menu-icon","ui-icon "+l),a.attr("aria-haspopup","true").prepend(h),n.attr("aria-labelledby",a.attr("id"))
}),this._addClass(g,"ui-menu","ui-widget ui-widget-content ui-front"),m=f.add(this.element),d=m.find(this.options.items),d.not(".ui-menu-item").each(function(){var a=k(this);
c._isDivider(a)&&c._addClass(a,"ui-menu-divider","ui-widget-content")
}),t=d.not(".ui-menu-item, .ui-menu-divider"),p=t.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(t,"ui-menu-item")._addClass(p,"ui-menu-item-wrapper"),d.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!k.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if("icons"===c){var a=this.element.find(".ui-menu-icon");
this._removeClass(a,null,this.options.icons.submenu)._addClass(a,null,d.submenu)
}this._super(c,d)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a+""),this._toggleClass(null,"ui-state-disabled",!!a)
},focus:function(c,f){var a,d,g;
this.blur(c,c&&"focus"===c.type),this._scrollIntoView(f),this.active=f.first(),d=this.active.children(".ui-menu-item-wrapper"),this._addClass(d,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),g=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(g,null,"ui-state-active"),c&&"keydown"===c.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),a=f.children(".ui-menu"),a.length&&c&&/^mouse/.test(c.type)&&this._startOpening(a),this.activeMenu=f.parent(),this._trigger("focus",c,{item:f})
},_scrollIntoView:function(h){var d,f,m,l,c,g;
this._hasScroll()&&(d=parseFloat(k.css(this.activeMenu[0],"borderTopWidth"))||0,f=parseFloat(k.css(this.activeMenu[0],"paddingTop"))||0,m=h.offset().top-this.activeMenu.offset().top-d-f,l=this.activeMenu.scrollTop(),c=this.activeMenu.height(),g=h.outerHeight(),0>m?this.activeMenu.scrollTop(l+m):m+g>c&&this.activeMenu.scrollTop(l+m-c+g))
},blur:function(a,c){c||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",a,{item:this.active}),this.active=null)
},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)
},this.delay))
},_open:function(c){var a=k.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden","true"),c.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)
},collapseAll:function(c,a){clearTimeout(this.timer),this.timer=this._delay(function(){var d=a?this.element:k(c&&c.target).closest(this.element.find(".ui-menu"));
d.length||(d=this.element),this._close(d),this.blur(c),this._removeClass(d.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=d
},this.delay)
},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(a){return !k(a.target).closest(".ui-menu").length
},_isDivider:function(a){return !/[^\-\u2014\u2013\s]/.test(a.text())
},collapse:function(a){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
c&&c.length&&(this._close(),this.focus(a,c))
},expand:function(a){var c=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
c&&c.length&&(this._open(c.parent()),this._delay(function(){this.focus(a,c)
}))
},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(c,f,a){var d;
this.active&&(d="first"===c||"last"===c?this.active["first"===c?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[c+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[f]()),this.focus(a,d)
},nextPage:function(d){var a,c,f;
return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return a=k(this),0>a.offset().top-c-f
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(d),void 0)
},previousPage:function(d){var a,c,f;
return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,f=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return a=k(this),a.offset().top-c+f>0
}),this.focus(d,a)):this.focus(d,this.activeMenu.find(this.options.items).first())),void 0):(this.next(d),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||k(c.target).closest(".ui-menu-item");
var a={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(c,!0),this._trigger("select",c,a)
},_filterMenuItems:function(d){var a=d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=RegExp("^"+a,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
})
}}),k.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var g,d,f,l=this.element[0].nodeName.toLowerCase(),h="textarea"===l,c="input"===l;
this.isMultiLine=h||!c&&this._isContentEditable(this.element),this.valueMethod=this.element[h||c?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly")){return g=!0,f=!0,d=!0,void 0
}g=!1,f=!1,d=!1;
var a=k.ui.keyCode;
switch(e.keyCode){case a.PAGE_UP:g=!0,this._move("previousPage",e);
break;
case a.PAGE_DOWN:g=!0,this._move("nextPage",e);
break;
case a.UP:g=!0,this._keyEvent("previous",e);
break;
case a.DOWN:g=!0,this._keyEvent("next",e);
break;
case a.ENTER:this.menu.active&&(g=!0,e.preventDefault(),this.menu.select(e));
break;
case a.TAB:this.menu.active&&this.menu.select(e);
break;
case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());
break;
default:d=!0,this._searchTimeout(e)
}},keypress:function(a){if(g){return g=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&a.preventDefault(),void 0
}if(!d){var e=k.ui.keyCode;
switch(a.keyCode){case e.PAGE_UP:this._move("previousPage",a);
break;
case e.PAGE_DOWN:this._move("nextPage",a);
break;
case e.UP:this._keyEvent("previous",a);
break;
case e.DOWN:this._keyEvent("next",a)
}}},input:function(a){return f?(f=!1,a.preventDefault(),void 0):(this._searchTimeout(a),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(a),this._change(a),void 0)
}}),this._initSource(),this.menu=k("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(a){a.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==k.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")
})
},menufocus:function(o,a){var m,p;
return this.isNewMenu&&(this.isNewMenu=!1,o.originalEvent&&/^mouse/.test(o.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){k(o.target).trigger(o.originalEvent)
}),void 0):(p=a.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",o,{item:p})&&o.originalEvent&&/^key/.test(o.originalEvent.type)&&this._value(p.value),m=a.item.attr("aria-label")||p.value,m&&k.trim(m).length&&(this.liveRegion.children().hide(),k("<div>").text(m).appendTo(this.liveRegion)),void 0)
},menuselect:function(o,a){var m=a.item.data("ui-autocomplete-item"),p=this.previous;
this.element[0]!==k.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=p,this._delay(function(){this.previous=p,this.selectedItem=m
})),!1!==this._trigger("select",o,{item:m})&&this._value(m.value),this.term=this._value(),this.close(o),this.selectedItem=m
}}),this.liveRegion=k("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(a,c){this._super(a,c),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&c&&this.xhr&&this.xhr.abort()
},_isEventTargetInWidget:function(c){var a=this.menu.element[0];
return c.target===this.element[0]||c.target===a||k.contains(a,c.target)
},_closeOnClickOutside:function(a){this._isEventTargetInWidget(a)||this.close()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_initSource:function(){var d,a,c=this;
k.isArray(this.options.source)?(d=this.options.source,this.source=function(e,f){f(k.ui.autocomplete.filter(d,e.term))
}):"string"==typeof this.options.source?(a=this.options.source,this.source=function(f,g){c.xhr&&c.xhr.abort(),c.xhr=k.ajax({url:a,data:f,dataType:"json",success:function(e){g(e)
},error:function(){g([])
}})
}):this.source=this.options.source
},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var f=this.term===this._value(),c=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;
(!f||f&&!c&&!d)&&(this.selectedItem=null,this.search(null,a))
},this.options.delay)
},search:function(a,c){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(c):this._trigger("search",c)!==!1?this._search(a):void 0
},_search:function(a){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return k.proxy(function(c){a===this.requestIndex&&this.__response(c),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")
},this)
},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()
},close:function(a){this.cancelSearch=!0,this._close(a)
},_close:function(a){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))
},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})
},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:k.map(a,function(c){return"string"==typeof c?{label:c,value:c}:k.extend({},c,{label:c.label||c.value,value:c.value||c.label})
})
},_suggest:function(c){var a=this.menu.element.empty();
this._renderMenu(a,c),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position(k.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(d,a){var c=this;
k.each(a,function(f,e){c._renderItemData(d,e)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-autocomplete-item",c)
},_renderItem:function(c,a){return k("<li>").append(k("<div>").text(a.label)).appendTo(c)
},_move:function(a,c){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[a](c),void 0):(this.search(null,c),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(a,c){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(a,c),c.preventDefault())
},_isContentEditable:function(a){if(!a.length){return !1
}var c=a.prop("contentEditable");
return"inherit"===c?this._isContentEditable(a.parent()):"true"===c
}}),k.extend(k.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(d,a){var c=RegExp(k.ui.autocomplete.escapeRegex(a),"i");
return k.grep(d,function(e){return c.test(e.label||e.value||e)
})
}}),k.widget("ui.autocomplete",k.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(c){var a;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(a=c&&c.length?this.options.messages.results(c.length):this.options.messages.noResults,this.liveRegion.children().hide(),k("<div>").text(a).appendTo(this.liveRegion))
}}),k.ui.autocomplete;
var H=/ui-corner-([a-z]){2,6}/g;
k.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()
},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
},_initWidgets:function(){var c=this,a=[];
k.each(this.options.items,function(e,g){var f,d={};
return g?"controlgroupLabel"===e?(f=c.element.find(g),f.each(function(){var h=k(this);
h.children(".ui-controlgroup-label-contents").length||h.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
}),c._addClass(f,null,"ui-widget ui-widget-content ui-state-default"),a=a.concat(f.get()),void 0):(k.fn[e]&&(d=c["_"+e+"Options"]?c["_"+e+"Options"]("middle"):{classes:{}},c.element.find(g).each(function(){var p=k(this),m=p[e]("instance"),l=k.widget.extend({},d);
if("button"!==e||!p.parent(".ui-spinner").length){m||(m=p[e]()[e]("instance")),m&&(l.classes=c._resolveClassesValues(l.classes,m)),p[e](l);
var i=p[e]("widget");
k.data(i[0],"ui-controlgroup-data",m?m:p[e]("instance")),a.push(i[0])
}})),void 0):void 0
}),this.childWidgets=k(k.unique(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(a){this.childWidgets.each(function(){var c=k(this),d=c.data("ui-controlgroup-data");
d&&d[a]&&d[a]()
})
},_updateCornerClass:function(c,f){var a="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",d=this._buildSimpleOptions(f,"label").classes.label;
this._removeClass(c,null,a),this._addClass(c,null,d)
},_buildSimpleOptions:function(c,f){var a="vertical"===this.options.direction,d={classes:{}};
return d.classes[f]={middle:"",first:"ui-corner-"+(a?"top":"left"),last:"ui-corner-"+(a?"bottom":"right"),only:"ui-corner-all"}[c],d
},_spinnerOptions:function(a){var c=this._buildSimpleOptions(a,"ui-spinner");
return c.classes["ui-spinner-up"]="",c.classes["ui-spinner-down"]="",c
},_buttonOptions:function(a){return this._buildSimpleOptions(a,"ui-button")
},_checkboxradioOptions:function(a){return this._buildSimpleOptions(a,"ui-checkboxradio-label")
},_selectmenuOptions:function(a){var c="vertical"===this.options.direction;
return{width:c?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(c?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(c?"top":"left")},last:{"ui-selectmenu-button-open":c?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(c?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[a]}
},_resolveClassesValues:function(d,a){var c={};
return k.each(d,function(f){var e=a.options.classes[f]||"";
e=k.trim(e.replace(H,"")),c[f]=(e+" "+d[f]).replace(/\s+/g," ")
}),c
},_setOption:function(a,c){return"direction"===a&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(a,c),"disabled"===a?(this._callChildMethod(c?"disable":"enable"),void 0):(this.refresh(),void 0)
},refresh:function(){var c,a=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),c=this.childWidgets,this.options.onlyVisible&&(c=c.filter(":visible")),c.length&&(k.each(["first","last"],function(d,e){var g=c[e]().data("ui-controlgroup-data");
if(g&&a["_"+g.widgetName+"Options"]){var f=a["_"+g.widgetName+"Options"](1===c.length?"only":e);
f.classes=a._resolveClassesValues(f.classes,g),g.element[g.widgetName](f)
}else{a._updateCornerClass(c[e](),e)
}}),this._callChildMethod("refresh"))
}}),k.widget("ui.checkboxradio",[k.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var d,a,c=this,f=this._super()||{};
return this._readType(),a=this.element.labels(),this.label=k(a[a.length-1]),this.label.length||k.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){c.originalLabel+=3===this.nodeType?k(this).text():this.outerHTML
}),this.originalLabel&&(f.label=this.originalLabel),d=this.element[0].disabled,null!=d&&(f.disabled=d),f
},_create:function(){var a=this.element[0].checked;
this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),a&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var a=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type,"input"===a&&/radio|checkbox/.test(this.type)||k.error("Can't create checkboxradio on element.nodeName="+a+" and element.type="+this.type)
},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var d,a=this.element[0].name,c="input[name='"+k.ui.escapeSelector(a)+"']";
return a?(d=this.form.length?k(this.form[0].elements).filter(c):k(c).filter(function(){return 0===k(this).form().length
}),d.not(this.element)):k([])
},_toggleClasses:function(){var a=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",a)._toggleClass(this.icon,null,"ui-icon-blank",!a),"radio"===this.type&&this._getRadioGroup().each(function(){var c=k(this).checkboxradio("instance");
c&&c._removeClass(c.label,"ui-checkboxradio-checked","ui-state-active")
})
},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())
},_setOption:function(a,c){return"label"!==a||c?(this._super(a,c),"disabled"===a?(this._toggleClass(this.label,null,"ui-state-disabled",c),this.element[0].disabled=c,void 0):(this.refresh(),void 0)):void 0
},_updateIcon:function(c){var a="ui-icon ui-icon-background ";
this.options.icon?(this.icon||(this.icon=k("<span>"),this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(a+=c?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,c?"ui-icon-blank":"ui-icon-check")):a+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",a),c||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var a=this.label.contents().not(this.element[0]);
this.icon&&(a=a.not(this.icon[0])),this.iconSpace&&(a=a.not(this.iconSpace[0])),a.remove(),this.label.append(this.options.label)
},refresh:function(){var a=this.element[0].checked,c=this.element[0].disabled;
this._updateIcon(a),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",a),null!==this.options.label&&this._updateLabel(),c!==this.options.disabled&&this._setOptions({disabled:c})
}}]),k.ui.checkboxradio,k.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var a,c=this._super()||{};
return this.isInput=this.element.is("input"),a=this.element[0].disabled,null!=a&&(c.disabled=a),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(c.label=this.originalLabel),c
},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(a){a.keyCode===k.ui.keyCode.SPACE&&(a.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))
}})
},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())
},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)
},_updateIcon:function(d,a){var c="iconPosition"!==d,g=c?this.options.iconPosition:a,f="top"===g||"bottom"===g;
this.icon?c&&this._removeClass(this.icon,null,this.options.icon):(this.icon=k("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),c&&this._addClass(this.icon,null,a),this._attachIcon(g),f?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(g))
},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")
},_attachIconSpace:function(a){this.icon[/^(?:end|bottom)/.test(a)?"before":"after"](this.iconSpace)
},_attachIcon:function(a){this.element[/^(?:end|bottom)/.test(a)?"append":"prepend"](this.icon)
},_setOptions:function(c){var d=void 0===c.showLabel?this.options.showLabel:c.showLabel,a=void 0===c.icon?this.options.icon:c.icon;
d||a||(c.showLabel=!0),this._super(c)
},_setOption:function(a,c){"icon"===a&&(c?this._updateIcon(a,c):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===a&&this._updateIcon(a,c),"showLabel"===a&&(this._toggleClass("ui-button-icon-only",null,!c),this._updateTooltip()),"label"===a&&(this.isInput?this.element.val(c):(this.element.html(c),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(a,c),"disabled"===a&&(this._toggleClass(null,"ui-state-disabled",c),this.element[0].disabled=c,c&&this.element.blur())
},refresh:function(){var a=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOptions({disabled:a}),this._updateTooltip()
}}),k.uiBackCompat!==!1&&(k.widget("ui.button",k.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()
},_setOption:function(a,c){return"text"===a?(this._super("showLabel",c),void 0):("showLabel"===a&&(this.options.text=c),"icon"===a&&(this.options.icons.primary=c),"icons"===a&&(c.primary?(this._super("icon",c.primary),this._super("iconPosition","beginning")):c.secondary&&(this._super("icon",c.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)
}}),k.fn.button=function(a){return function(){return !this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?a.apply(this,arguments):(k.ui.checkboxradio||k.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))
}
}(k.fn.button),k.fn.buttonset=function(){return k.ui.controlgroup||k.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))
}),k.ui.button,k.extend(k.ui,{datepicker:{version:"1.12.1"}});
var x;
k.extend(q.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return J(this._defaults,a||{}),this
},_attachDatepicker:function(d,a){var c,g,f;
c=d.nodeName.toLowerCase(),g="div"===c||"span"===c,d.id||(this.uuid+=1,d.id="dp"+this.uuid),f=this._newInst(k(d),g),f.settings=k.extend({},a||{}),"input"===c?this._connectDatepicker(d,f):g&&this._inlineDatepicker(d,f)
},_newInst:function(d,a){var c=d[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:c,input:d,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?z(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(d,a){var c=k(d);
a.append=k([]),a.trigger=k([]),c.hasClass(this.markerClassName)||(this._attachments(c,a),c.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(a),k.data(d,"datepicker",a),a.settings.disabled&&this._disableDatepicker(d))
},_attachments:function(h,d){var f,m,l,c=this._get(d,"appendText"),g=this._get(d,"isRTL");
d.append&&d.append.remove(),c&&(d.append=k("<span class='"+this._appendClass+"'>"+c+"</span>"),h[g?"before":"after"](d.append)),h.off("focus",this._showDatepicker),d.trigger&&d.trigger.remove(),f=this._get(d,"showOn"),("focus"===f||"both"===f)&&h.on("focus",this._showDatepicker),("button"===f||"both"===f)&&(m=this._get(d,"buttonText"),l=this._get(d,"buttonImage"),d.trigger=k(this._get(d,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:l,alt:m,title:m}):k("<button type='button'></button>").addClass(this._triggerClass).html(l?k("<img/>").attr({src:l,alt:m,title:m}):m)),h[g?"before":"after"](d.trigger),d.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===h[0]?k.datepicker._hideDatepicker():k.datepicker._datepickerShowing&&k.datepicker._lastInput!==h[0]?(k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(h[0])):k.datepicker._showDatepicker(h[0]),!1
}))
},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var h,d,g,m,l=new Date(2009,11,20),c=this._get(f,"dateFormat");
c.match(/[DM]/)&&(h=function(a){for(d=0,g=0,m=0;
a.length>m;
m++){a[m].length>d&&(d=a[m].length,g=m)
}return g
},l.setMonth(h(this._get(f,c.match(/MM/)?"monthNames":"monthNamesShort"))),l.setDate(h(this._get(f,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-l.getDay())),f.input.attr("size",this._formatDate(f,l).length)
}},_inlineDatepicker:function(d,a){var c=k(d);
c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(a.dpDiv),k.data(d,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(d),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(v,p,O,g,f){var a,t,m,M,N,L=this._dialogInst;
return L||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),L=this._dialogInst=this._newInst(this._dialogInput,!1),L.settings={},k.data(this._dialogInput[0],"datepicker",L)),J(L.settings,g||{}),p=p&&p.constructor===Date?this._formatDate(L,p):p,this._dialogInput.val(p),this._pos=f?f.length?f:[f.pageX,f.pageY]:null,this._pos||(t=document.documentElement.clientWidth,m=document.documentElement.clientHeight,M=document.documentElement.scrollLeft||document.body.scrollLeft,N=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[t/2-100+M,m/2-150+N]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),L.settings.onSelect=O,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",L),this
},_destroyDatepicker:function(d){var a,c=k(d),f=k.data(d,"datepicker");
c.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),k.removeData(d,"datepicker"),"input"===a?(f.append.remove(),f.trigger.remove(),c.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===a||"span"===a)&&c.removeClass(this.markerClassName).empty(),x===f&&(x=null))
},_enableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().removeClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}))
},_disableDatepicker:function(d){var a,c,g=k(d),f=k.data(d,"datepicker");
g.hasClass(this.markerClassName)&&(a=d.nodeName.toLowerCase(),"input"===a?(d.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===a||"span"===a)&&(c=g.children("."+this._inlineClass),c.children().addClass("ui-state-disabled"),c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===d?null:e
}),this._disabledInputs[this._disabledInputs.length]=d)
},_isDisabledDatepicker:function(a){if(!a){return !1
}for(var c=0;
this._disabledInputs.length>c;
c++){if(this._disabledInputs[c]===a){return !0
}}return !1
},_getInst:function(c){try{return k.data(c,"datepicker")
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(m,c,f){var t,p,g,d,a=this._getInst(m);
return 2===arguments.length&&"string"==typeof c?"defaults"===c?k.extend({},k.datepicker._defaults):a?"all"===c?k.extend({},a.settings):this._get(a,c):null:(t=c||{},"string"==typeof c&&(t={},t[c]=f),a&&(this._curInst===a&&this._hideDatepicker(),p=this._getDateDatepicker(m,!0),g=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),J(a.settings,t),null!==g&&void 0!==t.dateFormat&&void 0===t.minDate&&(a.settings.minDate=this._formatDate(a,g)),null!==d&&void 0!==t.dateFormat&&void 0===t.maxDate&&(a.settings.maxDate=this._formatDate(a,d)),"disabled" in t&&(t.disabled?this._disableDatepicker(m):this._enableDatepicker(m)),this._attachments(k(m),a),this._autoSize(a),this._setDate(a,p),this._updateAlternate(a),this._updateDatepicker(a)),void 0)
},_changeDatepicker:function(c,d,a){this._optionDatepicker(c,d,a)
},_refreshDatepicker:function(a){var c=this._getInst(a);
c&&this._updateDatepicker(c)
},_setDateDatepicker:function(c,d){var a=this._getInst(c);
a&&(this._setDate(a,d),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(c,d){var a=this._getInst(c);
return a&&!a.inline&&this._setDateFromField(a,d),a?this._getDate(a):null
},_doKeyDown:function(h){var d,f,m,l=k.datepicker._getInst(h.target),c=!0,g=l.dpDiv.is(".ui-datepicker-rtl");
if(l._keyEvent=!0,k.datepicker._datepickerShowing){switch(h.keyCode){case 9:k.datepicker._hideDatepicker(),c=!1;
break;
case 13:return m=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",l.dpDiv),m[0]&&k.datepicker._selectDay(h.target,l.selectedMonth,l.selectedYear,m[0]),d=k.datepicker._get(l,"onSelect"),d?(f=k.datepicker._formatDate(l),d.apply(l.input?l.input[0]:null,[f,l])):k.datepicker._hideDatepicker(),!1;
case 27:k.datepicker._hideDatepicker();
break;
case 33:k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 34:k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 35:(h.ctrlKey||h.metaKey)&&k.datepicker._clearDate(h.target),c=h.ctrlKey||h.metaKey;
break;
case 36:(h.ctrlKey||h.metaKey)&&k.datepicker._gotoToday(h.target),c=h.ctrlKey||h.metaKey;
break;
case 37:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?1:-1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 38:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,-7,"D"),c=h.ctrlKey||h.metaKey;
break;
case 39:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?-1:1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 40:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,7,"D"),c=h.ctrlKey||h.metaKey;
break;
default:c=!1
}}else{36===h.keyCode&&h.ctrlKey?k.datepicker._showDatepicker(this):c=!1
}c&&(h.preventDefault(),h.stopPropagation())
},_doKeyPress:function(d){var a,c,f=k.datepicker._getInst(d.target);
return k.datepicker._get(f,"constrainInput")?(a=k.datepicker._possibleChars(k.datepicker._get(f,"dateFormat")),c=String.fromCharCode(null==d.charCode?d.keyCode:d.charCode),d.ctrlKey||d.metaKey||" ">c||!a||a.indexOf(c)>-1):void 0
},_doKeyUp:function(d){var a,c=k.datepicker._getInst(d.target);
if(c.input.val()!==c.lastVal){try{a=k.datepicker.parseDate(k.datepicker._get(c,"dateFormat"),c.input?c.input.val():null,k.datepicker._getFormatConfig(c)),a&&(k.datepicker._setDateFromField(c),k.datepicker._updateAlternate(c),k.datepicker._updateDatepicker(c))
}catch(f){}}return !0
},_showDatepicker:function(i){if(i=i.target||i,"input"!==i.nodeName.toLowerCase()&&(i=k("input",i.parentNode)[0]),!k.datepicker._isDisabledDatepicker(i)&&k.datepicker._lastInput!==i){var f,t,m,g,d,a,p;
f=k.datepicker._getInst(i),k.datepicker._curInst&&k.datepicker._curInst!==f&&(k.datepicker._curInst.dpDiv.stop(!0,!0),f&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),t=k.datepicker._get(f,"beforeShow"),m=t?t.apply(i,[i,f]):{},m!==!1&&(J(f.settings,m),f.lastVal=null,k.datepicker._lastInput=i,k.datepicker._setDateFromField(f),k.datepicker._inDialog&&(i.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(i),k.datepicker._pos[1]+=i.offsetHeight),g=!1,k(i).parents().each(function(){return g|="fixed"===k(this).css("position"),!g
}),d={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,f.dpDiv.empty(),f.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(f),d=k.datepicker._checkOffset(f,d,g),f.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":g?"fixed":"absolute",display:"none",left:d.left+"px",top:d.top+"px"}),f.inline||(a=k.datepicker._get(f,"showAnim"),p=k.datepicker._get(f,"duration"),f.dpDiv.css("z-index",C(k(i))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[a]?f.dpDiv.show(a,k.datepicker._get(f,"showOptions"),p):f.dpDiv[a||"show"](a?p:null),k.datepicker._shouldFocusInput(f)&&f.input.trigger("focus"),k.datepicker._curInst=f))
}},_updateDatepicker:function(h){this.maxRows=4,x=h,h.dpDiv.empty().append(this._generateHTML(h)),this._attachHandlers(h);
var d,f=this._getNumberOfMonths(h),l=f[1],c=17,g=h.dpDiv.find("."+this._dayOverClass+" a");
g.length>0&&y.apply(g.get(0)),h.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),l>1&&h.dpDiv.addClass("ui-datepicker-multi-"+l).css("width",c*l+"em"),h.dpDiv[(1!==f[0]||1!==f[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),h.dpDiv[(this._get(h,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),h===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(h)&&h.input.trigger("focus"),h.yearshtml&&(d=h.yearshtml,setTimeout(function(){d===h.yearshtml&&h.yearshtml&&h.dpDiv.find("select.ui-datepicker-year:first").replaceWith(h.yearshtml),d=h.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(t,m,v){var f=t.dpDiv.outerWidth(),d=t.dpDiv.outerHeight(),u=t.input?t.input.outerWidth():0,c=t.input?t.input.outerHeight():0,p=document.documentElement.clientWidth+(v?0:k(document).scrollLeft()),g=document.documentElement.clientHeight+(v?0:k(document).scrollTop());
return m.left-=this._get(t,"isRTL")?f-u:0,m.left-=v&&m.left===t.input.offset().left?k(document).scrollLeft():0,m.top-=v&&m.top===t.input.offset().top+c?k(document).scrollTop():0,m.left-=Math.min(m.left,m.left+f>p&&p>f?Math.abs(m.left+f-p):0),m.top-=Math.min(m.top,m.top+d>g&&g>d?Math.abs(d+c):0),m
},_findPos:function(d){for(var a,c=this._getInst(d),f=this._get(c,"isRTL");
d&&("hidden"===d.type||1!==d.nodeType||k.expr.filters.hidden(d));
){d=d[f?"previousSibling":"nextSibling"]
}return a=k(d).offset(),[a.left,a.top]
},_hideDatepicker:function(g){var d,f,l,h,c=this._curInst;
!c||g&&c!==k.data(g,"datepicker")||this._datepickerShowing&&(d=this._get(c,"showAnim"),f=this._get(c,"duration"),l=function(){k.datepicker._tidyDialog(c)
},k.effects&&(k.effects.effect[d]||k.effects[d])?c.dpDiv.hide(d,k.datepicker._get(c,"showOptions"),f,l):c.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?f:null,l),d||l(),this._datepickerShowing=!1,h=this._get(c,"onClose"),h&&h.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(d){if(k.datepicker._curInst){var a=k(d.target),c=k.datepicker._getInst(a[0]);
(a[0].id!==k.datepicker._mainDivId&&0===a.parents("#"+k.datepicker._mainDivId).length&&!a.hasClass(k.datepicker.markerClassName)&&!a.closest("."+k.datepicker._triggerClass).length&&k.datepicker._datepickerShowing&&(!k.datepicker._inDialog||!k.blockUI)||a.hasClass(k.datepicker.markerClassName)&&k.datepicker._curInst!==c)&&k.datepicker._hideDatepicker()
}},_adjustDate:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
this._isDisabledDatepicker(g[0])||(this._adjustInstDate(f,a+("M"===c?this._get(f,"showCurrentAtPos"):0),c),this._updateDatepicker(f))
},_gotoToday:function(d){var a,c=k(d),f=this._getInst(c[0]);
this._get(f,"gotoCurrent")&&f.currentDay?(f.selectedDay=f.currentDay,f.drawMonth=f.selectedMonth=f.currentMonth,f.drawYear=f.selectedYear=f.currentYear):(a=new Date,f.selectedDay=a.getDate(),f.drawMonth=f.selectedMonth=a.getMonth(),f.drawYear=f.selectedYear=a.getFullYear()),this._notifyChange(f),this._adjustDate(c)
},_selectMonthYear:function(d,a,c){var g=k(d),f=this._getInst(g[0]);
f["selected"+("M"===c?"Month":"Year")]=f["draw"+("M"===c?"Month":"Year")]=parseInt(a.options[a.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(g)
},_selectDay:function(g,d,f,l){var h,c=k(g);
k(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(c[0])||(h=this._getInst(c[0]),h.selectedDay=h.currentDay=k("a",l).html(),h.selectedMonth=h.currentMonth=d,h.selectedYear=h.currentYear=f,this._selectDate(g,this._formatDate(h,h.currentDay,h.currentMonth,h.currentYear)))
},_clearDate:function(c){var a=k(c);
this._selectDate(a,"")
},_selectDate:function(d,a){var c,g=k(d),f=this._getInst(g[0]);
a=null!=a?a:this._formatDate(f),f.input&&f.input.val(a),this._updateAlternate(f),c=this._get(f,"onSelect"),c?c.apply(f.input?f.input[0]:null,[a,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.trigger("focus"),this._lastInput=null)
},_updateAlternate:function(d){var a,c,g,f=this._get(d,"altField");
f&&(a=this._get(d,"altFormat")||this._get(d,"dateFormat"),c=this._getDate(d),g=this.formatDate(a,c,this._getFormatConfig(d)),k(f).val(g))
},noWeekends:function(a){var c=a.getDay();
return[c>0&&6>c,""]
},iso8601Week:function(c){var d,a=new Date(c.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),d=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((d-a)/86400000)/7)+1
},parseDate:function(ab,X,P){if(null==ab||null==X){throw"Invalid arguments"
}if(X="object"==typeof X?""+X:X+"",""===X){return null
}var T,S,af,Q,Y=0,V=(P?P.shortYearCutoff:null)||this._defaults.shortYearCutoff,ad="string"!=typeof V?V:(new Date).getFullYear()%100+parseInt(V,10),O=(P?P.dayNamesShort:null)||this._defaults.dayNamesShort,ac=(P?P.dayNames:null)||this._defaults.dayNames,R=(P?P.monthNamesShort:null)||this._defaults.monthNamesShort,aa=(P?P.monthNames:null)||this._defaults.monthNames,Z=-1,U=-1,ag=-1,N=-1,ae=!1,t=function(c){var a=ab.length>T+1&&ab.charAt(T+1)===c;
return a&&T++,a
},M=function(d){var g=t(d),f="@"===d?14:"!"===d?20:"y"===d&&g?4:"o"===d?3:2,i="y"===d?f:1,h=RegExp("^\\d{"+i+","+f+"}"),c=X.substring(Y).match(h);
if(!c){throw"Missing number at position "+Y
}return Y+=c[0].length,parseInt(c[0],10)
},W=function(f,d,h){var g=-1,c=k.map(t(f)?h:d,function(a,i){return[[i,a]]
}).sort(function(a,i){return -(a[1].length-i[1].length)
});
if(k.each(c,function(a,l){var i=l[1];
return X.substr(Y,i.length).toLowerCase()===i.toLowerCase()?(g=l[0],Y+=i.length,!1):void 0
}),-1!==g){return g+1
}throw"Unknown name at position "+Y
},L=function(){if(X.charAt(Y)!==ab.charAt(T)){throw"Unexpected literal at position "+Y
}Y++
};
for(T=0;
ab.length>T;
T++){if(ae){"'"!==ab.charAt(T)||t("'")?L():ae=!1
}else{switch(ab.charAt(T)){case"d":ag=M("d");
break;
case"D":W("D",O,ac);
break;
case"o":N=M("o");
break;
case"m":U=M("m");
break;
case"M":U=W("M",R,aa);
break;
case"y":Z=M("y");
break;
case"@":Q=new Date(M("@")),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"!":Q=new Date((M("!")-this._ticksTo1970)/10000),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"'":t("'")?L():ae=!0;
break;
default:L()
}}}if(X.length>Y&&(af=X.substr(Y),!/^\s+/.test(af))){throw"Extra/unparsed characters found in date: "+af
}if(-1===Z?Z=(new Date).getFullYear():100>Z&&(Z+=(new Date).getFullYear()-(new Date).getFullYear()%100+(ad>=Z?0:-100)),N>-1){for(U=1,ag=N;
;
){if(S=this._getDaysInMonth(Z,U-1),S>=ag){break
}U++,ag-=S
}}if(Q=this._daylightSavingAdjust(new Date(Z,U-1,ag)),Q.getFullYear()!==Z||Q.getMonth()+1!==U||Q.getDate()!==ag){throw"Invalid date"
}return Q
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(R,M,v){if(!M){return""
}var S,m=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort,g=(v?v.dayNames:null)||this._defaults.dayNames,P=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort,f=(v?v.monthNames:null)||this._defaults.monthNames,L=function(c){var a=R.length>S+1&&R.charAt(S+1)===c;
return a&&S++,a
},p=function(c,h,a){var d=""+h;
if(L(c)){for(;
a>d.length;
){d="0"+d
}}return d
},O=function(c,h,a,d){return L(c)?d[h]:a[h]
},Q="",N=!1;
if(M){for(S=0;
R.length>S;
S++){if(N){"'"!==R.charAt(S)||L("'")?Q+=R.charAt(S):N=!1
}else{switch(R.charAt(S)){case"d":Q+=p("d",M.getDate(),2);
break;
case"D":Q+=O("D",M.getDay(),m,g);
break;
case"o":Q+=p("o",Math.round((new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime()-new Date(M.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":Q+=p("m",M.getMonth()+1,2);
break;
case"M":Q+=O("M",M.getMonth(),P,f);
break;
case"y":Q+=L("y")?M.getFullYear():(10>M.getFullYear()%100?"0":"")+M.getFullYear()%100;
break;
case"@":Q+=M.getTime();
break;
case"!":Q+=10000*M.getTime()+this._ticksTo1970;
break;
case"'":L("'")?Q+="'":N=!0;
break;
default:Q+=R.charAt(S)
}}}}return Q
},_possibleChars:function(c){var f,a="",d=!1,g=function(e){var h=c.length>f+1&&c.charAt(f+1)===e;
return h&&f++,h
};
for(f=0;
c.length>f;
f++){if(d){"'"!==c.charAt(f)||g("'")?a+=c.charAt(f):d=!1
}else{switch(c.charAt(f)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":g("'")?a+="'":d=!0;
break;
default:a+=c.charAt(f)
}}}return a
},_get:function(a,c){return void 0!==a.settings[c]?a.settings[c]:this._defaults[c]
},_setDateFromField:function(f,l){if(f.input.val()!==f.lastVal){var d=this._get(f,"dateFormat"),g=f.lastVal=f.input?f.input.val():null,p=this._getDefaultDate(f),m=p,c=this._getFormatConfig(f);
try{m=this.parseDate(d,g,c)||p
}catch(h){g=l?"":g
}f.selectedDay=m.getDate(),f.drawMonth=f.selectedMonth=m.getMonth(),f.drawYear=f.selectedYear=m.getFullYear(),f.currentDay=g?m.getDate():0,f.currentMonth=g?m.getMonth():0,f.currentYear=g?m.getFullYear():0,this._adjustInstDate(f)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(g,d,f){var l=function(a){var i=new Date;
return i.setDate(i.getDate()+a),i
},h=function(p){try{return k.datepicker.parseDate(k.datepicker._get(g,"dateFormat"),p,k.datepicker._getFormatConfig(g))
}catch(u){}for(var M=(p.toLowerCase().match(/^c/)?k.datepicker._getDate(g):null)||new Date,L=M.getFullYear(),m=M.getMonth(),v=M.getDate(),t=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,e=t.exec(p);
e;
){switch(e[2]||"d"){case"d":case"D":v+=parseInt(e[1],10);
break;
case"w":case"W":v+=7*parseInt(e[1],10);
break;
case"m":case"M":m+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m));
break;
case"y":case"Y":L+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m))
}e=t.exec(p)
}return new Date(L,m,v)
},c=null==d||""===d?f:"string"==typeof d?h(d):"number"==typeof d?isNaN(d)?f:l(d):new Date(d.getTime());
return c=c&&"Invalid Date"==""+c?f:c,c&&(c.setHours(0),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0)),this._daylightSavingAdjust(c)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(f,h,d){var g=!h,m=f.selectedMonth,l=f.selectedYear,c=this._restrictMinMax(f,this._determineDate(f,h,new Date));
f.selectedDay=f.currentDay=c.getDate(),f.drawMonth=f.selectedMonth=f.currentMonth=c.getMonth(),f.drawYear=f.selectedYear=f.currentYear=c.getFullYear(),m===f.selectedMonth&&l===f.selectedYear||d||this._notifyChange(f),this._adjustInstDate(f),f.input&&f.input.val(g?"":this._formatDate(f))
},_getDate:function(a){var c=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return c
},_attachHandlers:function(d){var a=this._get(d,"stepMonths"),c="#"+d.id.replace(/\\\\/g,"\\");
d.dpDiv.find("[data-handler]").map(function(){var f={prev:function(){k.datepicker._adjustDate(c,-a,"M")
},next:function(){k.datepicker._adjustDate(c,+a,"M")
},hide:function(){k.datepicker._hideDatepicker()
},today:function(){k.datepicker._gotoToday(c)
},selectDay:function(){return k.datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return k.datepicker._selectMonthYear(c,this,"M"),!1
},selectYear:function(){return k.datepicker._selectMonthYear(c,this,"Y"),!1
}};
k(this).on(this.getAttribute("data-event"),f[this.getAttribute("data-handler")])
})
},_generateHTML:function(aJ){var aY,aU,aK,aP,aO,a2,aL,aV,aR,a0,aI,aZ,aN,aX,aW,aQ,a3,aH,a1,aE,aG,aS,aF,az,ay,at,ah,al,ao,ai,au,aD,am,aB,an,ae,ax,aw,ap,aj=new Date,aA=this._daylightSavingAdjust(new Date(aj.getFullYear(),aj.getMonth(),aj.getDate())),ab=this._get(aJ,"isRTL"),aT=this._get(aJ,"showButtonPanel"),aM=this._get(aJ,"hideIfNoPrevNext"),aq=this._get(aJ,"navigationAsDateFormat"),ag=this._getNumberOfMonths(aJ),af=this._get(aJ,"showCurrentAtPos"),aC=this._get(aJ,"stepMonths"),ac=1!==ag[0]||1!==ag[1],av=this._daylightSavingAdjust(aJ.currentDay?new Date(aJ.currentYear,aJ.currentMonth,aJ.currentDay):new Date(9999,9,9)),ak=this._getMinMaxDate(aJ,"min"),ar=this._getMinMaxDate(aJ,"max"),aa=aJ.drawMonth-af,ad=aJ.drawYear;
if(0>aa&&(aa+=12,ad--),ar){for(aY=this._daylightSavingAdjust(new Date(ar.getFullYear(),ar.getMonth()-ag[0]*ag[1]+1,ar.getDate())),aY=ak&&ak>aY?ak:aY;
this._daylightSavingAdjust(new Date(ad,aa,1))>aY;
){aa--,0>aa&&(aa=11,ad--)
}}for(aJ.drawMonth=aa,aJ.drawYear=ad,aU=this._get(aJ,"prevText"),aU=aq?this.formatDate(aU,this._daylightSavingAdjust(new Date(ad,aa-aC,1)),this._getFormatConfig(aJ)):aU,aK=this._canAdjustMonth(aJ,-1,ad,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":aM?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",aP=this._get(aJ,"nextText"),aP=aq?this.formatDate(aP,this._daylightSavingAdjust(new Date(ad,aa+aC,1)),this._getFormatConfig(aJ)):aP,aO=this._canAdjustMonth(aJ,1,ad,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>":aM?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>",a2=this._get(aJ,"currentText"),aL=this._get(aJ,"gotoCurrent")&&aJ.currentDay?av:aA,a2=aq?this.formatDate(a2,aL,this._getFormatConfig(aJ)):a2,aV=aJ.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aJ,"closeText")+"</button>",aR=aT?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aJ,aL)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a2+"</button>":"")+(ab?"":aV)+"</div>":"",a0=parseInt(this._get(aJ,"firstDay"),10),a0=isNaN(a0)?0:a0,aI=this._get(aJ,"showWeek"),aZ=this._get(aJ,"dayNames"),aN=this._get(aJ,"dayNamesMin"),aX=this._get(aJ,"monthNames"),aW=this._get(aJ,"monthNamesShort"),aQ=this._get(aJ,"beforeShowDay"),a3=this._get(aJ,"showOtherMonths"),aH=this._get(aJ,"selectOtherMonths"),a1=this._getDefaultDate(aJ),aE="",aS=0;
ag[0]>aS;
aS++){for(aF="",this.maxRows=4,az=0;
ag[1]>az;
az++){if(ay=this._daylightSavingAdjust(new Date(ad,aa,aJ.selectedDay)),at=" ui-corner-all",ah="",ac){if(ah+="<div class='ui-datepicker-group",ag[1]>1){switch(az){case 0:ah+=" ui-datepicker-group-first",at=" ui-corner-"+(ab?"right":"left");
break;
case ag[1]-1:ah+=" ui-datepicker-group-last",at=" ui-corner-"+(ab?"left":"right");
break;
default:ah+=" ui-datepicker-group-middle",at=""
}}ah+="'>"
}for(ah+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+at+"'>"+(/all|left/.test(at)&&0===aS?ab?aO:aK:"")+(/all|right/.test(at)&&0===aS?ab?aK:aO:"")+this._generateMonthYearHeader(aJ,aa,ad,ak,ar,aS>0||az>0,aX,aW)+"</div><table class='ui-datepicker-calendar'><thead><tr>",al=aI?"<th class='ui-datepicker-week-col'>"+this._get(aJ,"weekHeader")+"</th>":"",aG=0;
7>aG;
aG++){ao=(aG+a0)%7,al+="<th scope='col'"+((aG+a0+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+aZ[ao]+"'>"+aN[ao]+"</span></th>"
}for(ah+=al+"</tr></thead><tbody>",ai=this._getDaysInMonth(ad,aa),ad===aJ.selectedYear&&aa===aJ.selectedMonth&&(aJ.selectedDay=Math.min(aJ.selectedDay,ai)),au=(this._getFirstDayOfMonth(ad,aa)-a0+7)%7,aD=Math.ceil((au+ai)/7),am=ac?this.maxRows>aD?this.maxRows:aD:aD,this.maxRows=am,aB=this._daylightSavingAdjust(new Date(ad,aa,1-au)),an=0;
am>an;
an++){for(ah+="<tr>",ae=aI?"<td class='ui-datepicker-week-col'>"+this._get(aJ,"calculateWeek")(aB)+"</td>":"",aG=0;
7>aG;
aG++){ax=aQ?aQ.apply(aJ.input?aJ.input[0]:null,[aB]):[!0,""],aw=aB.getMonth()!==aa,ap=aw&&!aH||!ax[0]||ak&&ak>aB||ar&&aB>ar,ae+="<td class='"+((aG+a0+6)%7>=5?" ui-datepicker-week-end":"")+(aw?" ui-datepicker-other-month":"")+(aB.getTime()===ay.getTime()&&aa===aJ.selectedMonth&&aJ._keyEvent||a1.getTime()===aB.getTime()&&a1.getTime()===ay.getTime()?" "+this._dayOverClass:"")+(ap?" "+this._unselectableClass+" ui-state-disabled":"")+(aw&&!a3?"":" "+ax[1]+(aB.getTime()===av.getTime()?" "+this._currentClass:"")+(aB.getTime()===aA.getTime()?" ui-datepicker-today":""))+"'"+(aw&&!a3||!ax[2]?"":" title='"+ax[2].replace(/'/g,"&#39;")+"'")+(ap?"":" data-handler='selectDay' data-event='click' data-month='"+aB.getMonth()+"' data-year='"+aB.getFullYear()+"'")+">"+(aw&&!a3?"&#xa0;":ap?"<span class='ui-state-default'>"+aB.getDate()+"</span>":"<a class='ui-state-default"+(aB.getTime()===aA.getTime()?" ui-state-highlight":"")+(aB.getTime()===av.getTime()?" ui-state-active":"")+(aw?" ui-priority-secondary":"")+"' href='#'>"+aB.getDate()+"</a>")+"</td>",aB.setDate(aB.getDate()+1),aB=this._daylightSavingAdjust(aB)
}ah+=ae+"</tr>"
}aa++,aa>11&&(aa=0,ad++),ah+="</tbody></table>"+(ac?"</div>"+(ag[0]>0&&az===ag[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=ah
}aE+=aF
}return aE+=aR,aJ._keyEvent=!1,aE
},_generateMonthYearHeader:function(O,aa,W,P,T,S,ae,Q){var X,V,ac,N,ab,R,Z,Y,U=this._get(O,"changeMonth"),af=this._get(O,"changeYear"),M=this._get(O,"showMonthAfterYear"),ad="<div class='ui-datepicker-title'>",L="";
if(S||!U){L+="<span class='ui-datepicker-month'>"+ae[aa]+"</span>"
}else{for(X=P&&P.getFullYear()===W,V=T&&T.getFullYear()===W,L+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",ac=0;
12>ac;
ac++){(!X||ac>=P.getMonth())&&(!V||T.getMonth()>=ac)&&(L+="<option value='"+ac+"'"+(ac===aa?" selected='selected'":"")+">"+Q[ac]+"</option>")
}L+="</select>"
}if(M||(ad+=L+(!S&&U&&af?"":"&#xa0;")),!O.yearshtml){if(O.yearshtml="",S||!af){ad+="<span class='ui-datepicker-year'>"+W+"</span>"
}else{for(N=this._get(O,"yearRange").split(":"),ab=(new Date).getFullYear(),R=function(a){var c=a.match(/c[+\-].*/)?W+parseInt(a.substring(1),10):a.match(/[+\-].*/)?ab+parseInt(a,10):parseInt(a,10);
return isNaN(c)?ab:c
},Z=R(N[0]),Y=Math.max(Z,R(N[1]||"")),Z=P?Math.max(Z,P.getFullYear()):Z,Y=T?Math.min(Y,T.getFullYear()):Y,O.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
Y>=Z;
Z++){O.yearshtml+="<option value='"+Z+"'"+(Z===W?" selected='selected'":"")+">"+Z+"</option>"
}O.yearshtml+="</select>",ad+=O.yearshtml,O.yearshtml=null
}}return ad+=this._get(O,"yearSuffix"),M&&(ad+=(!S&&U&&af?"":"&#xa0;")+L),ad+="</div>"
},_adjustInstDate:function(f,h,d){var g=f.selectedYear+("Y"===d?h:0),m=f.selectedMonth+("M"===d?h:0),l=Math.min(f.selectedDay,this._getDaysInMonth(g,m))+("D"===d?h:0),c=this._restrictMinMax(f,this._daylightSavingAdjust(new Date(g,m,l)));
f.selectedDay=c.getDate(),f.drawMonth=f.selectedMonth=c.getMonth(),f.drawYear=f.selectedYear=c.getFullYear(),("M"===d||"Y"===d)&&this._notifyChange(f)
},_restrictMinMax:function(c,f){var a=this._getMinMaxDate(c,"min"),d=this._getMinMaxDate(c,"max"),g=a&&a>f?a:f;
return d&&g>d?d:g
},_notifyChange:function(a){var c=this._get(a,"onChangeMonthYear");
c&&c.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
},_getNumberOfMonths:function(a){var c=this._get(a,"numberOfMonths");
return null==c?[1,1]:"number"==typeof c?[1,c]:c
},_getMinMaxDate:function(a,c){return this._determineDate(a,this._get(a,c+"Date"),null)
},_getDaysInMonth:function(a,c){return 32-this._daylightSavingAdjust(new Date(a,c,32)).getDate()
},_getFirstDayOfMonth:function(a,c){return new Date(a,c,1).getDay()
},_canAdjustMonth:function(c,f,a,d){var h=this._getNumberOfMonths(c),g=this._daylightSavingAdjust(new Date(a,d+(0>f?f:h[0]*h[1]),1));
return 0>f&&g.setDate(this._getDaysInMonth(g.getFullYear(),g.getMonth())),this._isInRange(c,g)
},_isInRange:function(u,m){var g,v,f=this._getMinMaxDate(u,"min"),d=this._getMinMaxDate(u,"max"),p=null,c=null,l=this._get(u,"yearRange");
return l&&(g=l.split(":"),v=(new Date).getFullYear(),p=parseInt(g[0],10),c=parseInt(g[1],10),g[0].match(/[+\-].*/)&&(p+=v),g[1].match(/[+\-].*/)&&(c+=v)),(!f||m.getTime()>=f.getTime())&&(!d||m.getTime()<=d.getTime())&&(!p||m.getFullYear()>=p)&&(!c||c>=m.getFullYear())
},_getFormatConfig:function(a){var c=this._get(a,"shortYearCutoff");
return c="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),{shortYearCutoff:c,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(c,f,a,d){f||(c.currentDay=c.selectedDay,c.currentMonth=c.selectedMonth,c.currentYear=c.selectedYear);
var g=f?"object"==typeof f?f:this._daylightSavingAdjust(new Date(d,a,f)):this._daylightSavingAdjust(new Date(c.currentYear,c.currentMonth,c.currentDay));
return this.formatDate(this._get(c,"dateFormat"),g,this._getFormatConfig(c))
}}),k.fn.datepicker=function(c){if(!this.length){return this
}k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof c||"isDisabled"!==c&&"getDate"!==c&&"widget"!==c?"option"===c&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof c?k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this].concat(a)):k.datepicker._attachDatepicker(this,c)
}):k.datepicker["_"+c+"Datepicker"].apply(k.datepicker,[this[0]].concat(a))
},k.datepicker=new q,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker,k.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(c){var a=k(this).css(c).offset().top;
0>a&&k(this).css("top",c.top-a)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&k.fn.draggable&&this._makeDraggable(),this.options.resizable&&k.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a.jquery||a.nodeType)?k(a):this.document.find(a||"body").eq(0)
},_destroy:function(){var a,c=this.originalPosition;
this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=c.parent.children().eq(c.index),a.length&&a[0]!==this.element[0]?a.before(this.element):c.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:k.noop,enable:k.noop,close:function(c){var a=this;
this._isOpen&&this._trigger("beforeClose",c)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",c)
}))
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(d,a){var c=!1,g=this.uiDialog.siblings(".ui-front:visible").map(function(){return +k(this).css("z-index")
}).get(),f=Math.max.apply(null,g);
return f>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",f+1),c=!0),c&&!a&&this._trigger("focus",d),c
},open:function(){var a=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=k(k.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable(),a._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)
},_focusTabbable:function(){var a=this._focusedElement;
a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).trigger("focus")
},_keepFocus:function(c){function a(){var f=k.ui.safeActiveElement(this.document[0]),d=this.uiDialog[0]===f||k.contains(this.uiDialog[0],f);
d||this._focusTabbable()
}c.preventDefault(),a.call(this),this._delay(a)
},_createWrapper:function(){this.uiDialog=k("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(d){if(this.options.closeOnEscape&&!d.isDefaultPrevented()&&d.keyCode&&d.keyCode===k.ui.keyCode.ESCAPE){return d.preventDefault(),this.close(d),void 0
}if(d.keyCode===k.ui.keyCode.TAB&&!d.isDefaultPrevented()){var a=this.uiDialog.find(":tabbable"),c=a.filter(":first"),f=a.filter(":last");
d.target!==f[0]&&d.target!==this.uiDialog[0]||d.shiftKey?d.target!==c[0]&&d.target!==this.uiDialog[0]||!d.shiftKey||(this._delay(function(){f.trigger("focus")
}),d.preventDefault()):(this._delay(function(){c.trigger("focus")
}),d.preventDefault())
}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var a;
this.uiDialogTitlebar=k("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(c){k(c.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")
}}),this.uiDialogTitlebarClose=k("<button type='button'></button>").button({label:k("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(c){c.preventDefault(),this.close(c)
}}),a=k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(a,"ui-dialog-title"),this._title(a),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){this.options.title?a.text(this.options.title):a.html("&#160;")
},_createButtonPane:function(){this.uiDialogButtonPane=k("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=k("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()
},_createButtons:function(){var c=this,a=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),k.isEmptyObject(a)||k.isArray(a)&&!a.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(k.each(a,function(d,e){var g,f;
e=k.isFunction(e)?{click:e,text:d}:e,e=k.extend({type:"button"},e),g=e.click,f={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,k("<button></button>",e).button(f).appendTo(c.uiButtonSet).on("click",function(){g.apply(c.element[0],arguments)
})
}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)
},_makeDraggable:function(){function d(e){return{position:e.position,offset:e.offset}
}var a=this,c=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,f){a._addClass(k(this),"ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",e,d(f))
},drag:function(e,f){a._trigger("drag",e,d(f))
},stop:function(h,g){var e=g.offset.left-a.document.scrollLeft(),f=g.offset.top-a.document.scrollTop();
c.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(f>=0?"+":"")+f,of:a.window},a._removeClass(k(this),"ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",h,d(g))
}})
},_makeResizable:function(){function g(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}
}var d=this,f=this.options,l=f.resizable,h=this.uiDialog.css("position"),c="string"==typeof l?l:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:this._minHeight(),handles:c,start:function(a,e){d._addClass(k(this),"ui-dialog-resizing"),d._blockFrames(),d._trigger("resizeStart",a,g(e))
},resize:function(a,e){d._trigger("resize",a,g(e))
},stop:function(s,p){var e=d.uiDialog.offset(),m=e.left-d.document.scrollLeft(),i=e.top-d.document.scrollTop();
f.height=d.uiDialog.height(),f.width=d.uiDialog.width(),f.position={my:"left top",at:"left"+(m>=0?"+":"")+m+" top"+(i>=0?"+":"")+i,of:d.window},d._removeClass(k(this),"ui-dialog-resizing"),d._unblockFrames(),d._trigger("resizeStop",s,g(p))
}}).css("position",h)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget(),this._focusedElement=k(a.target)
}})
},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)
},_untrackInstance:function(){var c=this._trackingInstances(),a=k.inArray(this,c);
-1!==a&&c.splice(a,1)
},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");
return a||(a=[],this.document.data("ui-dialog-instances",a)),a
},_minHeight:function(){var a=this.options;
return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()
},_setOptions:function(d){var a=this,c=!1,f={};
k.each(d,function(g,h){a._setOption(g,h),g in a.sizeRelatedOptions&&(c=!0),g in a.resizableRelatedOptions&&(f[g]=h)
}),c&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",f)
},_setOption:function(d,a){var c,g,f=this.uiDialog;
"disabled"!==d&&(this._super(d,a),"appendTo"===d&&this.uiDialog.appendTo(this._appendTo()),"buttons"===d&&this._createButtons(),"closeText"===d&&this.uiDialogTitlebarClose.button({label:k("<a>").text(""+this.options.closeText).html()}),"draggable"===d&&(c=f.is(":data(ui-draggable)"),c&&!a&&f.draggable("destroy"),!c&&a&&this._makeDraggable()),"position"===d&&this._position(),"resizable"===d&&(g=f.is(":data(ui-resizable)"),g&&!a&&f.resizable("destroy"),g&&"string"==typeof a&&f.resizable("option","handles",a),g||a===!1||this._makeResizable()),"title"===d&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var c,f,a,d=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),c=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),f=Math.max(0,d.minHeight-c),a="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-c):"none","auto"===d.height?this.element.css({minHeight:f,maxHeight:a,height:"auto"}):this.element.height(Math.max(0,d.height-c)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=k(this);
return k("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(a){return k(a.target).closest(".ui-dialog").length?!0:!!k(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var a=!0;
this._delay(function(){a=!1
}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(c){a||this._allowInteraction(c)||(c.preventDefault(),this._trackingInstances()[0]._focusTabbable())
}}),this.overlay=k("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;
a?this.document.data("ui-dialog-overlays",a):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null
}}}),k.uiBackCompat!==!1&&k.widget("ui.dialog",k.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(a,c){"dialogClass"===a&&this.uiDialog.removeClass(this.options.dialogClass).addClass(c),this._superApply(arguments)
}}),k.ui.dialog,k.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=k("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()
},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),this._refreshValue(),void 0)
},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(a){var c=a.value;
delete a.value,this._super(a),this.options.value=this._constrainedValue(c),this._refreshValue()
},_setOption:function(a,c){"max"===a&&(c=Math.max(this.min,c)),this._super(a,c)
},_setOptionDisabled:function(a){this._super(a),this.element.attr("aria-disabled",a),this._toggleClass(null,"ui-state-disabled",!!a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var c=this.options.value,a=this._percentage();
this.valueDiv.toggle(this.indeterminate||c>this.min).width(a.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,c===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=k("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":c}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==c&&(this.oldValue=c,this._trigger("change")),c===this.options.max&&this._trigger("complete")
}}),k.widget("ui.selectmenu",[k.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");
this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=k()
},_drawButton:function(){var d,a=this,c=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(e){this.button.focus(),e.preventDefault()
}}),this.element.hide(),this.button=k("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),d=k("<span>").appendTo(this.button),this._addClass(d,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(c).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){a._rendered||a._refreshMenu()
})
},_drawMenu:function(){var a=this;
this.menu=k("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=k("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(d,c){d.preventDefault(),a._setSelection(),a._select(c.item.data("ui-selectmenu-item"),d)
},focus:function(d,c){var e=c.item.data("ui-selectmenu-item");
null!=a.focusIndex&&e.index!==a.focusIndex&&(a._trigger("focus",d,{item:e}),a.isOpen||a._select(e,d)),a.focusIndex=e.index,a.button.attr("aria-activedescendant",a.menuItems.eq(e.index).attr("id"))
}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return !1
},this.menuInstance._isDivider=function(){return !1
}
},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()
},_refreshMenu:function(){var a,c=this.element.find("option");
this.menu.empty(),this._parseOptions(c),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,c.length&&(a=this._getSelectedItem(),this.menuInstance.focus(null,a),this._setAria(a.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))
},open:function(a){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a)))
},_position:function(){this.menuWrap.position(k.extend({of:this.button},this.options.position))
},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(c){var a=k("<span>");
return this._setText(a,c.label),this._addClass(a,"ui-selectmenu-text"),a
},_renderMenu:function(d,a){var c=this,f="";
k.each(a,function(g,h){var e;
h.optgroup!==f&&(e=k("<li>",{text:h.optgroup}),c._addClass(e,"ui-selectmenu-optgroup","ui-menu-divider"+(h.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),e.appendTo(d),f=h.optgroup),c._renderItemData(d,h)
})
},_renderItemData:function(a,c){return this._renderItem(a,c).data("ui-selectmenu-item",c)
},_renderItem:function(d,a){var c=k("<li>"),f=k("<div>",{title:a.element.attr("title")});
return a.disabled&&this._addClass(c,null,"ui-state-disabled"),this._setText(f,a.label),c.append(f).appendTo(d)
},_setText:function(a,c){c?a.text(c):a.html("&#160;")
},_move:function(c,f){var a,d,g=".ui-menu-item";
this.isOpen?a=this.menuItems.eq(this.focusIndex).parent("li"):(a=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),g+=":not(.ui-state-disabled)"),d="first"===c||"last"===c?a["first"===c?"prevAll":"nextAll"](g).eq(-1):a[c+"All"](g).eq(0),d.length&&this.menuInstance.focus(f,d)
},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(a){this[this.isOpen?"close":"open"](a)
},_setSelection:function(){var a;
this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())
},_documentClick:{mousedown:function(a){this.isOpen&&(k(a.target).closest(".ui-selectmenu-menu, #"+k.ui.escapeSelector(this.ids.button)).length||this.close(a))
}},_buttonEvents:{mousedown:function(){var a;
window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()
},click:function(a){this._setSelection(),this._toggle(a)
},keydown:function(c){var a=!0;
switch(c.keyCode){case k.ui.keyCode.TAB:case k.ui.keyCode.ESCAPE:this.close(c),a=!1;
break;
case k.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(c);
break;
case k.ui.keyCode.UP:c.altKey?this._toggle(c):this._move("prev",c);
break;
case k.ui.keyCode.DOWN:c.altKey?this._toggle(c):this._move("next",c);
break;
case k.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(c):this._toggle(c);
break;
case k.ui.keyCode.LEFT:this._move("prev",c);
break;
case k.ui.keyCode.RIGHT:this._move("next",c);
break;
case k.ui.keyCode.HOME:case k.ui.keyCode.PAGE_UP:this._move("first",c);
break;
case k.ui.keyCode.END:case k.ui.keyCode.PAGE_DOWN:this._move("last",c);
break;
default:this.menu.trigger(c),a=!1
}a&&c.preventDefault()
}},_selectFocusedItem:function(a){var c=this.menuItems.eq(this.focusIndex).parent("li");
c.hasClass("ui-state-disabled")||this._select(c.data("ui-selectmenu-item"),a)
},_select:function(c,d){var a=this.element[0].selectedIndex;
this.element[0].selectedIndex=c.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(c)),this._setAria(c),this._trigger("select",d,{item:c}),c.index!==a&&this._trigger("change",d,{item:c}),this.close(d)
},_setAria:function(a){var c=this.menuItems.eq(a.index).attr("id");
this.button.attr({"aria-labelledby":c,"aria-activedescendant":c}),this.menu.attr("aria-activedescendant",c)
},_setOption:function(c,d){if("icons"===c){var a=this.button.find("span.ui-icon");
this._removeClass(a,null,this.options.icons.button)._addClass(a,null,d.button)
}this._super(c,d),"appendTo"===c&&this.menuWrap.appendTo(this._appendTo()),"width"===c&&this._resizeButton()
},_setOptionDisabled:function(a){this._super(a),this.menuInstance.option("disabled",a),this.button.attr("aria-disabled",a),this._toggleClass(this.button,null,"ui-state-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?k(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front, dialog")),a.length||(a=this.document[0].body),a
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var a=this.options.width;
return a===!1?(this.button.css("width",""),void 0):(null===a&&(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a),void 0)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var a=this._super();
return a.disabled=this.element.prop("disabled"),a
},_parseOptions:function(d){var a=this,c=[];
d.each(function(f,g){c.push(a._parseOption(k(g),f))
}),this.items=c
},_parseOption:function(c,d){var a=c.parent("optgroup");
return{element:c,index:d,value:c.val(),label:c.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||c.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)
}}]),k.widget("ui.slider",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,l=this.element.find(".ui-slider-handle"),h="<span tabindex='0'></span>",c=[];
for(d=f.values&&f.values.length||1,l.length>d&&(l.slice(d).remove(),l=l.slice(0,d)),g=l.length;
d>g;
g++){c.push(h)
}this.handles=l.add(k(c.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(a){k(this).data("ui-slider-handle-index",a).attr("tabIndex",0)
})
},_createRange:function(){var a=this.options;
a.range?(a.range===!0&&(a.values?a.values.length&&2!==a.values.length?a.values=[a.values[0],a.values[0]]:k.isArray(a.values)&&(a.values=a.values.slice(0)):a.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=k("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===a.range||"max"===a.range)&&this._addClass(this.range,"ui-slider-range-"+a.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()
},_mouseCapture:function(v){var p,O,g,f,M,d,t,m,L=this,N=this.options;
return N.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),p={x:v.pageX,y:v.pageY},O=this._normValueFromMouse(p),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(c){var a=Math.abs(O-L.values(c));
(g>a||g===a&&(c===L._lastChangedValue||L.values(c)===N.min))&&(g=a,f=k(this),M=c)
}),d=this._start(v,M),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=M,this._addClass(f,null,"ui-state-active"),f.trigger("focus"),t=f.offset(),m=!k(v.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:v.pageX-t.left-f.width()/2,top:v.pageY-t.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(v,M,O),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(c){var d={x:c.pageX,y:c.pageY},a=this._normValueFromMouse(d);
return this._slide(c,this._handleIndex,a),!1
},_mouseStop:function(a){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(c){var f,a,d,h,g;
return"horizontal"===this.orientation?(f=this.elementSize.width,a=c.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(f=this.elementSize.height,a=c.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=a/f,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),h=this._valueMax()-this._valueMin(),g=this._valueMin()+d*h,this._trimAlignValue(g)
},_uiHash:function(c,f,a){var d={handle:this.handles[c],handleIndex:c,value:void 0!==f?f:this.value()};
return this._hasMultipleValues()&&(d.value=void 0!==f?f:this.values(c),d.values=a||this.values()),d
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(a,c){return this._trigger("start",a,this._uiHash(c))
},_slide:function(f,h,d){var g,m,l=this.value(),c=this.values();
this._hasMultipleValues()&&(m=this.values(h?0:1),l=this.values(h),2===this.options.values.length&&this.options.range===!0&&(d=0===h?Math.min(m,d):Math.max(m,d)),c[h]=d),d!==l&&(g=this._trigger("slide",f,this._uiHash(h,d,c)),g!==!1&&(this._hasMultipleValues()?this.values(h,d):this.value(d)))
},_stop:function(a,c){this._trigger("stop",a,this._uiHash(c))
},_change:function(a,c){this._keySliding||this._mouseSliding||(this._lastChangedValue=c,this._trigger("change",a,this._uiHash(c)))
},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0),void 0):this._value()
},values:function(d,a){var c,g,f;
if(arguments.length>1){return this.options.values[d]=this._trimAlignValue(a),this._refreshValue(),this._change(null,d),void 0
}if(!arguments.length){return this._values()
}if(!k.isArray(arguments[0])){return this._hasMultipleValues()?this._values(d):this.value()
}for(c=this.options.values,g=arguments[0],f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(g[f]),this._change(null,f)
}this._refreshValue()
},_setOption:function(d,a){var c,f=0;
switch("range"===d&&this.options.range===!0&&("min"===a?(this.options.value=this._values(0),this.options.values=null):"max"===a&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),k.isArray(this.options.values)&&(f=this.options.values.length),this._super(d,a),d){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(a),this.handles.css("horizontal"===a?"bottom":"left","");
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),c=f-1;
c>=0;
c--){this._change(null,c)
}this._animateOff=!1;
break;
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_setOptionDisabled:function(a){this._super(a),this._toggleClass(null,"ui-state-disabled",!!a)
},_value:function(){var a=this.options.value;
return a=this._trimAlignValue(a)
},_values:function(c){var f,a,d;
if(arguments.length){return f=this.options.values[c],f=this._trimAlignValue(f)
}if(this._hasMultipleValues()){for(a=this.options.values.slice(),d=0;
a.length>d;
d+=1){a[d]=this._trimAlignValue(a[d])
}return a
}return[]
},_trimAlignValue:function(c){if(this._valueMin()>=c){return this._valueMin()
}if(c>=this._valueMax()){return this._valueMax()
}var f=this.options.step>0?this.options.step:1,a=(c-this._valueMin())%f,d=c-a;
return 2*Math.abs(a)>=f&&(d+=a>0?f:-f),parseFloat(d.toFixed(5))
},_calculateNewMax:function(){var c=this.options.max,f=this._valueMin(),a=this.options.step,d=Math.round((c-f)/a)*a;
c=d+f,c>this.options.max&&(c-=a),this.max=parseFloat(c.toFixed(this._precision()))
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(a){"vertical"===a&&this.range.css({width:"",left:""}),"horizontal"===a&&this.range.css({height:"",bottom:""})
},_refreshValue:function(){var u,p,M,g,f,L=this.options.range,d=this.options,t=this,m=this._animateOff?!1:d.animate,v={};
this._hasMultipleValues()?this.handles.each(function(a){p=100*((t.values(a)-t._valueMin())/(t._valueMax()-t._valueMin())),v["horizontal"===t.orientation?"left":"bottom"]=p+"%",k(this).stop(1,1)[m?"animate":"css"](v,d.animate),t.options.range===!0&&("horizontal"===t.orientation?(0===a&&t.range.stop(1,1)[m?"animate":"css"]({left:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({width:p-u+"%"},{queue:!1,duration:d.animate})):(0===a&&t.range.stop(1,1)[m?"animate":"css"]({bottom:p+"%"},d.animate),1===a&&t.range[m?"animate":"css"]({height:p-u+"%"},{queue:!1,duration:d.animate}))),u=p
}):(M=this.value(),g=this._valueMin(),f=this._valueMax(),p=f!==g?100*((M-g)/(f-g)):0,v["horizontal"===this.orientation?"left":"bottom"]=p+"%",this.handle.stop(1,1)[m?"animate":"css"](v,d.animate),"min"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:p+"%"},d.animate),"max"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:100-p+"%"},d.animate),"min"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:p+"%"},d.animate),"max"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:100-p+"%"},d.animate))
},_handleEvents:{keydown:function(g){var d,f,l,h,c=k(g.target).data("ui-slider-handle-index");
switch(g.keyCode){case k.ui.keyCode.HOME:case k.ui.keyCode.END:case k.ui.keyCode.PAGE_UP:case k.ui.keyCode.PAGE_DOWN:case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(g.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(k(g.target),null,"ui-state-active"),d=this._start(g,c),d===!1)){return
}}switch(h=this.options.step,f=l=this._hasMultipleValues()?this.values(c):this.value(),g.keyCode){case k.ui.keyCode.HOME:l=this._valueMin();
break;
case k.ui.keyCode.END:l=this._valueMax();
break;
case k.ui.keyCode.PAGE_UP:l=this._trimAlignValue(f+(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.PAGE_DOWN:l=this._trimAlignValue(f-(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}l=this._trimAlignValue(f+h);
break;
case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(f===this._valueMin()){return
}l=this._trimAlignValue(f-h)
}this._slide(g,c,l)
},keyup:function(c){var a=k(c.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(c,a),this._change(c,a),this._removeClass(k(c.target),null,"ui-state-active"))
}}}),k.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var c=this._super(),a=this.element;
return k.each(["min","max","step"],function(d,e){var f=a.attr(e);
null!=f&&f.length&&(c[e]=f)
}),c
},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()
},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",a),void 0)
},mousewheel:function(a,c){if(c){if(!this.spinning&&!this._start(a)){return !1
}this._spin((c>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)
},100),a.preventDefault()
}},"mousedown .ui-spinner-button":function(d){function a(){var f=this.element[0]===k.ui.safeActiveElement(this.document[0]);
f||(this.element.trigger("focus"),this.previous=c,this._delay(function(){this.previous=c
}))
}var c;
c=this.element[0]===k.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),d.preventDefault(),a.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,a.call(this)
}),this._start(d)!==!1&&this._repeat(null,k(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){return k(a.currentTarget).hasClass("ui-state-active")?this._start(a)===!1?!1:(this._repeat(null,k(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a),void 0):void 0
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(0.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())
},_keydown:function(d){var a=this.options,c=k.ui.keyCode;
switch(d.keyCode){case c.UP:return this._repeat(null,1,d),!0;
case c.DOWN:return this._repeat(null,-1,d),!0;
case c.PAGE_UP:return this._repeat(null,a.page,d),!0;
case c.PAGE_DOWN:return this._repeat(null,-a.page,d),!0
}return !1
},_start:function(a){return this.spinning||this._trigger("start",a)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1
},_repeat:function(c,d,a){c=c||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,d,a)
},c),this._spin(d*this.options.step,a)
},_spin:function(c,d){var a=this.value()||0;
this.counter||(this.counter=1),a=this._adjustValue(a+c*this._increment(this.counter)),this.spinning&&this._trigger("spin",d,{value:a})===!1||(this._value(a),this.counter++)
},_increment:function(c){var a=this.options.incremental;
return a?k.isFunction(a)?a(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1):1
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var d=""+c,a=d.indexOf(".");
return -1===a?0:d.length-a-1
},_adjustValue:function(c){var f,a,d=this.options;
return f=null!==d.min?d.min:0,a=c-f,a=Math.round(a/d.step)*d.step,c=f+a,c=parseFloat(c.toFixed(this._precision())),null!==d.max&&c>d.max?d.max:null!==d.min&&d.min>c?d.min:c
},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))
},_setOption:function(c,f){var a,d,g;
return"culture"===c||"numberFormat"===c?(a=this._parse(this.element.val()),this.options[c]=f,this.element.val(this._format(a)),void 0):(("max"===c||"min"===c||"step"===c)&&"string"==typeof f&&(f=this._parse(f)),"icons"===c&&(d=this.buttons.first().find(".ui-icon"),this._removeClass(d,null,this.options.icons.up),this._addClass(d,null,f.up),g=this.buttons.last().find(".ui-icon"),this._removeClass(g,null,this.options.icons.down),this._addClass(g,null,f.down)),this._super(c,f),void 0)
},_setOptionDisabled:function(a){this._super(a),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!a),this.element.prop("disabled",!!a),this.buttons.button(a?"disable":"enable")
},_setOptions:w(function(a){this._super(a)
}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a
},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var a=this.value();
return null===a?!1:a===this._adjustValue(a)
},_value:function(c,d){var a;
""!==c&&(a=this._parse(c),null!==a&&(d||(a=this._adjustValue(a)),c=this._format(a))),this.element.val(c),this._refresh()
},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)
},stepUp:w(function(a){this._stepUp(a)
}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())
},stepDown:w(function(a){this._stepDown(a)
}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())
},pageUp:w(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:w(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){return arguments.length?(w(this._value).call(this,a),void 0):this._parse(this.element.val())
},widget:function(){return this.uiSpinner
}}),k.uiBackCompat!==!1&&k.widget("ui.spinner",k.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}}),k.ui.spinner,k.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;
return function(f){var c,d;
c=f.href.replace(a,""),d=location.href.replace(a,"");
try{c=decodeURIComponent(c)
}catch(g){}try{d=decodeURIComponent(d)
}catch(g){}return f.hash.length>1&&c===d
}
}(),_create:function(){var c=this,a=this.options;
this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,a.collapsible),this._processTabs(),a.active=this._initialActive(),k.isArray(a.disabled)&&(a.disabled=k.unique(a.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"),function(d){return c.tabs.index(d)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):k(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var d=this.options.active,a=this.options.collapsible,c=location.hash.substring(1);
return null===d&&(c&&this.tabs.each(function(e,f){return k(f).attr("aria-controls")===c?(d=e,!1):void 0
}),null===d&&(d=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===d||-1===d)&&(d=this.tabs.length?0:!1)),d!==!1&&(d=this.tabs.index(this.tabs.eq(d)),-1===d&&(d=a?!1:0)),!a&&d===!1&&this.anchors.length&&(d=0),d
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):k()}
},_tabKeydown:function(d){var a=k(k.ui.safeActiveElement(this.document[0])).closest("li"),c=this.tabs.index(a),f=!0;
if(!this._handlePageNav(d)){switch(d.keyCode){case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:c++;
break;
case k.ui.keyCode.UP:case k.ui.keyCode.LEFT:f=!1,c--;
break;
case k.ui.keyCode.END:c=this.anchors.length-1;
break;
case k.ui.keyCode.HOME:c=0;
break;
case k.ui.keyCode.SPACE:return d.preventDefault(),clearTimeout(this.activating),this._activate(c),void 0;
case k.ui.keyCode.ENTER:return d.preventDefault(),clearTimeout(this.activating),this._activate(c===this.options.active?!1:c),void 0;
default:return
}d.preventDefault(),clearTimeout(this.activating),c=this._focusNextTab(c,f),d.ctrlKey||d.metaKey||(a.attr("aria-selected","false"),this.tabs.eq(c).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",c)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===k.ui.keyCode.UP&&(a.preventDefault(),this.active.trigger("focus"))
},_handlePageNav:function(a){return a.altKey&&a.keyCode===k.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===k.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0
},_findNextTab:function(d,a){function c(){return d>f&&(d=0),0>d&&(d=f),d
}for(var f=this.tabs.length-1;
-1!==k.inArray(c(),this.options.disabled);
){d=a?d+1:d-1
}return d
},_focusNextTab:function(a,c){return a=this._findNextTab(a,c),this.tabs.eq(a).trigger("focus"),a
},_setOption:function(a,c){return"active"===a?(this._activate(c),void 0):(this._super(a,c),"collapsible"===a&&(this._toggleClass("ui-tabs-collapsible",null,c),c||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(c),"heightStyle"===a&&this._setupHeightStyle(c),void 0)
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var c=this.options,a=this.tablist.children(":has(a[href])");
c.disabled=k.map(a.filter(".ui-state-disabled"),function(d){return a.index(d)
}),this._processTabs(),c.active!==!1&&this.anchors.length?this.active.length&&!k.contains(this.tablist[0],this.active[0])?this.tabs.length===c.disabled.length?(c.active=!1,this.active=k()):this._activate(this._findNextTab(Math.max(0,c.active-1),!1)):c.active=this.tabs.index(this.active):(c.active=!1,this.active=k()),this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var d=this,a=this.tabs,c=this.anchors,f=this.panels;
this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(g){k(this).is(".ui-state-disabled")&&g.preventDefault()
}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){k(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return k("a",this)[0]
}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=k(),this.anchors.each(function(m,t){var L,v,g,u=k(t).uniqueId().attr("id"),p=k(t).closest("li"),e=p.attr("aria-controls");
d._isLocal(t)?(L=t.hash,g=L.substring(1),v=d.element.find(d._sanitizeSelector(L))):(g=p.attr("aria-controls")||k({}).uniqueId()[0].id,L="#"+g,v=d.element.find(L),v.length||(v=d._createPanel(g),v.insertAfter(d.panels[m-1]||d.tablist)),v.attr("aria-live","polite")),v.length&&(d.panels=d.panels.add(v)),e&&p.data("ui-tabs-aria-controls",e),p.attr({"aria-controls":g,"aria-labelledby":u}),v.attr("aria-labelledby",u)
}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),a&&(this._off(a.not(this.tabs)),this._off(c.not(this.anchors)),this._off(f.not(this.panels)))
},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(a){return k("<div>").attr("id",a).data("ui-tabs-destroy",!0)
},_setOptionDisabled:function(d){var a,c,f;
for(k.isArray(d)&&(d.length?d.length===this.anchors.length&&(d=!0):d=!1),f=0;
c=this.tabs[f];
f++){a=k(c),d===!0||-1!==k.inArray(f,d)?(a.attr("aria-disabled","true"),this._addClass(a,null,"ui-state-disabled")):(a.removeAttr("aria-disabled"),this._removeClass(a,null,"ui-state-disabled"))
}this.options.disabled=d,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,d===!0)
},_setupEvents:function(c){var a={};
c&&k.each(c.split(" "),function(d,f){a[f]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(d){d.preventDefault()
}}),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(d){var a,c=this.element.parent();
"fill"===d?(a=c.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var g=k(this),f=g.css("position");
"absolute"!==f&&"fixed"!==f&&(a-=g.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=k(this).outerHeight(!0)
}),this.panels.each(function(){k(this).height(Math.max(0,a-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===d&&(a=0,this.panels.each(function(){a=Math.max(a,k(this).height("").height())
}).height(a))
},_eventHandler:function(u){var p=this.options,M=this.active,g=k(u.currentTarget),f=g.closest("li"),L=f[0]===M[0],d=L&&p.collapsible,t=d?k():this._getPanelForTab(f),m=M.length?this._getPanelForTab(M):k(),v={oldTab:M,oldPanel:m,newTab:d?k():f,newPanel:t};
u.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||L&&!p.collapsible||this._trigger("beforeActivate",u,v)===!1||(p.active=d?!1:this.tabs.index(f),this.active=L?k():f,this.xhr&&this.xhr.abort(),m.length||t.length||k.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(f),u),this._toggle(u,v))
},_toggle:function(h,d){function f(){l.running=!1,l._trigger("activate",h,d)
}function m(){l._addClass(d.newTab.closest("li"),"ui-tabs-active","ui-state-active"),c.length&&l.options.show?l._show(c,l.options.show,f):(c.show(),f())
}var l=this,c=d.newPanel,g=d.oldPanel;
this.running=!0,g.length&&this.options.hide?this._hide(g,this.options.hide,function(){l._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),m()
}):(this._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),g.hide(),m()),g.attr("aria-hidden","true"),d.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&g.length?d.oldTab.attr("tabIndex",-1):c.length&&this.tabs.filter(function(){return 0===k(this).attr("tabIndex")
}).attr("tabIndex",-1),c.attr("aria-hidden","false"),d.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(d){var a,c=this._findActive(d);
c[0]!==this.active[0]&&(c.length||(c=this.active),a=c.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:k.noop}))
},_findActive:function(a){return a===!1?k():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+k.ui.escapeSelector(a)+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){k.data(this,"ui-tabs-destroy")?k(this).remove():k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}),this.tabs.each(function(){var c=k(this),a=c.data("ui-tabs-aria-controls");
a?c.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):c.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(c){var a=this.options.disabled;
a!==!1&&(void 0===c?a=!1:(c=this._getIndex(c),a=k.isArray(a)?k.map(a,function(d){return d!==c?d:null
}):k.map(this.tabs,function(e,d){return d!==c?d:null
})),this._setOptionDisabled(a))
},disable:function(c){var a=this.options.disabled;
if(a!==!0){if(void 0===c){a=!0
}else{if(c=this._getIndex(c),-1!==k.inArray(c,a)){return
}a=k.isArray(a)?k.merge([c],a).sort():[c]
}this._setOptionDisabled(a)
}},load:function(m,d){m=this._getIndex(m);
var g=this,t=this.tabs.eq(m),p=t.find(".ui-tabs-anchor"),c=this._getPanelForTab(t),l={tab:t,panel:c},f=function(a,h){"abort"===h&&g.panels.stop(!1,!0),g._removeClass(t,"ui-tabs-loading"),c.removeAttr("aria-busy"),a===g.xhr&&delete g.xhr
};
this._isLocal(p[0])||(this.xhr=k.ajax(this._ajaxSettings(p,d,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(t,"ui-tabs-loading"),c.attr("aria-busy","true"),this.xhr.done(function(a,h,i){setTimeout(function(){c.html(a),g._trigger("load",d,l),f(i,h)
},1)
}).fail(function(a,h){setTimeout(function(){f(a,h)
},1)
})))
},_ajaxSettings:function(d,a,c){var f=this;
return{url:d.attr("href").replace(/#.*$/,""),beforeSend:function(g,h){return f._trigger("beforeLoad",a,k.extend({jqXHR:g,ajaxSettings:h},c))
}}
},_getPanelForTab:function(c){var a=k(c).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}}),k.uiBackCompat!==!1&&k.widget("ui.tabs",k.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")
}}),k.ui.tabs,k.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var a=k(this).attr("title")||"";
return k("<a>").text(a).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(d,a){var c=(d.attr("aria-describedby")||"").split(/\s+/);
c.push(a),d.data("ui-tooltip-id",a).attr("aria-describedby",k.trim(c.join(" ")))
},_removeDescribedBy:function(d){var a=d.data("ui-tooltip-id"),c=(d.attr("aria-describedby")||"").split(/\s+/),f=k.inArray(a,c);
-1!==f&&c.splice(f,1),d.removeData("ui-tooltip-id"),c=k.trim(c.join(" ")),c?d.attr("aria-describedby",c):d.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=k("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=k([])
},_setOption:function(d,a){var c=this;
this._super(d,a),"content"===d&&k.each(this.tooltips,function(f,g){c._updateContent(g.element)
})
},_setOptionDisabled:function(a){this[a?"_disable":"_enable"]()
},_disable:function(){var a=this;
k.each(this.tooltips,function(c,d){var e=k.Event("blur");
e.target=e.currentTarget=d.element[0],a.close(e,!0)
}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var c=k(this);
return c.is("[title]")?c.data("ui-tooltip-title",c.attr("title")).removeAttr("title"):void 0
}))
},_enable:function(){this.disabledTitles.each(function(){var a=k(this);
a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))
}),this.disabledTitles=k([])
},open:function(d){var a=this,c=k(d?d.target:this.element).closest(this.options.items);
c.length&&!c.data("ui-tooltip-id")&&(c.attr("title")&&c.data("ui-tooltip-title",c.attr("title")),c.data("ui-tooltip-open",!0),d&&"mouseover"===d.type&&c.parents().each(function(){var g,f=k(this);
f.data("ui-tooltip-open")&&(g=k.Event("blur"),g.target=g.currentTarget=this,a.close(g,!0)),f.attr("title")&&(f.uniqueId(),a.parents[this.id]={element:this,title:f.attr("title")},f.attr("title",""))
}),this._registerCloseHandlers(d,c),this._updateContent(c,d))
},_updateContent:function(c,f){var a,d=this.options.content,h=this,g=f?f.type:null;
return"string"==typeof d||d.nodeType||d.jquery?this._open(f,c,d):(a=d.call(c[0],function(e){h._delay(function(){c.data("ui-tooltip-open")&&(f&&(f.type=g),this._open(f,c,e))
})
}),a&&this._open(f,c,a),void 0)
},_open:function(t,m,v){function f(a){g.of=a,u.is(":hidden")||u.position(g)
}var d,u,c,p,g=k.extend({},this.options.position);
if(v){if(d=this._find(m)){return d.tooltip.find(".ui-tooltip-content").html(v),void 0
}m.is("[title]")&&(t&&"mouseover"===t.type?m.attr("title",""):m.removeAttr("title")),d=this._tooltip(m),u=d.tooltip,this._addDescribedBy(m,u.attr("id")),u.find(".ui-tooltip-content").html(v),this.liveRegion.children().hide(),p=k("<div>").html(u.find(".ui-tooltip-content").html()),p.removeAttr("name").find("[name]").removeAttr("name"),p.removeAttr("id").find("[id]").removeAttr("id"),p.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):u.position(k.extend({of:m},this.options.position)),u.hide(),this._show(u,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(c=this.delayedShow=setInterval(function(){u.is(":visible")&&(f(g.of),clearInterval(c))
},k.fx.interval)),this._trigger("open",t,{tooltip:u})
}},_registerCloseHandlers:function(d,a){var c={keyup:function(g){if(g.keyCode===k.ui.keyCode.ESCAPE){var f=k.Event(g);
f.currentTarget=a[0],this.close(f,!0)
}}};
a[0]!==this.element[0]&&(c.remove=function(){this._removeTooltip(this._find(a).tooltip)
}),d&&"mouseover"!==d.type||(c.mouseleave="close"),d&&"focusin"!==d.type||(c.focusout="close"),this._on(!0,a,c)
},close:function(d){var a,c=this,g=k(d?d.currentTarget:this.element),f=this._find(g);
return f?(a=f.tooltip,f.closing||(clearInterval(this.delayedShow),g.data("ui-tooltip-title")&&!g.attr("title")&&g.attr("title",g.data("ui-tooltip-title")),this._removeDescribedBy(g),f.hiding=!0,a.stop(!0),this._hide(a,this.options.hide,function(){c._removeTooltip(k(this))
}),g.removeData("ui-tooltip-open"),this._off(g,"mouseleave focusout keyup"),g[0]!==this.element[0]&&this._off(g,"remove"),this._off(this.document,"mousemove"),d&&"mouseleave"===d.type&&k.each(this.parents,function(l,h){k(h.element).attr("title",h.title),delete c.parents[l]
}),f.closing=!0,this._trigger("close",d,{tooltip:a}),f.hiding||(f.closing=!1)),void 0):(g.removeData("ui-tooltip-open"),void 0)
},_tooltip:function(d){var a=k("<div>").attr("role","tooltip"),c=k("<div>").appendTo(a),f=a.uniqueId().attr("id");
return this._addClass(c,"ui-tooltip-content"),this._addClass(a,"ui-tooltip","ui-widget ui-widget-content"),a.appendTo(this._appendTo(d)),this.tooltips[f]={element:d,tooltip:a}
},_find:function(a){var c=a.data("ui-tooltip-id");
return c?this.tooltips[c]:null
},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]
},_appendTo:function(a){var c=a.closest(".ui-front, dialog");
return c.length||(c=this.document[0].body),c
},_destroy:function(){var a=this;
k.each(this.tooltips,function(c,d){var f=k.Event("blur"),e=d.element;
f.target=f.currentTarget=e[0],a.close(f,!0),k("#"+c).remove(),e.data("ui-tooltip-title")&&(e.attr("title")||e.attr("title",e.data("ui-tooltip-title")),e.removeData("ui-tooltip-title"))
}),this.liveRegion.remove()
}}),k.uiBackCompat!==!1&&k.widget("ui.tooltip",k.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var a=this._superApply(arguments);
return this.options.tooltipClass&&a.tooltip.addClass(this.options.tooltipClass),a
}}),k.ui.tooltip;
var F="ui-effects-",E="ui-effects-style",A="ui-effects-animated",K=k;
k.effects={effect:{}},function(V,Q){function N(c,f,a){var d=U[f.type]||{};
return null==c?a||!f.def?null:f.def:(c=d.floor?~~c:parseFloat(c),isNaN(c)?f.def:d.mod?(c+d.mod)%d.mod:0>c?0:c>d.max?d.max:c)
}function W(a){var c=M(),d=c._rgba=[];
return a=a.toLowerCase(),P(O,function(i,s){var f,p=s.re.exec(a),n=p&&s.parse(p),e=s.space||"rgba";
return n?(f=c[e](n),c[S[e].cache]=f[S[e].cache],d=c._rgba=f._rgba,!1):Q
}),d.length?("0,0,0,0"===d.join()&&V.extend(d,v.transparent),c):v[a]
}function L(c,d,a){return a=(a+1)%1,1>6*a?c+6*(d-c)*a:1>2*a?d:2>3*a?c+6*(d-c)*(2/3-a):c
}var v,T="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",g=/^([\-+])=\s*(\d+\.?\d*)/,O=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]
}}],M=V.Color=function(d,a,c,f){return new V.Color.fn.parse(d,a,c,f)
},S={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},U={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},R=M.support={},m=V("<p>")[0],P=V.each;
m.style.cssText="background-color:rgba(1,1,1,.5)",R.rgba=m.style.backgroundColor.indexOf("rgba")>-1,P(S,function(a,c){c.cache="_"+a,c.props.alpha={idx:3,type:"percent",def:1}
}),M.fn=V.extend(M.prototype,{parse:function(s,c,i,f){if(s===Q){return this._rgba=[null,null,null,null],this
}(s.jquery||s.nodeType)&&(s=V(s).css(c),c=Q);
var e=this,o=V.type(s),l=this._rgba=[];
return c!==Q&&(s=[s,c,i,f],o="array"),"string"===o?this.parse(W(s)||v._default):"array"===o?(P(S.rgba.props,function(a,d){l[d.idx]=N(s[d.idx],d)
}),this):"object"===o?(s instanceof M?P(S,function(a,d){s[d.cache]&&(e[d.cache]=s[d.cache].slice())
}):P(S,function(d,a){var h=a.cache;
P(a.props,function(n,p){if(!e[h]&&a.to){if("alpha"===n||null==s[n]){return
}e[h]=a.to(e._rgba)
}e[h][p.idx]=N(s[n],p,!0)
}),e[h]&&0>V.inArray(null,e[h].slice(0,3))&&(e[h][3]=1,a.from&&(e._rgba=a.from(e[h])))
}),this):Q
},is:function(c){var a=M(c),d=!0,e=this;
return P(S,function(h,l){var f,i=a[l.cache];
return i&&(f=e[l.cache]||l.to&&l.to(e._rgba)||[],P(l.props,function(o,n){return null!=i[n.idx]?d=i[n.idx]===f[n.idx]:Q
})),d
}),d
},_space:function(){var a=[],c=this;
return P(S,function(d,e){c[e.cache]&&a.push(d)
}),a.pop()
},transition:function(d,p){var i=M(d),X=i._space(),u=S[X],c=0===this.alpha()?M("transparent"):this,l=c[u.cache]||u.to(c._rgba),f=l.slice();
return i=i[u.cache],P(u.props,function(r,Z){var s=Z.idx,h=l[s],e=i[s],Y=U[Z.type]||{};
null!==e&&(null===h?f[s]=e:(Y.mod&&(e-h>Y.mod/2?h+=Y.mod:h-e>Y.mod/2&&(h-=Y.mod)),f[s]=N((e-h)*p+h,Z)))
}),this[X](f)
},blend:function(d){if(1===this._rgba[3]){return this
}var a=this._rgba.slice(),c=a.pop(),f=M(d)._rgba;
return M(V.map(a,function(h,i){return(1-c)*f[i]+c*h
}))
},toRgbaString:function(){var c="rgba(",a=V.map(this._rgba,function(d,f){return null==d?f>2?1:0:d
});
return 1===a[3]&&(a.pop(),c="rgb("),c+a.join()+")"
},toHslaString:function(){var c="hsla(",a=V.map(this.hsla(),function(d,f){return null==d&&(d=f>2?1:0),f&&3>f&&(d=Math.round(100*d)+"%"),d
});
return 1===a[3]&&(a.pop(),c="hsl("),c+a.join()+")"
},toHexString:function(d){var a=this._rgba.slice(),c=a.pop();
return d&&a.push(~~(255*c)),"#"+V.map(a,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),M.fn.parse.prototype=M.fn,S.hsla.to=function(ae){if(null==ae[0]||null==ae[1]||null==ae[2]){return[null,null,null,ae[3]]
}var aa,Y,af=ae[0]/255,p=ae[1]/255,f=ae[2]/255,ac=ae[3],d=Math.max(af,p,f),Z=Math.min(af,p,f),X=d-Z,ab=d+Z,ad=0.5*ab;
return aa=Z===d?0:af===d?60*(p-f)/X+360:p===d?60*(f-af)/X+120:60*(af-p)/X+240,Y=0===X?0:0.5>=ad?X/ab:X/(2-ab),[Math.round(aa)%360,Y,ad,null==ac?1:ac]
},S.hsla.from=function(f){if(null==f[0]||null==f[1]||null==f[2]){return[null,null,null,f[3]]
}var n=f[0]/360,d=f[1],h=f[2],p=f[3],c=0.5>=h?h*(1+d):h+d-h*d,l=2*h-c;
return[Math.round(255*L(l,c,n+1/3)),Math.round(255*L(l,c,n)),Math.round(255*L(l,c,n-1/3)),p]
},P(S,function(f,p){var i=p.props,d=p.cache,e=p.to,l=p.from;
M.fn[f]=function(c){if(e&&!this[d]&&(this[d]=e(this._rgba)),c===Q){return this[d].slice()
}var t,h=V.type(c),a="array"===h||"object"===h?c:arguments,o=this[d].slice();
return P(i,function(n,u){var r=a["object"===h?n:u.idx];
null==r&&(r=o[u.idx]),o[u.idx]=N(r,u)
}),l?(t=M(l(o)),t[d]=o,t):M(o)
},P(i,function(c,a){M.fn[c]||(M.fn[c]=function(Y){var u,s=V.type(Y),t="alpha"===c?this._hsla?"hsla":"rgba":f,r=this[t](),X=r[a.idx];
return"undefined"===s?X:("function"===s&&(Y=Y.call(this,X),s=V.type(Y)),null==Y&&a.empty?this:("string"===s&&(u=g.exec(Y),u&&(Y=X+parseFloat(u[2])*("+"===u[1]?1:-1))),r[a.idx]=Y,this[t](r)))
})
})
}),M.hook=function(c){var a=c.split(" ");
P(a,function(f,d){V.cssHooks[d]={set:function(s,u){var t,i,p="";
if("transparent"!==u&&("string"!==V.type(u)||(t=W(u)))){if(u=M(t||u),!R.rgba&&1!==u._rgba[3]){for(i="backgroundColor"===d?s.parentNode:s;
(""===p||"transparent"===p)&&i&&i.style;
){try{p=V.css(i,"backgroundColor"),i=i.parentNode
}catch(l){}}u=u.blend(p&&"transparent"!==p?p:"_default")
}u=u.toRgbaString()
}try{s.style[d]=u
}catch(l){}}},V.fx.step[d]=function(h){h.colorInit||(h.start=M(h.elem,d),h.end=M(h.end),h.colorInit=!0),V.cssHooks[d].set(h.elem,h.start.transition(h.end,h.pos))
}
})
},M.hook(T),V.cssHooks.borderColor={expand:function(a){var c={};
return P(["Top","Right","Bottom","Left"],function(d,e){c["border"+e+"Color"]=a
}),c
}},v=V.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(K),function(){function d(l){var g,h,p=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,m={};
if(p&&p.length&&p[0]&&p[p[0]]){for(h=p.length;
h--;
){g=p[h],"string"==typeof p[g]&&(m[k.camelCase(g)]=p[g])
}}else{for(g in p){"string"==typeof p[g]&&(m[g]=p[g])
}}return m
}function a(m,h){var l,n,g={};
for(l in h){n=h[l],m[l]!==n&&(f[l]||(k.fx.step[l]||!isNaN(parseFloat(n)))&&(g[l]=n))
}return g
}var c=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,g){k.fx.step[g]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(K.style(e.elem,g,e.end),e.setAttr=!0)
}
}),k.fn.addBack||(k.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}),k.effects.animateClass=function(m,l,e,i){var g=k.speed(l,e,i);
return this.queue(function(){var s,n=k(this),p=n.attr("class")||"",h=g.children?n.find("*").addBack():n;
h=h.map(function(){var o=k(this);
return{el:o,start:d(this)}
}),s=function(){k.each(c,function(o,r){m[r]&&n[r+"Class"](m[r])
})
},s(),h=h.map(function(){return this.end=d(this.el[0]),this.diff=a(this.start,this.end),this
}),n.attr("class",p),h=h.map(function(){var t=this,o=k.Deferred(),r=k.extend({},g,{queue:!1,complete:function(){o.resolve(t)
}});
return this.el.animate(this.diff,r),o.promise()
}),k.when.apply(k,h.get()).done(function(){s(),k.each(arguments,function(){var o=this.el;
k.each(this.diff,function(r){o.css(r,"")
})
}),g.complete.call(n[0])
})
})
},k.fn.extend({addClass:function(g){return function(e,h,m,l){return h?k.effects.animateClass.call(this,{add:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.addClass),removeClass:function(g){return function(e,h,m,l){return arguments.length>1?k.effects.animateClass.call(this,{remove:e},h,m,l):g.apply(this,arguments)
}
}(k.fn.removeClass),toggleClass:function(g){return function(h,l,p,m,e){return"boolean"==typeof l||void 0===l?p?k.effects.animateClass.call(this,l?{add:h}:{remove:h},p,m,e):g.apply(this,arguments):k.effects.animateClass.call(this,{toggle:h},l,p,m)
}
}(k.fn.toggleClass),switchClass:function(l,g,h,p,m){return k.effects.animateClass.call(this,{add:g,remove:l},h,p,m)
}})
}(),function(){function d(h,f,g,l){return k.isPlainObject(h)&&(f=h,h=h.effect),h={effect:h},null==f&&(f={}),k.isFunction(f)&&(l=f,g=null,f={}),("number"==typeof f||k.fx.speeds[f])&&(l=g,g=f,f={}),k.isFunction(g)&&(l=g,g=null),f&&k.extend(h,f),g=g||f.duration,h.duration=k.fx.off?0:"number"==typeof g?g:g in k.fx.speeds?k.fx.speeds[g]:k.fx.speeds._default,h.complete=l||f.complete,h
}function a(f){return !f||"number"==typeof f||k.fx.speeds[f]?!0:"string"!=typeof f||k.effects.effect[f]?k.isFunction(f)?!0:"object"!=typeof f||f.effect?!1:!0:!0
}function c(g,l){var f=l.outerWidth(),h=l.outerHeight(),p=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,m=p.exec(g)||["",0,f,h,0];
return{top:parseFloat(m[1])||0,right:"auto"===m[2]?f:parseFloat(m[2]),bottom:"auto"===m[3]?h:parseFloat(m[3]),left:parseFloat(m[4])||0}
}k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=function(f){return function(e){return !!k(e).data(A)||f(e)
}
}(k.expr.filters.animated)),k.uiBackCompat!==!1&&k.extend(k.effects,{save:function(g,l){for(var f=0,h=l.length;
h>f;
f++){null!==l[f]&&g.data(F+l[f],g[0].style[l[f]])
}},restore:function(g,l){for(var f,h=0,m=l.length;
m>h;
h++){null!==l[h]&&(f=g.data(F+l[h]),g.css(l[h],f))
}},setMode:function(f,g){return"toggle"===g&&(g=f.is(":hidden")?"show":"hide"),g
},createWrapper:function(l){if(l.parent().is(".ui-effects-wrapper")){return l.parent()
}var g={width:l.outerWidth(!0),height:l.outerHeight(!0),"float":l.css("float")},h=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),p={width:l.width(),height:l.height()},m=document.activeElement;
try{m.id
}catch(f){m=document.body
}return l.wrap(h),(l[0]===m||k.contains(l[0],m))&&k(m).trigger("focus"),h=l.parent(),"static"===l.css("position")?(h.css({position:"relative"}),l.css({position:"relative"})):(k.extend(g,{position:l.css("position"),zIndex:l.css("z-index")}),k.each(["top","left","bottom","right"],function(e,i){g[i]=l.css(i),isNaN(parseInt(g[i],10))&&(g[i]="auto")
}),l.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),l.css(p),h.css(g).show()
},removeWrapper:function(g){var f=document.activeElement;
return g.parent().is(".ui-effects-wrapper")&&(g.parent().replaceWith(g),(g[0]===f||k.contains(g[0],f))&&k(f).trigger("focus")),g
}}),k.extend(k.effects,{version:"1.12.1",define:function(h,f,g){return g||(g=f,f="effect"),k.effects.effect[h]=g,k.effects.effect[h].mode=f,g
},scaledDimensions:function(g,l,f){if(0===l){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var h="horizontal"!==f?(l||100)/100:1,m="vertical"!==f?(l||100)/100:1;
return{height:g.height()*m,width:g.width()*h,outerHeight:g.outerHeight()*m,outerWidth:g.outerWidth()*h}
},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}
},unshift:function(g,l,f){var h=g.queue();
l>1&&h.splice.apply(h,[1,0].concat(h.splice(l,f))),g.dequeue()
},saveStyle:function(e){e.data(E,e[0].style.cssText)
},restoreStyle:function(e){e[0].style.cssText=e.data(E)||"",e.removeData(E)
},mode:function(g,h){var f=g.is(":hidden");
return"toggle"===h&&(h=f?"show":"hide"),(f?"hide"===h:"show"===h)&&(h="none"),h
},getBaseline:function(g,l){var f,h;
switch(g[0]){case"top":f=0;
break;
case"middle":f=0.5;
break;
case"bottom":f=1;
break;
default:f=g[0]/l.height
}switch(g[1]){case"left":h=0;
break;
case"center":h=0.5;
break;
case"right":h=1;
break;
default:h=g[1]/l.width
}return{x:h,y:f}
},createPlaceholder:function(h){var f,g=h.css("position"),l=h.position();
return h.css({marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()),/^(static|relative)/.test(g)&&(g="absolute",f=k("<"+h[0].nodeName+">").insertAfter(h).css({display:/^(inline|ruby)/.test(h.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:h.css("marginTop"),marginBottom:h.css("marginBottom"),marginLeft:h.css("marginLeft"),marginRight:h.css("marginRight"),"float":h.css("float")}).outerWidth(h.outerWidth()).outerHeight(h.outerHeight()).addClass("ui-effects-placeholder"),h.data(F+"placeholder",f)),h.css({position:g,left:l.left,top:l.top}),f
},removePlaceholder:function(g){var h=F+"placeholder",f=g.data(h);
f&&(f.remove(),g.removeData(h))
},cleanUp:function(f){k.effects.restoreStyle(f),k.effects.removePlaceholder(f)
},setTransition:function(h,f,g,l){return l=l||{},k.each(f,function(m,e){var n=h.cssUnit(e);
n[0]>0&&(l[e]=n[0]*g+n[1])
}),l
}}),k.fn.extend({effect:function(){function p(o){function l(){n.removeData(A),k.effects.cleanUp(n),"hide"===N.mode&&n.hide(),h()
}function h(){k.isFunction(t)&&t.call(n[0]),k.isFunction(o)&&o()
}var n=k(this);
N.mode=v.shift(),k.uiBackCompat===!1||f?"none"===N.mode?(n[m](),h()):g.call(n[0],N,l):(n.is(":hidden")?"hide"===m:"show"===m)?(n[m](),h()):g.call(n[0],N,h)
}var N=d.apply(this,arguments),g=k.effects.effect[N.effect],f=g.mode,L=N.queue,e=L||"fx",t=N.complete,m=N.mode,v=[],M=function(n){var h=k(this),l=k.effects.mode(h,m)||f;
h.data(A,!0),v.push(l),f&&("show"===l||l===f&&"hide"===l)&&h.show(),f&&"none"===l||k.effects.saveStyle(h),k.isFunction(n)&&n()
};
return k.fx.off||!g?m?this[m](N.duration,t):this.each(function(){t&&t.call(this)
}):L===!1?this.each(M).each(p):this.queue(e,M).queue(e,p)
},show:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="show",this.effect.call(this,g)
}
}(k.fn.show),hide:function(e){return function(f){if(a(f)){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="hide",this.effect.call(this,g)
}
}(k.fn.hide),toggle:function(e){return function(f){if(a(f)||"boolean"==typeof f){return e.apply(this,arguments)
}var g=d.apply(this,arguments);
return g.mode="toggle",this.effect.call(this,g)
}
}(k.fn.toggle),cssUnit:function(h){var f=this.css(h),g=[];
return k.each(["em","px","%","pt"],function(i,l){f.indexOf(l)>0&&(g=[parseFloat(f),l])
}),g
},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):c(this.css("clip"),this)
},transfer:function(L,t){var Q=k(this),m=k(L.to),g="fixed"===m.css("position"),O=k("body"),f=g?O.scrollTop():0,v=g?O.scrollLeft():0,p=m.offset(),N={top:p.top-f,left:p.left-v,height:m.innerHeight(),width:m.innerWidth()},P=Q.offset(),M=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(L.className).css({top:P.top-f,left:P.left-v,height:Q.innerHeight(),width:Q.innerWidth(),position:g?"fixed":"absolute"}).animate(N,L.duration,L.easing,function(){M.remove(),k.isFunction(t)&&t()
})
}}),k.fx.step.clip=function(f){f.clipInit||(f.start=k(f.elem).cssClip(),"string"==typeof f.end&&(f.end=c(f.end,f.elem)),f.clipInit=!0),k(f.elem).cssClip({top:f.pos*(f.end.top-f.start.top)+f.start.top,right:f.pos*(f.end.right-f.start.right)+f.start.right,bottom:f.pos*(f.end.bottom-f.start.bottom)+f.start.bottom,left:f.pos*(f.end.left-f.start.left)+f.start.left})
}
}(),function(){var a={};
k.each(["Quad","Cubic","Quart","Quint","Expo"],function(d,c){a[c]=function(f){return Math.pow(f,d+2)
}
}),k.extend(a,{Sine:function(c){return 1-Math.cos(c*Math.PI/2)
},Circ:function(c){return 1-Math.sqrt(1-c*c)
},Elastic:function(c){return 0===c||1===c?c:-Math.pow(2,8*(c-1))*Math.sin((80*(c-1)-7.5)*Math.PI/15)
},Back:function(c){return c*c*(3*c-2)
},Bounce:function(d){for(var f,c=4;
((f=Math.pow(2,--c))-1)/11>d;
){}return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*f-2)/22-d,2)
}}),k.each(a,function(d,c){k.easing["easeIn"+d]=c,k.easing["easeOut"+d]=function(e){return 1-c(1-e)
},k.easing["easeInOut"+d]=function(e){return 0.5>e?c(2*e)/2:1-c(-2*e+2)/2
}
})
}();
var b=k.effects;
k.effects.define("blind","hide",function(m,d){var g={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},t=k(this),p=m.direction||"up",c=t.cssClip(),l={clip:k.extend({},c)},f=k.effects.createPlaceholder(t);
l.clip[g[p][0]]=l.clip[g[p][1]],"show"===m.mode&&(t.cssClip(l.clip),f&&f.css(k.effects.clipToBox(l)),l.clip=c),f&&f.animate(k.effects.clipToBox(l),m.duration,m.easing),t.animate(l,{queue:!1,duration:m.duration,easing:m.easing,complete:d})
}),k.effects.define("bounce",function(X,T){var M,Q,P,ab=k(this),N=X.mode,U="hide"===N,S="show"===N,Z=X.direction||"up",L=X.distance,Y=X.times||5,O=2*Y+(S||U?1:0),W=X.duration/O,V=X.easing,R="up"===Z||"down"===Z?"top":"left",ac="up"===Z||"left"===Z,t=0,aa=ab.queue().length;
for(k.effects.createPlaceholder(ab),P=ab.css(R),L||(L=ab["top"===R?"outerHeight":"outerWidth"]()/3),S&&(Q={opacity:1},Q[R]=P,ab.css("opacity",0).css(R,ac?2*-L:2*L).animate(Q,W,V)),U&&(L/=Math.pow(2,Y-1)),Q={},Q[R]=P;
Y>t;
t++){M={},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V).animate(Q,W,V),L=U?2*L:L/2
}U&&(M={opacity:0},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V)),ab.queue(T),k.effects.unshift(ab,aa,O+1)
}),k.effects.define("clip","hide",function(t,m){var v,f={},d=k(this),u=t.direction||"vertical",c="both"===u,p=c||"horizontal"===u,g=c||"vertical"===u;
v=d.cssClip(),f.clip={top:g?(v.bottom-v.top)/2:v.top,right:p?(v.right-v.left)/2:v.right,bottom:g?(v.bottom-v.top)/2:v.bottom,left:p?(v.right-v.left)/2:v.left},k.effects.createPlaceholder(d),"show"===t.mode&&(d.cssClip(f.clip),f.clip=v),d.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:m})
}),k.effects.define("drop","hide",function(v,p){var O,g=k(this),f=v.mode,M="show"===f,d=v.direction||"left",t="up"===d||"down"===d?"top":"left",m="up"===d||"left"===d?"-=":"+=",L="+="===m?"-=":"+=",N={opacity:0};
k.effects.createPlaceholder(g),O=v.distance||g["top"===t?"outerHeight":"outerWidth"](!0)/2,N[t]=m+O,M&&(g.css(N),N[t]=L+O,N.opacity=1),g.animate(N,{queue:!1,duration:v.duration,easing:v.easing,complete:p})
}),k.effects.define("explode","hide",function(X,T){function M(){aa.push(this),aa.length===L*Y&&Q()
}function Q(){O.css({visibility:"visible"}),k(aa).remove(),T()
}var P,ab,N,U,S,Z,L=X.pieces?Math.round(Math.sqrt(X.pieces)):3,Y=L,O=k(this),W=X.mode,V="show"===W,R=O.show().css("visibility","hidden").offset(),ac=Math.ceil(O.outerWidth()/Y),t=Math.ceil(O.outerHeight()/L),aa=[];
for(P=0;
L>P;
P++){for(U=R.top+P*t,Z=P-(L-1)/2,ab=0;
Y>ab;
ab++){N=R.left+ab*ac,S=ab-(Y-1)/2,O.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-ab*ac,top:-P*t}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:ac,height:t,left:N+(V?S*ac:0),top:U+(V?Z*t:0),opacity:V?0:1}).animate({left:N+(V?0:S*ac),top:U+(V?0:Z*t),opacity:V?1:0},X.duration||500,X.easing,M)
}}}),k.effects.define("fade","toggle",function(d,a){var c="show"===d.mode;
k(this).css("opacity",c?0:1).animate({opacity:c?1:0},{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("fold","hide",function(T,P){var Z=k(this),M=T.mode,L="show"===M,W="hide"===M,t=T.size||15,Q=/([0-9]+)%/.exec(t),O=!!T.horizFirst,V=O?["right","bottom"]:["bottom","right"],Y=T.duration/2,U=k.effects.createPlaceholder(Z),v=Z.cssClip(),S={clip:k.extend({},v)},R={clip:k.extend({},v)},N=[v[V[0]],v[V[1]]],X=Z.queue().length;
Q&&(t=parseInt(Q[1],10)/100*N[W?0:1]),S.clip[V[0]]=t,R.clip[V[0]]=t,R.clip[V[1]]=0,L&&(Z.cssClip(R.clip),U&&U.css(k.effects.clipToBox(R)),R.clip=v),Z.queue(function(a){U&&U.animate(k.effects.clipToBox(S),Y,T.easing).animate(k.effects.clipToBox(R),Y,T.easing),a()
}).animate(S,Y,T.easing).animate(R,Y,T.easing).queue(P),k.effects.unshift(Z,X,4)
}),k.effects.define("highlight","show",function(d,a){var c=k(this),f={backgroundColor:c.css("backgroundColor")};
"hide"===d.mode&&(f.opacity=0),k.effects.saveStyle(c),c.css({backgroundImage:"none",backgroundColor:d.color||"#ffff99"}).animate(f,{queue:!1,duration:d.duration,easing:d.easing,complete:a})
}),k.effects.define("size",function(X,T){var M,Q,P,aa=k(this),N=["fontSize"],U=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],S=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],Z=X.mode,L="effect"!==Z,Y=X.scale||"both",O=X.origin||["middle","center"],W=aa.css("position"),V=aa.position(),R=k.effects.scaledDimensions(aa),ab=X.from||R,t=X.to||k.effects.scaledDimensions(aa,0);
k.effects.createPlaceholder(aa),"show"===Z&&(P=ab,ab=t,t=P),Q={from:{y:ab.height/R.height,x:ab.width/R.width},to:{y:t.height/R.height,x:t.width/R.width}},("box"===Y||"both"===Y)&&(Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,U,Q.from.y,ab),t=k.effects.setTransition(aa,U,Q.to.y,t)),Q.from.x!==Q.to.x&&(ab=k.effects.setTransition(aa,S,Q.from.x,ab),t=k.effects.setTransition(aa,S,Q.to.x,t))),("content"===Y||"both"===Y)&&Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,N,Q.from.y,ab),t=k.effects.setTransition(aa,N,Q.to.y,t)),O&&(M=k.effects.getBaseline(O,R),ab.top=(R.outerHeight-ab.outerHeight)*M.y+V.top,ab.left=(R.outerWidth-ab.outerWidth)*M.x+V.left,t.top=(R.outerHeight-t.outerHeight)*M.y+V.top,t.left=(R.outerWidth-t.outerWidth)*M.x+V.left),aa.css(ab),("content"===Y||"both"===Y)&&(U=U.concat(["marginTop","marginBottom"]).concat(N),S=S.concat(["marginLeft","marginRight"]),aa.find("*[width]").each(function(){var d=k(this),e=k.effects.scaledDimensions(d),f={height:e.height*Q.from.y,width:e.width*Q.from.x,outerHeight:e.outerHeight*Q.from.y,outerWidth:e.outerWidth*Q.from.x},c={height:e.height*Q.to.y,width:e.width*Q.to.x,outerHeight:e.height*Q.to.y,outerWidth:e.width*Q.to.x};
Q.from.y!==Q.to.y&&(f=k.effects.setTransition(d,U,Q.from.y,f),c=k.effects.setTransition(d,U,Q.to.y,c)),Q.from.x!==Q.to.x&&(f=k.effects.setTransition(d,S,Q.from.x,f),c=k.effects.setTransition(d,S,Q.to.x,c)),L&&k.effects.saveStyle(d),d.css(f),d.animate(c,X.duration,X.easing,function(){L&&k.effects.restoreStyle(d)
})
})),aa.animate(t,{queue:!1,duration:X.duration,easing:X.easing,complete:function(){var a=aa.offset();
0===t.opacity&&aa.css("opacity",ab.opacity),L||(aa.css("position","static"===W?"relative":W).offset(a),k.effects.saveStyle(aa)),T()
}})
}),k.effects.define("scale",function(g,d){var f=k(this),l=g.mode,h=parseInt(g.percent,10)||(0===parseInt(g.percent,10)?0:"effect"!==l?0:100),c=k.extend(!0,{from:k.effects.scaledDimensions(f),to:k.effects.scaledDimensions(f,h,g.direction||"both"),origin:g.origin||["middle","center"]},g);
g.fade&&(c.from.opacity=1,c.to.opacity=0),k.effects.effect.size.call(this,c,d)
}),k.effects.define("puff","hide",function(d,a){var c=k.extend(!0,{},d,{fade:!0,percent:parseInt(d.percent,10)||150});
k.effects.effect.scale.call(this,c,a)
}),k.effects.define("pulsate","show",function(L,t){var Q=k(this),m=L.mode,g="show"===m,O="hide"===m,f=g||O,v=2*(L.times||5)+(f?1:0),p=L.duration/v,N=0,P=1,M=Q.queue().length;
for((g||!Q.is(":visible"))&&(Q.css("opacity",0).show(),N=1);
v>P;
P++){Q.animate({opacity:N},p,L.easing),N=1-N
}Q.animate({opacity:N},p,L.easing),Q.queue(t),k.effects.unshift(Q,M,v+1)
}),k.effects.define("shake",function(R,N){var W=1,L=k(this),v=R.direction||"left",U=R.distance||20,m=R.times||3,O=2*m+1,M=Math.round(R.duration/O),T="up"===v||"down"===v?"top":"left",V="up"===v||"left"===v,S={},t={},Q={},P=L.queue().length;
for(k.effects.createPlaceholder(L),S[T]=(V?"-=":"+=")+U,t[T]=(V?"+=":"-=")+2*U,Q[T]=(V?"-=":"+=")+2*U,L.animate(S,M,R.easing);
m>W;
W++){L.animate(t,M,R.easing).animate(Q,M,R.easing)
}L.animate(t,M,R.easing).animate(S,M/2,R.easing).queue(N),k.effects.unshift(L,P,O+1)
}),k.effects.define("slide","show",function(L,t){var Q,m,g=k(this),O={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},f=L.mode,v=L.direction||"left",p="up"===v||"down"===v?"top":"left",N="up"===v||"left"===v,P=L.distance||g["top"===p?"outerHeight":"outerWidth"](!0),M={};
k.effects.createPlaceholder(g),Q=g.cssClip(),m=g.position()[p],M[p]=(N?-1:1)*P+m,M.clip=g.cssClip(),M.clip[O[v][1]]=M.clip[O[v][0]],"show"===f&&(g.cssClip(M.clip),g.css(p,M[p]),M.clip=Q,M[p]=m),g.animate(M,{queue:!1,duration:L.duration,easing:L.easing,complete:t})
});
var b;
k.uiBackCompat!==!1&&(b=k.effects.define("transfer",function(c,a){k(this).transfer(c,a)
}))
});
(function(a){if(typeof define==="function"&&define.amd){define(["../widgets/datepicker"],a)
}else{a(jQuery.datepicker)
}}(function(a){a.regional.it={closeText:"Chiudi",prevText:"&#x3C;Prec",nextText:"Succ&#x3E;",currentText:"Oggi",monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],dayNamesShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayNamesMin:["Do","Lu","Ma","Me","Gi","Ve","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.regional.fr={closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],monthNamesShort:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],dayNames:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],dayNamesShort:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.regional.de={closeText:"Schließen",prevText:"&#x3C;Zurück",nextText:"Vor&#x3E;",currentText:"Heute",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",dateFormat:"dd.mm.yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.regional.pt={closeText:"Fechar",prevText:"Anterior",nextText:"Seguinte",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],weekHeader:"Sem",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
a.regional.es={closeText:"Cerrar",prevText:"&#x3C;Ant",nextText:"Sig&#x3E;",currentText:"Hoy",monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:false,showMonthAfterYear:false,yearSuffix:""}
}));
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1||c[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){if(d(a.target).is(this)){return a.handleObj.handler.apply(this,arguments)
}}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g("#"===k?[]:k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.7",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l).prop(l,!0)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l).prop(l,!1))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")?(j.prop("checked")&&(i=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==j.prop("type")&&(j.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),j.prop("checked",this.$element.hasClass("active")),i&&j.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target).closest(".btn");
e.call(a,"toggle"),f(b.target).is('input[type="radio"], input[type="checkbox"]')||(b.preventDefault(),a.is("input,button")?a.trigger("focus"):a.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(e>this.$items.length-1||e<0)){return this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
}},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){if(!this.sliding){return this.slide("next")
}},j.prototype.prev=function(){if(!this.sliding){return this.slide("prev")
}},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":k.data();
j.call(c,a)
})
}(jQuery),+function(j){function i(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function p(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=i(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&j.contains(c[0],a.target)||(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger(j.Event("hidden.bs.dropdown",b)))))
}))
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.7",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=i(q),b=c.hasClass("open");
if(p(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click",p);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(j.Event("shown.bs.dropdown",a))
}return !1
}},l.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var s=j(this);
if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=i(s),q=r.hasClass("open");
if(!q&&27!=t.which||q&&27==t.which){return 27==t.which&&r.find(m).trigger("focus"),s.trigger("click")
}var f=" li:not(.disabled):visible a",b=r.find(".dropdown-menu"+f);
if(b.length){var a=b.index(t.target);
38==t.which&&a>0&&a--,40==t.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",p).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){document===b.target||this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
if(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),!d.isInStateTrue()){return clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
}},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element&&j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=f(this.$tip),c=f.Event("hide.bs."+this.type);
if(this.$element.trigger(c),!c.isDefaultPrevented()){return i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this
}},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var p=a[0],o="BODY"==p.tagName,n=p.getBoundingClientRect();
null==n.width&&(n=f.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));
var m=window.SVGElement&&p instanceof window.SVGElement,l=o?{top:0,left:0}:m?null:a.offset(),k={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},j=o?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},n,k,j,l)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null,b.$element=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.7",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,j="offset",i=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(j="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),k=c.data("target")||c.attr("href"),d=/^#./.test(k)&&f(k);
return d&&d.length&&d.is(":visible")&&[[d[j]().top+i,k]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(void 0===m[j+1]||i<m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.7",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return p<r&&"top"
}if("bottom"==this.affixed){return null!=r?!(p+this.unpin<=o.top)&&"bottom":!(p+n<=t-q)&&"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&p<=r?"top":null!=q&&l+k>=t-q&&"bottom"
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
$(document).ready(function(){$(".toggle-accordion").on("click",function(){var a=$(this).attr("accordion-id"),b=$(a+" .collapse.in").length;
$(this).toggleClass("active");
if(b==0){openAllPanels(a)
}else{closeAllPanels(a)
}});
openAllPanels=function(a){console.log("setAllPanelOpen");
$(a+' .panel-collapse:not(".in")').collapse("show")
};
closeAllPanels=function(a){console.log("setAllPanelclose");
$(a+" .panel-collapse.in").collapse("hide")
}
});
Search={servletUrl:"/bin/servlet/fusion/search",queryroute:"vatican_va-search-main",limit:10,lang:"en",queryTextKey:"q",searchInKey:"in",fromDateKey:"from",toDateKey:"to",sortKey:"sorting",langFilterKey:"lang",queryMap:[],advancedFilterMap:[],lastJsonResult:"",faceFilterParameters:"",facetFilterAppliedMap:[],isMobile:false,facetInOR:true,firstJsonFacet:"",firstIteration:true,init:function(a,b){Search.i18nInit(a);
Search.settings();
Search.initCalendar(b);
Search.firstIteration=true
},i18n:{},i18nInit:function(a){a=a.replace(new RegExp("=","g"),":");
Search.i18n=JSON.parse(a)
},main:function(d,f,b,g,a,e){if(typeof d!="undefined"){Search.queryroute=d
}if(Search.isMobile){Search.queryroute="vatican_va-search-mobile-main"
}if(typeof f!="undefined"&&Search.lang!=f){Search.lang=f
}if(typeof b!="undefined"){Search.limit=b
}if(typeof g!="undefined"){Search.faceFilterParameters=g
}if(typeof a!="undefined"){Search.facetFilterAppliedMap=a
}if(g!=undefined){if(e==true){var c=Search.urlFormat();
c=c+g
}else{var c=Search.urlFormat(true);
c=c+g
}}else{if(e==true){var c=Search.urlFormat()
}var c=Search.urlFormat(true)
}if(c!=undefined){Search.search(c,a)
}},urlFormat:function(b){var c=$(".search-page.topNav select#search-page#searchInPage"),o=$(".search-page.topNav select#search-page#sortByPage"),n=$(".search-page.topNav input#date-from"),q=$(".search-page.topNav input#date-to"),F=$(".search-page.topNav input[name='q']"),E=$(".search-page.topNav input[type='submit']");
var m=[],p;
var d=window.location.href.slice(window.location.href.indexOf("?")+1);
if(d.includes("#")){d=d.substring(0,d.lastIndexOf("#"))
}d=d.split("&");
for(var x=0;
x<d.length;
x++){p=d[x].split("=");
m[p[0]]=p[1]
}if(Search.queryTextKey in m){var u=m[Search.queryTextKey];
u=u.replace(/\+/g," ");
u=u.replace(/%20/g," ");
u=u.replace(/ +(?= )/g,"");
u=u.trim();
var t=u;
if(t!=""){t=decodeURIComponent(t);
if(t.length>200){t=t.substring(0,200)
}}m[Search.queryTextKey]=decodeURIComponent(u);
if(new XRegExp("[^\\p{L}\\p{Nd}-_\\*:',\" ]").test(t)){var j=Search.i18n.notValidCharacters;
$(".content_search .search-summary").html(j);
return undefined
}Search.queryMap=m;
if(Search.langFilterKey in m&&Search.validLang(m[Search.langFilterKey])){Search.lang=m[Search.langFilterKey]
}var D=m[Search.searchInKey];
if(Search.searchInKey in Search.advancedFilterMap){D=Search.advancedFilterMap[Search.searchInKey]
}switch(D){case"one":break;
case"exact":u='"'+u+'"';
break;
default:var h=u.split(" ");
u=h[0];
for(x=1;
x<h.length;
x++){u+=" AND "+h[x]
}break
}var H="&sort=score%20desc,id%20asc";
var C="none";
if(Search.sortKey in Search.advancedFilterMap){C=Search.advancedFilterMap[Search.sortKey]
}else{if(Search.sortKey in m){C=m[Search.sortKey]
}}if(C=="relevance"){H="&sort=score%20desc,id%20asc"
}else{if(C=="latest"||C=="recent"){H="&sort=resource_date_dt%20desc,id%20asc"
}else{if(C=="older"){H="&sort=resource_date_dt%20asc,id%20asc"
}}}var w,r,a="";
var k=moment().tz("Europe/Rome")._offset;
var B=k==60?"T23:00:00Z":"T22:00:00Z";
var g=k==60?"T22:59:59.9999Z":"T21:59:59.9999Z";
if(Search.fromDateKey in Search.advancedFilterMap||Search.fromDateKey in m){var z;
var A;
if(Search.advancedFilterMap[Search.fromDateKey]!=""&&Search.advancedFilterMap[Search.fromDateKey]!=undefined){z=Search.advancedFilterMap[Search.fromDateKey].replace(/%2F/g,"/")
}else{if(m[Search.fromDateKey]!=""&&m[Search.fromDateKey]!=undefined){z=m[Search.fromDateKey].replace(/%2F/g,"/")
}}if(z!=undefined){if(Search.lang!="en"){var v=z.match(/\d+/g);
if(v.length==3){year=v[2],month=v[1],day=v[0];
z=year+"/"+month+"/"+day
}}w=new Date(z);
w.setDate(w.getDate()-1);
w=w.getFullYear()+"-"+(w.getMonth()+1)+"-"+w.getDate()+B;
a="&fq=resource_date_dt:["+w+" TO "+((Search.advancedFilterMap[Search.toDateKey]!==""&&Search.advancedFilterMap[Search.toDateKey]!=undefined)||(m[Search.toDateKey]!==""&&m[Search.toDateKey]!=undefined)?"":"*]")
}}if(Search.toDateKey in Search.advancedFilterMap||Search.toDateKey in m){var l;
if(Search.advancedFilterMap[Search.toDateKey]!=""&&Search.advancedFilterMap[Search.toDateKey]!=undefined){l=Search.advancedFilterMap[Search.toDateKey].replace(/%2F/g,"/")
}else{if(m[Search.toDateKey]!=""&&m[Search.toDateKey]!=undefined){l=m[Search.toDateKey].replace(/%2F/g,"/")
}}if(l!=undefined){if(Search.lang!="en"){var v=l.match(/\d+/g);
if(v.length==3){year=v[2],month=v[1],day=v[0];
l=year+"/"+month+"/"+day
}}r=new Date(l);
r=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+g+"]";
a=a+(a!=""?r:"&fq=resource_date_dt:[* TO "+r)
}}var e=window.location.hash;
if(b==true){e=""
}var f=(e!=""?e.replace("#",""):"");
f=(isNaN(parseInt(f))?1:parseInt(f));
var G=((b!=true&&(f>1&&Search.limit>0))?"&start="+((f-1)*Search.limit):"");
var y=(Search.limit>0?"&rows="+Search.limit:"");
var s=Search.servletUrl+"?queryroute="+Search.queryroute+"&q="+u+"&fq=lang_s:"+Search.lang+a+H+y+G+"&";
return s
}},search:function(b,a){$.ajax({type:"GET",url:b,dataType:"json",statusCode:{403:function(){},404:function(){}},success:function(c){Search.lastJsonResult=c;
Search.print(c,a);
if(Search.firstIteration||Search.facetInOR!=true){Search.getFacetFilter()
}else{Search.getFacetFilterInOR()
}Search.paginationAction()
},error:function(){}})
},print:function(K,c){var l='<article class="hit-result"><div class="hit-title"><h2><a href="//{url}">{title}</a></h2></div><div class="hit-description"><p>{description}</p></div><div class="hit-details"><span class="hit-url">{url}</span><span class="hit-date">{date}</span></div></article>';
var E="";
var L=K.response.docs.length;
var w=K.response.numFound;
var r=K.response.docs;
var n=K.facet_counts;
if(Search.firstIteration){Search.firstJsonFacet=n
}var v=K.facet_counts.facet_fields;
var q=location.host;
var g=Search.i18n.searchResultHeader;
g=g.replace("{0}",Search.queryMap[Search.queryTextKey]).replace("{1}",w);
var m="title_txt_"+Search.lang;
var s="resource_description_txt_"+Search.lang;
var j="id";
var J="resource_date_dt";
for(var O=0;
O<r.length;
O++){var B=r[O][m];
var p=r[O][s];
var f=r[O][j];
var P=r[O][J];
var A="";
if(B!=undefined){A=l.replace(new RegExp("{title}","g"),B)
}if(p!=undefined){A=A.replace(new RegExp("{description}","g"),B)
}if(f!=undefined){A=A.replace(new RegExp("{url}","g"),q+f)
}if(P!=undefined){format="DD/MM/YYYY";
if(Search.lang=="en"){format="YYYY/MM/DD"
}P=moment(P).format(format);
A=A.replace(new RegExp("{date}","g"),P)
}else{A=A.replace(new RegExp("{date}","g"),"")
}E+=A
}$(".content_search #resultsEmbed").html(E);
$(".content_search .search-summary").html(g);
var N=window.location.hash;
var h=(N!=""?N.replace("#",""):"");
h=(isNaN(parseInt(h))?1:parseInt(h));
var D="";
var a=((w%Search.limit)>0?(parseInt(w/Search.limit)+1):parseInt(w/Search.limit));
var G=5;
var t=15;
if(a>1){if(a<=t){var C=(h==1?' class="disabled"':"");
D+="<li "+C+'><a href="#'+(parseInt(h)-1)+'" >'+Search.i18n.previus+"</a></li>";
for(var o=1;
o<a+1;
o++){C=(o==h?' class="active"':"");
D+="<li "+C+'><a href="#'+o+'" >'+o+"</a></li>"
}C=(h==a?" class=disabled":"");
D+="<li "+C+'><a href="#'+(parseInt(h)+1)+'" >'+Search.i18n.next+"</a></li>"
}else{if(h<G){var C=(h==1?' class="disabled"':"");
D+="<li "+C+'><a href="#'+(parseInt(h)-1)+'">'+Search.i18n.previus+"</a></li>";
for(var o=1;
o<G+1;
o++){C=(o==h?' class="active"':"");
D+="<li "+C+'><a href="#'+o+'" >'+o+"</a></li>"
}D+="<li><span>...</span></li>";
D+='<li><a href="#'+(parseInt(a)-1)+'" >'+(parseInt(a)-1)+"</a></li>";
D+='<li><a href="#'+a+'" >'+a+"</a></li>";
C=(h==a?" class=disabled":"");
D+="<li "+C+'><a href="#'+(parseInt(h)+1)+'">'+Search.i18n.next+"</a></li>"
}else{if(h>(a-G)){D+="<li "+C+'><a href="#'+(parseInt(h)-1)+'">'+Search.i18n.previus+"</a></li>";
D+='<li><a href="#'+1+'" >'+1+"</a></li>";
D+='<li><a href="#'+2+'" >'+2+"</a></li>";
D+="<li><span>...</span></li>";
for(var o=a-G;
o<=a;
o++){C=(o==h?' class="active"':"");
D+="<li "+C+'><a href="#'+o+'">'+o+"</a></li>"
}C=(h==a?" class=disabled":"");
D+="<li "+C+'><a href="#'+(parseInt(h)+1)+'">'+Search.i18n.next+"</a></li>"
}else{D+="<li "+C+'><a href="#'+(parseInt(h)-1)+'">'+Search.i18n.previus+"</a></li>";
D+='<li><a href="#'+1+'" >'+1+"</a></li>";
D+='<li><a href="#'+2+'" >'+2+"</a></li>";
D+="<li><span>...</span></li>";
D+="<li "+C+'><a href="#'+(parseInt(h)-2)+'" '+C+">"+(h-2)+"</a></li>";
D+="<li "+C+'><a href="#'+(parseInt(h)-1)+'" '+C+">"+(h-1)+"</a></li>";
D+='<li class="active"><a href="#'+h+'" >'+h+"</a></li>";
D+="<li "+C+'><a href="#'+(parseInt(h)+1)+'" '+C+">"+(h+1)+"</a></li>";
D+="<li "+C+'><a href="#'+(parseInt(h)+2)+'" '+C+">"+(h+2)+"</a></li>";
D+="<li><span>...</span></li>";
D+='<li><a href="#'+(parseInt(a)-1)+'" >'+(parseInt(a)-1)+"</a></li>";
D+='<li><a href="#'+a+'" >'+a+"</a></li>";
C=(h==a?" class=disabled":"");
D+="<li "+C+'><a href="#'+(parseInt(h)+1)+'">'+Search.i18n.next+"</a></li>"
}}}$(".content_search .pagination").html(D)
}else{$(".content_search .pagination").html("")
}var k='<section id="{facet-group}"><div class="panel-group" id="#accordion{id}" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="panel-heading va-color light" role="tab" id="heading-{id}"><h5 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion{id}" href="#collapse-{id}" aria-expanded="false" aria-controls="collapse-{id}">{facet-name}</a></h5></div><div id="collapse-{id}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-{id}"><div class="panel-body"><ul class="search">{item}</ul></div></div></div></div></section>';
var d='<li class="search-item"><label><input type="checkbox" {applyed} id="{id}-check{checkID}" data-group="{facet-group}" data-value="{item-name}"><span data-value="{item-name}">{item-name-translater}</span></label><span class="badge badge-primary badge-pill">{item-count}</span></li>';
var Q="";
if(Search.firstIteration==true||Search.facetInOR!=true){for(var b in n){if(n.hasOwnProperty(b)){var e=1;
for(var u in n[b]){if(n[b].hasOwnProperty(u)){var y=u;
if(v[y].length>0){Q+=k.replace(new RegExp("{facet-group}","g"),y).replace(new RegExp("{id}","g"),""+e).replace(new RegExp("{facet-name}","g"),Search.i18n[y]);
var z="";
for(var A=0,I=1;
A<v[y].length;
A=A+2,I=I+1){var H=false;
if(c!=undefined&&c[y]!=undefined){H=c[y].includes(v[y][A])
}var M=v[y][A];
var x=M;
var F=Search.i18n[M];
if(F!=undefined&&F.startsWith("fusion-va")==false){x=Search.i18n[M]
}else{x=x.charAt(0).toUpperCase()+x.slice(1)
}z+=(d.replace(new RegExp("{item-name}","g"),M)).replace(new RegExp("{item-name-translater}","g"),x).replace(new RegExp("{facet-group}","g"),y).replace(new RegExp("{item-count}","g"),v[y][(A+1)]).replace(new RegExp("{id}","g"),e).replace(new RegExp("{checkID}","g"),I);
if(H){z=z.replace(new RegExp("{applyed}","g"),"apply=true")
}else{z=z.replace(new RegExp("{applyed}","g"),"")
}}Q=Q.replace(new RegExp("{item}","g"),z)
}e++
}}}}$("#accordions").html("");
$("#accordions").append(Q);
$("#resource_pope_s li.search-item input[data-value='altri']").parent().parent().appendTo("#resource_pope_s ul.search");
$("#resource_pope_s li.search-item input[data-value='altri']").parent().parent().addClass("additional");
Search.reCheckFilter()
}if(Search.firstIteration==true){Search.firstIteration=false
}},initCalendar:function(c){var b="dd/mm/yy";
if(Search.lang=="en"){b="yy/mm/dd"
}var a=2;
if(Search.isMobile){a=1
}$("#date-from").datepicker({changeMonth:true,numberOfMonths:a,changeMonth:true,changeYear:true,yearRange:"1000:2050",dateFormat:b,onClose:function(d){$("#date-to").datepicker("option","minDate",d)
}});
$("#date-to").datepicker({defaultDate:"+1w",changeMonth:true,numberOfMonths:a,changeYear:true,yearRange:"1000:2050",dateFormat:b,onClose:function(d){$("#date-from").datepicker("option","maxDate",d)
}});
$("#date-from").on("change",function(){if(Search.lang=="en"){$("#date-from").datepicker("option","dateFormat","yy/mm/dd")
}else{$("#date-from").datepicker("option","dateFormat","dd/mm/yy")
}});
$("#date-to").on("change",function(){if(Search.lang=="en"){$("#date-to").datepicker("option","dateFormat","yy/mm/dd")
}else{$("#date-to").datepicker("option","dateFormat","dd/mm/yy")
}});
$.datepicker.setDefaults($.datepicker.regional[c])
},getFacetFilter:function(){var b=[];
if(Search.lastJsonResult!=undefined&&Search.lastJsonResult!=""){var a=Search.lastJsonResult.facet_counts;
var c=Search.lastJsonResult.facet_counts.facet_fields;
$('.search .search-item  input[type="checkbox"]').unbind();
$('.search .search-item  input[type="checkbox"]').click(function(){var k=$(this).attr("apply");
if($(this).prop("checked")&&k!="true"){$(this).attr("apply","true");
var f=$(this).attr("data-value")
}else{$(this).removeAttr("apply")
}var h=1;
var g="";
for(var i in a){if(a.hasOwnProperty(i)){for(var j in a[i]){var e=[];
if(a[i].hasOwnProperty(j)){var d=j;
if(c[d].length>0){$('.search .search-item input[data-group="'+d+'"]').each(function(){var l=$(this).attr("apply");
if(l=="true"){var n=$(this).attr("data-value");
if(n!=undefined){var m=d+':"'+n+'"';
e.push(n);
g+=(h==1?"fq="+m+"":"&fq="+m);
h++
}}else{}})
}}b[d]=e
}}}Search.main(Search.queryroute,Search.lang,Search.limit,g,b,false)
})
}},getFacetFilterInOR:function(){$('.search .search-item  input[type="checkbox"]').unbind();
$('.search .search-item  input[type="checkbox"]').click(function(){var d=Search.firstJsonFacet;
var k=Search.firstJsonFacet.facet_fields;
var f=$(this).attr("apply");
if($(this).prop("checked")&&f!="true"){$(this).attr("apply","true");
var e=$(this).attr("data-value")
}else{$(this).removeAttr("apply")
}var h=[d.length];
var c="";
var i=0;
for(var g in d){if(d.hasOwnProperty(g)){for(var b in d[g]){if(d[g].hasOwnProperty(b)){var a=b;
var e="";
if(k[a].length>0){var j="";
$('.search .search-item input[data-group="'+a+'"]').each(function(){var l=$(this).attr("apply");
if(l=="true"){if(j!=undefined){j+='"'+$(this).attr("data-value")+'"|'
}}else{}});
if(j!=""){j=j.substring(0,j.length-1);
j="("+j+")";
e="fq="+a+":"+j
}}}if(e!=""){h[i]=e;
i++
}}}}$.each(h,function(l,m){c+=m;
if(l<i-1){c+="&"
}});
Search.main(Search.queryroute,Search.lang,Search.limit,c,undefined,false)
})
},reCheckFilter:function(){$('.search .search-item input[type="checkbox"]').each(function(a){var b=$(this).attr("apply");
if(b=="true"){$(this).prop("checked",true)
}else{$(this).prop("checked",false)
}})
},paginationAction:function(){$(".content_search .pagination>li:not('.disabled')>a").on("click",function(){var a=$(this).attr("href").replace("#","");
if(!isNaN(parseInt(a))){window.location.hash=a
}setTimeout(Search.main(Search.queryroute,Search.lang,Search.limit,Search.faceFilterParameters,Search.facetFilterAppliedMap,true),jQuery("html, body").animate({scrollTop:240},0),300)
});
$(".content_search .pagination>li.disabled>a").click(false)
},validLang:function(b){var a=false;
if(b!=undefined&&b!=""){a=true
}return a
},settings:function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){Search.isMobile=true
}$(".search-menu input#qId#qId + div#basic-addon1").on("click",function(){$("form#va-search").submit()
});
$("#mob-form-view").on("click",function(){$("#va-search").toggle();
if($(this).children().hasClass("glyphicon-search")){$(this).children().removeClass("glyphicon-search");
$(this).children().addClass("glyphicon-remove")
}else{$(this).children().removeClass("glyphicon-remove");
$(this).children().addClass("glyphicon-search")
}});
setInterval(function(){var a=$(window).width();
if((Search.isMobile!=true&&$(window).scrollTop()>=250)&&a>992){$(".search-menu").addClass("fixed");
$(".row.language").css("display","none");
$("#accordions").addClass("fixed");
var b=$("#accordions").parent().css("width");
$("#accordions").css("width",b);
$(".content_search div#accordions .panel-group .panel-body").css("max-height","280px")
}else{$(".search-menu").removeClass("fixed");
$(".row.language").css("display","block");
$("#accordions").removeClass("fixed");
$("#accordions").attr("style","");
$(".content_search div#accordions .panel-group .panel-body").css("max-height","300px")
}},500);
$("#searchInPage").on("change",function(){Search.advancedFilterMap[Search.searchInKey]=this.value;
Search.main(Search.queryroute,Search.lang,Search.limit,Search.faceFilterParameters,Search.facetFilterAppliedMap,false)
});
$("#date-from").on("change",function(){Search.advancedFilterMap[Search.fromDateKey]=this.value;
Search.main(Search.queryroute,Search.lang,Search.limit,Search.faceFilterParameters,Search.facetFilterAppliedMap,false)
});
$("#date-to").on("change",function(){Search.advancedFilterMap[Search.toDateKey]=this.value;
Search.main(Search.queryroute,Search.lang,Search.limit,Search.faceFilterParameters,Search.facetFilterAppliedMap,true)
});
$("#sortByPage").on("change",function(){Search.advancedFilterMap[Search.sortKey]=this.value;
Search.main(Search.queryroute,Search.lang,Search.limit,Search.faceFilterParameters,Search.facetFilterAppliedMap,false)
})
},};
(function(b){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b()
}else{if(typeof define==="function"&&define.amd){define([],b)
}else{var a;
if(typeof window!=="undefined"){a=window
}else{if(typeof global!=="undefined"){a=global
}else{if(typeof self!=="undefined"){a=self
}else{a=this
}}}a.XRegExp=b()
}}})(function(){var d,b,a;
return(function c(f,k,h){function g(q,n){if(!k[q]){if(!f[q]){var m=typeof require=="function"&&require;
if(!n&&m){return m(q,!0)
}if(e){return e(q,!0)
}var p=new Error("Cannot find module '"+q+"'");
throw p.code="MODULE_NOT_FOUND",p
}var i=k[q]={exports:{}};
f[q][0].call(i.exports,function(l){var o=f[q][1][l];
return g(o?o:l)
},i,i.exports,c,f,k,h)
}return k[q].exports
}var e=typeof require=="function"&&require;
for(var j=0;
j<h.length;
j++){g(h[j])
}return g
})({1:[function(f,g,e){
/*!
     * XRegExp.build 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2012-2017 MIT License
     * Inspired by Lea Verou's RegExp.create <lea.verou.me>
     */
g.exports=function(k){var h="xregexp";
var j=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
var i=k.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/,j],"g",{conjunction:"or"});
function m(o){var p=/^(?:\(\?:\))*\^/;
var n=/\$(?:\(\?:\))*$/;
if(p.test(o)&&n.test(o)&&n.test(o.replace(/\\[\s\S]/g,""))){return o.replace(p,"").replace(n,"")
}return o
}function l(p,o){var n=o?"x":"";
return k.isRegExp(p)?(p[h]&&p[h].captureNames?p:k(p.source,n)):k(p,n)
}k.build=function(z,w,s){s=s||"";
var A=s.indexOf("x")>-1;
var t=/^\(\?([\w$]+)\)/.exec(z);
if(t){s=k._clipDuplicates(s+t[1])
}var x={};
for(var q in w){if(w.hasOwnProperty(q)){var n=l(w[q],A);
x[q]={pattern:m(n.source),names:n[h].captureNames||[]}
}}var o=l(z,A);
var B=0;
var v;
var u=0;
var C=[0];
var y=o[h].captureNames||[];
var r=o.source.replace(i,function(J,I,G,F,E){var H=I||G;
var D;
var K;
var p;
if(H){if(!x.hasOwnProperty(H)){throw new ReferenceError("Undefined property "+J)
}if(I){D=y[u];
C[++u]=++B;
K="(?<"+(D||H)+">"
}else{K="(?:"
}v=B;
return K+x[H].pattern.replace(j,function(L,M,N){if(M){D=x[H].names[B-v];
++B;
if(D){return"(?<"+D+">"
}}else{if(N){p=+N-1;
return x[H].names[p]?"\\k<"+x[H].names[p]+">":"\\"+(+N+v)
}}return L
})+")"
}if(F){D=y[u];
C[++u]=++B;
if(D){return"(?<"+D+">"
}}else{if(E){p=+E-1;
return y[p]?"\\k<"+y[p]+">":"\\"+C[+E]
}}return J
});
return k(r,s)
}
}
},{}],2:[function(f,g,e){
/*!
     * XRegExp.matchRecursive 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2009-2017 MIT License
     */
g.exports=function(h){function i(k,l,m,j){return{name:k,value:l,start:m,end:j}
}h.matchRecursive=function(w,m,z,o,l){o=o||"";
l=l||{};
var x=o.indexOf("g")>-1;
var B=o.indexOf("y")>-1;
var j=o.replace(/y/g,"");
var C=l.escapeChar;
var r=l.valueNames;
var p=[];
var k=0;
var q=0;
var u=0;
var s=0;
var t;
var n;
var v;
var y;
var A;
m=h(m,j);
z=h(z,j);
if(C){if(C.length>1){throw new Error("Cannot use more than one escape character")
}C=h.escape(C);
A=new RegExp("(?:"+C+"[\\S\\s]|(?:(?!"+h.union([m,z],"",{conjunction:"or"}).source+")[^"+C+"])+)+",o.replace(/[^imu]+/g,""))
}while(true){if(C){u+=(h.exec(w,A,u,"sticky")||[""])[0].length
}v=h.exec(w,m,u);
y=h.exec(w,z,u);
if(v&&y){if(v.index<=y.index){y=null
}else{v=null
}}if(v||y){q=(v||y).index;
u=q+(v||y)[0].length
}else{if(!k){break
}}if(B&&!k&&q>s){break
}if(v){if(!k){t=q;
n=u
}++k
}else{if(y&&k){if(!--k){if(r){if(r[0]&&t>s){p.push(i(r[0],w.slice(s,t),s,t))
}if(r[1]){p.push(i(r[1],w.slice(t,n),t,n))
}if(r[2]){p.push(i(r[2],w.slice(n,q),n,q))
}if(r[3]){p.push(i(r[3],w.slice(q,u),q,u))
}}else{p.push(w.slice(n,q))
}s=u;
if(!x){break
}}}else{throw new Error("Unbalanced delimiter found in string")
}}if(q===u){++u
}}if(x&&!B&&r&&r[0]&&w.length>s){p.push(i(r[0],w.slice(s),s,w.length))
}return p
}
}
},{}],3:[function(f,g,e){
/*!
     * XRegExp Unicode Base 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2008-2017 MIT License
     */
g.exports=function(o){var h={};
var k=o._dec;
var j=o._hex;
var p=o._pad4;
function m(s){return s.replace(/[- _]+/g,"").toLowerCase()
}function q(t){var s=/^\\[xu](.+)/.exec(t);
return s?k(s[1]):t.charCodeAt(t.charAt(0)==="\\"?1:0)
}function i(t){var s="";
var u=-1;
o.forEach(t,/(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,function(v){var w=q(v[1]);
if(w>(u+1)){s+="\\u"+p(j(u+1));
if(w>(u+2)){s+="-\\u"+p(j(w-1))
}}u=q(v[2]||v[1])
});
if(u<65535){s+="\\u"+p(j(u+1));
if(u<65534){s+="-\\uFFFF"
}}return s
}function l(s){var t="b!";
return(h[s][t]||(h[s][t]=i(h[s].bmp)))
}function n(s,t){var v=h[s];
var u="";
if(v.bmp&&!v.isBmpLast){u="["+v.bmp+"]"+(v.astral?"|":"")
}if(v.astral){u+=v.astral
}if(v.isBmpLast&&v.bmp){u+=(v.astral?"|":"")+"["+v.bmp+"]"
}return t?"(?:(?!"+u+")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-\uFFFF]))":"(?:"+u+")"
}function r(s,t){var u=t?"a!":"a=";
return(h[s][u]||(h[s][u]=n(s,t)))
}o.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,function(z,D,v){var B="Invalid double negation ";
var w="Unknown Unicode token ";
var t="Unicode token missing data ";
var u="Astral mode required for Unicode token ";
var s="Astral mode does not support Unicode tokens within character classes";
var A=z[1]==="P"||!!z[2];
var y=v.indexOf("A")>-1;
var x=m(z[4]||z[3]);
var C=h[x];
if(z[1]==="P"&&z[2]){throw new SyntaxError(B+z[0])
}if(!h.hasOwnProperty(x)){throw new SyntaxError(w+z[0])
}if(C.inverseOf){x=m(C.inverseOf);
if(!h.hasOwnProperty(x)){throw new ReferenceError(t+z[0]+" -> "+C.inverseOf)
}C=h[x];
A=!A
}if(!(C.bmp||y)){throw new SyntaxError(u+z[0])
}if(y){if(D==="class"){throw new SyntaxError(s)
}return r(x,A)
}return D==="class"?(A?l(x):C.bmp):(A?"[^":"[")+C.bmp+"]"
},{scope:"all",optionalFlags:"A",leadChar:"\\"});
o.addUnicodeData=function(w){var s="Unicode token requires name";
var v="Unicode token has no character data ";
var u;
for(var t=0;
t<w.length;
++t){u=w[t];
if(!u.name){throw new Error(s)
}if(!(u.inverseOf||u.bmp||u.astral)){throw new Error(v+u.name)
}h[m(u.name)]=u;
if(u.alias){h[m(u.alias)]=u
}}o.cache.flush("patterns")
};
o._getUnicodeProperty=function(t){var s=m(t);
return h[s]
}
}
},{}],4:[function(f,g,e){
/*!
     * XRegExp Unicode Blocks 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2010-2017 MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */
g.exports=function(h){if(!h.addUnicodeData){throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks")
}h.addUnicodeData([{name:"InAdlam",astral:"\uD83A[\uDD00-\uDD5F]"},{name:"InAegean_Numbers",astral:"\uD800[\uDD00-\uDD3F]"},{name:"InAhom",astral:"\uD805[\uDF00-\uDF3F]"},{name:"InAlchemical_Symbols",astral:"\uD83D[\uDF00-\uDF7F]"},{name:"InAlphabetic_Presentation_Forms",bmp:"\uFB00-\uFB4F"},{name:"InAnatolian_Hieroglyphs",astral:"\uD811[\uDC00-\uDE7F]"},{name:"InAncient_Greek_Musical_Notation",astral:"\uD834[\uDE00-\uDE4F]"},{name:"InAncient_Greek_Numbers",astral:"\uD800[\uDD40-\uDD8F]"},{name:"InAncient_Symbols",astral:"\uD800[\uDD90-\uDDCF]"},{name:"InArabic",bmp:"\u0600-\u06FF"},{name:"InArabic_Extended_A",bmp:"\u08A0-\u08FF"},{name:"InArabic_Mathematical_Alphabetic_Symbols",astral:"\uD83B[\uDE00-\uDEFF]"},{name:"InArabic_Presentation_Forms_A",bmp:"\uFB50-\uFDFF"},{name:"InArabic_Presentation_Forms_B",bmp:"\uFE70-\uFEFF"},{name:"InArabic_Supplement",bmp:"\u0750-\u077F"},{name:"InArmenian",bmp:"\u0530-\u058F"},{name:"InArrows",bmp:"\u2190-\u21FF"},{name:"InAvestan",astral:"\uD802[\uDF00-\uDF3F]"},{name:"InBalinese",bmp:"\u1B00-\u1B7F"},{name:"InBamum",bmp:"\uA6A0-\uA6FF"},{name:"InBamum_Supplement",astral:"\uD81A[\uDC00-\uDE3F]"},{name:"InBasic_Latin",bmp:"\0-\x7F"},{name:"InBassa_Vah",astral:"\uD81A[\uDED0-\uDEFF]"},{name:"InBatak",bmp:"\u1BC0-\u1BFF"},{name:"InBengali",bmp:"\u0980-\u09FF"},{name:"InBhaiksuki",astral:"\uD807[\uDC00-\uDC6F]"},{name:"InBlock_Elements",bmp:"\u2580-\u259F"},{name:"InBopomofo",bmp:"\u3100-\u312F"},{name:"InBopomofo_Extended",bmp:"\u31A0-\u31BF"},{name:"InBox_Drawing",bmp:"\u2500-\u257F"},{name:"InBrahmi",astral:"\uD804[\uDC00-\uDC7F]"},{name:"InBraille_Patterns",bmp:"\u2800-\u28FF"},{name:"InBuginese",bmp:"\u1A00-\u1A1F"},{name:"InBuhid",bmp:"\u1740-\u175F"},{name:"InByzantine_Musical_Symbols",astral:"\uD834[\uDC00-\uDCFF]"},{name:"InCJK_Compatibility",bmp:"\u3300-\u33FF"},{name:"InCJK_Compatibility_Forms",bmp:"\uFE30-\uFE4F"},{name:"InCJK_Compatibility_Ideographs",bmp:"\uF900-\uFAFF"},{name:"InCJK_Compatibility_Ideographs_Supplement",astral:"\uD87E[\uDC00-\uDE1F]"},{name:"InCJK_Radicals_Supplement",bmp:"\u2E80-\u2EFF"},{name:"InCJK_Strokes",bmp:"\u31C0-\u31EF"},{name:"InCJK_Symbols_and_Punctuation",bmp:"\u3000-\u303F"},{name:"InCJK_Unified_Ideographs",bmp:"\u4E00-\u9FFF"},{name:"InCJK_Unified_Ideographs_Extension_A",bmp:"\u3400-\u4DBF"},{name:"InCJK_Unified_Ideographs_Extension_B",astral:"[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF]"},{name:"InCJK_Unified_Ideographs_Extension_C",astral:"\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF3F]"},{name:"InCJK_Unified_Ideographs_Extension_D",astral:"\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]"},{name:"InCJK_Unified_Ideographs_Extension_E",astral:"\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEAF]"},{name:"InCarian",astral:"\uD800[\uDEA0-\uDEDF]"},{name:"InCaucasian_Albanian",astral:"\uD801[\uDD30-\uDD6F]"},{name:"InChakma",astral:"\uD804[\uDD00-\uDD4F]"},{name:"InCham",bmp:"\uAA00-\uAA5F"},{name:"InCherokee",bmp:"\u13A0-\u13FF"},{name:"InCherokee_Supplement",bmp:"\uAB70-\uABBF"},{name:"InCombining_Diacritical_Marks",bmp:"\u0300-\u036F"},{name:"InCombining_Diacritical_Marks_Extended",bmp:"\u1AB0-\u1AFF"},{name:"InCombining_Diacritical_Marks_Supplement",bmp:"\u1DC0-\u1DFF"},{name:"InCombining_Diacritical_Marks_for_Symbols",bmp:"\u20D0-\u20FF"},{name:"InCombining_Half_Marks",bmp:"\uFE20-\uFE2F"},{name:"InCommon_Indic_Number_Forms",bmp:"\uA830-\uA83F"},{name:"InControl_Pictures",bmp:"\u2400-\u243F"},{name:"InCoptic",bmp:"\u2C80-\u2CFF"},{name:"InCoptic_Epact_Numbers",astral:"\uD800[\uDEE0-\uDEFF]"},{name:"InCounting_Rod_Numerals",astral:"\uD834[\uDF60-\uDF7F]"},{name:"InCuneiform",astral:"\uD808[\uDC00-\uDFFF]"},{name:"InCuneiform_Numbers_and_Punctuation",astral:"\uD809[\uDC00-\uDC7F]"},{name:"InCurrency_Symbols",bmp:"\u20A0-\u20CF"},{name:"InCypriot_Syllabary",astral:"\uD802[\uDC00-\uDC3F]"},{name:"InCyrillic",bmp:"\u0400-\u04FF"},{name:"InCyrillic_Extended_A",bmp:"\u2DE0-\u2DFF"},{name:"InCyrillic_Extended_B",bmp:"\uA640-\uA69F"},{name:"InCyrillic_Extended_C",bmp:"\u1C80-\u1C8F"},{name:"InCyrillic_Supplement",bmp:"\u0500-\u052F"},{name:"InDeseret",astral:"\uD801[\uDC00-\uDC4F]"},{name:"InDevanagari",bmp:"\u0900-\u097F"},{name:"InDevanagari_Extended",bmp:"\uA8E0-\uA8FF"},{name:"InDingbats",bmp:"\u2700-\u27BF"},{name:"InDomino_Tiles",astral:"\uD83C[\uDC30-\uDC9F]"},{name:"InDuployan",astral:"\uD82F[\uDC00-\uDC9F]"},{name:"InEarly_Dynastic_Cuneiform",astral:"\uD809[\uDC80-\uDD4F]"},{name:"InEgyptian_Hieroglyphs",astral:"\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F]"},{name:"InElbasan",astral:"\uD801[\uDD00-\uDD2F]"},{name:"InEmoticons",astral:"\uD83D[\uDE00-\uDE4F]"},{name:"InEnclosed_Alphanumeric_Supplement",astral:"\uD83C[\uDD00-\uDDFF]"},{name:"InEnclosed_Alphanumerics",bmp:"\u2460-\u24FF"},{name:"InEnclosed_CJK_Letters_and_Months",bmp:"\u3200-\u32FF"},{name:"InEnclosed_Ideographic_Supplement",astral:"\uD83C[\uDE00-\uDEFF]"},{name:"InEthiopic",bmp:"\u1200-\u137F"},{name:"InEthiopic_Extended",bmp:"\u2D80-\u2DDF"},{name:"InEthiopic_Extended_A",bmp:"\uAB00-\uAB2F"},{name:"InEthiopic_Supplement",bmp:"\u1380-\u139F"},{name:"InGeneral_Punctuation",bmp:"\u2000-\u206F"},{name:"InGeometric_Shapes",bmp:"\u25A0-\u25FF"},{name:"InGeometric_Shapes_Extended",astral:"\uD83D[\uDF80-\uDFFF]"},{name:"InGeorgian",bmp:"\u10A0-\u10FF"},{name:"InGeorgian_Supplement",bmp:"\u2D00-\u2D2F"},{name:"InGlagolitic",bmp:"\u2C00-\u2C5F"},{name:"InGlagolitic_Supplement",astral:"\uD838[\uDC00-\uDC2F]"},{name:"InGothic",astral:"\uD800[\uDF30-\uDF4F]"},{name:"InGrantha",astral:"\uD804[\uDF00-\uDF7F]"},{name:"InGreek_Extended",bmp:"\u1F00-\u1FFF"},{name:"InGreek_and_Coptic",bmp:"\u0370-\u03FF"},{name:"InGujarati",bmp:"\u0A80-\u0AFF"},{name:"InGurmukhi",bmp:"\u0A00-\u0A7F"},{name:"InHalfwidth_and_Fullwidth_Forms",bmp:"\uFF00-\uFFEF"},{name:"InHangul_Compatibility_Jamo",bmp:"\u3130-\u318F"},{name:"InHangul_Jamo",bmp:"\u1100-\u11FF"},{name:"InHangul_Jamo_Extended_A",bmp:"\uA960-\uA97F"},{name:"InHangul_Jamo_Extended_B",bmp:"\uD7B0-\uD7FF"},{name:"InHangul_Syllables",bmp:"\uAC00-\uD7AF"},{name:"InHanunoo",bmp:"\u1720-\u173F"},{name:"InHatran",astral:"\uD802[\uDCE0-\uDCFF]"},{name:"InHebrew",bmp:"\u0590-\u05FF"},{name:"InHigh_Private_Use_Surrogates",bmp:"\uDB80-\uDBFF"},{name:"InHigh_Surrogates",bmp:"\uD800-\uDB7F"},{name:"InHiragana",bmp:"\u3040-\u309F"},{name:"InIPA_Extensions",bmp:"\u0250-\u02AF"},{name:"InIdeographic_Description_Characters",bmp:"\u2FF0-\u2FFF"},{name:"InIdeographic_Symbols_and_Punctuation",astral:"\uD81B[\uDFE0-\uDFFF]"},{name:"InImperial_Aramaic",astral:"\uD802[\uDC40-\uDC5F]"},{name:"InInscriptional_Pahlavi",astral:"\uD802[\uDF60-\uDF7F]"},{name:"InInscriptional_Parthian",astral:"\uD802[\uDF40-\uDF5F]"},{name:"InJavanese",bmp:"\uA980-\uA9DF"},{name:"InKaithi",astral:"\uD804[\uDC80-\uDCCF]"},{name:"InKana_Supplement",astral:"\uD82C[\uDC00-\uDCFF]"},{name:"InKanbun",bmp:"\u3190-\u319F"},{name:"InKangxi_Radicals",bmp:"\u2F00-\u2FDF"},{name:"InKannada",bmp:"\u0C80-\u0CFF"},{name:"InKatakana",bmp:"\u30A0-\u30FF"},{name:"InKatakana_Phonetic_Extensions",bmp:"\u31F0-\u31FF"},{name:"InKayah_Li",bmp:"\uA900-\uA92F"},{name:"InKharoshthi",astral:"\uD802[\uDE00-\uDE5F]"},{name:"InKhmer",bmp:"\u1780-\u17FF"},{name:"InKhmer_Symbols",bmp:"\u19E0-\u19FF"},{name:"InKhojki",astral:"\uD804[\uDE00-\uDE4F]"},{name:"InKhudawadi",astral:"\uD804[\uDEB0-\uDEFF]"},{name:"InLao",bmp:"\u0E80-\u0EFF"},{name:"InLatin_Extended_Additional",bmp:"\u1E00-\u1EFF"},{name:"InLatin_Extended_A",bmp:"\u0100-\u017F"},{name:"InLatin_Extended_B",bmp:"\u0180-\u024F"},{name:"InLatin_Extended_C",bmp:"\u2C60-\u2C7F"},{name:"InLatin_Extended_D",bmp:"\uA720-\uA7FF"},{name:"InLatin_Extended_E",bmp:"\uAB30-\uAB6F"},{name:"InLatin_1_Supplement",bmp:"\x80-\xFF"},{name:"InLepcha",bmp:"\u1C00-\u1C4F"},{name:"InLetterlike_Symbols",bmp:"\u2100-\u214F"},{name:"InLimbu",bmp:"\u1900-\u194F"},{name:"InLinear_A",astral:"\uD801[\uDE00-\uDF7F]"},{name:"InLinear_B_Ideograms",astral:"\uD800[\uDC80-\uDCFF]"},{name:"InLinear_B_Syllabary",astral:"\uD800[\uDC00-\uDC7F]"},{name:"InLisu",bmp:"\uA4D0-\uA4FF"},{name:"InLow_Surrogates",bmp:"\uDC00-\uDFFF"},{name:"InLycian",astral:"\uD800[\uDE80-\uDE9F]"},{name:"InLydian",astral:"\uD802[\uDD20-\uDD3F]"},{name:"InMahajani",astral:"\uD804[\uDD50-\uDD7F]"},{name:"InMahjong_Tiles",astral:"\uD83C[\uDC00-\uDC2F]"},{name:"InMalayalam",bmp:"\u0D00-\u0D7F"},{name:"InMandaic",bmp:"\u0840-\u085F"},{name:"InManichaean",astral:"\uD802[\uDEC0-\uDEFF]"},{name:"InMarchen",astral:"\uD807[\uDC70-\uDCBF]"},{name:"InMathematical_Alphanumeric_Symbols",astral:"\uD835[\uDC00-\uDFFF]"},{name:"InMathematical_Operators",bmp:"\u2200-\u22FF"},{name:"InMeetei_Mayek",bmp:"\uABC0-\uABFF"},{name:"InMeetei_Mayek_Extensions",bmp:"\uAAE0-\uAAFF"},{name:"InMende_Kikakui",astral:"\uD83A[\uDC00-\uDCDF]"},{name:"InMeroitic_Cursive",astral:"\uD802[\uDDA0-\uDDFF]"},{name:"InMeroitic_Hieroglyphs",astral:"\uD802[\uDD80-\uDD9F]"},{name:"InMiao",astral:"\uD81B[\uDF00-\uDF9F]"},{name:"InMiscellaneous_Mathematical_Symbols_A",bmp:"\u27C0-\u27EF"},{name:"InMiscellaneous_Mathematical_Symbols_B",bmp:"\u2980-\u29FF"},{name:"InMiscellaneous_Symbols",bmp:"\u2600-\u26FF"},{name:"InMiscellaneous_Symbols_and_Arrows",bmp:"\u2B00-\u2BFF"},{name:"InMiscellaneous_Symbols_and_Pictographs",astral:"\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF]"},{name:"InMiscellaneous_Technical",bmp:"\u2300-\u23FF"},{name:"InModi",astral:"\uD805[\uDE00-\uDE5F]"},{name:"InModifier_Tone_Letters",bmp:"\uA700-\uA71F"},{name:"InMongolian",bmp:"\u1800-\u18AF"},{name:"InMongolian_Supplement",astral:"\uD805[\uDE60-\uDE7F]"},{name:"InMro",astral:"\uD81A[\uDE40-\uDE6F]"},{name:"InMultani",astral:"\uD804[\uDE80-\uDEAF]"},{name:"InMusical_Symbols",astral:"\uD834[\uDD00-\uDDFF]"},{name:"InMyanmar",bmp:"\u1000-\u109F"},{name:"InMyanmar_Extended_A",bmp:"\uAA60-\uAA7F"},{name:"InMyanmar_Extended_B",bmp:"\uA9E0-\uA9FF"},{name:"InNKo",bmp:"\u07C0-\u07FF"},{name:"InNabataean",astral:"\uD802[\uDC80-\uDCAF]"},{name:"InNew_Tai_Lue",bmp:"\u1980-\u19DF"},{name:"InNewa",astral:"\uD805[\uDC00-\uDC7F]"},{name:"InNumber_Forms",bmp:"\u2150-\u218F"},{name:"InOgham",bmp:"\u1680-\u169F"},{name:"InOl_Chiki",bmp:"\u1C50-\u1C7F"},{name:"InOld_Hungarian",astral:"\uD803[\uDC80-\uDCFF]"},{name:"InOld_Italic",astral:"\uD800[\uDF00-\uDF2F]"},{name:"InOld_North_Arabian",astral:"\uD802[\uDE80-\uDE9F]"},{name:"InOld_Permic",astral:"\uD800[\uDF50-\uDF7F]"},{name:"InOld_Persian",astral:"\uD800[\uDFA0-\uDFDF]"},{name:"InOld_South_Arabian",astral:"\uD802[\uDE60-\uDE7F]"},{name:"InOld_Turkic",astral:"\uD803[\uDC00-\uDC4F]"},{name:"InOptical_Character_Recognition",bmp:"\u2440-\u245F"},{name:"InOriya",bmp:"\u0B00-\u0B7F"},{name:"InOrnamental_Dingbats",astral:"\uD83D[\uDE50-\uDE7F]"},{name:"InOsage",astral:"\uD801[\uDCB0-\uDCFF]"},{name:"InOsmanya",astral:"\uD801[\uDC80-\uDCAF]"},{name:"InPahawh_Hmong",astral:"\uD81A[\uDF00-\uDF8F]"},{name:"InPalmyrene",astral:"\uD802[\uDC60-\uDC7F]"},{name:"InPau_Cin_Hau",astral:"\uD806[\uDEC0-\uDEFF]"},{name:"InPhags_pa",bmp:"\uA840-\uA87F"},{name:"InPhaistos_Disc",astral:"\uD800[\uDDD0-\uDDFF]"},{name:"InPhoenician",astral:"\uD802[\uDD00-\uDD1F]"},{name:"InPhonetic_Extensions",bmp:"\u1D00-\u1D7F"},{name:"InPhonetic_Extensions_Supplement",bmp:"\u1D80-\u1DBF"},{name:"InPlaying_Cards",astral:"\uD83C[\uDCA0-\uDCFF]"},{name:"InPrivate_Use_Area",bmp:"\uE000-\uF8FF"},{name:"InPsalter_Pahlavi",astral:"\uD802[\uDF80-\uDFAF]"},{name:"InRejang",bmp:"\uA930-\uA95F"},{name:"InRumi_Numeral_Symbols",astral:"\uD803[\uDE60-\uDE7F]"},{name:"InRunic",bmp:"\u16A0-\u16FF"},{name:"InSamaritan",bmp:"\u0800-\u083F"},{name:"InSaurashtra",bmp:"\uA880-\uA8DF"},{name:"InSharada",astral:"\uD804[\uDD80-\uDDDF]"},{name:"InShavian",astral:"\uD801[\uDC50-\uDC7F]"},{name:"InShorthand_Format_Controls",astral:"\uD82F[\uDCA0-\uDCAF]"},{name:"InSiddham",astral:"\uD805[\uDD80-\uDDFF]"},{name:"InSinhala",bmp:"\u0D80-\u0DFF"},{name:"InSinhala_Archaic_Numbers",astral:"\uD804[\uDDE0-\uDDFF]"},{name:"InSmall_Form_Variants",bmp:"\uFE50-\uFE6F"},{name:"InSora_Sompeng",astral:"\uD804[\uDCD0-\uDCFF]"},{name:"InSpacing_Modifier_Letters",bmp:"\u02B0-\u02FF"},{name:"InSpecials",bmp:"\uFFF0-\uFFFF"},{name:"InSundanese",bmp:"\u1B80-\u1BBF"},{name:"InSundanese_Supplement",bmp:"\u1CC0-\u1CCF"},{name:"InSuperscripts_and_Subscripts",bmp:"\u2070-\u209F"},{name:"InSupplemental_Arrows_A",bmp:"\u27F0-\u27FF"},{name:"InSupplemental_Arrows_B",bmp:"\u2900-\u297F"},{name:"InSupplemental_Arrows_C",astral:"\uD83E[\uDC00-\uDCFF]"},{name:"InSupplemental_Mathematical_Operators",bmp:"\u2A00-\u2AFF"},{name:"InSupplemental_Punctuation",bmp:"\u2E00-\u2E7F"},{name:"InSupplemental_Symbols_and_Pictographs",astral:"\uD83E[\uDD00-\uDDFF]"},{name:"InSupplementary_Private_Use_Area_A",astral:"[\uDB80-\uDBBF][\uDC00-\uDFFF]"},{name:"InSupplementary_Private_Use_Area_B",astral:"[\uDBC0-\uDBFF][\uDC00-\uDFFF]"},{name:"InSutton_SignWriting",astral:"\uD836[\uDC00-\uDEAF]"},{name:"InSyloti_Nagri",bmp:"\uA800-\uA82F"},{name:"InSyriac",bmp:"\u0700-\u074F"},{name:"InTagalog",bmp:"\u1700-\u171F"},{name:"InTagbanwa",bmp:"\u1760-\u177F"},{name:"InTags",astral:"\uDB40[\uDC00-\uDC7F]"},{name:"InTai_Le",bmp:"\u1950-\u197F"},{name:"InTai_Tham",bmp:"\u1A20-\u1AAF"},{name:"InTai_Viet",bmp:"\uAA80-\uAADF"},{name:"InTai_Xuan_Jing_Symbols",astral:"\uD834[\uDF00-\uDF5F]"},{name:"InTakri",astral:"\uD805[\uDE80-\uDECF]"},{name:"InTamil",bmp:"\u0B80-\u0BFF"},{name:"InTangut",astral:"[\uD81C-\uD821][\uDC00-\uDFFF]"},{name:"InTangut_Components",astral:"\uD822[\uDC00-\uDEFF]"},{name:"InTelugu",bmp:"\u0C00-\u0C7F"},{name:"InThaana",bmp:"\u0780-\u07BF"},{name:"InThai",bmp:"\u0E00-\u0E7F"},{name:"InTibetan",bmp:"\u0F00-\u0FFF"},{name:"InTifinagh",bmp:"\u2D30-\u2D7F"},{name:"InTirhuta",astral:"\uD805[\uDC80-\uDCDF]"},{name:"InTransport_and_Map_Symbols",astral:"\uD83D[\uDE80-\uDEFF]"},{name:"InUgaritic",astral:"\uD800[\uDF80-\uDF9F]"},{name:"InUnified_Canadian_Aboriginal_Syllabics",bmp:"\u1400-\u167F"},{name:"InUnified_Canadian_Aboriginal_Syllabics_Extended",bmp:"\u18B0-\u18FF"},{name:"InVai",bmp:"\uA500-\uA63F"},{name:"InVariation_Selectors",bmp:"\uFE00-\uFE0F"},{name:"InVariation_Selectors_Supplement",astral:"\uDB40[\uDD00-\uDDEF]"},{name:"InVedic_Extensions",bmp:"\u1CD0-\u1CFF"},{name:"InVertical_Forms",bmp:"\uFE10-\uFE1F"},{name:"InWarang_Citi",astral:"\uD806[\uDCA0-\uDCFF]"},{name:"InYi_Radicals",bmp:"\uA490-\uA4CF"},{name:"InYi_Syllables",bmp:"\uA000-\uA48F"},{name:"InYijing_Hexagram_Symbols",bmp:"\u4DC0-\u4DFF"}])
}
},{}],5:[function(f,g,e){
/*!
     * XRegExp Unicode Categories 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2010-2017 MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */
g.exports=function(h){if(!h.addUnicodeData){throw new ReferenceError("Unicode Base must be loaded before Unicode Categories")
}h.addUnicodeData([{name:"C",alias:"Other",isBmpLast:true,bmp:"\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF",astral:"\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCBD\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]"},{name:"Cc",alias:"Control",bmp:"\0-\x1F\x7F-\x9F"},{name:"Cf",alias:"Format",bmp:"\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB",astral:"\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]"},{name:"Cn",alias:"Unassigned",bmp:"\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u0560\u0588\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u05FF\u061D\u070E\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08B5\u08BE-\u08D3\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1CBF\u1CC8-\u1CCF\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20BF-\u20CF\u20F1-\u20FF\u218C-\u218F\u23FF\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2BEB\u2BF0-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E45-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FD6-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7AF\uA7B8-\uA7F6\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA8FE\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB66-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF",astral:"\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD70-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC70-\uDC7E\uDCC2-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD44-\uDD4F\uDD77-\uDD7F\uDDCE\uDDCF\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5A\uDC5C\uDC5E-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF40-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDE70-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDE9-\uDDFF\uDE46-\uDEFF\uDF57-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD6F\uDDAD-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF]|\uD83D[\uDED3-\uDEDF\uDEED-\uDEEF\uDEF7-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDD0F\uDD1F\uDD28-\uDD2F\uDD31\uDD32\uDD3F\uDD4C-\uDD4F\uDD5F-\uDD7F\uDD92-\uDDBF\uDDC1-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]"},{name:"Co",alias:"Private_Use",bmp:"\uE000-\uF8FF",astral:"[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]"},{name:"Cs",alias:"Surrogate",bmp:"\uD800-\uDFFF"},{name:"L",alias:"Letter",bmp:"A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",astral:"\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]"},{name:"Ll",alias:"Lowercase_Letter",bmp:"a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A",astral:"\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]"},{name:"Lm",alias:"Modifier_Letter",bmp:"\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uFF70\uFF9E\uFF9F",astral:"\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0]"},{name:"Lo",alias:"Other_Letter",bmp:"\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05F0-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10D0-\u10FA\u10FD-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",astral:"\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]"},{name:"Lt",alias:"Titlecase_Letter",bmp:"\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC"},{name:"Lu",alias:"Uppercase_Letter",bmp:"A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A",astral:"\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]"},{name:"M",alias:"Mark",bmp:"\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F",astral:"\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"},{name:"Mc",alias:"Spacing_Mark",bmp:"\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF2\u1CF3\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BD-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC",astral:"\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4]|\uD81B[\uDF51-\uDF7E]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]"},{name:"Me",alias:"Enclosing_Mark",bmp:"\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672"},{name:"Mn",alias:"Nonspacing_Mark",bmp:"\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D01\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA8C4\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F",astral:"\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDCA-\uDDCC\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"},{name:"N",alias:"Number",bmp:"0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19",astral:"\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2]|\uD807[\uDC50-\uDC6C]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83C[\uDD00-\uDD0C]"},{name:"Nd",alias:"Decimal_Number",bmp:"0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19",astral:"\uD801[\uDCA0-\uDCA9]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9]|\uD807[\uDC50-\uDC59]|\uD81A[\uDE60-\uDE69\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD83A[\uDD50-\uDD59]"},{name:"Nl",alias:"Letter_Number",bmp:"\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF",astral:"\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]"},{name:"No",alias:"Other_Number",bmp:"\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835",astral:"\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE47\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C]|\uD81A[\uDF5B-\uDF61]|\uD834[\uDF60-\uDF71]|\uD83A[\uDCC7-\uDCCF]|\uD83C[\uDD00-\uDD0C]"},{name:"P",alias:"Punctuation",bmp:"\x21-\x23\x25-\\x2A\x2C-\x2F\x3A\x3B\\x3F\x40\\x5B-\\x5D\x5F\\x7B\x7D\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65",astral:"\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"},{name:"Pc",alias:"Connector_Punctuation",bmp:"\x5F\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F"},{name:"Pd",alias:"Dash_Punctuation",bmp:"\\x2D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D"},{name:"Pe",alias:"Close_Punctuation",bmp:"\\x29\\x5D\x7D\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63"},{name:"Pf",alias:"Final_Punctuation",bmp:"\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21"},{name:"Pi",alias:"Initial_Punctuation",bmp:"\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20"},{name:"Po",alias:"Other_Punctuation",bmp:"\x21-\x23\x25-\x27\\x2A\x2C\\x2E\x2F\x3A\x3B\\x3F\x40\\x5C\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166D\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43\u2E44\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65",astral:"\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"},{name:"Ps",alias:"Open_Punctuation",bmp:"\\x28\\x5B\\x7B\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62"},{name:"S",alias:"Symbol",bmp:"\\x24\\x2B\x3C-\x3E\\x5E\x60\\x7C\x7E\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BE\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD",astral:"\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83B[\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]"},{name:"Sc",alias:"Currency_Symbol",bmp:"\\x24\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BE\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6"},{name:"Sk",alias:"Modifier_Symbol",bmp:"\\x5E\x60\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uFBB2-\uFBC1\uFF3E\uFF40\uFFE3",astral:"\uD83C[\uDFFB-\uDFFF]"},{name:"Sm",alias:"Math_Symbol",bmp:"\\x2B\x3C-\x3E\\x7C\x7E\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC",astral:"\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]"},{name:"So",alias:"Other_Symbol",bmp:"\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u23FE\u2400-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2CE5-\u2CEA\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFDFD\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD",astral:"\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9B\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]"},{name:"Z",alias:"Separator",bmp:"\x20\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000"},{name:"Zl",alias:"Line_Separator",bmp:"\u2028"},{name:"Zp",alias:"Paragraph_Separator",bmp:"\u2029"},{name:"Zs",alias:"Space_Separator",bmp:"\x20\xA0\u1680\u2000-\u200A\u202F\u205F\u3000"}])
}
},{}],6:[function(f,g,e){
/*!
     * XRegExp Unicode Properties 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2012-2017 MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */
g.exports=function(i){if(!i.addUnicodeData){throw new ReferenceError("Unicode Base must be loaded before Unicode Properties")
}var h=[{name:"ASCII",bmp:"\0-\x7F"},{name:"Alphabetic",bmp:"A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u1062\u1065-\u1068\u106E-\u1086\u108E\u109C\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1713\u1720-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4B\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C35\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A\uAA7E-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",astral:"\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC45\uDC82-\uDCB8\uDCD0-\uDCE8\uDD00-\uDD32\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDF00-\uDF19\uDF1D-\uDF2A]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF36\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]"},{name:"Any",isBmpLast:true,bmp:"\0-\uFFFF",astral:"[\uD800-\uDBFF][\uDC00-\uDFFF]"},{name:"Default_Ignorable_Code_Point",bmp:"\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8",astral:"\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]"},{name:"Lowercase",bmp:"a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A",astral:"\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD83A[\uDD22-\uDD43]"},{name:"Noncharacter_Code_Point",bmp:"\uFDD0-\uFDEF\uFFFE\uFFFF",astral:"[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]"},{name:"Uppercase",bmp:"A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A",astral:"\uD801[\uDC00-\uDC27\uDCB0-\uDCD3]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]"},{name:"White_Space",bmp:"\x09-\x0D\x20\x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000"}];
h.push({name:"Assigned",inverseOf:"Cn"});
i.addUnicodeData(h)
}
},{}],7:[function(f,g,e){
/*!
     * XRegExp Unicode Scripts 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2010-2017 MIT License
     * Unicode data by Mathias Bynens <mathiasbynens.be>
     */
g.exports=function(h){if(!h.addUnicodeData){throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts")
}h.addUnicodeData([{name:"Adlam",astral:"\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F]"},{name:"Ahom",astral:"\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F]"},{name:"Anatolian_Hieroglyphs",astral:"\uD811[\uDC00-\uDE46]"},{name:"Arabic",bmp:"\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC",astral:"\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]"},{name:"Armenian",bmp:"\u0531-\u0556\u0559-\u055F\u0561-\u0587\u058A\u058D-\u058F\uFB13-\uFB17"},{name:"Avestan",astral:"\uD802[\uDF00-\uDF35\uDF39-\uDF3F]"},{name:"Balinese",bmp:"\u1B00-\u1B4B\u1B50-\u1B7C"},{name:"Bamum",bmp:"\uA6A0-\uA6F7",astral:"\uD81A[\uDC00-\uDE38]"},{name:"Bassa_Vah",astral:"\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]"},{name:"Batak",bmp:"\u1BC0-\u1BF3\u1BFC-\u1BFF"},{name:"Bengali",bmp:"\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB"},{name:"Bhaiksuki",astral:"\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]"},{name:"Bopomofo",bmp:"\u02EA\u02EB\u3105-\u312D\u31A0-\u31BA"},{name:"Brahmi",astral:"\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F]"},{name:"Braille",bmp:"\u2800-\u28FF"},{name:"Buginese",bmp:"\u1A00-\u1A1B\u1A1E\u1A1F"},{name:"Buhid",bmp:"\u1740-\u1753"},{name:"Canadian_Aboriginal",bmp:"\u1400-\u167F\u18B0-\u18F5"},{name:"Carian",astral:"\uD800[\uDEA0-\uDED0]"},{name:"Caucasian_Albanian",astral:"\uD801[\uDD30-\uDD63\uDD6F]"},{name:"Chakma",astral:"\uD804[\uDD00-\uDD34\uDD36-\uDD43]"},{name:"Cham",bmp:"\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F"},{name:"Cherokee",bmp:"\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF"},{name:"Common",bmp:"\0-\x40\\x5B-\x60\\x7B-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0589\u0605\u060C\u061B\u061C\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20BE\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u23FE\u2400-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B98-\u2BB9\u2BBD-\u2BC8\u2BCA-\u2BD1\u2BEC-\u2BEF\u2E00-\u2E44\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD",astral:"\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9B\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDF00-\uDF56\uDF60-\uDF71]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDD0C\uDD10-\uDD2E\uDD30-\uDD6B\uDD70-\uDDAC\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED2\uDEE0-\uDEEC\uDEF0-\uDEF6\uDF00-\uDF73\uDF80-\uDFD4]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDD10-\uDD1E\uDD20-\uDD27\uDD30\uDD33-\uDD3E\uDD40-\uDD4B\uDD50-\uDD5E\uDD80-\uDD91\uDDC0]|\uDB40[\uDC01\uDC20-\uDC7F]"},{name:"Coptic",bmp:"\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF"},{name:"Cuneiform",astral:"\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]"},{name:"Cypriot",astral:"\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]"},{name:"Cyrillic",bmp:"\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F"},{name:"Deseret",astral:"\uD801[\uDC00-\uDC4F]"},{name:"Devanagari",bmp:"\u0900-\u0950\u0953-\u0963\u0966-\u097F\uA8E0-\uA8FD"},{name:"Duployan",astral:"\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]"},{name:"Egyptian_Hieroglyphs",astral:"\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]"},{name:"Elbasan",astral:"\uD801[\uDD00-\uDD27]"},{name:"Ethiopic",bmp:"\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E"},{name:"Georgian",bmp:"\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u2D00-\u2D25\u2D27\u2D2D"},{name:"Glagolitic",bmp:"\u2C00-\u2C2E\u2C30-\u2C5E",astral:"\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]"},{name:"Gothic",astral:"\uD800[\uDF30-\uDF4A]"},{name:"Grantha",astral:"\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]"},{name:"Greek",bmp:"\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65",astral:"\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]"},{name:"Gujarati",bmp:"\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9"},{name:"Gurmukhi",bmp:"\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75"},{name:"Han",bmp:"\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FD5\uF900-\uFA6D\uFA70-\uFAD9",astral:"[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]"},{name:"Hangul",bmp:"\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC"},{name:"Hanunoo",bmp:"\u1720-\u1734"},{name:"Hatran",astral:"\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]"},{name:"Hebrew",bmp:"\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F"},{name:"Hiragana",bmp:"\u3041-\u3096\u309D-\u309F",astral:"\uD82C\uDC01|\uD83C\uDE00"},{name:"Imperial_Aramaic",astral:"\uD802[\uDC40-\uDC55\uDC57-\uDC5F]"},{name:"Inherited",bmp:"\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951\u0952\u1AB0-\u1ABE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D",astral:"\uD800[\uDDFD\uDEE0]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]"},{name:"Inscriptional_Pahlavi",astral:"\uD802[\uDF60-\uDF72\uDF78-\uDF7F]"},{name:"Inscriptional_Parthian",astral:"\uD802[\uDF40-\uDF55\uDF58-\uDF5F]"},{name:"Javanese",bmp:"\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF"},{name:"Kaithi",astral:"\uD804[\uDC80-\uDCC1]"},{name:"Kannada",bmp:"\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2"},{name:"Katakana",bmp:"\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D",astral:"\uD82C\uDC00"},{name:"Kayah_Li",bmp:"\uA900-\uA92D\uA92F"},{name:"Kharoshthi",astral:"\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F-\uDE47\uDE50-\uDE58]"},{name:"Khmer",bmp:"\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF"},{name:"Khojki",astral:"\uD804[\uDE00-\uDE11\uDE13-\uDE3E]"},{name:"Khudawadi",astral:"\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]"},{name:"Lao",bmp:"\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF"},{name:"Latin",bmp:"A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A"},{name:"Lepcha",bmp:"\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F"},{name:"Limbu",bmp:"\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F"},{name:"Linear_A",astral:"\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]"},{name:"Linear_B",astral:"\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]"},{name:"Lisu",bmp:"\uA4D0-\uA4FF"},{name:"Lycian",astral:"\uD800[\uDE80-\uDE9C]"},{name:"Lydian",astral:"\uD802[\uDD20-\uDD39\uDD3F]"},{name:"Mahajani",astral:"\uD804[\uDD50-\uDD76]"},{name:"Malayalam",bmp:"\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F"},{name:"Mandaic",bmp:"\u0840-\u085B\u085E"},{name:"Manichaean",astral:"\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]"},{name:"Marchen",astral:"\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]"},{name:"Meetei_Mayek",bmp:"\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9"},{name:"Mende_Kikakui",astral:"\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]"},{name:"Meroitic_Cursive",astral:"\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]"},{name:"Meroitic_Hieroglyphs",astral:"\uD802[\uDD80-\uDD9F]"},{name:"Miao",astral:"\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]"},{name:"Modi",astral:"\uD805[\uDE00-\uDE44\uDE50-\uDE59]"},{name:"Mongolian",bmp:"\u1800\u1801\u1804\u1806-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA",astral:"\uD805[\uDE60-\uDE6C]"},{name:"Mro",astral:"\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]"},{name:"Multani",astral:"\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]"},{name:"Myanmar",bmp:"\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F"},{name:"Nabataean",astral:"\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]"},{name:"New_Tai_Lue",bmp:"\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF"},{name:"Newa",astral:"\uD805[\uDC00-\uDC59\uDC5B\uDC5D]"},{name:"Nko",bmp:"\u07C0-\u07FA"},{name:"Ogham",bmp:"\u1680-\u169C"},{name:"Ol_Chiki",bmp:"\u1C50-\u1C7F"},{name:"Old_Hungarian",astral:"\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]"},{name:"Old_Italic",astral:"\uD800[\uDF00-\uDF23]"},{name:"Old_North_Arabian",astral:"\uD802[\uDE80-\uDE9F]"},{name:"Old_Permic",astral:"\uD800[\uDF50-\uDF7A]"},{name:"Old_Persian",astral:"\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]"},{name:"Old_South_Arabian",astral:"\uD802[\uDE60-\uDE7F]"},{name:"Old_Turkic",astral:"\uD803[\uDC00-\uDC48]"},{name:"Oriya",bmp:"\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77"},{name:"Osage",astral:"\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]"},{name:"Osmanya",astral:"\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]"},{name:"Pahawh_Hmong",astral:"\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]"},{name:"Palmyrene",astral:"\uD802[\uDC60-\uDC7F]"},{name:"Pau_Cin_Hau",astral:"\uD806[\uDEC0-\uDEF8]"},{name:"Phags_Pa",bmp:"\uA840-\uA877"},{name:"Phoenician",astral:"\uD802[\uDD00-\uDD1B\uDD1F]"},{name:"Psalter_Pahlavi",astral:"\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]"},{name:"Rejang",bmp:"\uA930-\uA953\uA95F"},{name:"Runic",bmp:"\u16A0-\u16EA\u16EE-\u16F8"},{name:"Samaritan",bmp:"\u0800-\u082D\u0830-\u083E"},{name:"Saurashtra",bmp:"\uA880-\uA8C5\uA8CE-\uA8D9"},{name:"Sharada",astral:"\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF]"},{name:"Shavian",astral:"\uD801[\uDC50-\uDC7F]"},{name:"Siddham",astral:"\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]"},{name:"SignWriting",astral:"\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]"},{name:"Sinhala",bmp:"\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4",astral:"\uD804[\uDDE1-\uDDF4]"},{name:"Sora_Sompeng",astral:"\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]"},{name:"Sundanese",bmp:"\u1B80-\u1BBF\u1CC0-\u1CC7"},{name:"Syloti_Nagri",bmp:"\uA800-\uA82B"},{name:"Syriac",bmp:"\u0700-\u070D\u070F-\u074A\u074D-\u074F"},{name:"Tagalog",bmp:"\u1700-\u170C\u170E-\u1714"},{name:"Tagbanwa",bmp:"\u1760-\u176C\u176E-\u1770\u1772\u1773"},{name:"Tai_Le",bmp:"\u1950-\u196D\u1970-\u1974"},{name:"Tai_Tham",bmp:"\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD"},{name:"Tai_Viet",bmp:"\uAA80-\uAAC2\uAADB-\uAADF"},{name:"Takri",astral:"\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9]"},{name:"Tamil",bmp:"\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA"},{name:"Tangut",astral:"\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]"},{name:"Telugu",bmp:"\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F"},{name:"Thaana",bmp:"\u0780-\u07B1"},{name:"Thai",bmp:"\u0E01-\u0E3A\u0E40-\u0E5B"},{name:"Tibetan",bmp:"\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA"},{name:"Tifinagh",bmp:"\u2D30-\u2D67\u2D6F\u2D70\u2D7F"},{name:"Tirhuta",astral:"\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]"},{name:"Ugaritic",astral:"\uD800[\uDF80-\uDF9D\uDF9F]"},{name:"Vai",bmp:"\uA500-\uA62B"},{name:"Warang_Citi",astral:"\uD806[\uDCA0-\uDCF2\uDCFF]"},{name:"Yi",bmp:"\uA000-\uA48C\uA490-\uA4C6"}])
}
},{}],8:[function(f,g,e){var h=f("./xregexp");
f("./addons/build")(h);
f("./addons/matchrecursive")(h);
f("./addons/unicode-base")(h);
f("./addons/unicode-blocks")(h);
f("./addons/unicode-categories")(h);
f("./addons/unicode-properties")(h);
f("./addons/unicode-scripts")(h);
g.exports=h
},{"./addons/build":1,"./addons/matchrecursive":2,"./addons/unicode-base":3,"./addons/unicode-blocks":4,"./addons/unicode-categories":5,"./addons/unicode-properties":6,"./addons/unicode-scripts":7,"./xregexp":9}],9:[function(j,h,K){
/*!
     * XRegExp 3.2.0
     * <xregexp.com>
     * Steven Levithan (c) 2007-2017 MIT License
     */
"use strict";
var M="xregexp";
var m={astral:false,natives:false};
var I={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split};
var q={};
var Q={};
var l={};
var B=[];
var o="default";
var p="class";
var f={"default":/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,"class":/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/};
var E=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g;
var r=I.exec.call(/()??/,"")[1]===undefined;
var C=/x/.flags!==undefined;
var k={}.toString;
function S(T){var V=true;
try{new RegExp("",T)
}catch(U){V=false
}return V
}var e=S("u");
var R=S("y");
var v={g:true,i:true,m:true,u:e,y:R};
function t(W,T,U,Y,V){var X;
W[M]={captureNames:T};
if(V){return W
}if(W.__proto__){W.__proto__=L.prototype
}else{for(X in L.prototype){W[X]=L.prototype[X]
}}W[M].source=U;
W[M].flags=Y?Y.split("").sort().join(""):Y;
return W
}function D(T){return I.replace.call(T,/([\s\S])(?=[\s\S]*\1)/g,"")
}function x(Y,W){if(!L.isRegExp(Y)){throw new TypeError("Type RegExp expected")
}var aa=Y[M]||{};
var T=J(Y);
var Z="";
var V="";
var U=null;
var X=null;
W=W||{};
if(W.removeG){V+="g"
}if(W.removeY){V+="y"
}if(V){T=I.replace.call(T,new RegExp("["+V+"]+","g"),"")
}if(W.addG){Z+="g"
}if(W.addY){Z+="y"
}if(Z){T=D(T+Z)
}if(!W.isInternalOnly){if(aa.source!==undefined){U=aa.source
}if(aa.flags!=null){X=Z?D(aa.flags+Z):aa.flags
}}Y=t(new RegExp(W.source||Y.source,T),n(Y)?aa.captureNames.slice(0):null,U,X,W.isInternalOnly);
return Y
}function w(T){return parseInt(T,16)
}function G(U,V,T){if(U.input.charAt(U.index-1)==="("||U.input.charAt(U.index+U[0].length)===")"||g(U.input,U.index+U[0].length,T,"[?*+]|{\\d+(?:,\\d*)?}")){return""
}return"(?:)"
}function J(T){return C?T.flags:I.exec.call(/\/([a-z]*)$/i,RegExp.prototype.toString.call(T))[1]
}function n(T){return !!(T[M]&&T[M].captureNames)
}function F(T){return parseInt(T,10).toString(16)
}function u(W,V){var T=W.length;
var U;
for(U=0;
U<T;
++U){if(W[U]===V){return U
}}return -1
}function g(Y,Z,V,W){var X="\\(\\?#[^)]*\\)";
var U="#[^#\\n]*";
var T=V.indexOf("x")>-1?["\\s",U,X]:[X];
return I.test.call(new RegExp("^(?:"+T.join("|")+")*(?:"+W+")"),Y.slice(Z))
}function z(U,T){return k.call(U)==="[object "+T+"]"
}function y(T){while(T.length<4){T="0"+T
}return T
}function P(V,T){var U;
if(D(T)!==T){throw new SyntaxError("Invalid duplicate regex flag "+T)
}V=I.replace.call(V,/^\(\?([\w$]+)\)/,function(X,W){if(I.test.call(/[gy]/,W)){throw new SyntaxError("Cannot use flag g or y in mode modifier "+X)
}T=D(T+W);
return""
});
for(U=0;
U<T.length;
++U){if(!v[T.charAt(U)]){throw new SyntaxError("Unknown regex flag "+T.charAt(U))
}}return{pattern:V,flags:T}
}function O(U){var T={};
if(z(U,"String")){L.forEach(U,/[^\s,]+/,function(V){T[V]=true
});
return T
}return U
}function s(T){if(!/^[\w$]$/.test(T)){throw new Error("Flag must be a single character A-Za-z0-9_$")
}v[T]=true
}function i(X,U,Y,ab,T){var V=B.length;
var Z=X.charAt(Y);
var ac=null;
var W;
var aa;
while(V--){aa=B[V];
if((aa.leadChar&&aa.leadChar!==Z)||(aa.scope!==ab&&aa.scope!=="all")||(aa.flag&&U.indexOf(aa.flag)===-1)){continue
}W=L.exec(X,aa.regex,Y,"sticky");
if(W){ac={matchLength:W[0].length,output:aa.handler.call(T,W,ab,U),reparse:aa.reparse};
break
}}return ac
}function N(T){m.astral=T
}function H(T){RegExp.prototype.exec=(T?q:I).exec;
RegExp.prototype.test=(T?q:I).test;
String.prototype.match=(T?q:I).match;
String.prototype.replace=(T?q:I).replace;
String.prototype.split=(T?q:I).split;
m.natives=T
}function A(T){if(T==null){throw new TypeError("Cannot convert null or undefined to object")
}return T
}function L(Y,V){if(L.isRegExp(Y)){if(V!==undefined){throw new TypeError("Cannot supply flags when copying a RegExp")
}return x(Y)
}Y=Y===undefined?"":String(Y);
V=V===undefined?"":String(V);
if(L.isInstalled("astral")&&V.indexOf("A")===-1){V+="A"
}if(!l[Y]){l[Y]={}
}if(!l[Y][V]){var T={hasNamedCapture:false,captureNames:[]};
var ad=o;
var U="";
var ab=0;
var ae;
var X=P(Y,V);
var aa=X.pattern;
var ac=X.flags;
while(ab<aa.length){do{ae=i(aa,ac,ab,ad,T);
if(ae&&ae.reparse){aa=aa.slice(0,ab)+ae.output+aa.slice(ab+ae.matchLength)
}}while(ae&&ae.reparse);
if(ae){U+=ae.output;
ab+=(ae.matchLength||1)
}else{var W=L.exec(aa,f[ad],ab,"sticky")[0];
U+=W;
ab+=W.length;
if(W==="["&&ad===o){ad=p
}else{if(W==="]"&&ad===p){ad=o
}}}}l[Y][V]={pattern:I.replace.call(U,/(?:\(\?:\))+/g,"(?:)"),flags:I.replace.call(ac,/[^gimuy]+/g,""),captures:T.hasNamedCapture?T.captureNames:null}
}var Z=l[Y][V];
return t(new RegExp(Z.pattern,Z.flags),Z.captures,Y,V)
}L.prototype=new RegExp();
L.version="3.2.0";
L._clipDuplicates=D;
L._hasNativeFlag=S;
L._dec=w;
L._hex=F;
L._pad4=y;
L.addToken=function(X,W,U){U=U||{};
var T=U.optionalFlags;
var V;
if(U.flag){s(U.flag)
}if(T){T=I.split.call(T,"");
for(V=0;
V<T.length;
++V){s(T[V])
}}B.push({regex:x(X,{addG:true,addY:R,isInternalOnly:true}),handler:W,scope:U.scope||o,flag:U.flag,reparse:U.reparse,leadChar:U.leadChar});
L.cache.flush("patterns")
};
L.cache=function(U,T){if(!Q[U]){Q[U]={}
}return Q[U][T]||(Q[U][T]=L(U,T))
};
L.cache.flush=function(T){if(T==="patterns"){l={}
}else{Q={}
}};
L.escape=function(T){return I.replace.call(A(T),/[-\[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
};
L.exec=function(X,Z,Y,ab){var W="g";
var aa=false;
var T=false;
var V;
var U;
aa=R&&!!(ab||(Z.sticky&&ab!==false));
if(aa){W+="y"
}else{if(ab){T=true;
W+="FakeY"
}}Z[M]=Z[M]||{};
U=Z[M][W]||(Z[M][W]=x(Z,{addG:true,addY:aa,source:T?Z.source+"|()":undefined,removeY:ab===false,isInternalOnly:true}));
Y=Y||0;
U.lastIndex=Y;
V=q.exec.call(U,X);
if(T&&V&&V.pop()===""){V=null
}if(Z.global){Z.lastIndex=V?U.lastIndex:0
}return V
};
L.forEach=function(W,V,Y){var X=0;
var U=-1;
var T;
while((T=L.exec(W,V,X))){Y(T,++U,W,V);
X=T.index+(T[0].length||1)
}};
L.globalize=function(T){return x(T,{addG:true})
};
L.install=function(T){T=O(T);
if(!m.astral&&T.astral){N(true)
}if(!m.natives&&T.natives){H(true)
}};
L.isInstalled=function(T){return !!(m[T])
};
L.isRegExp=function(T){return k.call(T)==="[object RegExp]"
};
L.match=function(Z,X,V){var W=(X.global&&V!=="one")||V==="all";
var Y=((W?"g":"")+(X.sticky?"y":""))||"noGY";
var T;
var U;
X[M]=X[M]||{};
U=X[M][Y]||(X[M][Y]=x(X,{addG:!!W,removeG:V==="one",isInternalOnly:true}));
T=I.match.call(A(Z),U);
if(X.global){X.lastIndex=((V==="one"&&T)?(T.index+T[0].length):0)
}return W?(T||[]):(T&&T[0])
};
L.matchChain=function(U,T){return(function V(W,ab){var Z=T[ab].regex?T[ab]:{regex:T[ab]};
var aa=[];
function X(ac){if(Z.backref){if(!(ac.hasOwnProperty(Z.backref)||+Z.backref<ac.length)){throw new ReferenceError("Backreference to undefined group: "+Z.backref)
}aa.push(ac[Z.backref]||"")
}else{aa.push(ac[0])
}}for(var Y=0;
Y<W.length;
++Y){L.forEach(W[Y],Z.regex,X)
}return((ab===T.length-1)||!aa.length)?aa:V(aa,ab+1)
}([U],0))
};
L.replace=function(W,ab,U,Z){var X=L.isRegExp(ab);
var T=(ab.global&&Z!=="one")||Z==="all";
var V=((T?"g":"")+(ab.sticky?"y":""))||"noGY";
var Y=ab;
var aa;
if(X){ab[M]=ab[M]||{};
Y=ab[M][V]||(ab[M][V]=x(ab,{addG:!!T,removeG:Z==="one",isInternalOnly:true}))
}else{if(T){Y=new RegExp(L.escape(String(ab)),"g")
}}aa=q.replace.call(A(W),Y,U);
if(X&&ab.global){ab.lastIndex=0
}return aa
};
L.replaceEach=function(W,U){var T;
var V;
for(T=0;
T<U.length;
++T){V=U[T];
W=L.replace(W,V[0],V[1],V[2])
}return W
};
L.split=function(V,U,T){return q.split.call(A(V),U,T)
};
L.test=function(V,T,W,U){return !!L.exec(V,T,W,U)
};
L.uninstall=function(T){T=O(T);
if(m.astral&&T.astral){N(false)
}if(m.natives&&T.natives){H(false)
}};
L.union=function(U,W,af){af=af||{};
var T=af.conjunction||"or";
var Z=0;
var ac;
var ad;
function ae(ah,ai,aj){var ag=ad[Z-ac];
if(ai){++Z;
if(ag){return"(?<"+ag+">"
}}else{if(aj){return"\\"+(+aj+ac)
}}return ah
}if(!(z(U,"Array")&&U.length)){throw new TypeError("Must provide a nonempty array of patterns to merge")
}var X=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
var V=[];
var ab;
for(var Y=0;
Y<U.length;
++Y){ab=U[Y];
if(L.isRegExp(ab)){ac=Z;
ad=(ab[M]&&ab[M].captureNames)||[];
V.push(I.replace.call(L(ab.source).source,X,ae))
}else{V.push(L.escape(ab))
}}var aa=T==="none"?"":"|";
return L(V.join(aa),W)
};
q.exec=function(Y){var T=this.lastIndex;
var W=I.exec.apply(this,arguments);
var V;
var U;
var X;
if(W){if(!r&&W.length>1&&u(W,"")>-1){U=x(this,{removeG:true,isInternalOnly:true});
I.replace.call(String(Y).slice(W.index),U,function(){var Z=arguments.length;
var aa;
for(aa=1;
aa<Z-2;
++aa){if(arguments[aa]===undefined){W[aa]=undefined
}}})
}if(this[M]&&this[M].captureNames){for(X=1;
X<W.length;
++X){V=this[M].captureNames[X-1];
if(V){W[V]=W[X]
}}}if(this.global&&!W[0].length&&(this.lastIndex>W.index)){this.lastIndex=W.index
}}if(!this.global){this.lastIndex=T
}return W
};
q.test=function(T){return !!q.exec.call(this,T)
};
q.match=function(U){var T;
if(!L.isRegExp(U)){U=new RegExp(U)
}else{if(U.global){T=I.match.apply(this,arguments);
U.lastIndex=0;
return T
}}return q.exec.call(U,A(this))
};
q.replace=function(W,X){var Y=L.isRegExp(W);
var U;
var V;
var T;
if(Y){if(W[M]){V=W[M].captureNames
}U=W.lastIndex
}else{W+=""
}if(z(X,"Function")){T=I.replace.call(String(this),W,function(){var Z=arguments;
var aa;
if(V){Z[0]=new String(Z[0]);
for(aa=0;
aa<V.length;
++aa){if(V[aa]){Z[0][V[aa]]=Z[aa+1]
}}}if(Y&&W.global){W.lastIndex=Z[Z.length-2]+Z[0].length
}return X.apply(undefined,Z)
})
}else{T=I.replace.call(this==null?this:String(this),W,function(){var Z=arguments;
return I.replace.call(String(X),E,function(ab,aa,ad){var ac;
if(aa){ac=+aa;
if(ac<=Z.length-3){return Z[ac]||""
}ac=V?u(V,aa):-1;
if(ac<0){throw new SyntaxError("Backreference to undefined group "+ab)
}return Z[ac+1]||""
}if(ad==="$"){return"$"
}if(ad==="&"||+ad===0){return Z[0]
}if(ad==="`"){return Z[Z.length-1].slice(0,Z[Z.length-2])
}if(ad==="'"){return Z[Z.length-1].slice(Z[Z.length-2]+Z[0].length)
}ad=+ad;
if(!isNaN(ad)){if(ad>Z.length-3){throw new SyntaxError("Backreference to undefined group "+ab)
}return Z[ad]||""
}throw new SyntaxError("Invalid token "+ab)
})
})
}if(Y){if(W.global){W.lastIndex=0
}else{W.lastIndex=U
}}return T
};
q.split=function(X,U){if(!L.isRegExp(X)){return I.split.apply(this,arguments)
}var Z=String(this);
var W=[];
var T=X.lastIndex;
var Y=0;
var V;
U=(U===undefined?-1:U)>>>0;
L.forEach(Z,X,function(aa){if((aa.index+aa[0].length)>Y){W.push(Z.slice(Y,aa.index));
if(aa.length>1&&aa.index<Z.length){Array.prototype.push.apply(W,aa.slice(1))
}V=aa[0].length;
Y=aa.index+V
}});
if(Y===Z.length){if(!I.test.call(X,"")||V){W.push("")
}}else{W.push(Z.slice(Y))
}X.lastIndex=T;
return W.length>U?W.slice(0,U):W
};
L.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,function(T,U){if(T[1]==="B"&&U===o){return T[0]
}throw new SyntaxError("Invalid escape "+T[0])
},{scope:"all",leadChar:"\\"});
L.addToken(/\\u{([\dA-Fa-f]+)}/,function(U,V,T){var W=w(U[1]);
if(W>1114111){throw new SyntaxError("Invalid Unicode code point "+U[0])
}if(W<=65535){return"\\u"+y(F(W))
}if(e&&T.indexOf("u")>-1){return U[0]
}throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")
},{scope:"all",leadChar:"\\"});
L.addToken(/\[(\^?)\]/,function(T){return T[1]?"[\\s\\S]":"\\b\\B"
},{leadChar:"["});
L.addToken(/\(\?#[^)]*\)/,G,{leadChar:"("});
L.addToken(/\s+|#[^\n]*\n?/,G,{flag:"x"});
L.addToken(/\./,function(){return"[\\s\\S]"
},{flag:"s",leadChar:"."});
L.addToken(/\\k<([\w$]+)>/,function(U){var T=isNaN(U[1])?(u(this.captureNames,U[1])+1):+U[1];
var V=U.index+U[0].length;
if(!T||T>this.captureNames.length){throw new SyntaxError("Backreference to undefined group "+U[0])
}return"\\"+T+(V===U.input.length||isNaN(U.input.charAt(V))?"":"(?:)")
},{leadChar:"\\"});
L.addToken(/\\(\d+)/,function(T,U){if(!(U===o&&/^[1-9]/.test(T[1])&&+T[1]<=this.captureNames.length)&&T[1]!=="0"){throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+T[0])
}return T[0]
},{scope:"all",leadChar:"\\"});
L.addToken(/\(\?P?<([\w$]+)>/,function(T){if(!isNaN(T[1])){throw new SyntaxError("Cannot use integer as capture name "+T[0])
}if(T[1]==="length"||T[1]==="__proto__"){throw new SyntaxError("Cannot use reserved word as capture name "+T[0])
}if(u(this.captureNames,T[1])>-1){throw new SyntaxError("Cannot use same name for multiple groups "+T[0])
}this.captureNames.push(T[1]);
this.hasNamedCapture=true;
return"("
},{leadChar:"("});
L.addToken(/\((?!\?)/,function(U,V,T){if(T.indexOf("n")>-1){return"(?:"
}this.captureNames.push(null);
return"("
},{optionalFlags:"n",leadChar:"("});
h.exports=L
},{}]},{},[8])(8)
});