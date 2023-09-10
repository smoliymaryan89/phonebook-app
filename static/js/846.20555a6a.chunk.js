"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[846],{1846:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(2791),o=t(9434),a=t(6052),i=t(8007),u="NOT_FOUND";var s=function(e,n){return e===n};function c(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?s:r,a=t.maxSize,i=void 0===a?1:a,c=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),d=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(n,o){r(n)===u&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,l);function f(){var n=d.get(arguments);if(n===u){if(n=e.apply(null,arguments),c){var t=d.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}d.put(arguments,n)}return n}return f.clearCache=function(){return d.clear()},f}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function d(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=u,d=c.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],h=l(r),m=e.apply(void 0,[function(){return i++,s.apply(null,arguments)}].concat(p)),x=e((function(){for(var e=[],n=h.length,t=0;t<n;t++)e.push(h[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(x,{resultFunc:s,memoizedResultFunc:m,dependencies:h,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),x};return o}var f=d(c),p=function(e){return e.contacts.contacts.items},h=function(e){return e.contacts.filter},m=f([p,h],(function(e,n){return n?e.filter((function(e){var t=e.name,r=e.number;return t.toLowerCase().trim().includes(n.toLowerCase().trim())||r&&r.trim().includes(n.toLowerCase().trim())})):e})),x=t(5705),v=t(1413),y=t(9753),b=t(5150),g=t(1389);function j(e){var n=(0,g.uP)().theme,t=(0,y.OX)();return(0,r.useMemo)((function(){return(0,b.Cj)(n.direction,(0,v.Z)((0,v.Z)({},t),e))}),[e,n.direction,t])}var C=t(824),w=t(1917),A=t(5325),k=t(9163),z=t(3031),I=t(9055),_=t(184),S=i.Ry({name:i.Z_().required("Required!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,{message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",excludeEmptyString:!0}),number:i.Z_().required("Required!").matches(/^(\+)?[\d\s\-()]+$/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",excludeEmptyString:!0}).min(5,"Phone number should be at least 5 characters long.")}),N=function(){var e=(0,o.I0)(),n=(0,o.v9)(p),t=j(),r=(0,x.TA)({initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(o){if(n.find((function(e){return e.name===o.name})))return t({description:"".concat(o.name," is already in contacts!"),status:"error",duration:3e3,isClosable:!0,position:"top"});e((0,a.uK)(o)),t({description:"New contact successfully added!",status:"success",duration:3e3,isClosable:!0,position:"top"}),r.resetForm()}});return(0,_.jsx)(C.xu,{mb:6,w:300,children:(0,_.jsxs)(w.g,{as:"form",spacing:4,noValidate:!0,onSubmit:r.handleSubmit,children:[(0,_.jsxs)(A.NI,{isRequired:!0,isInvalid:r.touched.name&&r.errors.name,children:[(0,_.jsx)(k.I,{type:"text",name:"name",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.name,focusBorderColor:"purple.400",variant:"outline",placeholder:"Enter name",borderColor:"#44337A"}),(0,_.jsx)(z.J1,{children:r.errors.name})]}),(0,_.jsxs)(A.NI,{isRequired:!0,isInvalid:r.touched.number&&r.errors.number,mb:3,children:[(0,_.jsx)(k.I,{type:"text",name:"number",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.number,focusBorderColor:"purple.400",variant:"outline",placeholder:"Enter phone number",borderColor:"#44337A"}),(0,_.jsx)(z.J1,{children:r.errors.number})]}),(0,_.jsx)(I.z,{type:"submit",children:"Add contact"})]})})},E=t(6661),q=t(884),Z=function(){var e=(0,o.I0)(),n=j(),t=(0,o.v9)(m);return(0,_.jsx)(E.aV,{maxW:"600px",p:"0px 40px 40px 40px",children:t.map((function(t){var r=t.id,o=t.name,i=t.number;return(0,_.jsx)(E.HC,{_notLast:{mb:"10px"},children:(0,_.jsxs)(C.xu,{display:"flex",alignItems:"center",gap:"25px",children:[(0,_.jsxs)(q.x,{children:[(0,_.jsx)(q.x,{as:"span",fontSize:"20px",children:o}),":"," ",(0,_.jsx)(q.x,{as:"span",fontSize:"20px",children:i})]}),(0,_.jsx)(I.z,{ml:"auto",size:"sm",onClick:function(){n({description:"You have successfully deleted the contact!",status:"success",duration:3e3,isClosable:!0,position:"top"}),e((0,a.GK)(r))},type:"button",_hover:{bg:"red"},children:"Delete"})]})},r)}))})},B=t(7298),F=t(1538),R=function(){var e=(0,o.I0)(),n=(0,o.v9)(h);return(0,_.jsx)(C.xu,{p:"0px 40px 40px 40px",children:(0,_.jsxs)(A.NI,{children:[(0,_.jsx)(B.l,{fontWeight:"400",children:"Find contacts by name and phone number"}),(0,_.jsx)(k.I,{type:"text",focusBorderColor:"purple.400",variant:"outline",value:n,onChange:function(n){var t=n.target.value;e((0,F.T)(t))},w:300,borderColor:"#44337A"})]})})},O=t(9589),L=function(){return(0,_.jsxs)(C.xu,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",h:"100vh",children:[(0,_.jsx)(O.X,{as:"h2",fontSize:27,fontWeight:700,mb:6,textAlign:"center",children:"Phonebook"}),(0,_.jsx)(N,{}),(0,_.jsx)(O.X,{as:"h2",fontSize:27,fontWeight:700,mb:6,textAlign:"center",children:"Contacts"}),(0,_.jsx)(R,{}),(0,_.jsx)(Z,{})]})},P=function(){var e=(0,o.I0)();return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(L,{})})}},9589:function(e,n,t){t.d(n,{X:function(){return f}});var r=t(1413),o=t(4925),a=t(5597),i=t(6833),u=t(2996),s=t(5113),c=t(6992),l=t(184),d=["className"],f=(0,a.G)((function(e,n){var t=(0,i.mq)("Heading",e),a=(0,u.Lr)(e),f=(a.className,(0,o.Z)(a,d));return(0,l.jsx)(s.m.h2,(0,r.Z)((0,r.Z)({ref:n,className:(0,c.cx)("chakra-heading",e.className)},f),{},{__css:t}))}));f.displayName="Heading"}}]);
//# sourceMappingURL=846.20555a6a.chunk.js.map