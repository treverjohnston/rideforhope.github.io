webpackJsonp([12],{162:function(t,a,s){"use strict";function o(t){s(307)}Object.defineProperty(a,"__esModule",{value:!0});var c=s(309),i=s(310),r=s(13),e=o,n=r(c.a,i.a,!1,e,"data-v-64401110",null);a.default=n.exports},307:function(t,a,s){var o=s(308);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(141)("1d97c320",o,!0)},308:function(t,a,s){a=t.exports=s(140)(void 0),a.push([t.i,".maps[data-v-64401110],.r-btn[data-v-64401110]{background-color:rgba(197,7,7,.8);color:#fff}.maps[data-v-64401110]{margin-bottom:1rem}.route[data-v-64401110]{border:5px solid #000}.promo[data-v-64401110]{text-shadow:6px 6px 0 rgba(0,0,0,.2)}",""])},309:function(t,a,s){"use strict";var o=s(2);a.a={name:"About",data:function(){return{}},components:{QLayout:o.s,QCard:o.d,QCardMain:o.f,QCardMedia:o.g,QCardTitle:o.i,QCardSeparator:o.h,QCardActions:o.e,QBtn:o.c,QTransition:o.E,QParallax:o.w},computed:{routes:function(){return this.$store.state.routes}},methods:{launch:function(t){Object(o.K)(t)}}}},310:function(t,a,s){"use strict";var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-layout",{staticClass:"routes black"},[s("div",{staticClass:"row wrap justify-center "},[s("div",{staticClass:"promo text-center text-italic text-bold desktop-only col-xs-12"},[s("q-card-media",{staticClass:"header",attrs:{"overlay-position":"full"}},[s("img",{staticClass:"responsive",attrs:{src:"statics/road.jpg",alt:"picture"}}),t._v(" "),s("q-card-title",{staticClass:"text-center",attrs:{slot:"overlay"},slot:"overlay"},[s("h2",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1)],1)],1),t._v(" "),s("div",{staticClass:"promo text-center text-italic text-bold mobile-only col-xs-12"},[s("q-parallax",{attrs:{src:"statics/road.jpg",height:200}},[s("div",{attrs:{slot:"loading"},slot:"loading"},[s("h4",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1),t._v(" "),s("h4",[t._v("2018 Routes")]),t._v(" "),s("q-btn",{staticClass:"maps shadow-24",attrs:{big:"","no-caps":""},on:{click:function(a){t.launch("https://docs.wixstatic.com/ugd/a44970_c113c732a6f2426a9e905f46e2c30034.pdf")}}},[t._v("Click Here for Map Options: STRAVA/Map My Ride/Garmin/Ride with GPS")])],1)],1)]),t._v(" "),s("div",{staticClass:"row wrap justify-center"},t._l(t.routes,function(a){return s("q-card",{staticClass:"route col-xs-11 col-sm-5 shadow-24"},[s("div",[s("q-card-media",[s("img",{attrs:{src:a.pic}})]),t._v(" "),s("q-card-actions",{attrs:{align:"center"}},[s("q-btn",{staticClass:"r-btn",attrs:{"no-caps":""},on:{click:function(s){t.$router.push(""+a.url)}}},[t._v(t._s(a.length)+" Route Map")])],1)],1)])}))])},c=[],i={render:o,staticRenderFns:c};a.a=i}});