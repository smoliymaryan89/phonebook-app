"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[785],{2785:function(e,r,a){a.r(r),a.d(r,{default:function(){return I}});a(2791);var s=a(9434),n=a(5705),i=a(5822),l=a(8007),o=a(1413),d=a(4925),u=a(5597),t=a(5113),m=a(184),c=["direction","align","justify","wrap","basis","grow","shrink"],h=(0,u.G)((function(e,r){var a=e.direction,s=e.align,n=e.justify,i=e.wrap,l=e.basis,u=e.grow,h=e.shrink,p=(0,d.Z)(e,c),f={display:"flex",flexDirection:a,alignItems:s,justifyContent:n,flexWrap:i,flexBasis:l,flexGrow:u,flexShrink:h};return(0,m.jsx)(t.m.div,(0,o.Z)({ref:r,__css:f},p))}));h.displayName="Flex";var p=a(824),f=a(1917),w=a(5325),x=a(7298),j=a(9163),v=a(3031),g=a(9055),b=l.Ry({name:l.Z_().matches(/^[A-Za-z\s'-]+$/,"Please enter a valid name.").required("Name is required!"),email:l.Z_().email("Invalid email address.").required("Email is required!"),password:l.Z_().min(8,"Password must be at least 8 characters.").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"Password must contain at least one letter, one number, and one special character").required("Password is required!"),confirmPassword:l.Z_().oneOf([l.iH("password"),null],"Passwords must match.").required("Confirm password is required!")}),C=function(){var e=(0,s.I0)(),r=(0,n.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:b,onSubmit:function(a){var s=a.name,n=a.email,l=a.password;e((0,i.z2)({name:s,email:n,password:l})),r.resetForm()}});return(0,m.jsx)(h,{align:"center",justify:"center",h:"100vh",children:(0,m.jsx)(p.xu,{bg:"white",p:10,rounded:"md",w:500,boxShadow:"xl",children:(0,m.jsxs)(f.g,{as:"form",spacing:4,noValidate:!0,onSubmit:r.handleSubmit,children:[(0,m.jsxs)(w.NI,{isRequired:!0,mb:2,isInvalid:r.touched.name&&r.errors.name,children:[(0,m.jsx)(x.l,{children:"Name"}),(0,m.jsx)(j.I,{name:"name",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.name,variant:"filled",focusBorderColor:"purple.400"}),(0,m.jsx)(v.J1,{children:r.errors.name})]}),(0,m.jsxs)(w.NI,{isRequired:!0,mb:2,isInvalid:r.touched.email&&r.errors.email,children:[(0,m.jsx)(x.l,{children:"Email"}),(0,m.jsx)(j.I,{name:"email",type:"email",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,variant:"filled",focusBorderColor:"purple.400"}),(0,m.jsx)(v.J1,{children:r.errors.email})]}),(0,m.jsxs)(w.NI,{isRequired:!0,mb:2,isInvalid:r.touched.password&&r.errors.password,children:[(0,m.jsx)(x.l,{children:"Password"}),(0,m.jsx)(j.I,{name:"password",type:"password",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.password,variant:"filled",focusBorderColor:"purple.400"}),(0,m.jsx)(v.J1,{children:r.errors.password})]}),(0,m.jsxs)(w.NI,{isRequired:!0,mb:3,isInvalid:r.touched.confirmPassword&&r.errors.confirmPassword,children:[(0,m.jsx)(x.l,{children:"Confirm password"}),(0,m.jsx)(j.I,{name:"confirmPassword",type:"password",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.confirmPassword,variant:"filled",focusBorderColor:"purple.400"}),(0,m.jsx)(v.J1,{children:r.errors.confirmPassword})]}),(0,m.jsx)(g.z,{type:"submit",children:"Sign up"})]})})})},I=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(C,{})})}}}]);
//# sourceMappingURL=785.549117f0.chunk.js.map