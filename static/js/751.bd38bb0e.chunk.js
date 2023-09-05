"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[751],{2751:function(e,a,r){r.r(a),r.d(a,{default:function(){return u}});r(2791);var s=r(9434),n=r(5705),l=r(5822),o=r(6727),i=r(184),d=function(){var e=(0,s.I0)(),a=(0,n.TA)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:o.Ry({name:o.Z_().matches(/^[A-Za-z\s'-]+$/,"Please enter a valid name").required("Name is required"),email:o.Z_().email("Invalid email address").required("Email is required!"),password:o.Z_().min(8,"Password must be at least 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"Password must contain at least one letter, one number, and one special character").required("Password is required"),confirmPassword:o.Z_().oneOf([o.iH("password"),null],"Passwords must match").required("Confirm password is required")}),onSubmit:function(r){var s=r.name,n=r.email,o=r.password;e((0,l.z2)({name:s,email:n,password:o})),a.resetForm()}});return(0,i.jsxs)("form",{onSubmit:a.handleSubmit,children:[(0,i.jsxs)("label",{children:["Name",(0,i.jsx)("input",{name:"name",type:"text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.name})]}),a.touched.name&&a.errors.name?(0,i.jsx)("div",{children:a.errors.name}):null,(0,i.jsxs)("label",{children:["Email",(0,i.jsx)("input",{name:"email",type:"email",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email})]}),a.touched.email&&a.errors.email?(0,i.jsx)("div",{children:a.errors.email}):null,(0,i.jsxs)("label",{children:["Password",(0,i.jsx)("input",{name:"password",type:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password})]}),a.touched.password&&a.errors.password?(0,i.jsx)("div",{children:a.errors.password}):null,(0,i.jsxs)("label",{children:["Confirm password",(0,i.jsx)("input",{name:"confirmPassword",type:"password",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.confirmPassword})]}),a.touched.confirmPassword&&a.errors.confirmPassword?(0,i.jsx)("div",{children:a.errors.confirmPassword}):null,(0,i.jsx)("button",{type:"submit",children:"Sign up"})]})},u=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d,{})})}}}]);
//# sourceMappingURL=751.bd38bb0e.chunk.js.map