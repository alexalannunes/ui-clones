(this["webpackJsonpeducation-dashboard"]=this["webpackJsonpeducation-dashboard"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"day":12,"month":"Dec","weekName":"Monday","schedules":"10:00-12:00pm"},{"day":13,"month":"Dec","weekName":"Tuesday","schedules":"10:00-12:00pm"},{"day":14,"month":"Dec","weekName":"Wednesday","schedules":"10:00-12:00pm"}]')},function(e){e.exports=JSON.parse('[{"name":"English","iconFamily":"material-icons-round","iconName":"receipt_long","hours":20},{"name":"Spoken course","iconFamily":"material-icons-round","iconName":"recent_actors","hours":40},{"name":"Writing course","iconFamily":"material-icons-round","iconName":"history_edu","hours":20},{"name":"Language couse","iconFamily":"material-icons-round","iconName":"book","hours":20}]')},,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),n=s(8),i=s.n(n),l=(s(15),s(16),[{name:"David",time:4,price:100,image:s.p+"static/media/david.450a9cf2.jpeg"},{name:"Lily",time:2,price:120,image:s.p+"static/media/lily.a69af97d.jpeg"},{name:"Alex",time:4,price:150,image:s.p+"static/media/alex.a75da305.jpeg"}]),r=s(9),d=s(10),m=s(2),o=s(4),j=s(5),_=s(7),h=s(6),x=(s(17),s(0)),b=function(e){Object(_.a)(s,e);var c=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=c.call(this,e)).state={},a}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props,c=e.sqSize,s=e.strokeWidth,a=e.percentage,t=(c-s)/2,n="0 0 ".concat(c," ").concat(c),i=t*Math.PI*2,l=i-i*a/100,r={cx:c/2,cy:c/2,r:t,strokeWidth:"".concat(s,"px")};return Object(x.jsxs)("svg",{width:c,height:c,viewBox:n,children:[Object(x.jsx)("circle",Object(m.a)(Object(m.a)({},r),{},{style:{strokeDasharray:"10",stroke:"var(--gray)",fill:"none"}})),Object(x.jsx)("circle",Object(m.a)(Object(m.a)({},r),{},{className:"circle-progress",transform:"rotate(-90 ".concat(c/2," ").concat(c/2,")"),style:{stroke:"var(--dark)",strokeDasharray:i,strokeDashoffset:l}})),Object(x.jsx)("circle",Object(m.a)(Object(m.a)({},r),{},{style:{stroke:"var(--light)",fill:"none",strokeDasharray:10,strokeDashoffset:10,strokeWidth:34}})),Object(x.jsxs)("text",{x:"50%",y:"50%",fontSize:30,dominantBaseline:"middle",textAnchor:"middle",children:[a,"%"]})]})}}]),s}(t.a.Component);b.defaultProps={sqSize:200,percentage:25,strokeWidth:30};t.a.Component;var u=function(){return Object(x.jsxs)("div",{className:"dashboard",children:[Object(x.jsxs)("ul",{className:"dashboard__menu flex column ai-center",children:[Object(x.jsx)("li",{className:"menu__item menu__item__first",children:Object(x.jsx)("span",{className:"material-icons-round menu__icon",children:"drag_handle"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-outlined menu__icon menu__icon--selected",children:"home"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-outlined menu__icon",children:"account_circle"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-outlined menu__icon",children:"chat"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-round menu__icon",children:"event"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-round menu__icon",children:"schedule"})}),Object(x.jsx)("li",{className:"menu__item",children:Object(x.jsx)("span",{className:"material-icons-outlined menu__icon",children:"settings"})})]}),Object(x.jsxs)("div",{className:"dashboard__content",children:[Object(x.jsxs)("div",{className:"content__header flex ai-center jc-between",children:[Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsx)("h2",{className:"content__title",children:"Dashboard"}),Object(x.jsxs)("div",{className:"relative flex ai-center search__container",children:[Object(x.jsx)("span",{className:"header__input__icon material-icons-outlined",children:"search"}),Object(x.jsx)("input",{placeholder:"Search",className:"header__search__input"})]})]}),Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsxs)("div",{className:"header__icon__actions flex ai-center",children:[Object(x.jsx)("span",{className:"icon__action icon__action--filled material-icons-round",children:"add"}),Object(x.jsx)("span",{className:"icon__action icon__action--badged material-icons-outlined",children:"notifications"})]}),Object(x.jsx)("img",{src:"https://github.com/alexalannunes.png",alt:"user",className:"header__image__user br-100"}),Object(x.jsx)("strong",{className:"header__name__user",children:"Alex A. N."})]})]}),Object(x.jsx)("div",{className:"dashboard__body",children:Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsxs)("div",{className:"information__side flex column",children:[Object(x.jsxs)("div",{className:"teachers__container flex ai-center jc-between",children:[Object(x.jsx)("h2",{children:"Find your teacher"}),Object(x.jsxs)("div",{className:"dropdown__select relative",children:[Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsx)("span",{className:"dropdown__selected",children:"English"}),Object(x.jsx)("span",{className:"material-icons-round",children:"expand_more"})]}),Object(x.jsxs)("div",{className:"dropdown__menu",role:"menu",children:[Object(x.jsx)("div",{className:"dropdown__menu-item",role:"listitem",children:"Espanhol"}),Object(x.jsx)("div",{className:"dropdown__menu-item",role:"listitem",children:"Portugu\xeas"})]})]})]}),Object(x.jsx)("div",{className:"teacher__list",role:"menu",children:l.map((function(e,c){return Object(x.jsxs)("div",{className:"teacher__list-item ".concat(1===c&&"teacher__list-item--selected"," flex ai-center jc-between"),role:"menuitem",children:[Object(x.jsxs)("div",{className:"flex ai-center teacher__list-item__name",children:[Object(x.jsx)("img",{src:e.image,alt:"teacher",className:"teatcher__image br-100"}),Object(x.jsxs)("strong",{children:["Prof. ",e.name]})]}),Object(x.jsxs)("div",{className:"flex ai-center text-light",children:[e.time," hours lecture"]}),Object(x.jsxs)("div",{className:"flex ai-center text-light",children:["$",e.price,"/hr"]}),Object(x.jsx)("div",{className:"flex ai-center",children:Object(x.jsxs)("div",{className:"custom__dots__action custom__dots__action--vertical flex ai-center jc-center br-100",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})]},c)}))}),Object(x.jsxs)("div",{className:"schedule__container",children:[Object(x.jsxs)("div",{className:"flex ai-center jc-between",children:[Object(x.jsx)("h2",{children:"Schedule"}),Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsx)("span",{className:"schedule__date",children:"Oct 08, 2020"}),Object(x.jsxs)("div",{className:"dropdown__select dropdown__select--dark relative",children:[Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsxs)("span",{className:"dropdown__selected",children:["Prof. ",l[1].name]}),Object(x.jsx)("span",{className:"material-icons-round",children:"expand_more"})]}),Object(x.jsx)("div",{className:"dropdown__menu",role:"menu",children:l.map((function(e,c){return Object(x.jsxs)("div",{className:"dropdown__menu-item",role:"listitem",children:["Prof. ",e.name]},c)}))})]})]})]}),Object(x.jsxs)("div",{className:"schedule__grid",children:[Object(x.jsx)("div",{className:"schedule-grid__item flex-1",children:Object(x.jsxs)("div",{className:"schedule-teacher__information flex column",children:[Object(x.jsx)("div",{className:"schedule-teacher__image-container flex ai-center jc-center",children:Object(x.jsx)("img",{className:"schedule-teacher__img br-100",src:l[1].image,alt:"prof"})}),Object(x.jsx)("div",{className:"schedule-teacher__name-container flex ai-center jc-center",children:Object(x.jsxs)("h4",{className:"prof__name",children:["Prof. ",l[1].name]})}),Object(x.jsxs)("div",{className:"schedule-teacher__details-container flex ai-center jc-center column",children:[Object(x.jsx)("span",{className:"text-light teacher__detail__experience",children:"5 years Experience"}),Object(x.jsx)("span",{className:"text-light teacher__detail__education",children:"Master's in Language"})]}),Object(x.jsx)("div",{className:"schedule__teacher__action flex ai-center jc-center",children:Object(x.jsx)("button",{className:"schedule__teacher__button",children:"Book online"})})]})}),Object(x.jsx)("div",{className:"schedule-grid__item schedule-grid__item--padding flex column flex-2",children:r.map((function(e,c){return Object(x.jsxs)("div",{className:"flex ai-center jc-between flex-1 ".concat(0===c?"ai-baseline":""),children:[Object(x.jsx)("div",{className:"schedule-grid__item__days flex column ".concat(2===c?"as-flex-end":""),children:Object(x.jsxs)("div",{className:"schedule__day__box ".concat(1===c?"schedule__day_box--selected":""," flex ai-center"),children:[Object(x.jsx)("span",{className:"scheule__day__number",children:e.day}),Object(x.jsxs)("div",{className:"flex column",children:[Object(x.jsx)("span",{className:"schedule__day__month-name",children:e.month}),Object(x.jsx)("span",{className:"schedule__day__week-name",children:e.weekName})]})]})}),Object(x.jsx)("div",{className:"schedule-grid__item__times text-light",children:Object(x.jsx)("span",{children:e.schedules})})]},c)}))})]})]})]}),Object(x.jsxs)("div",{className:"my-courses__side flex column",children:[Object(x.jsx)("h2",{children:"My Courses"}),Object(x.jsx)("div",{className:"myc__list",children:d.map((function(e,c){return Object(x.jsx)("div",{className:"myc__list-item",children:Object(x.jsxs)("div",{className:"flex ai-center jc-between",children:[Object(x.jsxs)("div",{className:"flex ai-center",children:[Object(x.jsx)("div",{className:"myc__icon__img",children:Object(x.jsx)("span",{className:e.iconFamily,children:e.iconName})}),Object(x.jsxs)("div",{className:"flex column myc__information",children:[Object(x.jsx)("strong",{className:"myc__name",children:e.name}),Object(x.jsxs)("span",{className:"myc__hours",children:[e.hours," Hours"]})]})]}),Object(x.jsx)("div",{className:"myc__list-item__action",children:Object(x.jsxs)("div",{className:"custom__dots__action custom__dots__action--horizontal flex ai-center jc-center br-100",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})]})},c)}))}),Object(x.jsx)("h2",{children:"Account Progress"}),Object(x.jsx)("div",{className:"flex ai-center jc-center chart__dashed__container",children:Object(x.jsx)(b,{sqSize:190,percentage:70,strokeWidth:30})}),Object(x.jsxs)("div",{className:"chart__dashed__container",children:[Object(x.jsx)("span",{className:"progress__title",children:"Progress"}),Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"progress__fill",style:{width:"70%"}})})]})]})]})})]})]})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,n=c.getLCP,i=c.getTTFB;s(e),a(e),t(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(t.a.StrictMode,{children:Object(x.jsx)(u,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.6ba4252f.chunk.js.map