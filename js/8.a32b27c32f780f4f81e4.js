webpackJsonp([8],{157:function(t,a,s){"use strict";function o(t){s(277)}Object.defineProperty(a,"__esModule",{value:!0});var r=s(279),c=s(280),e=s(12),i=o,n=e(r.a,c.a,!1,i,"data-v-31b91a62",null);a.default=n.exports},164:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AgMAAABHkjHhAAAADFBMVEW3t72zs7q4uL66usDztsWmAAAAgUlEQVR4AV3HoZUCAQxF0TWLob6JSQeY3xclYNIXJpzDMOK96+7fz//xVXrr0Yev5VuPPnwt33r04Wv51qMPX8u3Hn34Wr716MPX8q1HH/62/P36cXo8T9dffL351qMPX8u3Hn34Wr716MPX8q1HH76Wbz368LV869GHr+Vbjz78B9UMtIcMXHm1AAAAAElFTkSuQmCC"},277:function(t,a,s){var o=s(278);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(139)("60a14210",o,!0)},278:function(t,a,s){a=t.exports=s(138)(void 0),a.push([t.i,".maps[data-v-31b91a62],.r-btn[data-v-31b91a62]{background-color:rgba(197,7,7,.8);color:#fff}.maps[data-v-31b91a62]{margin-bottom:1rem}.route[data-v-31b91a62]{border:5px solid #000}.routes[data-v-31b91a62]{background-image:url("+s(164)+")}.promo[data-v-31b91a62]{text-shadow:6px 6px 0 rgba(0,0,0,.2)}",""])},279:function(t,a,s){"use strict";var o=s(2);a.a={name:"About",data:function(){return{}},components:{QLayout:o.s,QCard:o.d,QCardMain:o.f,QCardMedia:o.g,QCardTitle:o.i,QCardSeparator:o.h,QCardActions:o.e,QBtn:o.c,QTransition:o.E,QParallax:o.w},computed:{routes:function(){return this.$store.state.routes}},methods:{launch:function(t){Object(o.K)(t)}}}},280:function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{staticClass:"routes black"},[s("div",{staticClass:"row wrap justify-center "},[s("div",{staticClass:"promo text-center text-italic text-bold desktop-only col-xs-12"},[s("q-card-media",{staticClass:"header",attrs:{"overlay-position":"full"}},[s("img",{staticClass:"responsive",attrs:{src:"statics/road.jpg",alt:"picture"}}),t._v(" "),s("q-card-title",{staticClass:"text-center",attrs:{slot:"overlay"},slot:"overlay"},[s("h2",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1)],1)],1),t._v(" "),s("div",{staticClass:"promo text-center text-italic text-bold mobile-only col-xs-12"},[s("q-parallax",{attrs:{src:"statics/road.jpg",height:200}},[s("div",{attrs:{slot:"loading"},slot:"loading"},[s("h4",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1),t._v(" "),s("h4",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1)],1)]),t._v(" "),s("div",{staticClass:"row wrap justify-center"},t._l(t.routes,function(a){return s("q-card",{staticClass:"route col-xs-11 col-sm-5 shadow-24"},[s("div",[s("q-card-media",[s("img",{attrs:{src:a.pic}})]),t._v(" "),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"r-btn",attrs:{"no-caps":""},on:{click:function(s){t.$router.push(""+a.url)}}},[t._v(t._s(a.length)+" Route Map")])],1)],1)])}))])},r=[],c={render:o,staticRenderFns:r};a.a=c}});