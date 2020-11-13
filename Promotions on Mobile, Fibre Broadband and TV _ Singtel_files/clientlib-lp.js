window.lpTag=window.lpTag||{};
if(typeof window.lpTag._tagCount==="undefined"){window.lpTag={site:window.lpSiteId||"",section:lpTag.section||"",autoStart:lpTag.autoStart===false?false:true,ovr:lpTag.ovr||{},_v:"1.6.0",_tagCount:1,protocol:"https:",events:{bind:function(c,b,a){lpTag.defer(function(){lpTag.events.bind(c,b,a)
},0)
},trigger:function(c,b,a){lpTag.defer(function(){lpTag.events.trigger(c,b,a)
},1)
}},defer:function(b,a){if(a==0){this._defB=this._defB||[];
this._defB.push(b)
}else{if(a==1){this._defT=this._defT||[];
this._defT.push(b)
}else{this._defL=this._defL||[];
this._defL.push(b)
}}},load:function(c,b,d){var a=this;
setTimeout(function(){a._load(c,b,d)
},0)
},_load:function(d,c,e){var a=d;
if(!d){a=this.protocol+"//"+((this.ovr&&this.ovr.domain)?this.ovr.domain:"lptag.liveperson.net")+"/tag/tag.js?site="+this.site
}var b=document.createElement("script");
b.setAttribute("charset",c?c:"UTF-8");
if(e){b.setAttribute("id",e)
}b.setAttribute("src",a);
document.getElementsByTagName("head").item(0).appendChild(b)
},init:function(){this._timing=this._timing||{};
this._timing.start=(new Date()).getTime();
var a=this;
if(window.attachEvent){window.attachEvent("onload",function(){a._domReady("domReady")
})
}else{window.addEventListener("DOMContentLoaded",function(){a._domReady("contReady")
},false);
window.addEventListener("load",function(){a._domReady("domReady")
},false)
}if(typeof(window._lptStop)=="undefined"){this.load()
}},start:function(){this.autoStart=true
},_domReady:function(a){if(!this.isDom){this.isDom=true;
this.events.trigger("LPT","DOM_READY",{t:a})
}this._timing[a]=(new Date()).getTime()
},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],ev:lpTag.ev||[]};
lpTag.init()
}else{window.lpTag._tagCount+=1
}lpTag.events.bind("ChatAPIV3","state",function(a,b){});
lpTag.events.bind("ChatAPIV3","chatting",function(a,b){});
lpTag.events.bind("LP_OFFERS","OFFER_DISPLAY",function(a,b){});
lpTag.events.bind("LP_OFFERS","OFFER_IMPRESSION",function(a,b){window.lpSpringDigital=window.lpSpringDigital||{};
if(a.engagementId===parseInt(window.lp_EngagementId)){if(a&&a.state===0){window.lpSpringDigital.state="busy"
}else{if(a&&a.state===1){window.lpSpringDigital.state="online"
}else{if(a&&a.state===2){window.lpSpringDigital.state="offline"
}}}}});
lpTag.events.bind("LP_OFFERS","OFFER_CLICK",function(a,b){window.lpChatWindow.showLPChatWindow=false;
if(a.engagementType=="4"){}if(a.engagementId=="123456789"){}});
lpTag.events.bind("LP_OFFERS","OFFER_CLOSED",function(a,b){});
lpTag.events.bind("LP_OFFERS","OFFER_TIMEOUT",function(a,b){});
lpTag.events.bind("lpUnifiedWindow","windowClosed",function(){window.lpChatWindow.showLPChatWindow=true
});
var lastAskedQuestion;
var lastResponseId;
var globalQuestion="";
var SubmitQuestionToIr;
jQuery(function(e){var b=1;
var a=window.location.hostname;
var f=-1;
function d(){var g="3";
if(e.cookie("InterfaceId")){g=e.cookie("InterfaceId")
}else{if(e("#hdnIrInterfaceId").val()!=null){g=e("#hdnIrInterfaceId").val()
}}return"//singtel.intelliresponse.com/springd/"
}function c(g){g=g.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var i=new RegExp("[\\?&]"+g+"=([^&#]*)"),h=i.exec(location.search);
return h===null?"":h[1].replace(/\+/g," ")
}SubmitQuestionToIr=function(g,m){var l=3;
var n=-1;
if(e.cookie("ChatSessionId")){n=e.cookie("ChatSessionId")
}else{if(c("sessionId")!=""){n=c("sessionId")
}}if(e.cookie("InterfaceId")){l=e.cookie("InterfaceId")
}else{if(e("#hdnIrInterfaceId").val()!=null){l=e("#hdnIrInterfaceId").val();
e.cookie("InterfaceId",l,{domain:a})
}}var h=globalQuestion.replace(/\"/g,'\\"');
var k='{ "questionObject": { "requestType": "'+g+'","source":'+m+',"interfaceID":'+l+',"sessionID":"'+n+'","responseID":'+f+',"question": "'+h+'"} }';
if(document.getElementById("ChatWindow")){document.getElementById("ChatWindow").contentWindow.postMessage(k,"*")
}else{if(window.shadowList){for(var j in window.shadowList){if(window.shadowList[j].querySelector("#ChatWindow")){window.shadowList[j].querySelector("#ChatWindow").contentWindow.postMessage(k,"*")
}}}}b=0
};
e(document).ready(function(){e.cookie.defaults.path="/";
var i=window.addEventListener?"addEventListener":"attachEvent";
var h=window[i];
var g=i=="attachEvent"?"onmessage":"message";
h(g,function(p){var m=p.message?"message":"data";
var o=p[m];
if(o!==null&&typeof o==="string"){var j=o.split("||");
if(j[0]==="lpcode"){lpTag.taglets.rendererStub.click(j[1],{preChatLines:[lastAskedQuestion]})
}else{if(j[0]==="247Command"){switch(j[1]){case"ListenerActive":if(b&&location.search.length>0){var n=c("source");
globalQuestion=c("question");
f=c("id");
if(n!=""&&globalQuestion!=""&&f!=-1){SubmitQuestionToIr("NormalRequest",n)
}}break;
case"QuestionData":sentSessionid=j[2];
lastAskedQuestion=decodeURIComponent(j[3]);
lastResponseId=j[4];
chatflag=j[5];
var k=new Date();
var l=30;
k.setTime(k.getTime()+(l*60*1000));
e.cookie("ChatSessionId",sentSessionid,{expires:k,domain:a});
if(lastAskedQuestion!==undefined&&lastAskedQuestion!==null&&lastAskedQuestion!=="Example: what are the current plans"){window.parent.lpTag.sdes.push({type:"lead",lead:{topic:lastAskedQuestion}})
}break;
case"MinimizeVA":break;
case"LinkClikedVA":break
}}}}},false);
if(e.cookie("ChatSessionId")===null||e.cookie("ChatSessionId")===undefined){setTimeout(function(){SubmitQuestionToIr("InitialRequest",1)
},5000)
}})
});