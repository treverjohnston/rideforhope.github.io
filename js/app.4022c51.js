(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(t,e,o){t.exports=o("LzkT")},"6N+0":function(t,e){},"A0++":function(t,e,o){"use strict";var n=o("TOJS"),a=o.n(n);a.a},B7yd:function(t,e){},Dl0a:function(t,e){},Hl11:function(t,e,o){},LzkT:function(t,e,o){"use strict";o.r(e);var n={};o.r(n),o.d(n,"setLoginStatus",function(){return nt});var a={};o.r(a),o.d(a,"getAuth",function(){return mt}),o.d(a,"createAccount",function(){return dt}),o.d(a,"login",function(){return ft}),o.d(a,"logout",function(){return pt});var r={};o.r(r),o.d(r,"setItems",function(){return bt}),o.d(r,"sortItems",function(){return wt}),o.d(r,"sortItemsRange",function(){return yt});var i={};o.r(i),o.d(i,"submitEntry",function(){return kt}),o.d(i,"getItems",function(){return St}),o.d(i,"deleteItem",function(){return Ct}),o.d(i,"editEntry",function(){return Ut});o("rGqo"),o("SpHO"),o("oRQL"),o("0UuB"),o("FiUO"),o("Hl11"),o("fm0S");var c=o("Kw5r"),s=o("6E/o"),u=o("cFFF"),l=o("IEC1"),m=o("zxLP"),d=o("Rqni"),f=o("MqH6"),p=o("8wy3"),h=o("zmdN"),g=o("SC7v"),v=o("UrUt"),b=o("EYBb"),w=o("HlXa"),y=o("UG+o"),I=o("uNnR"),Q=o("fUOT"),L=o("lBN4"),k=o("xWPs"),S=o("23sU"),C=o("eelU"),U=o("XYut"),N=o("dkar"),R=o("ZYCo"),F=o("OggR"),T=o("3CNK"),x=o("MFSH"),H=o("bduK"),E=o("CVJq"),M=o("Jik4"),q=o("/k9t"),z=o("lhL4"),O=o("RIeW"),A=o("FSbK"),J=o("h6bs"),P=o("Ezub");c["a"].use(s["a"],{config:{},components:{QLayout:u["a"],QLayoutHeader:l["a"],QLayoutDrawer:m["a"],QPageContainer:d["a"],QPage:f["a"],QToolbar:p["a"],QToolbarTitle:h["a"],QBtn:g["a"],QIcon:v["a"],QList:b["a"],QListHeader:w["a"],QItem:y["a"],QItemMain:I["a"],QItemSide:Q["a"],QRouteTab:L["a"],QTabs:k["a"],QTab:S["a"],QField:C["a"],QInput:U["a"],QCard:N["a"],QCardTitle:R["a"],QCardMain:F["a"],QCardMedia:T["a"],QCardSeparator:x["a"],QCardActions:H["a"],QModal:E["a"],QJumbotron:M["a"],QRange:q["a"],QParallax:z["a"],QLayoutFooter:O["a"]},directives:{Ripple:A["a"],ScrollFire:J["a"]},plugins:{Notify:P["a"]}});var B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},K=[];B._withStripped=!0;var _={name:"App"},D=_,j=(o("A0++"),o("KHd+")),W=Object(j["a"])(D,B,K,!1,null,null,null);W.options.__file="App.vue";var G=W.exports,V=o("L2JU"),Y={tabs:[{name:"Items",link:"/items"}]},Z=o("QUHw"),$=o("B7yd"),X=o("taL5"),tt={namespaced:!0,state:Y,getters:Z,mutations:$,actions:X},et={loggedIn:!1},ot=o("6N+0");function nt(t,e){t.loggedIn=e}o("f3/d"),o("Z2Ku"),o("L9s1");var at=o("GUC0"),rt=o.n(at),it=o("vDqi"),ct=o.n(it),st=!window.location.host.includes("localhost"),ut=st?"//quick-gifter.herokuapp.com/":"//localhost:3000/",lt=ct.a.create({baseURL:ut,timeout:4e3,withCredentials:!0});function mt(t){var e=t.commit;t.dispatch;lt("authenticate").then(function(t){null==t.data.data?(console.log("failed login"),console.log(t)):null!==t.data.data._id?(console.log("successful login"),e("setLoginStatus",!0)):console.log("login failed")}).catch(function(t){})}function dt(t,e){var o=t.commit;t.dispatch;lt.post("register",e).then(function(t){"Successfully created user account"==t.data.message?(o("setLoginStatus",!0),rt()({title:"Account Created",timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){rt()({title:t,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")})})):console.log("Could not login"),console.log(t)})}function ft(t,e){var o=t.commit;t.dispatch;lt.post("login",e).then(function(t){o("setLoginStatus",!0),rt()({title:"Logged in as",text:t.data.data.name,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)}),console.log(t)}).catch(function(t){console.log(t)})}function pt(t){var e=t.commit;t.dispatch;lt.delete("logout").then(function(t){e("setLoginStatus",!1),rt()({title:t.data.message,timer:2e3}).then(function(){},function(t){"timer"===t&&console.log("I was closed by the timer")}).catch(function(t){console.log(t)})}).catch(function(t){})}var ht={namespaced:!0,state:et,getters:ot,mutations:n,actions:a},gt={items:[],allItems:[],sort:[5,10,25,50,100],sortNum:100,sortNumMin:0,ideals:[{title:"Responsive Design - Cross Platform",body:"We make websites that look great no matter the platform.  If you have a separate mobile and desktop site (ew), or your website doesn't look good on all screens, we'll help you out.",icon:"statics/responsive.png"},{title:"Modern Look and Feel",body:"If your website looks like it's caught in the 90's (or 2010's) we'll bring it up to snuff.",icon:"statics/modern.png"},{title:"Small Workload - Large Dedication",body:"We are purposefully selective about the amount of projects we take on at a time. This ensures that we can dedicate as much time as needed on your project to make it better than you ever hoped for.",icon:"statics/focus.png"}],projects:[{url:"//www.rideforhopeidaho.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827870/ebenezer/rfh.png",imgMob:"//res.cloudinary.com/treverscloud/image/upload/v1544409839/ebenezer/rfhmob.png",title:"Ride For Hope Idaho"},{url:"//www.unorthodoxgifts.com",img:"//res.cloudinary.com/treverscloud/image/upload/v1542827874/ebenezer/ug.png",imgMob:"//res.cloudinary.com/treverscloud/image/upload/v1544409839/ebenezer/ugmob.png",title:"Unorthodox Gifts"}]},vt=o("Dl0a");function bt(t,e){t.items=e,t.allItems=e,t.sortNum>0&&wt(t,t.sortNum)}function wt(t,e){t.sortNum=e;var o=[];if(t.allItems!=[]){for(var n in t.allItems)if(t.allItems.hasOwnProperty(n)){var a=t.allItems[n].cost,r=parseFloat(a);r<=e&&o.push(t.allItems[n])}t.items=o}}function yt(t,e){t.sortNum=e.max,t.sortNumMin=e.min;var o=[];if(t.allItems!=[]){for(var n in t.allItems)if(t.allItems.hasOwnProperty(n)){var a=t.allItems[n].cost,r=parseFloat(a);r<=e.max&&r>=e.min&&o.push(t.allItems[n])}t.items=o}}o("EVdn");var It=!window.location.host.includes("localhost"),Qt=It?"//quick-gifter.herokuapp.com/":"//localhost:3000/",Lt=ct.a.create({baseURL:Qt+"api/",timeout:4e3,withCredentials:!0});function kt(t,e){t.commit,t.dispatch;Lt.post("items",e).then(function(t){console.log("res",t)}).catch(function(t){console.error("eerrrroror",t)})}function St(t){var e=t.commit;t.dispatch;Lt("items").then(function(t){e("setItems",t.data.data)}).catch(function(t){console.log("eerrrroror",t)})}function Ct(t,e){t.commit;var o=t.dispatch;Lt.delete("items/".concat(e)).then(function(t){console.log("delete",t),o("getItems")}).catch(function(t){console.error(t)})}function Ut(t,e){t.commit;var o=t.dispatch;Lt.put("items/".concat(e._id),e).then(function(t){o("getItems")}).catch(function(t){console.error(t)})}var Nt={namespaced:!0,state:gt,getters:vt,mutations:r,actions:i};c["a"].use(V["a"]);var Rt=function(){var t=new V["a"].Store({modules:{tabs:tt,auth:ht,items:Nt}});return t},Ft=o("jE9Z"),Tt=[{path:"/",component:function(){return o.e(2).then(o.bind(null,"8kEK"))},children:[{path:"",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/about",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/work",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}},{path:"/contact",component:function(){return o.e(0).then(o.bind(null,"iyQ6"))}}]}];Tt.push({path:"*",component:function(){return o.e(3).then(o.bind(null,"5R6h"))}});var xt=Tt;c["a"].use(Ft["a"]);var Ht=function(){var t=new Ft["a"]({scrollBehavior:function(){return{y:0}},routes:xt,mode:"hash",base:""});return t},Et=function(){var t="function"===typeof Rt?Rt():Rt,e="function"===typeof Ht?Ht({store:t}):Ht;t.$router=e;var o={el:"#q-app",router:e,store:t,render:function(t){return t(G)}};return{app:o,store:t,router:e}},Mt=function(t){var e=t.Vue;e.prototype.$axios=ct.a},qt=Et(),zt=qt.app,Ot=qt.store,At=qt.router;[Mt].forEach(function(t){t({app:zt,router:At,store:Ot,Vue:c["a"],ssrContext:null})}),new c["a"](zt)},QUHw:function(t,e){},TOJS:function(t,e,o){},fm0S:function(t,e,o){},taL5:function(t,e){}},[[0,5,4]]]);