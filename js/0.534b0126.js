(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"475f":function(t,e,o){},"56b4":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"bg-neutral-2"},[o("div",{staticClass:"bg-neutral-9"},[o("div",{staticClass:"row wrap justify-center bg-neutral-9 text-neutral-1"},[o("div",{staticClass:"col-xs-12 text-center"},[t.openRegistration?o("h3",[t._v("2022 Registration is Open")]):o("h3",[t._v("2022 Registration")]),o("hr",{staticClass:"hr"}),o("h4",[t._v("Check back in 2022 for more information, in the meantime, here is some information on our amazing routes!")])])])]),t.openRegistration?t._e():o("div",{staticClass:" q-pt-lg"},[o("RouteCarousel",{attrs:{onRegisterPage:!0}})],1),t.openRegistration?o("div",{staticClass:"q-pb-xl bg-neutral-9 text-neutral-1"},[o("div",{staticClass:"row justify-center"},[o("div",{staticClass:"col-xs-6"},[t._l(t.modalCallouts,(function(e){return o("div",{staticClass:"text-body1 q-mt-sm text-center"},[t._v("\n                    "+t._s(e)+"\n                ")])})),o("h4",{staticClass:"text-center signature"},[o("em",[o("b",[t._v("Team Ride For Hope Idaho")])])])],2),o("div",{staticClass:"col-xs-12 text-center q-mt-md"},[o("span",{staticClass:"text-h5"},[t._v("If there is a problem loading registration, please "),o("a",{attrs:{href:"https://www.bikereg.com/ride-for-hope-idaho?nif=1"}},[t._v("Click Here.")])])])]),t.openRegistration&&!t.regIsLoaded?o("div",{staticClass:"row justify-center"},[o("q-spinner-gears",{staticClass:"col-xs-1 q-mt-lg",attrs:{color:"primary-4"}})],1):t._e()]):t._e(),o("div",{staticClass:"q-pb-xl"},[o("div",{attrs:{id:"athleteRegIframe"}})])])},a=[],n=(o("6762"),o("2fdb"),o("b06b")),i=o("fe92"),r={name:"Register",data:function(){return{regIsLoaded:!1,modalCallouts:["We have made the decision to make this year’s event  a “virtual ride” for all to enjoy at your own pace and distance, wherever you want to ride.  If you choose to ride in Kuna, Ride For Hope Idaho route maps can be printed or downloaded to your bike computer from this website.","If you would like to participate in a group ride, refer to any of the amazing local bike clubs for details regarding club rides.","We know this is not the perfect situation — but wanted to be fair to all riders and ensure we are all safe as we progress through our current situations with COVID-19.","Please feel free to contact us for any questions.  If you would like more information on cycling clubs we can get  you that information too!","Thank you so much for your support and are looking forward to an awesome event in 2022!","See you on the road!!"]}},computed:{openReg:function(){return this.$store.state.dates.openReg.stringDate},closeReg:function(){return this.$store.state.dates.closeReg.stringDate},openRegistration:function(){return window.location.hash.includes("?openreg=true")||this.$store.state.dates.openRegistration}},components:{RouteCarousel:i["a"]},methods:{openURL:n["a"],loadBikeReg:function(){console.log("Loading BikeReg Registration");var t=document.createElement("script");t.setAttribute("src","https://www.bikereg.com/Scripts/athleteRegWidget.js"),t.setAttribute("id","athleteRegWidget"),t.setAttribute("data-event","ride-for-hope-idaho"),t.setAttribute("defer","true");var e=document.getElementById("athleteRegIframe");e.appendChild(t)},beginLoadingSequence:function(){1!=this.openRegistration&&"true"!=localStorage.openRegistration||(this.loadBikeReg(),setTimeout(this.checkForReg,5e3),setTimeout(this.updateLoader,500),"false"==localStorage.openRegistration&&(localStorage.openRegistration=!0,window.location.reload()))},checkForReg:function(){this.regIsLoaded?console.log("Loaded BikeReg Registration"):(console.log("Failed to load BikeReg. Reloading"),window.location.reload())},updateLoader:function(){var t=void 0!=document.getElementById("regFrame");t&&(this.regIsLoaded=!0)}},mounted:function(){this.beginLoadingSequence()}},l=r,c=(o("e23a"),o("2877")),d=Object(c["a"])(l,s,a,!1,null,"e999479a",null);e["default"]=d.exports},e23a:function(t,e,o){"use strict";var s=o("475f"),a=o.n(s);a.a},fe92:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row justify-center text-neutral-8"},[o("q-list",{staticClass:"col-md-4 desktop-only q-mr-lg",attrs:{separator:""}},t._l(t.routes,(function(e){return o("div",[t.selected==e.id?o("q-item",{staticClass:"route-item"},[o("q-item-section",{on:{click:function(o){t.selected=e.id}}},[o("p",{directives:[{name:"anime",rawName:"v-anime",value:{translateX:{value:["-30px","0px"],duration:4e3}},expression:"{ translateX: { value: ['-30px', '0px'], duration: 4000, }}"}],staticClass:"text-bold router-tab selected shadow-16 text-neutral-8"},[t._v("\n                        "+t._s(e.length)+"\n                    ")])])],1):o("q-item",{staticClass:"route-item",attrs:{clickable:""}},[o("q-item-section",{staticClass:"router-tab non-hoverable",on:{click:function(o){t.selected=e.id}}},[o("p",{staticClass:"text-bold non-selected"},[t._v("\n                        "+t._s(e.length)+"\n                    ")])])],1)],1)})),0),o("div",{staticClass:"col-sm-6 desktop-only q-ml-lg"},[o("q-card",{staticClass:"spacers shadow-24 text-neutral-8 bg-neutral-3"},[o("q-card-section",[o("div",{staticClass:"text-h4 text-bold"},[t._v(t._s(t.routes[t.selected].length))])]),o("q-separator",{attrs:{dark:"",inset:""}}),o("q-card-section",{staticClass:"sub"},[o("span",{staticClass:"text-h5"},[t._v("\n                    "+t._s(t.routes[t.selected].shortDescription)+"\n                ")])])],1),t.openRegistration||t.onRegisterPage?o("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ",attrs:{color:"primary-3",size:"lg","no-caps":""},on:{click:function(e){t.registrationClosedDialog=!t.registrationClosedDialog}}},[t._v("\n            Register\n        ")]):o("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md text-neutral-9 ",attrs:{to:"register",color:"primary-3",size:"lg","no-caps":""}},[t._v("\n            Register\n        ")]),o("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg q-mt-md q-mr-lg",attrs:{to:t.routes[t.selected].url,color:"text-neutral-9",size:"lg","no-caps":"",outline:""}},[t._v("\n            More Info\n        ")])],1),o("div",{staticClass:"mobile-only col-xs-12"},[o("div",{staticClass:"row justify-center q-gutter-md"},t._l(t.routes,(function(e){return o("q-card",{staticClass:"white-border bg-neutral-2 col-xs-11 col-sm-5 mobile-border mobile-only q-mb-md"},[o("q-card-section",{staticClass:"text-center"},[o("q-btn",{staticClass:"route-btn",attrs:{"no-caps":"",outline:"",color:"primary-4"},on:{click:function(o){t.$router.push(e.url.trim("/"))}}},[o("span",{staticClass:"text-h4"},[t._v(t._s(e.length))])])],1),o("q-card-section",[o("span",{staticClass:"text-center text-body1 text-neutral-8"},[t._v("\n                        "+t._s(e.shortDescription))])]),o("q-card-section",{staticClass:"text-center"},[o("q-btn",{staticClass:"text-neutral-8 q-mr-md",attrs:{to:t.routes[t.selected].url,color:"neutral-9",size:"md",outline:"","no-caps":""}},[t._v("\n                        More Info\n                    ")]),t.openRegistration||t.onRegisterPage?o("q-btn",{staticClass:"text-neutral-9 ",attrs:{color:"primary-3",size:"md","no-caps":""},on:{click:function(e){t.registrationClosedDialog=!t.registrationClosedDialog}}},[t._v("\n                        Register\n                    ")]):o("q-btn",{staticClass:"text-neutral-9 ",attrs:{to:"register",color:"primary-3",size:"md","no-caps":""}},[t._v("\n                        Register\n                    ")])],1)],1)})),1)]),o("q-dialog",{model:{value:t.registrationClosedDialog,callback:function(e){t.registrationClosedDialog=e},expression:"registrationClosedDialog"}},[o("q-card",[o("q-toolbar",[o("q-avatar",[o("img",{attrs:{src:"statics/logos/RFHIdahoLogo.png"}})]),o("q-toolbar-title",[o("span",{staticClass:"text-weight-bold"},[t._v("Ride For Hope Idaho")])]),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),o("q-card-section",[o("span",{staticClass:"text-body1"},[t._v("\n        Check back in 2022 for when online registration will open.\n    ")])]),o("q-card-section",[o("span",{staticClass:"text-body1"},[t._v("\n                    If you are looking to help the cause without riding, you can donate directly to Genesis Community Health with the button below, or contact us to volunteer.\n                ")])]),o("q-card-section",{staticClass:"text-center"},[o("q-btn",{staticClass:"cbtnm",attrs:{"no-caps":"",color:"primary-3",to:"contact"}},[t._v("Contact")]),o("q-btn",{staticClass:"cbtnm q-ml-md q-mr-md",attrs:{"no-caps":"",color:"accent-4"},on:{click:function(e){return t.openURL("https://genesiscommunityhealth.com/donate/")}}},[t._v("Donate")]),o("q-btn",{staticClass:"cbtnm",attrs:{"no-caps":"",color:"neutral-3"},on:{click:function(e){t.registrationClosedDialog=!1}}},[t._v("Close")])],1)],1)],1)],1)},a=[],n=o("b06b"),i={name:"RouteCarousel",data:function(){return{selected:0,registrationClosedDialog:!1}},props:{onRegisterPage:{type:Boolean}},components:{},computed:{openReg:function(){return this.$store.state.dates.openReg.stringDate},closeReg:function(){return this.$store.state.dates.closeReg.stringDate},routes:function(){return this.$store.state.routes.routes},openRegistration:function(){return this.$store.state.state.openRegistration}},methods:{openURL:n["a"]},mounted:function(){}},r=i,l=o("2877"),c=Object(l["a"])(r,s,a,!1,null,"1c951ab7",null);e["a"]=c.exports}}]);