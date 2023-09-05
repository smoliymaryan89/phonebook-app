"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[537],{8537:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(2791),u=t(9434),a=t(6052),i=t(6727),o="NOT_FOUND";var c=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?c:r,a=t.maxSize,i=void 0===a?1:a,s=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),f=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:o},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return o}return{get:r,put:function(e,u){r(e)===o&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,l);function d(){var e=f.get(arguments);if(e===o){if(e=n.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(n){return s(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var a,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,f=s.memoizeOptions,d=void 0===f?t:f,h=Array.isArray(d)?d:[d],p=l(r),m=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(h)),v=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return a=m.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return u}var d=f(s),h=function(n){return n.contacts.contacts.items},p=function(n){return n.contacts.filter},m=d([h,p],(function(n,e){return e?n.filter((function(n){var t=n.name,r=n.number;return t.toLowerCase().trim().includes(e.toLowerCase().trim())||r&&r.trim().includes(e.toLowerCase().trim())})):n})),v=t(5705),y=t(184),x=function(){var n=(0,u.I0)(),e=(0,u.v9)(h),t=(0,v.TA)({initialValues:{name:"",number:""},validationSchema:i.Ry({name:i.Z_().required("Required!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",excludeEmptyString:!0}),number:i.Z_().required("Required!").matches(/^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",excludeEmptyString:!0})}),onSubmit:function(r){if(e.find((function(n){return n.name===r.name})))return alert("".concat(r.name," is already in contacts."));n((0,a.uK)(r)),t.resetForm()}});return(0,y.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,y.jsxs)("div",{children:[(0,y.jsx)("input",{type:"text",name:"name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name}),t.touched.name&&t.errors.name?(0,y.jsx)("div",{children:t.errors.name}):null]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("input",{type:"text",name:"number",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.number}),t.touched.number&&t.errors.number?(0,y.jsx)("div",{children:t.errors.number}):null]}),(0,y.jsx)("button",{type:"submit",children:"Add contact"})]})},b=function(){var n=(0,u.I0)(),e=(0,u.v9)(m);return(0,y.jsx)("ul",{children:e.map((function(e){var t=e.id,r=e.name,u=e.number;return(0,y.jsx)("li",{children:(0,y.jsxs)("span",{children:[r,": ",u,(0,y.jsx)("button",{onClick:function(){return n((0,a.GK)(t))},type:"button",children:"Delete"})]})},t)}))})},g=t(1538),j=function(){var n=(0,u.I0)(),e=(0,u.v9)(p);return(0,y.jsxs)("label",{children:[(0,y.jsx)("p",{children:"Find contacts by name"}),(0,y.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,g.T)(t))}})]})},C=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{children:"Phonebook"}),(0,y.jsx)(x,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(j,{}),(0,y.jsx)(b,{})]})},k=function(){var n=(0,u.I0)();return(0,r.useEffect)((function(){n((0,a.yF)())}),[n]),(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(C,{})})}}}]);
//# sourceMappingURL=537.b7d73c80.chunk.js.map