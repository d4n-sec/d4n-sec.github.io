!function(e){function t(t){for(var a,o,l=t[0],c=t[1],d=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);p.length;)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="D:\\Users\\Dan\\Code\\JS\\jsDiffWeb\\dist";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=c;i.push([163,1]),n()}({163:function(e,t,n){e.exports=n(339)},174:function(e,t,n){},19:function(e,t,n){e.exports={color:"index__color--2ojbV",normal:"index__normal--3xN0k",add:"index__add--3fp2b",removed:"index__removed--18dBy",pre:"index__pre--3eDFa",button:"index__button--2J6G4",content:"index__content--3DNR8",outerPre:"index__outerPre--1Pone",spanWidth:"index__spanWidth--125bf",innerPre:"index__innerPre--1_Bab",line:"index__line--1sUEl",colLeft:"index__colLeft--2F2iS",splitWidth:"index__splitWidth--jvhC7",collRight:"index__collRight--2OaKg",collRightSplit:"index__collRightSplit--2H9r-",colRContent:"index__colRContent--3gXOP",octicon:"index__octicon--2VVw1",arrow:"index__arrow--1FWUj",cRHeight:"index__cRHeight--1pHdx",sPart:"index__sPart--1V1XW",iBlock:"index__iBlock--3k0eW",prBlock:"index__prBlock--N52o_",splitLN:"index__splitLN--2ci2A",splitCon:"index__splitCon--15tpv",filled:"index__filled--23P9T",radioGroup:"index__radioGroup--2E-ih",lBorder:"index__lBorder--2ClWV",rBorder:"index__rBorder--3Sx6H"}},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),o=n.n(i),l=(n(168),n(94)),c=n.n(l),d=n(40),s=n.n(d),u=n(41),p=n.n(u),h=n(42),f=n.n(h),v=n(35),m=n.n(v),g=n(43),y=n.n(g),_=n(12),E=n.n(_),C=(n(114),n(64)),x=n.n(C),P=(n(174),n(4)),b=n.n(P),k=(n(175),n(93)),N=n.n(k),w=n(19),B=n.n(w);function S(e,t,n){return t=m()(t),f()(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],m()(e).constructor):t.apply(e,n))}var W=x.a.Content,R=0,T=1,A=function(e){function t(){var e;s()(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=S(this,t,[].concat(a)),E()(e,"state",{lineGroup:[],showType:T}),E()(e,"flashContent",(function(t){if("string"!=typeof(t||e.props.diffArr)){var n=(t||e.props.diffArr).map((function(t,n,a){var r,i,o,l,c;e.props.isFile?(i="+"===t[0],o="-"===t[0],l=t.slice(1),c=1):(i=t.added,o=t.removed,l=t.value,c=t.count);var d,s,u,p=(null===(r=l)||void 0===r?void 0:r.split("\n").filter((function(e){return e})))||[],h=(i?"+":o&&"-")||" ";if(" "!==h)s=[],u=[],d=p;else{var f=p.length;f<=10?(s=[],u=[],d=p):(d=p.slice(0,5),s=p.slice(5,f-5),u=p.slice(f-5))}return{type:h,count:c,content:{hidden:s,head:d,tail:u}}})),a=1,r=1;n.forEach((function(e){var t=e.type,n=e.count;e.leftPos=a,e.rightPos=r,a+="+"===t?0:n,r+="-"===t?0:n})),e.setState({lineGroup:n})}})),E()(e,"openBlock",(function(t,n){var a=e.state.lineGroup.slice(),r=a[n],i=r.content,o=i.head,l=i.tail,c=i.hidden;if("head"===t)r.content.head=o.concat(c.slice(0,5)),r.content.hidden=c.slice(5);else if("tail"===t){var d=c.length;r.content.tail=c.slice(d-5).concat(l),r.content.hidden=c.slice(0,d-5)}else r.content.head=o.concat(c),r.content.hidden=[];a[n]=r,e.setState({lineGroup:a})})),E()(e,"getHiddenBtn",(function(t,n){var a=t.length<10;return r.a.createElement("div",{key:"collapse",className:B.a.cutWrapper},r.a.createElement("div",{className:b()(B.a.colLeft,e.isSplit?B.a.splitWidth:"")},a?r.a.createElement("div",{className:B.a.arrow,onClick:e.openBlock.bind(e,"all",n)},r.a.createElement("svg",{className:B.a.octicon,viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.arrow,onClick:e.openBlock.bind(e,"head",n)},r.a.createElement("svg",{className:B.a.octicon,viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8.177 14.323l2.896-2.896a.25.25 0 00-.177-.427H8.75V7.764a.75.75 0 10-1.5 0V11H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0zM2.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM8.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"}))),r.a.createElement("div",{className:B.a.arrow,onClick:e.openBlock.bind(e,"tail",n)},r.a.createElement("svg",{className:B.a.octicon,viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM13.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zm-3.75.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM7.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4 11.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM1.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"}))))),r.a.createElement("div",{className:b()(B.a.collRight,e.isSplit?B.a.collRightSplit:"")},r.a.createElement("div",{className:b()(B.a.colRContent,a?"":B.a.cRHeight)},"当前隐藏内容:".concat(t.length,"行"))))})),E()(e,"getLineNum",(function(e){return("     "+e).slice(-5)})),E()(e,"paintCode",(function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=t.type,i=t.content,o=i.head,l=i.tail,c=i.hidden,d=t.leftPos,s=t.rightPos,u=" "===a,p=b()(B.a.normal,"+"===a?B.a.add:"","-"===a?B.a.removed:""),h="     ";return(n?o:l).map((function(t,i){var l="";if(u){var f=n?0:o.length+c.length;l=(h+(d+f+i)).slice(-5)+(h+(s+f+i)).slice(-5)}else l="-"===a?e.getLineNum(d+i)+h:h+e.getLineNum(s+i);return r.a.createElement("div",{key:(n?"h-":"t-")+i,className:p},r.a.createElement("pre",{className:b()(B.a.pre,B.a.line)},l),r.a.createElement("div",{className:B.a.outerPre},r.a.createElement("div",{className:B.a.splitCon},r.a.createElement("div",{className:B.a.spanWidth}," "+a+" "),e.getPaddingContent(t,!0))))}))})),E()(e,"getUnifiedRenderContent",(function(){return e.state.lineGroup.map((function(t,n){var a=t.type,i=t.content.hidden,o=" "===a;return r.a.createElement("div",{key:n},e.paintCode(t),i.length&&o&&e.getHiddenBtn(i,n)||null,e.paintCode(t,!1))}))})),E()(e,"getLNPadding",(function(e){var t=("     "+e).slice(-5);return r.a.createElement("div",{className:b()(B.a.splitLN)},t)})),E()(e,"getPaddingContent",(function(e){return r.a.createElement("div",{className:b()(B.a.splitCon)},e)})),E()(e,"getSplitCode",(function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=(t.type,t.content),i=a.head,o=a.hidden,l=a.tail,c=t.leftPos,d=t.rightPos;return(n?i:l).map((function(t,a){var l=n?0:i.length+o.length;return r.a.createElement("div",{key:(n?"h-":"t-")+a},r.a.createElement("div",{className:b()(B.a.iBlock,B.a.lBorder)},e.getLNPadding(c+l+a),e.getPaddingContent("    "+t)),r.a.createElement("div",{className:B.a.iBlock},e.getLNPadding(d+l+a),e.getPaddingContent("    "+t)))}))})),E()(e,"getCombinePart",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.type,i=t.content,o=t.leftPos,l=(t.rightPos,n.type),c=n.content,d=(n.leftPos,n.rightPos),s=(null==i?void 0:i.head)||[],u=(null==c?void 0:c.head)||[],p="+"===a?B.a.add:B.a.removed,h="+"===l?B.a.add:B.a.removed;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b()(B.a.iBlock,B.a.lBorder)},s.map((function(t,n){return r.a.createElement("div",{className:b()(B.a.prBlock,p),key:n},e.getLNPadding(o+n),e.getPaddingContent("-  "+t))}))),r.a.createElement("div",{className:b()(B.a.iBlock,s.length?"":B.a.rBorder)},u.map((function(t,n){return r.a.createElement("div",{className:b()(B.a.prBlock,h),key:n},e.getLNPadding(d+n),e.getPaddingContent("+  "+t))}))))})),E()(e,"getSplitContent",(function(){for(var t=e.state.lineGroup.length,n=[],a=0;a<t;a++){var i=e.state.lineGroup[a],o=i.type,l=i.content.hidden;if(" "===o)n.push(r.a.createElement("div",{key:a},e.getSplitCode(i),l.length&&e.getHiddenBtn(l,a)||null,e.getSplitCode(i,!1)));else if("-"===o){var c=e.state.lineGroup[a+1]||{content:{}},d="+"===c.type;n.push(r.a.createElement("div",{key:a},e.getCombinePart(i,d?c:{}))),d&&(a+=1)}else"+"===o&&n.push(r.a.createElement("div",{key:a},e.getCombinePart({},i)))}return r.a.createElement("div",null,n)})),E()(e,"handleShowTypeChange",(function(t){e.setState({showType:t.target.value})})),e}return y()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.flashContent()}},{key:"componentWillReceiveProps",value:function(e){this.flashContent(e.diffArr)}},{key:"isSplit",get:function(){return this.state.showType===T}},{key:"render",value:function(){var e=this.state.showType;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:B.a.radioGroup},r.a.createElement(N.a.Group,{value:e,size:"small",onChange:this.handleShowTypeChange},r.a.createElement(N.a.Button,{value:T},"Split"),r.a.createElement(N.a.Button,{value:R},"Unified"))),r.a.createElement(W,{className:B.a.content},r.a.createElement("div",{className:B.a.color},this.isSplit?this.getSplitContent():this.getUnifiedRenderContent())))}}])}(r.a.Component),z=(n(141),n(107)),L=n.n(z),M=(n(269),n(109)),O=n.n(M),F=n(14),H=n.n(F),V=n(159),j=n.n(V),D=(n(273),n(161)),G=n.n(D),I=(n(275),n(160)),U=n.n(I),J=n(108),K=n.n(J),X=n(46),q=n.n(X);function Y(e,t,n){return t=m()(t),f()(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],m()(e).constructor):t.apply(e,n))}var Q=n(142),Z=U.a.Item,$=G.a.TextArea,ee={labelCol:{span:4},wrapperCol:{span:20}},te={labelCol:{span:10},wrapperCol:{span:10}},ne=["diffChars","diffWords","diffWordsWithSpace"],ae=["diffLines","diffTrimmedLines","diffSentences","structuredPatch","createTwoFilesPatch"],re=["structuredPatch","createTwoFilesPatch"],ie=function(e){function t(){var e;s()(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=Y(this,t,[].concat(a)),E()(e,"state",{diffArr:[],method:"words"===e.props.type?"diffChars":"diffLines",value1:"words"===e.props.type?"TesT":"",value2:"words"===e.props.type?"smartTesTYeah":""}),E()(e,"getCharDiff",(function(){var t={add:q.a.charAdd,removed:q.a.charRemoved};return r.a.createElement("div",{className:q.a.result},"比较结果:",e.state.diffArr.map((function(e,n){var a=e.value,i=e.added,o=e.removed,l=i?"add":o?"removed":"";return r.a.createElement("span",{key:n,className:b()(t[l],q.a.charPreWrap)},a)})))})),E()(e,"changInput",(function(t,n){e.setState(E()({},0===t?"value1":"value2",n.target.value))})),E()(e,"handleSelectChange",(function(t){e.setState({method:t})})),E()(e,"actDiff",(function(){var t,n=e.state,a=n.value1,r=n.value2,i=n.method;t=e.isFile?"structuredPatch"===i?Q[i]("value1","value2",a,r).hunks[0].lines:Q[i]("value1","value2",a,r):Q[i](a,r),e.setState({diffArr:t})})),E()(e,"changeFile",function(){var t=j()(K.a.mark((function t(n,a){var r,i;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.file,t.next=3,r.originFileObj.text();case 3:i=t.sent,e.setState(E()({},0===n?"value1":"value2",i)),console.log(i);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),e}return y()(t,e),p()(t,[{key:"isWordType",get:function(){return"words"===this.props.type}},{key:"isFile",get:function(){return re.includes(this.state.method)}},{key:"isDirectPatch",get:function(){return"createTwoFilesPatch"===this.state.method}},{key:"componentDidMount",value:function(){this.actDiff()}},{key:"render",value:function(){var e=this.state,t=e.method,n=e.diffArr,a=e.value1,i=e.value2,o=this.isWordType?ne:ae;return r.a.createElement("div",{className:q.a.wrapper},r.a.createElement("div",{className:q.a.inputWrapper},r.a.createElement(Z,H()({},ee,{label:"输入1",className:q.a.input}),r.a.createElement($,{defaultValue:a,onChange:this.changInput.bind(null,0)})),r.a.createElement(Z,H()({},ee,{label:"输入2",className:q.a.input}),r.a.createElement($,{defaultValue:i,onChange:this.changInput.bind(null,1)}))),r.a.createElement("div",{className:q.a.funWrapper},r.a.createElement(Z,H()({},te,{label:"比较方法"}),r.a.createElement(O.a,{defaultValue:t,style:{width:220},onChange:this.handleSelectChange},o.map((function(e,t){return r.a.createElement(O.a.Option,{key:t,value:e},e)})))),r.a.createElement(L.a,{type:"primary",onClick:this.actDiff},"比较")),this.isDirectPatch?r.a.createElement("div",{className:q.a.preWrap},"string"==typeof n?n:""):this.isWordType?this.getCharDiff():r.a.createElement(A,{isFile:this.isFile,diffArr:n}))}}])}(r.a.Component),oe={1111:[1,2,4,5,6],content:{abc:"content"},vvv:{csdf:"ccvvfv"},1113:[1,2,4,5,6],"1111a":[1,2,4,522222,6e3],"1111b":[1,2,4,522222,6e3],1114:[1,2,4,5,6],1116:[1,2,4,5,6],conten2t:{abc:"content"},vvv3:{csdf:"ccvvfv"}},le={1111:[1,2,4,5,7],content:{abc:"content"},vvv:{csdf:"ccvvfv"},1113:[1,2,4,5,6],"1111a":[1,2,4,522222,6e3],"1111b":[1,2,4,522222,6e3],1114:[1,2,4,5,6],1116:[1,2,4,4,6],conten2t:{abc:"content"},vvv3:{csdf:"ccvvfv"}};function ce(e,t,n){return t=m()(t),f()(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],m()(e).constructor):t.apply(e,n))}var de=n(142),se=(x.a.Header,x.a.Content,x.a.Footer),ue="0",pe="1",he="2",fe=function(e){function t(){var e;s()(this,t);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=ce(this,t,[].concat(a)),E()(e,"state",{currentTab:he}),E()(e,"getContent",(function(){return E()(E()(E()({},ue,(function(){var e=de.diffJson(oe,le);return r.a.createElement(A,{diffArr:e})})),pe,(function(){return r.a.createElement(ie,{type:"words"})})),he,(function(){return r.a.createElement("div",null,r.a.createElement(ie,{type:"lines"}))}))[e.state.currentTab]()})),E()(e,"navChange",(function(t){e.setState({currentTab:t.key})})),e}return y()(t,e),p()(t,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(c.a,{onClick:this.navChange,mode:"horizontal",defaultSelectedKeys:[this.state.currentTab]},r.a.createElement(c.a.Item,{key:he},"行内容diff"),r.a.createElement(c.a.Item,{key:pe},"单词diff")),this.getContent(),r.a.createElement(se,{style:{textAlign:"center"}}))}}])}(r.a.Component),ve=document.getElementById("main");o.a.render(r.a.createElement(fe,null),ve)},46:function(e,t,n){e.exports={charAdd:"index__charAdd--2u9EA",charRemoved:"index__charRemoved--2NBzi",wrapper:"index__wrapper--2L7IR",inputWrapper:"index__inputWrapper--2K2KA",input:"index__input--2qmtU",funWrapper:"index__funWrapper--19VTK",result:"index__result--3p5uV",preWrap:"index__preWrap--aXHIE",charPreWrap:"index__charPreWrap--31WOt"}}});