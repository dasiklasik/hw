(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={message_wrapper:"Message_message_wrapper__iwu8a",message_avatar:"Message_message_avatar__a2bxO",message:"Message_message__8WR15",message_content:"Message_message_content__b4wvd",message_name:"Message_message_name__2kAMq",message_text:"Message_message_text__lSwLv",message_time:"Message_message_time__1y8lx"}},,,function(e,t,n){e.exports={wrapper:"Affairs_wrapper__adwxm",name:"Affairs_name__3e5_o",priority:"Affairs_priority__3sWkT",item:"Affairs_item__1BYAz",button:"Affairs_button__3YaQm",deleteButton:"Affairs_deleteButton__2DumX"}},,,function(e,t,n){e.exports={wrapper:"HW8_wrapper__2NCm0",array:"HW8_array__3zmli",arrayItem:"HW8_arrayItem__a_wy_",buttons:"HW8_buttons__2yZqg"}},function(e,t,n){e.exports={common_class:"SuperButton_common_class__GDkDd",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,n){e.exports={item:"Greeting_item__1AV2S",error:"Greeting_error__1uvQ8",error_message:"Greeting_error_message__2dFJG",input:"Greeting_input__2kXLu"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,t,n){e.exports={wrapper:"span_wrapper__1zgVw",image:"span_image__13LEA",span:"span_span__15Zw1"}},function(e,t,n){e.exports={main:"Error404_main___reFe",number:"Error404_number__2z4pu",words:"Error404_words__rhGyv"}},,function(e,t,n){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,function(e,t,n){e.exports={App:"App_App__1Sc4o"}},function(e,t,n){e.exports={wrapper:"hw6_wrapper__2DOAf"}},function(e,t,n){e.exports={wrapper:"HW7_wrapper__cL0f_"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=(n(30),n(23)),o=n.n(i),x=n(8),j=(n(31),n(0));var l=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(x.b,{className:"link",to:e.paths.PRE_JUNIOR,children:"pre junior"}),Object(j.jsx)(x.b,{className:"link",to:e.paths.JUNIOR,children:"junior"}),Object(j.jsx)(x.b,{className:"link",to:e.paths.JUNIOR_PLUS,children:"junior+"})]})})})})},g=n(2),u=n(7),b=n.n(u);var d=function(e){return Object(j.jsxs)("div",{className:b.a.message_wrapper,children:[Object(j.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.message_avatar}),Object(j.jsxs)("div",{className:b.a.message,children:[Object(j.jsxs)("div",{className:b.a.message_content,children:[Object(j.jsx)("div",{className:b.a.message_name,children:e.name}),Object(j.jsx)("div",{className:b.a.message_text,children:e.message})]}),Object(j.jsx)("div",{className:b.a.message_time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",m="some text",A="22:00";var I=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(d,{avatar:h,name:O,message:m,time:A}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},p=n(3),_=n(10),f=n.n(_),v=n(6),C=n(5),N=n(14),k=n.n(N),w=function(e){var t=e.red,n=e.className,a=Object(C.a)(e,["red","className"]),r="".concat(t?k.a.red:k.a.default," ").concat(n," ").concat(k.a.common_class);return Object(j.jsx)("button",Object(v.a)({className:r},a))};var y=function(e){var t={color:"high"===e.affair.priority?"red":"middle"===e.affair.priority?"#FF8C00":"#013220"};return Object(j.jsxs)("div",{className:f.a.item,children:[Object(j.jsx)("span",{className:f.a.name,children:e.affair.name}),Object(j.jsxs)("span",{className:f.a.priority,style:t,children:["[",e.affair.priority,"]"]}),Object(j.jsx)(w,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"x"})]})};var W=function(e){var t=e.data.map((function(t){return Object(j.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{className:f.a.wrapper,children:[t,Object(j.jsx)(w,{onClick:function(){e.setFilter("all")},children:"All"}),Object(j.jsx)(w,{onClick:function(){e.setFilter("high")},children:"High"}),Object(j.jsx)(w,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(j.jsx)(w,{onClick:function(){e.setFilter("low")},children:"Low"})]})},E=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(E),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],x=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return console.log(x),Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(W,{data:x,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},R=n(12),J=n(15),U=n.n(J),B=n(16),M=n.n(B),T=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(C.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),x="".concat(M.a.error," ").concat(i||""),l="".concat(c?M.a.errorInput:""," ").concat(s||""," ").concat(M.a.superInput),g="".concat(c?"Enter text":"");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(v.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l,placeholder:g},o)),c&&Object(j.jsxs)("span",{className:x,children:[Object(j.jsx)("br",{}),c]})]})},G=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.setError,i=!t;return Object(j.jsxs)("div",{className:U.a.item,children:[Object(j.jsx)("div",{children:Object(j.jsx)(T,{value:t,onChange:function(e){" "===e.currentTarget.value?s("no spaces can be entered"):(n(e.currentTarget.value),s(""))},className:"".concat(U.a.input),error:r,onKeyPress:function(e){"Enter"===e.key&&""!==t?(a(t),n("")):"Enter"===e.key&&""===t&&s("write a name")}})}),Object(j.jsxs)("div",{className:U.a.button_container,children:[Object(j.jsx)(w,{onClick:function(){a(t),n("")},disabled:i,children:"add"}),Object(j.jsx)("span",{children:c})]})]})},F=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(p.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),x=Object(p.a)(o,2),l=x[0],g=x[1],u=t.length;return Object(j.jsx)(G,{name:s,setNameCallback:function(e){i(e)},addUser:function(e){n(e),alert("Hello ".concat(e,"!"))},error:l,totalUsers:u,setError:g})},Q=n(35);var V=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(F,{users:n,addUserCallback:function(e){var t={_id:Object(Q.a)(),name:e};r([t].concat(Object(R.a)(n)))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},D=n(20),Z=n.n(D),P=n(21),Y=n.n(P),H=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(j.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var L=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(p.a)(i,2),x=o[0],l=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:Z.a.column,children:[Object(j.jsx)(T,{value:n,onChangeText:r,onEnter:s,error:c}),Object(j.jsx)(T,{className:Z.a.blue}),Object(j.jsx)(w,{children:"default"}),Object(j.jsx)(w,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(w,{disabled:!0,children:"disabled"}),Object(j.jsx)(H,{checked:x,onChangeChecked:l,children:"some text "}),Object(j.jsx)(H,{checked:x,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},z=n(17),X=n.n(z),q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(C.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(p.a)(s,2),o=i[0],x=i[1],l=r||{},g=l.children,u=l.onDoubleClick,b=l.className,d=Object(C.a)(l,["children","onDoubleClick","className"]),h="".concat(X.a.span," ").concat(b);return Object(j.jsx)(j.Fragment,{children:o?Object(j.jsx)(T,Object(v.a)({autoFocus:!0,onBlur:function(e){x(!1),t&&t(e)},onEnter:function(){x(!1),n&&n()}},c)):Object(j.jsxs)("div",{className:X.a.wrapper,children:[Object(j.jsx)("img",{className:X.a.image,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAj1QTFRFAAAAIx8gIh8gIhsgIyAgIx4gJB8iJRwlJCAgIx0nHh4mJB8jIiAeIyAfHx4mIh4gJiIgIB4fLiQkIyEhIx0fIyAhIiEgJB4gJR4fISEgJB4hJB4fJR8gIx8iIx8eJBsfIyEgJB8gIx8gIx8gIx8gIh8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIyAgIx8gIx8gIx8gIx8gIh8gIx8gIx8gIx8gIx8gIx8gIx8gIh4gIx8gIx8gIx8gIh8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gJCAhIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIh0gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx4gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIyAhIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIh4fIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIiAhIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gIx8gJCAgIx8gIx8gIx8gIx8gIx8gIx8g////FlixIQAAAL10Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcvDgZ87JsSTG0LBn31/JwIuzkG9o3d/gFBf9+dXAwHfu1iAkjgCr/xlQUCUInh/aNq++VU+D3ubprnVQFZEe/eAwTpJhzwdSWukBjkogFy2IMBenYPB18rZ68uWtWgKmQscfdhAetLHiNJCbDOvaoU9FcWAWwTpxC1yyfMQBcNn9mzHzrRJNDzRQGr6risXsRl0sGSAWbXXUcai1IbEAAAAAFiS0dEvqTcg8MAAAAJcEhZcwAAdhwAAHYcAafCeOoAAAJXSURBVFjDY2AYBaNgiAFGJWUVRgr0M6mqqWtoEm8CI7OWtg6SckZdPf29BobEm8BoZKxvglDNYqpnpm5uYUmsCYxW1ja2Bnb2DlDlrI5OZs4urm7ulnbEmcDo4bkXCLygbmBS1TPb6+3DyAY0gTg3MPr6+QcEBgVDFAP164cEhoaxM3IQbQIwDDzDIxD2R0ZFW8bEcoLdQJwvGOPi1RJg9psluvgmAE0I42Lkdkuy1CAqPfDw8PIg9CczMoJN4GNMid6bqkzQAMa0dKgamH6gGNiE5KgMs0wfAgbwC2Rl5+QyouqHmJCXH2mWqUvIAawFhaFFsYyw8IPqB5mgYblXn7B+BkGhlGIXYUZU+0EGlJRampUR1g9SWq6DRX9ylJdZWQXx+QmbfiLcP6p/VP9w1s/kWllFlCE49DMmVyfV1BJhAi73MybX1Tc0EjYAt/8ZfZuaCetnEWlp9WrDHn6i7aKiBA1g1PHc29EpJo6s35SFkbGrW4LIGlU5de9e9x4WRlT/9/b1dxFpQNPeCROBJkiKI4W/1CST+slTpkqLE6F/WsPe6TNmAk0QE0fYP2t2Roil15y5RLiBUXNe+HzGBSATZODhx7hw0eLWQNslS4kxYNnk5VMZwSZ0asPCX1bOaMXKVat75YkxoGyvxhqgo6eu3bsOKf0zKi1av4CouiRlw96NjMlTrfU2odRfCoyzZsgSZUB6kf7m4JlbWvcGpm6tViK9Rcjo1mqgb7l38pxt8bU62xVJ1s/AuCOwdWfQjmUJvmQ2Rxmn7tq9J5lMzaNgFAw0AAD6Ut8ON5KpqQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMi0yNVQxMjozMjozMiswMTowMM8rxYEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDItMjVUMTI6MzI6MzIrMDE6MDC+dn09AAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTktMDItMDEgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnQXviyAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NTEwOTQzNTLGWJhgAAAAE3RFWHRUaHVtYjo6U2l6ZQAxMC4yS0JCOGQCMgAAAG50RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzLzU2LzVQcGcxbTEvMTgyMC80MjEzNTk4LWRvb2RsZS1lZHVjYXRpb24tbGluZS1wZW4tcGVuY2lsLXNjaG9vbC1zY2llbmNlXzExNTQ5MS5wbmeYSuT3AAAAAElFTkSuQmCC"}),Object(j.jsx)("span",Object(v.a)(Object(v.a)({onDoubleClick:function(e){x(!0),u&&u(e)},className:h},d),{},{children:g||c.value}))]})})};function K(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}var $=n(24),ee=n.n($);var te=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){r(K("editable-span-value",n))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 6",Object(j.jsxs)("div",{className:ee.a.wrapper,children:[Object(j.jsx)("div",{children:Object(j.jsx)(q,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(j.jsx)(w,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(j.jsx)(w,{onClick:function(){var e=K("editable-span-value",n);r(e)},children:"restore"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var ne=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(I,{}),Object(j.jsx)(S,{}),Object(j.jsx)(V,{}),Object(j.jsx)(L,{}),Object(j.jsx)(te,{})]})},ae=n(18),re=n.n(ae);var ce=function(){return Object(j.jsxs)("div",{className:re.a.main,children:[Object(j.jsx)("div",{className:re.a.number,children:"404"}),Object(j.jsx)("div",{className:re.a.words,children:"Page not found!"}),Object(j.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},se=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(C.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(j.jsx)("option",{children:e},"option-"+t)})):[];return Object(j.jsx)("select",Object(v.a)(Object(v.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},ie=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(C.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"elements",checked:a===e,onChange:s,value:e}),e]},t+"-"+n)})):[];return Object(j.jsx)(j.Fragment,{children:i})},oe=n(25),xe=n.n(oe),je=["x","y","z"];var le=function(){var e=Object(a.useState)(je[1]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 7",Object(j.jsxs)("div",{className:xe.a.wrapper,children:[Object(j.jsx)("div",{children:Object(j.jsx)(se,{options:je,value:n,onChangeOption:r})}),Object(j.jsx)("div",{children:Object(j.jsx)(ie,{name:"radio",options:je,value:n,onChangeOption:r})})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},ge=function(e,t){switch(t.type){case"sort":if("up"===t.payload){var n=e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1}));return Object(R.a)(n)}var a=e.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:1}));return Object(R.a)(a);case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ue=n(13),be=n.n(ue),de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(a.useState)(de),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(j.jsxs)("div",{className:be.a.arrayItem,children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("span",{children:e.age})]},e._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 8",Object(j.jsxs)("div",{className:be.a.wrapper,children:[Object(j.jsx)("div",{className:be.a.array,children:c}),Object(j.jsxs)("div",{className:be.a.buttons,children:[Object(j.jsx)(w,{onClick:function(){r(ge(de,{type:"sort",payload:"up"}))},children:"sort up"}),Object(j.jsx)(w,{onClick:function(){return r(ge(de,{type:"sort",payload:"down"}))},children:"sort down"}),Object(j.jsx)(w,{onClick:function(){return r(ge(de,{type:"check",payload:18}))},children:"check 18"})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},Oe=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(le,{}),Object(j.jsx)(he,{})]})},me=function(){return Object(j.jsx)("div",{children:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u044f Junior+"})},Ae={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var Ie=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{path:"/",element:Object(j.jsx)(g.a,{to:Ae.PRE_JUNIOR})}),Object(j.jsx)(g.b,{path:Ae.PRE_JUNIOR,element:Object(j.jsx)(ne,{})}),Object(j.jsx)(g.b,{path:Ae.JUNIOR,element:Object(j.jsx)(Oe,{})}),Object(j.jsx)(g.b,{path:Ae.JUNIOR_PLUS,element:Object(j.jsx)(me,{})}),Object(j.jsx)(g.b,{path:"*",element:Object(j.jsx)(ce,{})})]})})};var pe=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(l,{paths:Ae}),Object(j.jsx)(Ie,{})]})})};var _e=function(){return Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsx)(pe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(_e,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.34e302a3.chunk.js.map