(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,function(e,t,a){e.exports={wrapper:"Affairs_wrapper__adwxm",name:"Affairs_name__3e5_o",priority:"Affairs_priority__3sWkT",item:"Affairs_item__1BYAz",button:"Affairs_button__3YaQm",deleteButton:"Affairs_deleteButton__2DumX"}},function(e,t,a){e.exports={message_wrapper:"Message_message_wrapper__iwu8a",message_avatar:"Message_message_avatar__a2bxO",message:"Message_message__8WR15",message_content:"Message_message_content__b4wvd",message_name:"Message_message_name__2kAMq",message_text:"Message_message_text__lSwLv",message_time:"Message_message_time__1y8lx"}},,,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),i=a(6),n=a.n(i),c=(a(12),a(7)),o=a.n(c),l=a(3),m=a.n(l),d=a(0);var j=function(e){return Object(d.jsxs)("div",{className:m.a.message_wrapper,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:m.a.message_avatar}),Object(d.jsxs)("div",{className:m.a.message,children:[Object(d.jsxs)("div",{className:m.a.message_content,children:[Object(d.jsx)("div",{className:m.a.message_name,children:e.name}),Object(d.jsx)("div",{className:m.a.message_text,children:e.message})]}),Object(d.jsx)("div",{className:m.a.message_time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",u="Some Name",f="some text",h="22:00";var b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(j,{avatar:_,name:u,message:f,time:h}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},p=a(5),g=a(2),x=a.n(g);var O=function(e){var t={color:"high"===e.affair.priority?"red":"middle"===e.affair.priority?"#FF8C00":"#013220"};return Object(d.jsxs)("div",{className:x.a.item,children:[Object(d.jsx)("span",{className:x.a.name,children:e.affair.name}),Object(d.jsxs)("span",{className:x.a.priority,style:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:x.a.deleteButton,children:"X"})]})};var v=function(e){var t=e.data.map((function(t){return Object(d.jsx)(O,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:x.a.wrapper,children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:x.a.button,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:x.a.button,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:x.a.button,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:x.a.button,children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(s.useState)(w),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)("all"),n=Object(p.a)(i,2),c=n[0],o=n[1],l=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(a,c);return console.log(l),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(v,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var A=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(b,{}),Object(d.jsx)(k,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.b58ebca2.chunk.js.map